---
title: 性能优化
sidebar_position: 1
---

# 性能优化

性能优化主要是针对低 TPS 和高 MPST 导致的服务器顿卡或长期不流畅。

## 降低服务器模拟距离（即 Simulate distance）

:::tip

在此之前，你必须了解的是模拟距离（Simulate distance）和视野距离（View distance）区别（下文用 SDT和 VDT 分别指代）。

模拟距离指的是玩家在这个范围内的游戏行为正常进行，如动物、怪物等 AI 的寻路，生物生成，草地扩散，水流流动等。

视野距离指的是服务器将发送给玩家的区块的数据包的距离，在这个范围内，游戏行为不一定会继续发生（这取决于 SDT）

当玩家移动导致一个区域不在玩家的 SDT 中而又在 VDT 中，那么服务器只会读取这个区域的方块信息并发送给玩家。

而不会对这个区域进行加载。这是各种游戏常见的处理方式，弱化远处的计算能够使得服务器更加流畅。

:::

### 手动调整

在 `spigot.yml` 中可以设置服务器的模拟距离：

```
simulate-distance: 8
#模拟距离为 8 chunks
```

如果你使用的默认 10 chunks 的模拟距离，这会非常影响性能，可以酌情减少，建议为 3 - 8。

### 自动调整

安装 [View Distance Tweaks](https://www.spigotmc.org/resources/view-distance-tweaks.75164/) 实现自动调整视野距离使得玩家增多时自动减少视野，玩家减少时自动增加视野。

## 降低区块生成速度

希望你服务器进行了预生成，如果没有进行的话请阅读 [优化概论](overview.md)

在 `/config/paper-global.yml` 中有关于区块生成的一些参数

```
chunk-loading-basic:
  #注：以下的单位均为 chunks / seconds
  player-max-chunk-generate-rate: -1.0
  #为每个玩家生成分块的最大速率，设置为-1 则禁用。
  player-max-chunk-load-rate: 100
  #任何单个播放器加载块的最大速率，设置为-1 则禁用。
  player-max-chunk-send-rate: 75
  #服务器发送给单个玩家的最大速率。设置为-1 则禁用。
```

其中 `player-max-chunk-generate-rate` 对应服务器每秒钟最多为玩家生成多少区块，设置得越低区块生成越慢。

此时大量跑图的玩家可能会觉得服务器有一些滞后，但是能够保证大多数玩家的游戏体验，这是值得的。

将 `player-max-chunk-generate-rate` 设置为 20 - 40 应该是合理的值。

TODO