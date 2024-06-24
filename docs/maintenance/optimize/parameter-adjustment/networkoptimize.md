---
title: 网络优化
sidebar_position: 2
---

# 网络优化

网络优化主要目的是解决服务器上行带宽占用导致的玩家 **Ping**（即网络延迟）过高导致的糟糕游戏体验。

## 数据包压缩

在 `server.properties` 可以设置数据包压缩阈值：

```
network-compression-threshold: 256
```

当一个数据包的大小达到该值，服务器就会压缩它。设置得更高可以节省一些 CPU 资源，但会增加带宽占用，

将其设置为 -1 会禁用它。设置的太高有可能会影响到网速较慢的玩家。以下是不同情况下的推荐值：

| 推荐值  | 服务器情况                                   |
| ------- | -------------------------------------------- |
| 256     | 普通服务器                                   |
| 0 - 127 | 带宽非常非常紧缺但CPU资源充裕                |
| 128     | 带宽紧缺但 CPU 资源相对充裕                  |
| 512 +   | 带宽宽裕但 CPU 资源相对紧缺                  |
| -1      | 在同一网络下使用反向代理（交给反向代理压缩） |

## 掉线优化

在 `purpur.yml` 可以启用 Purpur 的在线检测：

```
use-alternate-keepalive: false
```

`推荐值: true`

启用此功能后，每秒向玩家发送一次 keepalive 包，玩家在 30 秒内未响应才会超时。

玩家以任何顺序响应都不会超时。这样网络情况较差的玩家就不会经常超时。已知与 TCPShield 不兼容。


## 降低服务器视野距离

:::warning

请注意视野距离和玩家体验相关性也较大，除非特殊情况否则不建议大幅压缩视野换取带宽占用。

:::

### 手动调整

在 `spigot.yml` 中可以设置服务器的视野距离：

```
view-distance: 8
#视野距离为 8 chunks
```

`推荐值: 4 - 12`

如果你使用的默认 10 chunks 的视野距离，可能对于带宽来说有一定的压力，可以酌情减少，建议为 4 - 12。

如果不设置为 `default`，此项将覆盖 server.properties ，如果你不知道区分模拟距离和视野距离，请查看 [区分模拟和视野距离](performance-optimization.md/#降低服务器模拟距离即-simulate-distance)。

### 自动调整

安装 [View Distance Tweaks](https://www.spigotmc.org/resources/view-distance-tweaks.75164/) 实现自动调整视野距离使得玩家增多时自动减少视野，玩家减少时自动增加视野。

## 降低区块加载速度

在 `/config/paper-global.yml` 中有关于区块生成的一些参数

```yaml
chunk-loading-basic:
  #注：以下的单位均为 chunks / seconds
  player-max-chunk-generate-rate: -1.0
  #为每个玩家生成分块的最大速率，设置为-1 则禁用。
  player-max-chunk-load-rate: 100
  #任何单个播放器加载块的最大速率，设置为-1 则禁用。
  player-max-chunk-send-rate: 75
  #服务器发送给单个玩家的最大速率。设置为-1 则禁用。
```

其中 `player-max-chunk-send-rate` 对应服务器每秒钟最多向玩家发送多少区块包，设置得越低玩家收到完整的地图信息越慢，

服务器虽然总是会发送几乎同样多的区块信息，但由于发送速度降低，这会降低上行带宽的最大占用率，从而避免大量跑图导致的顿卡。

`推荐值: 40 - 60`

## 控制实体数量

Minecraft 服务端会将每个实体的行为实时发送给附近的玩家客户端，这个包通常来说占用是很少的，但是大量玩家处于实体密集型区域时将出现大量带宽占用。

这方面参数可以参考 [性能优化](performance-optimization.md/#控制实体数量)

## 更低的实体显示距离（不推荐）

降低实体显示距离可以让服务器少发送实体的刷新数据包，但是代价是玩家看不到远处的实体，即使在服务器上这些实体是存在的。

```yaml
entity-tracking-range:
  players: 48
  animals: 48
  monsters: 48
  misc: 32
  other: 64
```

## 选择更加合理的 AntiXray（反矿物透视）方式

:::warning

停止使用 [Orebfuscator](https://modrinth.com/plugin/orebfuscator) 等矿物混淆插件，使用 Paper 自带的矿物混淆。

使用 Paper 矿物混淆时候，尽量不要在非主世界开启 mode 2 或 mode 3

:::

参考文档内关于[反矿物透视](/docs/maintenance/anti-cheat/antixray.md)中标明能降低带宽占用的配置。

## 其他插件

常见的对带宽可能有一定占用的插件行为有：

* 某些 TAB / 计分板 / bossbar / actionbar 类插件时高频刷新
* 某些写的特别烂的反作弊插件可能会每 tick 都向玩家发送数据包
* 某些 **装饰类** 插件大量基于粒子效果或盔甲架的数据包发送
* 欢迎补充

请适当使用使用以上类型的插件。使用时也尽量控制盔甲架、粒子效果等的量。