---
title: 杂项优化
sidebar_position: 3
---

# 杂项优化

## 减少后台垃圾内容

服务端自带一些非常简陋的反作弊，检测玩家是否飞行、过速等，但效果非常差。

特别是服务器出现卡顿的时候，这将在后台进行大量刷屏。如果安装了至少一个反作弊。

那么就可以关闭这些刷屏的无效信息。如果没有安装任何反作弊，还是保留基础反作弊吧。

在 `server.properties` 中按以下设置：

```
allow-flight=true
```

这样可以防止玩家在骑马或爬上脚手架时因“飞行”而被服务器踢出。

设置为 true 不意味着玩家可以飞行，它只是意味着服务器认为玩家在飞行时不会被踢。

在 `spigot.yml` 中按以下设置：

```
settings:
  moved-wrongly-threshold: 1
  # 忽略玩家移动错误
  moved-too-quickly-multiplier: 99999
  # 忽略玩家移动过快
```

TODO