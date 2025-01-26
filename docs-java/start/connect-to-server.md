---
title: 连接服务器
sidebar_position: 6
---

# 连接服务器

## 端口

打开你服务器根目录的 `server.properties`

找到

```yaml
server-port=25565
```

`25565` 即 Minecraft 服务器的默认端口，如果不更改默认端口通常可省略不写

## 本地连接

:::warning

此方法仅适用于服务端和客户端在同一机器上的情况

:::

本机 IP ，通常有这样几种形式：

- localhost
- 127.0.0.1
- 0.0.0.0

如果你没有修改你的服务器端口，那么在你的 Minecraft 客户端中:

1. 点击多人游戏
2. 点击添加服务器
3. 输入上面提到的本地 IP 中的任意一个
4. 点击完成
5. 进入服务器

如果你修改了你的服务器端口，在回环地址后面加个冒号加上你改的端口即可

如:

- localhost:25566
- 127.0.0.1:25566
- 0.0.0.0:25566

:::warning

这里要使用英文的 `:` **不能使用中文**的 `：` ！

:::

## 远程连接

在开始让你的玩家远程连接至服务器的时候，请先确认有没有公网

### 我有公网

假设我现在的公网 IP 是 `114.51.14.191`，那么我的连接应该是输入 `114.51.14.191:25565`，

注意冒号后面的**端口号**应该和你设置的 **`server-port`** 一模一样，不然玩家无法连接

比如我现在把 **`server-port`** 改成了 **`9180`**，应该这么进入服务器 `114.51.14.191:9180`

如果我为 `114.51.14.191` 绑定了域名 `yizhan.wiki` ，那么你可以这么进 `yizhan.wiki:9180`

如果很不幸，你的玩家没有正常连接上来，请先按以下步骤检查

- 请尝试本地连接，如果不行，那么就是服务器有问题
- 如果本地连接正常，你可以尝试在防火墙中放行端口
- 检查你在路由器中是否把这个端口公开到公网

### 我没公网

查看 [内网穿透](https://nitwikit.yizhan.wiki/process/deploy/intranet-penetration) 部分，按照上面的教程把你的端口映射出去

## 常见错误

这些都是连接 Minecraft 服务器时常见的问题

- `Unknown host / 未知的主机`

1.检查你有没有打错域名

2.如果你刚刚更改 DNS 解析，等一会儿再试(或者 CMD 执行`ipconfig /flushdns` 试试)

3.你的域名可能被DNS污染,你可以检查实际解析出来的IP和设置的是否一致,不一致就是被污染了,临时解决方案是更改 DNS
服务器,长远来看最好打开 DNSSEC

- `数据流终止`

这个报错已经不多见,通常来说是运营商干的,比如早期网通和电信,海外流量过境有时会被 GFW 阻断也可能产生此错误

- `Connection timed out / 连接超时`

1.检查你有没有打错域名

2.检查网络状况(可以试试 ping 服务器,超时就是网的问题)

3.如果使用 FRP,检查 frp 的配置文件是否正确

- `Invalid characters in username/ 用户名包含无效字符`

用户使用了非 Minecraft 原班允许的用户名进入服务器,可以安装 CnUsername 来解决

- `Flying is not enabled on this server/ 此服务器未启用飞行`

打开 server.properties 文件，把 `allow-flight` 设置为 `true` 然后重启服务器

- `You are sending too many packets!/ 由于超出数据包速率限制而被踢出游戏`

一般是开连点器导致的,你可以在`paper-global.yml`中调整`packet-limiter`中的`max-packet-rate`,跳大即可

如果使用了 ViaVersion,也需要跳大配置文件中的`max-pps`和`tracking-warning-pps`值

- `忽略状态请求` 没遇到过这个问题
- `java.io.IOException: Connection reset by peer`

网络太差

-`无效会话`

没有使用正版登录进入正版服务器,也可以关闭`online-mode`来解决

- `身份验证服务器目前处于宕机状态。请稍后再试，抱歉`

Mojang 的验证服务器去维护了,或者自己网络太差,连接不上,可以安装 [AlwaysOnline](https://modrinth.com/plugin/alwaysonlineplugin) 来解决

More and More TODO