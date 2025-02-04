---
sidebar_position: 5
sidebar_label: FAWE - FastAsyncWorldEdit
---

# FastAsyncWorldEdit

<!--markdownlint-disable line-length-->

<a href="https://discord.gg/intellectualsites">
  <img src="https://img.shields.io/discord/268444645527126017.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2" class="stylish-image" alt="Join us on Discord" />
</a>
<a href="https://bstats.org/plugin/bukkit/FastAsyncWorldEdit/1403">
  <img src="https://img.shields.io/bstats/servers/1403" class="stylish-image" alt="bStats Servers" />
</a>
<a href="https://intellectualsites.crowdin.com/fastasyncworldedit">
  <img src="https://badges.crowdin.net/e/4a5819fae3fd88234a8ea13bfbb072bb/localized.svg" class="stylish-image" alt="Crowdin" />
</a>

> 异步创世神，可以直接无脑把 [WorldEdit](./WorldEdit.md) 替换掉

## FAWE 是什么，以及我为什么应该使用它？

FAWE（FastAsyncWorldEdit）是专为高效世界编辑而设计的。它具有以下优点：

- 简单设置和使用：FAWE 的安装和使用都非常简单，即使是初学者也能快速上手。
- 高度可配置：FAWE 提供了丰富的配置选项，可以根据你的具体需求进行定制，以满足不同的编辑需求。
- 低资源消耗：在运行时，FAWE会尽量减少对 CPU 和内存的使用，确保服务器性能不受影响。
- 安全多用户：FAWE 设计为可以安全地被多个玩家同时使用，不会因并发操作而导致数据冲突或损坏。
- 惊人效率：即使在最低效的模式下，FAWE 也能提供惊人的编辑速度，大大缩短了世界编辑所需的时间。

## 为什么我应该使用FAWE？

如果你正在使用依赖于 WorldEdit 的其他插件，仅仅安装 FAWE 就可以显著提升这些插件的性能。

FAWE 通过异步处理世界编辑任务，减少了主线程的负担，使得服务器能够更流畅地运行其他任务。

此外，FAWE 还提供了许多 WorldEdit 所不具备的高级功能和优化，使得世界编辑变得更加高效和便捷。

综上所述，FAWE 是一款功能强大、易于使用且高度可配置的世界编辑工具，对于需要频繁进行世界编辑的 Minecraft 服务器管理员和玩家来说，是一个不可或缺的工具。

## 插件对 FAWE 的兼容怎么样？

通常，你可以直接删除 WorldEdit 然后安装 FAWE，接着你就不需要配置其他东西了，直接启动服务器即可

功能

- **超过200个命令**：FAWE扩展了WorldEdit的基础命令集，提供了超过200个强大的命令，让你能够更灵活、更精确地编辑Minecraft世界。
- **消息和命令的风格化与翻译**：你可以自定义FAWE命令和消息的输出样式，甚至可以实现多语言支持，让不同语言背景的玩家都能轻松使用。
- **（无需设置）剪贴板网络集成**：FAWE支持剪贴板的网络集成，允许你在不同的服务器或客户端之间共享和传输编辑内容，无需复杂的设置。
- **无限制的历史撤销与回滚**：每个世界都有无限次的撤销（//undo）记录，你可以随时查看编辑历史并进行回滚操作，确保编辑的安全性和可恢复性。
- **高级玩家限制**：FAWE提供了对玩家的多种限制设置，包括实体、方块、内存使用、更改次数、迭代次数、区域和背包内容等，以防止滥用和服务器负载过高。
- **可视化、目标模式和掩码**：FAWE支持可视化编辑，提供了多种目标模式和掩码选项，让你能够更直观地选择和编辑目标区域。
- **使用CFI命令生成世界**：通过CFI（Custom Function Interface）命令，你可以生成自定义的世界结构或地形，为你的Minecraft世界增添更多创意元素。
- **照明命令**：FAWE添加了照明相关的命令，如修复（fix）、设置（set）和移除（remove）光照，让你能够更精确地控制游戏世界的照明效果。
- **新的画笔和工具**：FAWE引入了大量新的画笔（//brushes）和工具（//tools），这些工具具有更强大的编辑能力和更高的灵活性。
- **增强的掩码和模式功能**：FAWE提供了更丰富的掩码和模式语法、图案和表达式，以及源掩码功能，让你能够更精确地定义和编辑目标区域。
- **编辑变换**：你可以将变换应用到源区域（如//paste命令），在粘贴时调整目标区域的大小、方向等属性。
- **新格式支持**：FAWE支持新的文件格式，如结构块（Structure Blocks），让你能够更方便地导入和导出复杂的结构。
- **即时复制任意大小**：使用//lazycopy命令，你可以即时复制任意大小的区域，无需等待整个区域加载完成。
- **自动修复损坏的示意图文件**：FAWE能够自动检测和修复部分损坏的示意图文件，确保你的编辑工作不会因文件损坏而中断。
- **其他高级功能**：FAWE还提供了生物群系混合、游戏内世界绘画、动态视距、原生CUI、非轴向旋转、图像导入、洞穴生成、多剪贴板、交互式消息、示意图可视化、卡顿预防、持久画笔等众多高级功能，让你的世界编辑体验更加丰富多彩。

## 链接

:::info

`Bukkit` https://dev.bukkit.org/projects/fawe

`SpigotMC` https://www.spigotmc.org/resources/.13932

`Hangar` https://hangar.papermc.io/IntellectualSites/FastAsyncWorldEdit

`Modrinth` https://modrinth.com/plugin/fastasyncworldedit

`MineBBS` https://www.minebbs.com/resources/.9075/

`GitHub` https://github.com/IntellectualSites/FastAsyncWorldEdit

`文档(英文)` https://intellectualsites.gitbook.io/fastasyncworldedit

`文档(中文)` https://izzelaliz.gitbooks.io/fast-async-worldedit-wiki/content

`插件百科` https://mineplugin.org/FastAsyncWorldEdit

:::

## Bstats

### Bukkit / Spigot

[![](https://bstats.org/signatures/bukkit/FastAsyncWorldEdit.svg)](https://bstats.org/plugin/bukkit/FastAsyncWorldEdit/1403)

### Sponge

[![](https://bstats.org/signatures/sponge/FastAsyncWorldEdit.svg)](https://bstats.org/plugin/sponge/FastAsyncWorldEdit/1405)
