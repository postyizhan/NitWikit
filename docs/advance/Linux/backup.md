---
title: 自动备份存档
sidebar_position: 8
---

# 编写备份脚本

在你的服务器上创建一个备份脚本：

```bash
sudo vim /root/backup.sh
```

然后将以下内容粘贴到文件中，按实际情况与需要修改：

- `SERVER_DIR`：服务器目录（绝对路径）
- `MAX_BACKUPS`：最大备份文件数，超过这个数目的备份文件将在有新的备份文件生成时删除
- `BACKUP_DIR`：备份文件保存目录（绝对路径）

> 如何获得服务器目录的绝对路径？对应目录下执行 `pwd` 命令即可获得当前目录的绝对路径。

```bash
#!/bin/bash

# ================== 以下内容需要修改 ==================
SREVR_DIR="/path/to/server"         # 服务器目录(绝对路径)
MAX_BACKUPS=5                       # 最大备份文件数
BACKUP_DIR="/path/to/backup"        # 备份文件保存目录（绝对路径）

# ================== 以下内容无需修改 ==================
SERVER_PARENT_DIR=$(dirname $SERVER_DIR)
SERVER_NAME=$(basename $SERVER_DIR)
cd $SERVER_PARENT_DIR || exit
time=$(date "+%Y%m%d-%H%M%S")
tar -czvf "${time}.tar.gz" --exclude="${SERVER_NAME}/session.lock" $SERVER_NAME
mv "${time}.tar.gz" $BACKUP_DIR

cd $BACKUP_DIR || exit
tar_gz_files=($(ls -t *.tar.gz))
if [ ${#tar_gz_files[@]} -gt $MAX_BACKUPS ]; then
    rm "${tar_gz_files[${#tar_gz_files[@]}-1]}"
fi
```

按 `Esc` 键，切换到英文输入法输入 `:wq` 保存并退出。

# 将备份脚本添加到定时任务

编辑定时任务：

```bash
crontab -e
```

在文件末尾添加以下内容：

```bash
0 3 * * * /bin/bash /root/backup.sh
```

上面这个例子表示每天凌晨 3 点执行备份脚本，这里的 `0 3 * * *` 是 cron 表达式。有关 cron 表达式的更多信息，请参阅 [Linux crontab 命令](https://www.runoob.com/linux/linux-comm-crontab.html)。

我在这里提供几个常用的 cron 表达式：

- `0 3 * * *`：每天凌晨 3 点
- `0 3 * * 0`：每周日凌晨 3 点
- `0 3 1 * *`：每月 1 号凌晨 3 点
- `0 3 * * 1`：每周一凌晨 3 点
- `0 3 * * 1,3,5`：每周一、三、五凌晨 3 点
- `0 3 * * 1-5`：每周一至周五凌晨 3 点
- `0 3 * * 1-5`：每周一至周五凌晨 3 点

# 备份文件恢复

1. 首先确定要恢复的备份文件；
2. 将备份文件解压：`tar -zxvf 备份文件名.tar.gz`；
3. 将解压后的文件覆盖到服务器目录：`cp -r 解压后的文件路径/* 服务器目录`。
