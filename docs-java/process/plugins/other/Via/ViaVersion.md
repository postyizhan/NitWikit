---
title: ViaVersion
sidebar_position: 2
---

# ViaVersion

:::info

`SpigotMC` https://www.spigotmc.org/resources/.19254

`Hangar` https://hangar.papermc.io/ViaVersion/ViaVersion

`Modrinth` https://modrinth.com/plugin/viaversion

`GitHub` https://github.com/ViaVersion/ViaVersion

`文档` https://viaversion.atlassian.net/wiki/spaces/VIAVERSION/overview

`插件百科` https://mineplugin.org/ViaVersion

:::

ViaVersion 是 Via 三件套的核心，提供了向上兼容，如果你想要向下兼容，可以再安装 [ViaBackwards](ViaBackwards.md) 和 [ViaRewind](ViaRewind.md)

[ViaVersion 构建站](https://ci.viaversion.com/job/ViaVersion)

## FAQ

方块材质纹理看起来不对时尝试将配置文件 `serverside-blockconnections` 改为`true`。

新版本的物品特性无法在旧版本游戏内使用是因为 ViaVersion 致力于兼容性而不是添加新的特性。

玩家被踢出时提示 `sending too many packets` 请修改配置文件 `max-pps`(推荐修改为原来的两倍以防恶意攻击)

## 配置文件

### hologram-patch - 默认值：false (布尔值)

在 1.9 和 1.11 中，修改了全息影像的某些高度值。如果你在服务器上手动使用盔甲支架，这可能与你无关，但如果你使用全息显示器等插件，则你的盔甲支架可能看起来高于 1.9+，但也可能低于 1.11+。要解决此问题，你可以启用此选项。

### Hologram-E - 默认值：-0.96(整数)

当上述情况成立时，全息影像应向 1.9 及以上客户端偏移多少。我们的实验表明，-0.96 效果最好。对于 1.11，这是相反的。

### piston-animation-patch - 默认值：false(布尔值)

我们应该禁用 1.11/1.11.1 客户端的活塞动画吗？在某些情况下，当发射大量活塞时，它会使它们崩溃。

### chat-nbt-fix - 默认值：true(布尔值)

在 1.12 及更高版本中，聊天中显示的 nbt 数据在删除索引数组的标签后略有格式更改，此选项将剥离该数据。

### quick-move-action-fix - 默认值：false(布尔值)

由于 Minecraft 在 1.12 shift 双击中的某些项目无法正常工作，此补丁允许发送额外信息来修复此问题(仅适用于基于 1.8-1.11.2 bukkit 的服务器)。

### team-colour-fix - 默认值：true(布尔值)

由于 Minecraft 1.13 中名牌颜色的更改是基于团队颜色而不是前缀，因此此修复会更改它，使其成为前缀中的最后一种颜色。

### disable-1_13-auto-complete - 默认值：false(布尔值)

1.13 有完整的TAB补全，可能会触发在 Spigot 上的刷屏，你可以使用此选项完全禁用它。

### 1_13-tab-complete-delay - 默认值：0(整数)

引入 Tab 符完成延迟(每秒 20 次刻度)，如果在刻度内发生另一个请求，则该请求将被取消。这可用于允许选项卡完成，但不经常，例如。100 个刻度表示每 5 秒完成一次。

### serverside-blockconnections - 默认值：false(布尔值)

在 1.13 中，Mojang 更改了由服务器处理的块连接，因此我们需要计算块所需的连接(这包括跨块)，此功能将对性能产生影响，因为在处理围栏、窗格、门等时可能需要额外的计算。

### reduce-blockstorage-memory - 默认值：false(布尔值)

由于存储块的开销，我们提供了通过不存储非重要块来减少开销的选项。启用此选项后，围栏、玻璃板等将无法连接到实心方块。

### flowerstem-when-block-above - 默认值：false(布尔值)

这是一个块连接选项，其中花茎用于装饰目的，启用它们将阻止我们连接它们。

### vine-climb-fix - 默认值：false(布尔值)

未连接到方块的藤蔓将被映射到空中，否则 1.13+ 可以爬上它们。

### change-1_9-hitbox - 默认值：false(布尔值)

这改变了 1.9+ 玩家的命中框，因此在玩家潜行时不会发生击退错误。

### change-1_14-hitbox - 默认值：false(布尔值)

这改变了命中框，以便 1.14+ 玩家可以潜入方块下，这可能会让玩家被射弹错过。

### truncate-1_14-books - 默认值：false(布尔值)

现在在 1.14 中，页面限制更大，因此这将限制页面数为 50 而不是 100(因为某些反漏洞利用软件可能会踢玩家)。

### fix-infested-block-breaking - 默认值：true(布尔值)

被感染的块在未来的客户端中可以立即被破坏，使它们无法在旧服务器上被破坏，这会将它们变回石头。

### fix-low-snow-collision - 默认值：false(布尔值)

1.13 对 1 层雪没有碰撞，这会发送 2 层雪来产生类似的效果。

### fix-non-full-blocklight - 默认值：true(布尔值)

修复了 1.14 客户端对非完整块的轻量级值为 0 的问题

### fix-1_14-health-nan - 默认值：true (布尔值)

修复了当运行状况设置为 Float.NaN 时不显示漫游动画的问题

### use-1_15-instant-respawn - 默认值：false(布尔值)

是否应该在 1.15+ 客户端上立即重生而不显示死亡屏幕。

### ignore-long-1_16-channel-names - 默认值：true(布尔值)

如果忽略超过 32 个字符的插件通道名称，CraftBukkit 在 1.16 之前将此限制硬编码，因此假设任何运行 ViaVersion 的软件都有它。

### forced-use-1_17-resource-pack - 默认值：false(布尔值)

1.17 客户端将被迫接受连接时的资源包，如果拒绝，则断开连接。

### resource-pack-1_17-prompt - 默认值：''(字符串)

1.17 客户端在加入时将显示此消息。

### cache-1_17-light - 默认值：true(布尔值)

缓存在卸载块之前会变亮，以允许后续块更新数据包，而不是在发送第一个块数据时立即取消缓存。

仅在你知道自己在做什么时才禁用此功能。

### armor-toggle-fix- 默认值：true(布尔值)

强制更新 1.19.4+ 玩家的库存，当他们试图在预先占用的插槽中交换盔甲时。

## 1.8 服务器上的高版本客户端选项

此选项仅适用于你使用 1.8 服务器时，这些选项可以在功能已更改的未来版本中实现一致的视觉效果/游戏玩法。

### prevent-collision - 默认值：true(布尔值)

在 1.9 中，玩家现在可以互相推搡。为了防止在发送记分牌团队时出现这种情况，ViaVersion 可以将冲突设置为不发生，以便游戏玩法保持平衡。(像 ColoredTags 这样的插件使用团队)

### auto-team - 默认值：true(布尔值)

大多数服务器不使用记分牌插件，在这种情况下，我们会将自己的团队发送给玩家，以防止他们与其他玩家发生冲突。

如果你使用像 ColoredTags 这样的插件，你应该将其关闭。此外，如果你在使用 Bungee 和团队时遇到问题，请考虑将其关闭。

### suppress-metadata-errors - 默认值：false(布尔值)

由于 1.9 及更高版本对实体数据发送方式的更改，一些插件发送的数据我们找不到 1.9 的等效数据

(通常意味着他们做错了什么！发生这种情况时，我们会告诉你配置中的所有信息，

你需要调试并找出导致这种情况的插件并联系作者(这些与称为 Datawatcher 的 NMS 类有关)。

或者，你可以抑制元数据错误，但这意味着生物在 1.9 到 1.8 上可能看起来不同，但大多数时候这很好。

### shield-blocking - default： true (布尔值) - 注意：在 BungeeCord 上，客户端将无法看到它们盾牌阻挡

在 1.9 中，删除了右键单击剑时的阻挡动画。无法模拟 1.9 无法看到 1.8 的阻挡，作为替代方案，你可以直观地将这些视为盾牌。

这些不会改变任何游戏玩法，只允许 1.9 看到客户端阻止并用剑自己执行阻止操作。禁用此功能将意味着 1.9 客户端将无法看到也无法正确阻挡。

### simulate-pt - 默认值：true(布尔值)

在 1.9 中，玩家滴答不再由客户端发送数据包触发。因此，如果我们不模拟向他们发送包裹，他们将无法进食、正确使用弓箭、喝药水。如果你有一个非常简单的服务器，你可以禁用它，但建议你不要这样做。

### nms-player-ticking - 默认值： true (布尔值) - 此功能仅在 Spigot / Sponge 上可用。(在 BungeeCord 上，它将使用数据包滴答声)

为了模拟玩家滴答声，我们使用 NMS 作为发送数据包的替代方案，因为发送数据包可能会导致反作弊问题。

如果你在使用 ViaVersion 时遇到 TPS 问题，建议你尝试将其设置为 false，因为它可能会减少对 TPS 的影响。

(尽管它仍然会在那里，只是没有标记为 ViaVersion，因为它是内部服务器滴答作响)

### bossbar-patch - 默认值：true(布尔值)

在 1.9 中，bossbar 的处理方式不同，通过数据包发送，而不是使用生物。

我们是否应该自动发送正确的数据包以使 bossbar 正常工作？如果你遇到出现太多bossbar的问题，你可以禁用此功能。

### bossbar-anti-flicker - 默认值：false(布尔值)

由于 bossbar 的变化，一些插件会不断更新 boss 栏上的生命值，这可能会导致闪烁，启用此选项将修复生命值。

但是，这将防止运行状况下降，除非你遇到闪烁问题，否则不建议这样做。

### use-new-effect-indicator - 默认值：true(布尔值)

在 1.9 中，在屏幕左上角引入了一个新的效果指示器。启用此选项将允许玩家在左上角看到他们的有效药水效果，

这对 1.9+ 玩家来说可能是一个优势，如果你发现这种情况，你可能希望禁用。

### use-new-deathmessages - 默认值：false(布尔值)

在 1.9 中，死亡信息被添加到重生屏幕中。启用此选项将允许死亡的玩家在重生屏幕上看到他们的死亡信息。

### item-cache - 默认值： true (布尔值) - 此功能仅在 Spigot / Sponge 上可用。(在 BungeeCord 上，它仍然可以工作，但效率较低，导致服务器发送 1 个额外的数据包)

在 1.9 中，对项目使用方式的数据包更改意味着它们不会发送到服务器。物品缓存允许 ViaVersion 保存玩家持有的物品，

这允许一种有效的方式告诉服务器玩家正在使用哪些物品已被移除。

不建议禁用此功能，因为替代方法是在数据包到达时查找项目，这可能会导致延迟并可能导致服务器崩溃。

### replace-pistons- 默认值：false(布尔值)

此选项也会影响 1.9/1.9.1 服务器。 在 1.10.1 中，Mojang 引入了一种确保特殊区块发送数据的方法。这也引入了一个崩溃问题，这意味着当发送块 36(扩展活塞特殊块)时，它会使客户端崩溃。
作为故障保护，你可以启用此选项，我们将发送下面指定的替换 ID。(此问题仅在你使用36号方块时才会影响你)

### replacement-piston-id - 默认值：0(整数)

启用上一个选项时，应该发送哪个块 ID，默认情况下它是 air 0，因为36号方块与 air 非常相似。

### force-json-transform - 默认值：false(布尔值)

当发送 JSON 时出现问题时，我们是否应该强制发送它而不是抛出错误？这可能会导致在极少数情况下发送不正确的 JSON，禁用它将显示负责的错误。

### minimize-cooldown - 默认值：true (布尔值)

尝试减少 1.8 版本中物品命中时的视觉冷却时间。

### left-handed-handling - 默认值：true(布尔值)

这样，左手就可以在较新的客户端的 1.8 服务器上使用。
