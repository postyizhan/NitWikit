---
title: 笨蛋脚本使用
sidebar_position: 4
---

# 笨蛋脚本使用

笨蛋脚本是由本 wiki 的作者之一 lilingfeng 编写的，专门为笨蛋设计的，你只需要双击启动，回答几个问题就能帮你自动完成。

## 下载

[笨蛋脚本 GitHub 链接](https://github.com/lilingfengdev/NitWiki-Script)

## 功能

目前，我们已经编写了以下的笨蛋脚本：

* 自动优化服务端配置文件
* 自动配置防矿透
* 自动配置防种子破解
* 自动生成启动脚本
* 自动安装常用插件
* 自动安装 Java
* 一键上传日志
* 自动配置反作弊
* 自动简单配置
* 自动选择服务端核心并下载
* 自动配置 Geyser
* Via 自动配置
* 服务端选择+下载
* 还有更多(在编写中)

## 赞助我们

打点钱吧，写这些脚本并不容易，没钱的话，给个免费的 Star 也可以 :)

## 使用准备

除生成启动脚本，其他脚本都必须启动一次服务端后才能使用，生成启动脚本需要提前安装服务器核心。

:::danger[使用方法]

所有笨蛋脚本都需要在服务器根目录执行!!

:::

## 其他操作系统

我们提供其他操作系统的二进制分发文件(注意:二进制分发仅可以在 64 位操作系统上运行，Windows 只支持 Win10 以上)

[Linux](https://github.com/lilingfengdev/NitWiki-Script/releases/tag/ubuntu-latest)

[MacOS (真的有人会用 Mac 开服吗?)](https://github.com/lilingfengdev/NitWiki-Script/releases/tag/macos-latest)

32 位操作系统或 Win7 需要自己安装 Python ，并安装以下依赖(一大堆)

```shell
pip install pyyaml install-jdk tqdm psutil requests rtoml
```

## 加速下载

考虑到国内 GitHub 的牛逼访问速度，我们为笨蛋脚本提供了下载镜像

比如我拿到的 GitHub 链接是`https://github.com/lilingfengdev/NitWiki-Script/releases/download/ubuntu-latest/auto-antiseedcracker.bin`

替换`https://github.com/lilingfengdev/NitWiki-Script/releases/download`为`https://dl.8aka.org`就可以体验极速下载

## 了解

在启动这个脚本之前，你应该 **明白你正在干什么，会导致什么后果**，以优化脚本举例，你应该明白，执行这个脚本之后，村民的 AI 会受到限制，变得有点傻(当然不止这个，还有其他后果，此处不详谈)。

我们拒绝回答一切在启动笨蛋脚本之前不看文档导致的问题~~(除非打钱)~~。

## 宗旨

我们只教导笨蛋，不制造笨蛋，所以不要问可不可以写一个一键脚本，完成一切工作。

~~其实已经写出来了.......~~

## 许可

本脚本永久免费，如果你是付费得到本脚本的，请立刻退款并骂死那个人。
