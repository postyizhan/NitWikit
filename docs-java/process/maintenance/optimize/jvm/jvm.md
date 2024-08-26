---
sidebar_position: 1
title: JVM 优化
slug: /optimize/jvm
---

# JVM 优化

这篇文章可以说是整个笨蛋文档中编写历时最久的(),为了确保正确性,我们在Windows和Linux 上进行了大量性能测试,结果可以说是十分出人意料

这场测试的细节和日志,报告,Spark,GCLog等可以在[Test - Java](https://github.com/lilingfengdev/Test-Java)找到

## Java 选择

```mermaid
flowchart TD
    A[选择] 
    A --> Java8
    A --> Java11
    A --> Java21
    Java8 --> Dragonwell
    Java11 --> Dragonwell
    Java21 --> Windows
    Windows --> 内存充足
    内存充足 --> C[GraalVM Enterprise Edition]
    Windows --> 内存不足
    内存不足 --> OpenJ9
    Java21 --> Linux
    Linux --> 内存不足
    Linux --> D[内存充足]
    D --> 好的兼容性
    好的兼容性 -->|需要| C
    好的兼容性 -->|不需要| E[Azul Zing]
```

这可能与你想的不太一样

:::tip Zulu的性能

根据官方对 Zulu 的定位,Zulu 的重点是**安全性和稳定性**，而非性能

大部分人对`Zulu 性能好`这一错误看法主要是来源于同一公司 Azul 旗下的另一款产品 Zing

该产品(Zing)的主要侧重点是性能，但是，如果你不想折腾，想拥有一个超高稳定性的环境，Zulu 仍然是你的最佳选择

:::

## 垃圾回收器

经过我们的多次测试，G1GC和ZGC 最适合MC服务器(还有一个 Zing C4)

选择！

```mermaid
flowchart TD
    A[选择] 
    A --> 机器配置足够,起步4h8g,推荐8h8g
    A --> 机器配置不达标
    机器配置足够,起步4h8g,推荐8h8g --> Java21,或者Dragonwell11
    机器配置足够,起步4h8g,推荐8h8g --> 其他版本
    Java21,或者Dragonwell11 --> ZGC
    其他版本 --> G1GC
    机器配置不达标 --> G1GC
```

ZGC 的无停顿可以给玩家带来更好的体验,并且更充分的利用多核

对于 GC 细节性的优化请阅读每个Java的优化指南
