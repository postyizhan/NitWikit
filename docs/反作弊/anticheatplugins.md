---
sidebar_position: 3
---



# 选择一个反作弊插件

好的反作弊插件会让作弊者手足无措

使它们进行的任何违规操作都能得到一定限制

那么如何选择一款好的反作弊插件的？

众所周知市面上的反作弊很多，选择是很难的

这边是我们力推且在使用的一些反作弊插件

实际上这些插件基本已经被绕烂了，只适合新手

希望能够帮到你

:::warning

不要使用任何已经停止更新的反作弊插件，因为他们并不能支持最新版本且缺少对其他插件的兼容性，除非你有能力自己解决这些问题，不然就尽量不去使用已经停止更新的反作弊

反作弊插件对混合端和 Geyser 的支持有限甚至没有，可能需要其他方式解决

:::

## Matrix(推荐)

Matrix是由国人RE编写的一款反作弊插件，当年诞生是用于取代AAC这款反作弊插件，而如今经过不断改良也拥有了不错的检测性能和质量，足以对抗部分脑溢血参数

！试用版只拥有少部分检测且只支持一台机器
！7天使用权到期后可继续订阅试用版使用

付费版-99RMB
- 拥有95%的检测
- 可同时给3台机器使用

企业版-499RMB
- 拥有所有检测
- 可同时给40台机器使用
- 可对您的服务器进行深度定制

如果你是生存服，可以先使用试用版进行测试，如何再进行付费版本的购买

如果你是大型小游戏/大型群组服，推荐购买企业版，这能让Matrix对您的服务器进行更深度的定制

> 官网: matrix.rip

## NoCheatPlus-Update

非常经典的老牌反作弊，拥有悠久历史且和作弊者们对抗许久，但目前并不积极的进行更新，且由于远古代码遗留导致部分检测较为低下，但这并不影响它是个不错的反作弊

！只推荐影响原版插件较少的生存服务器使用

> Github: https://github.com/Updated-NoCheatPlus/NoCheatPlus

## GrimAC2.0(已停更不推荐)

一个相当不错的反作弊，但是目前已经停更了，支持Geyser,误判很多，网络差一点就被直接踢出

!目前测试版仍然存在不稳定因素，但推荐使用

- 1.0005的timer检测
- 3.01的reach检测

> Github: https://github.com/GrimAnticheat/Grim

## Vulcan

老牌火神反作弊，虽然在几个版本存在十分严重的漏洞，但并不影响他一些检测强力的事实，尽管他的配置文件非常脑淤血，但还是深受多人喜爱。

!拥有中规中矩的检测，但建议慎用

> SpigotMC: https://www.spigotmc.org/resources/vulcan-anti-cheat-advanced-cheat-detection-1-7-1-20-4.83626/

## 不推荐-Spartan

老牌垃圾性能过剩修复器，使用它你将获得玩家被误判时发送给你的羞辱，以及什么都无法拦截的作弊检测，使用它你将会知道这款反作弊不如几乎同时期的NoCheatPlus，就算你需要退款，先请在spigotmc上撤回你的负面言论后才可进行Spartan的退款服务，由于购买后6个月需要重新支付才能继续使用导致被MD_5警告的传奇反作弊，这就是Spartan-Anticheat。

!我家驿站都不用的传奇斯巴达人反欺诈

> SpigotMC: https://www.spigotmc.org/resources/spartan-anti-cheat-advanced-cheat-hack-detection-1-7-1-20-4-33-off.25638/

## AntiCheatAddition

添加了其他反作弊不会反的部分,目前添加了以下：
* 一键整理
* 自动钓鱼
* 自动进食
* 自动药水
* Fastswitch
* 数据包分析
* （有更多）

[查看地址](https://www.spigotmc.org/resources/anticheataddition.33590/)

## XCatch

这个插件是一个反X光插件，不同的是，这个插件不会生成假矿，而是通过分析玩家发现矿物的数量和回合，判断玩家是否在开x光

 [查看地址](https://www.spigotmc.org/resources/xcatch-anti-xray-1-13-1-19.101227/)

## ClientDetectorPlus

一个可以用来查端的插件，可以检测客户端是什么类型的客户端，可以检测到部分模组

[查看地址](https://www.spigotmc.org/resources/clientdetectorplus-now-in-alpha-testing.90375/)

---
## 只有这几个？
你难道想让我把Intave Karhu Polar那些什么全部都列出来吗，要求不高这几个主流就差不多够用了，毕竟是面向小白的开服教程，后面想试试非主流反作弊请自己去官网购买就好了捏。

# 反作弊配置

## Cka先生的反作弊配置

一款面向萌新的主流反作弊配置，对配置有任何问题骚扰Talents先生项目的Issues即可解决！

Github：https://github.com/TalentsRC/Talents-AntiCheat-Config

## ViaBackwards

如果你在你的服务器使用了跨版本插件(Via),你需要开启这个选项以增加反作弊对其他版本的兼容性

打开`ViaBackwards/config.yml`,找到`handle-pings-as-inv-acknowledgements`配置项,把它改成`true`就可以增加对反作弊的兼容性

## 笨蛋脚本

[自动为你配置反作弊，下载!](https://github.com/lilingfengdev/NitWiki-Script/releases/download/latest/config-anticheat.exe)

# 组合反作弊

一般个人建议是一个服务器的反作弊两个足够，一个的话容易被绕，太多又会严重影响服务器性能，并产生大量误判，一般装两个足够了
