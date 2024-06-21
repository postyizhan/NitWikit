---
title: 常见问题
sidebar_position: 1
---

# 常见问题

## Downloading mojang_x.x.x.jar

如果您的服务器卡在：

```
Downloading mojang_x.x.x.jar
```

请尝试使用科学上网。

## 我不会在命令行界面 (CMD / 终端 / Powershell) 使用科学上网！

请确定您的科学上网是可用的，不多赘述。

在命令行界面（一般情况下，一个黑 / 蓝框框）中执行这两条

```shell
set http_proxy=http://127.0.0.1:7890
set https_proxy=http://127.0.0.1:7890
```

其中 `7980` 是您的科学上网软件设置的端口，若有不同，请替换。

注：输入之后仅对这个命令行窗口有效，`开启新的 / 关闭它`之后要重新输入。

> 大佬们，浏览器能用不是cmd能用，不然你猜我为什么写这个。

## You need to agree to the EULA in order to run the server

去重读[这里](/docs/start/launch-server.md)。

## 怎么搜索字符

按 `Ctrl+F`，你的浏览器 / 文本编辑器 (比如 VSCode) 会蹦出来一个搜索框，可以用来搜索文件 / 网页中的内容，这个快捷键几乎适用于所有软件。

如果你的浏览器没有弹出搜索框，试试使用现代浏览器 (Chrome / Edge / Firefox)。

## 如何关闭服务器

[看这里](/docs/start/basic/server-management-command.md#stop)。

## 由于个人信息公钥丢失，聊天已被禁用

去 `server.properties` 把 `enforce-secure-profile` 改为 `false`。

也可以安装[FreedomChat](https://modrinth.com/plugin/freedomchat)。

## 玩家没皮肤

试着安装皮肤插件：

[跨服端 | SkinsRestorer](/docs/process/cross-server/plugin/BC&WF.md#skinsrestorer)

根据需求选择 SkinsRestorer 的版本。

## Java 为什么 jar 包是个白纸

服务器根本没有安装 Java 程序或者服务器上 Java 未设置环境变量 (其实这个不影响任何东西，忽略即可)。

## Java 怎么做绿色版以及绿色版怎么使用

下载 Java 时下载 `.zip` 或 `.tar.gz` 结尾的压缩包，将压缩包解压到任意位置。

随后可以修改环境变量 `JAVA_HOME` 即可，如果不懂看[这篇文章](https://blog.csdn.net/MrsHorse/article/details/82695353)

## 如何启用命令方块？

服务器中命令方块默认关闭，**并且不建议开启**。

命令方块是性能底下的，并且所有功能都可以用插件替代。

如何开启：

在 `server.properties` 中

```
enable-command-block=false
```

将此项设置为true。
