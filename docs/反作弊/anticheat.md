---
sidebar_position: 1
---



# 🛡️关于反作弊
在前面几章来说你可能已经了解的差不多了

但我们还有一个痛苦的问题要解决

外挂行为一直都是存在各种服务器上的

包括minecraft伺服器上

也是有很多**Hacker Client User**（作弊端用户）

而这些作弊端用户是无法彻底避免的

所以这章来了解一些反作弊插件

和如何尽量解决作弊端用户在你的服务器上横行霸道

就是如何**惩戒**和**阻拦**作弊玩家

---
# 💎首先是Xray（矿物透视）
为了防止玩家使用作弊端的xray功能

又或者是进行矿透材质包进行作弊

又或者在服务器地图上进行反推世界种子进行矿物查询

导致矿产资源大量泛滥

完完全全的破坏了服务器经济系统

❓如何阻止矿物透视

1.使用paper的anti-xray

这是服务器核心自带的功能

这导致他只需要一些些带宽

就可以阻止你服务器上大量的矿透小子

那么该如何设置才最有效呢

首先请找到您的paper配置的yml文件

找到下列模块改成true

```
feature-seeds:
  generate-random-seeds-for-all: true
```
这是对每个建筑使用随机种子，防止您的世界种子轻易的被破解

还没完，继续找到spigot的yml文件

```
    seed-village: 10387312
    seed-desert: 14357617
    seed-igloo: 14357618
    seed-jungle: 14357619
    seed-swamp: 14357620
    seed-monument: 10387313
    seed-shipwreck: 165745295
    seed-ocean: 14357621
    seed-outpost: 165745296
    seed-endcity: 10387313
    seed-slime: 987234911
    seed-nether: 30084232
    seed-mansion: 10387319
    seed-fossil: 14357921
    seed-portal: 34222645
    seed-ancientcity: 20083232
    seed-trailruins: 83469867
    seed-trialchambers: 94251327
    seed-buriedtreasure: 10387320
    seed-mineshaft: default
    seed-stronghold: default

```

把以上所有数字全部打乱

完成以上设置可进一步防止反推种子

(没有完全杜绝的方法，只能拖延时间)

(所以建议资源世界不定期重置)

至于paper的antixray我们也需要进行一些设置

(可直接抄作业)

> 主世界推荐

配置Ⅰ
```
anticheat:
  anti-xray:
    enabled: true
    engine-mode: 3
    hidden-blocks:
    - copper_ore
    - deepslate_copper_ore
    - raw_copper_block
    - gold_ore
    - deepslate_gold_ore
    - iron_ore
    - deepslate_iron_ore
    - raw_iron_block
    - coal_ore
    - deepslate_coal_ore
    - lapis_ore
    - deepslate_lapis_ore
    - mossy_cobblestone
    - obsidian
    - chest
    - diamond_ore
    - air
    - deepslate_diamond_ore
    - redstone_ore
    - deepslate_redstone_ore
    - clay
    - emerald_ore
    - deepslate_emerald_ore
    - ender_chest
    lava-obscures: false
    max-block-height: 128
    replacement-blocks:
    - amethyst_block
    - andesite
    - budding_amethyst
    - calcite
    - coal_ore
    - deepslate_coal_ore
    - deepslate
    - diorite
    - dirt
    - emerald_ore
    - deepslate_emerald_ore
    - granite
    - air
    - gravel
    - oak_planks
    - smooth_basalt
    - stone
    - tuff
    update-radius: 2
    use-permission: false
```
![test](_images/anticheat/antixray-mode3-1.png)

配置Ⅱ

```
anticheat:
  anti-xray:
    enabled: true
    engine-mode: 1
    hidden-blocks:
    - chest
    - coal_ore
    - deepslate_coal_ore
    - copper_ore
    - deepslate_copper_ore
    - raw_copper_block
    - diamond_ore
    - deepslate_diamond_ore
    - emerald_ore
    - deepslate_emerald_ore
    - gold_ore
    - deepslate_gold_ore
    - iron_ore
    - deepslate_iron_ore
    - raw_iron_block
    - lapis_ore
    - deepslate_lapis_ore
    - redstone_ore
    - deepslate_redstone_ore
    - air
    lava-obscures: false
    max-block-height: 64
    replacement-blocks: []
    update-radius: 2
    use-permission: false

```
![test](_images/anticheat/antixray-mode1-1.png)

配置Ⅲ-*推荐使用*

```
anticheat:
  anti-xray:
    enabled: true
    engine-mode: 2
    hidden-blocks:
    - copper_ore
    - deepslate_copper_ore
    - raw_copper_block
    - gold_ore
    - deepslate_gold_ore
    - iron_ore
    - deepslate_iron_ore
    - raw_iron_block
    - coal_ore
    - deepslate_coal_ore
    - lapis_ore
    - deepslate_lapis_ore
    - mossy_cobblestone
    - obsidian
    - chest
    - diamond_ore
    - air
    - deepslate_diamond_ore
    - redstone_ore
    - deepslate_redstone_ore
    - clay
    - emerald_ore
    - deepslate_emerald_ore
    - ender_chest
    lava-obscures: false
    max-block-height: 128
    replacement-blocks:
    - amethyst_block
    - andesite
    - budding_amethyst
    - calcite
    - coal_ore
    - deepslate_coal_ore
    - deepslate
    - diorite
    - dirt
    - emerald_ore
    - deepslate_emerald_ore
    - granite
    - air
    - gravel
    - oak_planks
    - smooth_basalt
    - stone
    - tuff
    update-radius: 2
    use-permission: false
```

![test](_images/anticheat/antixray-mode2-1.png)


