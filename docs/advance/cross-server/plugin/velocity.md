---
title: Velocity 端
sidebar_position: 2
---

# Velocity 端

支持 *Velocity* 的插件

# 只安装在跨服端

## VLobby

:::info

`PaperMC` :https://hangar.papermc.io/4drian3d/VLobby

`GitHub` :https://github.com/4drian3d/VLobby

:::

一个简单的 `/lobby` `/hub` 插件

## LimboAuth

:::info

见 [插件 | LimboAuth](/docs/process/plugin/other/Login/LimboAuth.md)

:::

一个不错的登录插件。

# 可安装在跨服端或子服

## MiniMOTD

同 [BungeeCord一侧的讲解](BC&WF.md#minimotd)

## ViaVersion

同 [BungeeCord一侧的讲解](BC&WF.md#viaversion)

## SkinsRestorer

同 [BungeeCord一侧的讲解](BC&WF.md#skinsrestorer)

## Geyser

同 [BungeeCord一侧的讲解](BC&WF.md#geyser)

# 装在跨服端或+子服端

这类插件可以只装在跨服端，但同时在子服安装可以有更多的功能。

## ServerUtils

:::info

见 [插件 | ServerUtils](/docs/process/plugin/ManageTool/PluginManagement/ServerUtils.md)

:::

## PlayerBalancer

:::info

同 [BungeeCord一侧的讲解](BC&WF.md#playerbalancer)

:::

# 装在跨服端+子服端

这类插件必须要同时安装在跨服端和子服。

## PAPIProxyBridge

:::info

`spigot` :https://www.spigotmc.org/resources/papiproxybridge.108415/

`GitHub` :https://github.com/WiIIiam278/PAPIProxyBridge

`modrinth` :https://modrinth.com/plugin/papiproxybridge

`官方文档` :https://william278.net/project/papiproxybridge

:::

PAPIProxyBridge 是安装在后端和代理服务器上的库桥插件，它允许代理端插件使用 PlaceholderAPI 占位符设置文本格式

在 Spigot （1.16.5+） 上安装最新版本的插件以及 [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) 插件，或在 Fabric （1.19.3+） 服务器上安装 [PlaceholderAPI mod](https://placeholders.pb4.eu/)，然后在 BungeeCord 或 Velocity 代理服务器上安装该插件

请注意，此插件不能替代 PlaceholderAPI。您仍然需要在 Spigot/Fabric 服务器上安装 PlaceholderAPI
