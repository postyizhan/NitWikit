---
sidebar_position: 7
---

# JVM 参数优化

## 性能相关配置

我们这里使用的内存回收器为 `G1 (Garbage First)` ，所以我们要在启动参数中加上 `-XX:+UseG1GC` ，这样我们就能使用该回收器了

光设置使用该回收器也不行，还要对他进行一些配置，下面就会对配置参数进行讲解，你并不需要完全了解下面参数的意义与说明，可以跟着我的推荐值进行设置。

### G1GC 各种参数的说明：

如果你是新手，或暂时没有性能问题，或者只是不感兴趣，这部分可以不看，但如果你感兴趣的话...

<details>
    <summary> 这里有适合好奇宝宝的完整说明 </summary>

| 参数                               | 说明                                                         |
| :--------------------------------- | :----------------------------------------------------------- |
| -XX:+UseG1GC                       | 使用 G1 GC。                                                 |
| -XX:G1NewSizePercent               | 设置新生代区域大小。由于 Minecraft 拥有大量短期对象，所以需要更多新生代空间，而新一代太小会导致服务器顿卡。 |
| -XX:G1MaxNewSizePercent            | 设置最大新生代区域大小。                                        |
| -XX:MaxGCPauseMillis               | 设置一个 GC 暂停时间期望目标，这是一个非硬性目标，JVM 会尽可能的保证这个目标。 |
| -XX:G1HeapWastePercent             | 当堆中有超过这个百分比的内存是空闲或可回收的，它会触发一次 Mixed GC，从而尽量避免 Full GC。  |
| -XX:InitiatingHeapOccupancyPercent | 设置了开始 Mixed GC 时堆的占用率阈值，默认为 45%， 降低该值可以更早地开始回收老年代空间，避免老年代快速增长导致较长的 GC 停顿。  |
| -XX:G1RSetUpdatingPauseTimePercent | 我们推荐设置为默认值的一半即 5 %，以使更多时间并发以减少暂停持续时间。 |
| -XX:G1MixedGCLiveThresholdPercent  | 调节何时将区域合并至年轻代混合 GC 中，调高该值可以减少 OldGC 发生的频率，而 Mixed GC 不那么消耗资源也不容易导致长时间的卡顿，因此我们推荐设置为 90。 |
| -XX:G1ReservePercent              | Minecraft 新版本内存分配非常快，GC 时候可能缺乏足够空闲内存进行数据迁移。为了保证内存预留，我们推荐设置为默认值的两倍即 20。 |
| -XX:MaxTenuringThreshold           | 通过将其设置为1，限制新生代到老年代的晋升，在不影响性能的前提下，成功规避了新生代的不合理晋升，而长期存活对象的 GC 将在混合 GC 周期中，可有效防止 Minecraft 短期对象过早进入老年代，提高了整体效率。 |
| -XX:G1MixedGCCountTarget           | 设置触发 Full GC 之前，尝试 Mixed GC 的目标次数。默认值为 8。降低该值能降低 GC 开销，将停顿均匀分布减少顿卡。|
| -XX:G1HeapRegionSize               | 设置 G1GC 堆大小。任何此大小的一半（4MB）的内存分配都将划分到老年代。而使用 Java 默认值大多数情况下会太低，这会对象导致被销毁，降低内存利用效率。 |
| -XX:SurvivorRatio                  | 由于我们大幅减少了 MaxTenuringThreshold，因此我们将大幅减少幸存者空间的使用。这样可以释放更多区域供 Eden 使用。 |

### 其他参数

下面是关于其他方面的优化的说明：

### 其他可选的建议设置：

| 参数                               | 说明                                                         |
| :--------------------------------- | :----------------------------------------------------------- |
| -Dpaper.alwaysPrintWarningState        | Paper 服务器可用 - 将其设置为 `false` 将减少在控制台输出配置不正确、潜在问题或其他非致命但需要注意的警告信息。这意味着只有第一次出现警告时会被打印，之后相同警告不再重复显示，有助于减少日志的冗余。|
| -Duser.timezone=GMT+08        | 设置 JVM 的默认时区为格林威治标准时间(GMT)加8小时，即中国标准时间(CST)。这会影响到日期和时间相关的操作，确保它们按照预期的时区进行处理。|
| -Dfile.encoding=UTF-8        | 指定 JVM 文件读写时使用的字符编码为 UTF-8。UTF-8 是一种普遍支持多语言的字符编码格式，可以正确处理各种语言的文字，避免乱码问题。|
| --enable-preview        | 启用 Java 预览功能。Java中的预览特性是即将推出的语言或 API 功能，它们尚未成为最终标准，但可以通过此标志在当前版本的Java中试验和测试。|
| --add-opens=java.base/java.lang=ALL-UNNAMED        | 改变模块系统的访问权限，开放 `java.base` 模块中的` java.lang` 包给所有的未命名模块访问。这对于某些反射操作或在模块系统中需要访问原本受保护的内部API的应用非常有用。|
| --add-modules=jdk.incubator.vector        | 启用 Java incubator 模块。模块包含实验性质的API，比如向量计算 API（Vector API），这些 API 在正式成为标准库的一部分之前，可以通过此选项进行实验和评估。|

</details>

**更多有用的 Paper 服务器可用的参数请查看 [Paper System Properties](https://docs.papermc.io/paper/reference/system-properties)**