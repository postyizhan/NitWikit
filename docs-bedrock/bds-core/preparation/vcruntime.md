---
title: Visual C++运行库
sidebar_position: 3
---

# Visual C++运行库

我的世界基岩版由于使用c++编写，需要依赖微软开发的Visual C++运行库（vc运行库）才能正常运行。在玩家的电脑上，由于windows系统会自动为游戏补全这些运行库，所以玩家下载好基岩版之后就可以直接开始游戏。

但是在基岩版的服务器软件BDS这边情况就有所不同了。BDS只是一个软件，它并不具备自己补全vc运行库的功能，需要手动进行安装，否则就会报错“缺少vmruntimexxx.dll”。你需要为服务器安装至少vc2015-2022这个运行库才行。

[下载地址](https://aka.ms/vs/17/release/vc_redist.x64.exe)。有时一些辅助软件也会依赖这个运行库，例如LeviLamina在缺少运行库时会报错“Error code: 1114 动态裢接库（DLL）初始化例程失败。”，安装这个运行库也可以解决问题。
