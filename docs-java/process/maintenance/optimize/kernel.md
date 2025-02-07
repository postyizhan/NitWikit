---
title: 内核优化
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 内核优化

内核优化主要针对 Linux 操作系统而非 Windows,以下命令需要以 root 权限运行

## 内核参数优化

tuned 调优服务可以通过设置调优配置文件来调整操作系统，以便在特定工作负载下更好地执行.

执行以下命令来安装 tuned:

<Tabs defaultValue="Debian/Ubuntu">
  <TabItem value="Debian/Ubuntu">sudo apt install tuned</TabItem>
  <TabItem value="RedHat/CentOS">sudo yum install tuned</TabItem>
  <TabItem value="ArchLinux">sudo pacman -S tuned</TabItem>
</Tabs>

然后启动:

```shell
systemctl enable tuned --now
```

然后运行工具并使用以下命令调整内核:

```shell
tuned-adm profile throughput-performance
```

## 设置大页面

打开文件 `/etc/sysctl.conf`,在末尾添加以下内容

```text
vm.nr_hugepages = <需要的页数>
```

可以通过一个公式知道需要的页数:

```text
(分配的内存数(单位：MB)) / 2 + 300 
```

比如我分配了 12GB 的内存(也就是 12288 MB),那么设置的值为`12288 / 2+ 300 = 6444`,最后的设置应该长这样

```text
vm.nr_hugepages = 6444
```

然后重启物理机

## 激活透明大页面

首先需要检查操作系统是否支持大页面:

```shell
cat /sys/kernel/mm/transparent_hugepage/shmem_enabled
```

如果返回包含以下内容,那么操作系统支持透明大页面

```shell
always within_size advise never deny force
```

然后运行以下命令激活透明大页面

```shell
echo madvise | sudo tee /sys/kernel/mm/transparent_hugepage/enabled
echo advise | sudo tee /sys/kernel/mm/transparent_hugepage/shmem_enabled
echo defer | sudo tee /sys/kernel/mm/transparent_hugepage/defrag
echo 1 | sudo tee /sys/kernel/mm/transparent_hugepage/khugepaged/defrag
```

最后,我们需要配置开机自启动

```shell
sudo apt install sysfsutils

sudo tee /etc/sysfs.d/enableTHP.conf <<EOF
kernel/mm/transparent_hugepage/enabled=madvise
kernel/mm/transparent_hugepage/shmem_enabled=advise
kernel/mm/transparent_hugepage/defrag=defer
kernel/mm/transparent_hugepage/khugepaged/defrag=1
EOF

sudo systemctl restart sysfsutils
```

这样就可以了,然后重启机器即可

### BBRv3

BBRv3 是 Google 最新开发的 BBR 算法,不过目前没有合并到 Linux 内核，需要自行更新内核

:::warning

在更新内核前,请先备份内核

:::

```shell
wget https://raw.githubusercontent.com/byJoey/Actions-bbr-v3/refs/heads/main/install.sh
chmod +x install.sh
./install.sh
```

输入`1`安装 BBR V3,安装重启后选择`BBR + FQ`算法即可使用 BBR V3

## CPU 调优

强制所有 CPU 核心运行在最高频率(不同于超频,不会影响 CPU 寿命)

```shell
sudo cpupower frequency-set -g performance
```

## 网络优化

### 拥塞控制算法

TCP 网络优化主要是改进拥塞控制算法,BBR 是由 Google 开发的网络拥塞控制算法，它可以优化数据包的处理方式，显著提升网络传输效率和稳定性

1. 检查当前 BBR 状态,避免重复操作

```shell
sysctl net.ipv4.tcp_congestion_control
```

* 如果返回`net.ipv4.tcp_congestion_control = bbr`,表示 BBR 已启用。
* 如果返回其它算法，比如`cubic`或`reno`，则说明 BBR 尚未激活。

2. 激活 BBR

首先需要检查兼容性:

```shell
sudo modprobe tcp_bbr
```

如果系统兼容 BBR，上述命令将不会有任何输出；如果不兼容，则会返回报错信息,此时需要自行更新操作系统内核

如果兼容,运行以下命令激活 BBR

```shell
sudo sh -c 'echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf'
sudo sh -c 'echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf'
sudo sysctl -p
```

3. 重启网络服务

最后运行第一步的检查 BBR 是否已经启动

### TCP Fast Open

TCP Fast Open (TFO) 是一种优化 TCP 连接的方法，可以加快 TCP 连接的建立速度

Linux kernel 3.13 及以上默认已经开启了TFO,但默认设置一般为 `1`,我们需要调整为 `3`(在服务器连接上启用)

```shell
echo 'net.ipv4.tcp_fastopen=3' > /etc/sysctl.conf
sysctl -p
```

重启网络服务完成