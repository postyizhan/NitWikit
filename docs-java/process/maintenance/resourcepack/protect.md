---
title: 保护
sidebar_position: 4
---

# 保护

你也不希望自己辛苦制作的贴图被别人轻松盗走吧,这时候,资源包保护就派上用场了

资源包保护主要分为两种:

* 无客户端 mod(客户端此时不需要做任何事情)
* 有客户端 mod

## 无客户端 mod

优点:

* 简单
* 客户端支持版本广
* 兼容性好

缺点:

* 掩耳盗铃,有点技术能力就可以轻松破解

无客户端 mod 保护方案由于技术限制,保护方式集中于 ZIP 格式保护(如破坏格式),和混淆打乱(Oraxen 命名空间打乱)

> 教程: [压缩&混淆](compress.md)

## 有客户端 mod

优点
* 保护很强,基本不可能破解
* 可以优化下载速度

缺点
* 支持版本少,仅限于 mod 支持的版本

### ResourceHack

:::info

`MineBBS` https://www.minebbs.com/resources/mod.9024/

`Hangar` https://hangar.papermc.io/DvArcNode/ResourceHack

`Modrinth` https://modrinth.com/plugin/resourcehack

`GitHub` https://github.com/afn-ArcNode/ResourceHack

:::

一个高版本的资源包保护插件,支持 1.18.1, 1.20.1, 1.21.1, 支持 NeoForge/Fabric

服务端

1. 在服务器上安装此插件和 packetevents 插件
2. 开启服务端, 编辑 ~/plugins/ResourceHack/config.yml 配置加密密钥
3. 重启服务端或 reload 插件
4. 使用 `/res encrypt <path>`（需要`resack.encrypt`权限）加密资源包
5. 配置资源包托管

客户端:

安装这个 mod

### KcSecurePack

:::info

`MineBBS` https://www.minebbs.com/resources/kcsecurepack-1-12-2.8699/

:::

一个低版本的资源包保护插件,支持 1.12.2 Forge,目前处于预售状态