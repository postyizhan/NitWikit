---
title: BungeeCord 端
sidebar_position: 1
---

## BungeeCord 端

支持 _BungeeCord/Waterfall_ 的插件

### 只安装在跨服端

### HuskChat

同 [Velocity 一侧的讲解](velocity.md#huskchat)

### Sonar

同 [Velocity 一侧的讲解](velocity.md#sonar)

### AuthMeBungee

:::info

`SpigotMC` https://www.spigotmc.org/resources/.50219

`GitHub` https://github.com/AuthMe/AuthMeBungee

:::

这是 BungeeCord 版本的 AuthMe 。如果你的登录服使用 AuthMe 登录，请务必在 BungeeCord 上安装此插件，以增加登录系统的安全性和完整性，这可以为你避免一些不必要的麻烦

如果你不安装此插件，在玩家登录时很可能乘此跳到其他子服务器来跳过登录，以此获取管理员账号来炸服

## 可安装在跨服端或子服

这一分类中的插件有单端版和跨服端版，你可以删除单端版使用跨服端版。

### MiniMOTD

:::info

`SpigotMC` https://www.spigotmc.org/resources/.81254

`Modrinth` https://modrinth.com/plugin/minimotd

`GitHub` https://github.com/jpenilla/MiniMOTD

:::

:::danger[缺点]

暂未发现。

:::

### ViaVersion

:::info

见 [这里](/docs-java/process/plugin/other/Via/Via.md)

:::

:::danger[缺点]

由于 Velocity/BungeeCord 本身即设计为可以沟通多个不同版本服务器的代理端解决方案，因此虽然 ViaVersion 系列能够安装在代理端上，但是**强烈不建议直接在代理上使用 ViaVersion**。如果你执意这么做，请做好以下心理准备：

* 反作弊插件不生效。
* 核心数据包处理出现大量异常。
* 代理端性能下降。
* 你不会获得因使用 ViaVersion 导致问题的任何技术支持。

:::

### Geyser

:::info

见 [这里](/docs-java/process/mobile-player/Geyser/introduction/overview.md)

:::

:::danger[缺点]

- 大部分反作弊可能并未兼容。
- 基岩版 UI 可能无法使用
- 不方便单端判断 BE 玩家
- 其他的潜在问题……

:::

## 装在跨服端或+子服端

这类插件可以只装在跨服端，但同时在子服安装可以有更多的功能。

### PlayerBalancer

:::info

`SpigotMC` https://www.spigotmc.org/resources/.55011/

`GitHub` https://github.com/BGHDDevelopment/PlayerBalancer

:::

可以用来设置多个子大厅，设置主大厅，并按照你配置的方式发送玩家到子服。

### ServerUtils

:::info

见 [插件 | ServerUtils](/docs-java/process/plugin/ManageTool/PluginManagement/ServerUtils.md)

:::


### SkinsRestorer

[插件 | 皮肤 - skinsRestorer](/docs-java/process/plugin/other/SkinsRestorer.md)

SkinRestorer 拥有完善的 Proxy Mode 以支持在代理服与字符同时部署，其本身作为老牌皮肤插件并无其他明显缺点。

### Tab

同 [Velocity 一侧的讲解](velocity.md#tab)

## 装在跨服端+子服端

这类插件必须要同时安装在跨服端和子服。

### PAPIProxyBridge

:::info

`Spigotmc` https://www.spigotmc.org/resources/papiproxybridge.108415/

`Modrinth` https://modrinth.com/plugin/papiproxybridge

`GitHub` https://github.com/WiIIiam278/PAPIProxyBridge

`文档` https://william278.net/project/papiproxybridge

:::

PAPIProxyBridge 是安装在后端和代理服务器上的库桥插件，它允许代理端插件使用 PlaceholderAPI 占位符设置文本格式

在 Spigot (1.16.5+) 上安装最新版本的插件以及 [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) 插件，
或在 Fabric (1.19.3+) 服务器上安装 [PlaceholderAPI mod](https://placeholders.pb4.eu/)，然后在 BungeeCord 或 Velocity 代理服务器上安装该插件

请注意，此插件不能替代 PlaceholderAPI。你仍然需要在 Spigot/Fabric 服务器上安装 PlaceholderAPI
