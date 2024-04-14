---
sidebar_position: 2
---

# ViaVersion

ViaVersion是Via三件套的核心,无论你需不需要向上兼容，都需要安装ViaVersion

[下载地址](https://ci.viaversion.com/job/ViaVersion/)

## FAQ

方块材质纹理看起来不对时尝试将配置文件serverside-blockconnections: 改为true。

新版本的物品特性无法在旧版本游戏内使用是因为ViaVersion致力于兼容性而不是添加新的特性。

玩家被踢出时提示sending too many packets请修改配置文件max-pps（推荐修改为原来的两倍以防恶意攻击）

## 配置文件

### hologram-patch - 默认值：false （Boolean）

在 1.9 和 1.11 中，修改了全息影像的某些高度值。如果您在服务器上手动使用盔甲支架，这可能与您无关，但如果您使用全息显示器等插件，则您的盔甲支架可能看起来高于 1.9+，但也可能低于 1.11+。要解决此问题，您可以启用此选项。

### Hologram-E - 默认值：-0.96（整数）

当上述情况成立时，全息影像应向 1.9 及以上客户端偏移多少。我们的实验表明，-0.96 效果最好。对于 1.11，这是相反的。

### piston-animation-patch - 默认值：false（布尔值）

我们应该禁用 1.11/1.11.1 客户端的活塞动画吗？在某些情况下，当发射大量活塞时，它会使它们崩溃。

### chat-nbt-fix - 默认值：true（布尔值）

在 1.12 及更高版本中，聊天中显示的 nbt 数据在删除索引数组的标签后略有格式更改，此选项将剥离该数据。

### quick-move-action-fix - 默认值：false（Boolean）

由于 Minecraft 在 1.12 shift 双击中的某些项目无法正常工作，此补丁允许发送额外信息来修复此问题（仅适用于基于 1.8-1.11.2 bukkit 的服务器）。

### team-colour-fix - 默认值：true（布尔值）

由于 Minecraft 1.13 中名牌颜色的更改是基于团队颜色而不是前缀，因此此修复会更改它，使其成为前缀中的最后一种颜色。

### disable-1_13-auto-complete - 默认值：false（布尔值）

1.13 有一个完整的新标签，可能会触发 Spigot 上的垃圾邮件，您可以使用此选项完全禁用它。

### 1_13-tab-complete-delay - 默认值：0（整数）

引入 Tab 符完成延迟（每秒 20 次刻度），如果在刻度内发生另一个请求，则该请求将被取消。这可用于允许选项卡完成，但不经常，例如。100 个刻度表示每 5 秒完成一次。

### serverside-blockconnections - 默认值：false（布尔值）

在 1.13 中，Mojang 更改了由服务器处理的块连接，因此我们需要计算块所需的连接（这包括跨块），此功能将对性能产生影响，因为在处理围栏、窗格、门等时可能需要额外的计算。

### reduce-blockstorage-memory - 默认值：false（布尔值）

由于存储块的开销，我们提供了通过不存储非重要块来减少开销的选项。启用此选项后，围栏、玻璃板等将无法连接到实心块。

### flowerstem-when-block-above - 默认值：false（布尔值）

这是一个块连接选项，其中花茎用于装饰目的，启用它们将阻止我们连接它们。

### vine-climb-fix - 默认值：false（布尔值）

未连接到方块的藤蔓将被映射到空中，否则 1.13+ 可以爬上它们。

### change-1_9-hitbox - 默认值：false（布尔值）

这改变了 1.9+ 玩家的命中框，因此在玩家潜行时不会发生击退错误。

### change-1_14-hitbox - 默认值：false（布尔值）

这改变了命中框，以便 1.14+ 玩家可以潜入方块下，这可能会让玩家被射弹错过。

### truncate-1_14-books - 默认值：false（布尔值）

现在在 1.14 中，页面限制更大，因此这将限制页面数为 50 而不是 100（因为某些反漏洞利用软件可能会踢玩家）。

### fix-infested-block-breaking - 默认值：true（布尔值）

被感染的块在未来的客户端中可以立即被破坏，使它们无法在旧服务器上被破坏，这会将它们变回石头。

### fix-low-snow-collision - 默认值：false（布尔值）

1.13 对 1 层雪没有碰撞，这会发送 2 层雪来产生类似的效果。

### fix-non-full-blocklight - 默认值：true（布尔值）

修复了 1.14 客户端对非完整块的轻量级值为 0 的问题

### fix-1_14-health-nan - 默认值：true （Boolean）

修复了当运行状况设置为 Float.NaN 时不显示漫游动画的问题

### use-1_15-instant-respawn - 默认值：false（布尔值）

是否应该立即重生 1.15+ 客户端而不显示死亡屏幕。

### ignore-long-1_16-channel-names - 默认值：true（布尔值）

如果忽略超过 32 个字符的插件通道名称，CraftBukkit 在 1.16 之前将此限制硬编码，因此假设任何运行 ViaVersion 的软件都有它。

### forced-use-1_17-resource-pack - 默认值：false（布尔值）

1.17 客户端将被迫接受连接时的资源包，如果拒绝，则断开连接。

### resource-pack-1_17-prompt - 默认值：''（字符串）

1.17 客户端在加入时将显示此消息。

### cache-1_17-light - 默认值：true（布尔值）

缓存在卸载块之前会变亮，以允许后续块更新数据包，而不是在发送第一个块数据时立即取消缓存。
仅在您知道自己在做什么时才禁用此功能。

### armor-toggle-fix- 默认值：true（布尔值）

强制更新 1.19.4+ 玩家的库存，当他们试图在预先占用的插槽中交换盔甲时。
