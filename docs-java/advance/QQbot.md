---
title: QQ机器人搭建
sidebar_position: 12
---

# QQ机器人搭建

搭建QQ机器人能够让你实现群服消息互通等功能，让你的群聊与服务器连接起来。

本篇仅列出常见的实现方法，不对具体实现过程描述，请自行查阅相关文档。

:::danger

请一定要使用小号来搭建 QQ 机器人，否则如果登录不成功或是成功后被检测，将有大概率导致封号。

使用如 go-cqhttp 的 [签名服务](https://mirai.mamoe.net/topic/2373/%E5%85%B3%E4%BA%8E%E7%AD%BE%E5%90%8D%E6%9C%8D%E5%8A%A1) 不稳定并且非常容易导致封号，推荐使用 LLOneBot 这类通过 hook 官方客户端而跳过使用签名服务登录的方案。

:::

## 使用已存在的机器人插件方案

:::info

一般而言，已经存在的机器人方案实现起来相对容易且功能多。

如果你不是专业开发者，非常推荐直接使用已存在的机器人插件实现。

:::

目前比较推荐的方案：

### EasyBot

[EasyBot MineBBS 链接](https://www.minebbs.com/resources/easyBot-minecraft.7918/) 

:::info

EasyBot 的更新程序貌似存在漏洞，如果突然终止或是因为某些意料之外的原因，

在从旧版本更新到新版本后，浏览器编辑器的消息同步有概率无法显示，这种情况请删除 EasyBot *主程序* （不是插件!）的 *所有* 文件后重新安装

（记得保留配置）

:::

[EasyBot 实现账号绑定教程](https://www.yuque.com/miuxue/cgyipv/vng1gtu9wk71xtg6)

EasyBot 可简单地通过自定义命令实现查看服务器TPS，玩家数据等。 [EasyBot 自定义命令教程](https://www.yuque.com/miuxue/cgyipv/vng1gtu9wk71xtg6)

EasyBot 开发者目前没有撰写关于消息同步的教程，但由于网页编辑器而非配置非常容易上手，在此不做赘述。

:::warning

不推荐使用 EasyBot 的群组服务器内消息同步功能，使用 TrChat 等插件可以更好的实现它们。

:::

优点：配置简单，网页编辑器方便新手，轻量。

缺点：功能上不如XinxinBot丰富。

### XinxinBot系列

[XinxinBotAPI MineBBS 链接](https://www.minebbs.com/threads/xinxinBotapi-qq-1-8-x-1-20-x.24540/) 

[XinxinBot 实现帐号绑定教程](http://wiki.mcxin.cn/zh/%E6%96%B0%E9%91%AB%E6%9C%BA%E5%99%A8%E4%BA%BA%E9%99%84%E5%B1%9E%E6%95%99%E7%A8%8B/XinxinBetterBind)

[XinxinBot 实现消息同步教程](http://wiki.mcxin.cn/zh/%E6%96%B0%E9%91%AB%E6%9C%BA%E5%99%A8%E4%BA%BA%E9%99%84%E5%B1%9E%E6%95%99%E7%A8%8B/XinxinChatSync)

优点：使用附属插件，功能更多。

缺点：配置稍复杂。

### 其他方案的注意事项

如果某个方案基于 MiraiMC，请参见下文。

## 使用机器人框架

:::info

一般而言，不需要自行使用框架实现功能，除非你是开发者。

:::

### OneBot 标准

[OneBot](https://onebot.dev/) 是**统一的聊天机器人应用接口标准**。它适用于各种各样的即时通讯软件，QQ 是其应用场景之一。如果机器人框架和机器人都支持 OneBot，那它们便可以配合使用。

### 使用 MiraiMC

[点击跳转](https://github.com/DreamVoid/MiraiMC)

MiraiMC已添加了 [对 Overflow 的支持附属插件](https://github.com/DreamVoid/MiraiMC/issues/510)，因此你可以使用 Overflow 协助登录。

这也帮助了许多停更的基于 MiraiMC 的老机器人插件。

### 使用 Mirai 原生

[Mirai 论坛](https://mirai.mamoe.net/)

:::danger

Mirai 原生由于签名服务的缘故难以登录并且99%封号冻结。推荐使用下文的 Mirai + Overflow。

:::

### 使用 Mirai + Overflow（OneBot）实现机器人（推荐）

:::warning

配置websocket链接时，在正向ws和反向ws之间选择一种即可。

推荐使用 官网一键打包整合包 + [LLOneBot](#liteloaderqqnt--llonebot推荐) 的方式部署。

:::

[Overflow 主页](https://github.com/MrXiaoM/Overflow)

[Overflow 使用方法](https://github.com/MrXiaoM/Overflow/blob/main/docs/UserManual.md)

### LiteLoaderQQNT + LLOneBot（推荐）

LiteLoaderQQNT 是 [利用 NTQQ 特性](https://github.com/Mrs4s/go-cqhttp/issues/2471) 实现的 QQ **插件加载器**。它本身并不具备QQ机器人功能，你需要**为其安装 LLOneBot 插件**才能开始使用 QQ 机器人功能。

:::warning

根据先前其他该领域开发者的经历，该软件开发者不建议任何人公开宣传此软件。如果你使用了 LLOneBot 请勿在任何群聊发送可以看出你使用了非官方 QQ 的截图。

:::

前往 [LiteLoaderQQNT官网](https://liteloaderqqnt.github.io/) ，根据其教程下载安装该框架。

安装完成后，根据 [LiteLoaderQQNT 文档安装插件方法](https://liteloaderqqnt.github.io/guide/plugins.html) 为框架安装插件：[LLOneBot](https://github.com/LLOneBot/LLOneBot/tree/main)。如果你已经在使用该框架并且已安装了 [插件列表查看](https://github.com/ltxhhz/LL-plugin-list-viewer/tree/main) 插件，也可以直接使用该插件进行安装。

安装完成后，进入 QQ 设置，在侧边栏中找到 LLOneBot 点击切换到其设置页，然后**根据机器人给出的文档**进行配置。

### Lagrange（拉格朗日）

[参见此处](https://docs.qq.com/doc/DQ2N2b0JqeUhmWUVa)

## 通用机器人

<!--指Serein这类不依赖mc插件模组加载器的独立软件，通常是通过读取控制台和执行控制台命令实现-->

### Serein

待补充<!--Serein只是听说可以通过安装插件来实现机器人？-->

### DLS

类似 Serein 的自动管理控制台的一站式解决方案，几乎全部功能均依赖正则表达式匹配控制台输出的原理。目前已经适配大多数主流服务器的控制台，支持 OneBot 协议。

可以阅读其 [Wiki](https://gitee.com/dlcn/dlscq/wikis/) 进行安装配置。
