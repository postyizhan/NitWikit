---
title: 资源包分发
sidebar_position: 6
---

# 资源包分发

你可能希望玩家入服自动下载某个材质包

## 注意

JAVA 版的资源包分发与基岩版不同，它是云分发的，提供给客户端的应该是一个**直链**，而不是资源包本身

不管你用什么方式，都必须是直链才可正常使用！

**什么是直链？**

> 直接从服务器下载数据

不需要登陆账号，不需要点击链接打开网页才下载

## 分发

## server.properties

mc服务端自己就有这个材质包分发功能

### 例子

我们拿到 slimefun 的资源包直链地址是:
https://github.com/xMikux/Slimefun-Resourcepack/releases/download/latest-build/Slimefun-ResourcePack.zip ，
然后我们打开`server.properties`，找到以下内容：

```properties
resource-pack=
```

把我们刚才拿到的资源包直链放进去，现在看起来应该是这样

```properties
resource-pack=https://github.com/xMikux/Slimefun-Resourcepack/releases/download/latest-build/Slimefun-ResourcePack.zip
```

然后我们再找到下面

```properties
require-resource-pack=false
```

这个值代表是否需要强制资源包，开启后，如果玩家拒绝应用这个资源包，就不让玩家进入服务器

调好后，你只需要重启服务器就可以享受到资源包了

:::note

上面的例子链接是 GitHub 的，而国内的网络环境有时连不上 GitHub

:::

## 使用 ItemsAdder

https://itemsadder.devs.beer/v/chinese/plugin-usage/resourcepack-hosting

## 使用 Oraxen

看配置文件

## 托管

以下均为ia文档中所说的 第三方平台托管(external-host)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="store">
<TabItem value="cf" label="Cloudflare">

官网: https://cloudflare.com

提供两种存储方式,分别是 R2 和 KV

### Cloudflare R2

免费的 Cloudflare R2 提供 10 GB 的免费空间，只不过需要**绑定银行卡或者 PayPal**(不会花钱)，非常推荐

- 使用方法:创建一个 R2 存储桶，名称自选，位置选择`亚太地区 (APAC)`(速度最快)，默认存储类一定要选择`标准`
  ，创建好后直接上传资源包就可以了(可以设置自定义域)

- 无域名方案:完成上一步后，打开设置，找到`R2.dev 子域`，点击`允许访问`即可使用CF提供的免费域名

图文教程: https://juejin.cn/post/7331584783611281444

**优势**：

- 稳定: 相当的稳定，没出过问题
- 速度: 不同于 CF CDN 的环大陆减速，R2 亚太地区速度非常给力
- 价格: 10 GB 以内免费

**劣势**：

- 需要绑定银行卡或者 PayPal

(笨蛋文档官方资源分发也是 R2)

### Cloudflare KV

CF Worker 的一个附属品,用来当可持久存储的,用来当资源包分发也是无敌了

教程: https://github.com/SharzyL/pastebin-worker

**优势**：

- 价格: 1 GB 以内免费
- 不需要绑定银行卡或者 PayPal

**劣势**：

- 单个文件最大 25 MB
- 一天只能访问 10 万次

</TabItem>
<TabItem value="tebi" label="Tebi">

官网: https://tebi.io

一个非常好的对象存储,提供 50 GB 的免费空间(当然,由于多存储点,最大只能获得 25 GB)

需要绑定信用卡才能使用(但不校验,可以绕过)

创建时推荐选择新加坡,美西,空间需求不大可以德国,新加坡,美东和美西四个都选

**优势**：

- 免费空间多
- 速度给力
- 稳定

**劣势**：

- 需要绑定银行卡(可以绕过)
- 有流量限制(250 GB)

~~那不就没缺点了~~

</TabItem>
<TabItem value="github" label="GitHub">

官网: https://github.com

国内的网络环境不建议用这个

- 方案一：首先创建一个新的仓库，接着创建发行版，把资源包上传至发行版，复制下载链接，将链接填入ia的 第三方平台托管(
  external-host) 或使用 server.properties

- 方案二：首先创建一个新的仓库，接着上传资源包文件到仓库中，点击你上传的文件，复制这单个文件的下载链接

创建新仓库：https://docs.github.com/zh/repositories/creating-and-managing-repositories/creating-a-new-repository

创建发行版：https://docs.github.com/zh/repositories/releasing-projects-on-github/managing-releases-in-a-repository?tool=webui

**优势**：

- 价格: 单个文件 2 GB

**劣势**：

- 国内基本连不上

</TabItem>
<TabItem value="gitee" label="Gitee">

官网: https://gitee.com

国内的代码托管平台，访问速度快，推荐使用

- 方案一：首先创建一个新的仓库，接着创建发行版，把资源包上传至发行版，复制下载链接，将链接填入ia的 第三方平台托管(
  external-host) 或使用 server.properties

- 方案二：首先创建一个新的仓库，接着上传资源包文件到仓库中，点击你上传的文件，复制这单个文件的下载链接

创建发行版：https://help.gitee.com/repository/release/create#%E5%A6%82%E4%BD%95%E5%88%9B%E5%BB%BA%E5%8F%91%E8%A1%8C%E7%89%88

**优势**：

- 速度: 国内访问速度相当快

**劣势**：

- 文件大小: 单个限制 100 MB
- 需要绑定手机号

</TabItem>
<TabItem value="gitlab" label="GitLab">

官网: https://gitlab.com

国内访问比较稳定的代码托管平台

- 方案一：首先创建一个新的仓库，接着创建发行版，把资源包上传至发行版，复制下载链接，将链接填入ia的 第三方平台托管(
  external-host) 或使用 server.properties

- 方案二：首先创建一个新的仓库，接着上传资源包文件到仓库中，点击你上传的文件，复制这单个文件的下载链接

创建仓库：https://www.bookstack.cn/read/gitlab-doc-zh/docs-150.md#2rp8yq

创建发行版：https://www.bookstack.cn/read/gitlab-doc-zh/docs-149.md#chaa1u

**优势**：

- 速度: 国内访问比较稳定

**劣势**：

- 文件大小: 单个限制 100 MB

</TabItem>
<TabItem value="drive" label="直链网盘">

ia的文档教了如何使用
[Google Drive](https://itemsadder.devs.beer/v/chinese/plugin-usage/resourcepack-hosting/google-drive-1.17.1+) 和
[OneDrive](https://itemsadder.devs.beer/v/chinese/plugin-usage/resourcepack-hosting/onedrive)
进行材质托管

:::tip

鉴于国内的网络环境，这两个网盘均不建议使用

:::

国内较大的直链网盘有 [123pan](https://www.123pan.com)，以及一些小的直链网盘，比如[基岩云](https://drive.wujiyan.cc/)

**优势**：

- 速度: 国内访问还可以

**劣势**：

- 123pan 要钱
- 小的直链网盘容易跑路，不稳定
- 速度堪忧

</TabItem>
<TabItem value="self" label="自托管">

使用
ItemsAdder，可以直接在服务器上托管资源包：https://itemsadder.devs.beer/v/chinese/plugin-usage/resourcepack-hosting/resourcepack-self-hosting

或者自己搭建个直链下载站来用

**优势**：

- 速度: 访问速度自己掌控

**劣势**：

- 占用自己的宽带
- IA 自托管极为脑瘫

如果不想使用 IA 脑瘫自托管,你也可以使用像[CUFS](http://iscute.cn/chfs) 这样的外置自托管程序

</TabItem>
</Tabs>

## 压缩

为了让玩家更快的下载资源包(并节省你的流量),你需要对资源包进行压缩

推荐使用 [PackSquash](https://packsquash.aylas.org/) 进行压缩

### 下载

前往[官网](https://packsquash.aylas.org/) 下载即可

### 使用

PackSquash 需要你在目录下创建配置文件`packsquash.toml`才可以使用

然后向文件中写入以下内容

```toml
pack_directory = 'C:\path\to\pack(填写你的资源包所在目录)'
```

然后在当前目录运行`packsquash packsquash.toml` 即可

### 其他选项

:::tip

这并不是所有的选项,**只列出了一些**对于新手有用的选项

同时简化了一些选项表达,完整版请参考[GitHub Wiki](https://github.com/ComunidadAylas/PackSquash/wiki/Options-files)

:::

#### 指定输出文件位置

```toml
output_file_path = 'C:\path\to\result\pack\zip\file\my_pack.zip'
```

#### 压缩标准

```toml
zip_spec_conformance_level = 'pedantic'
```

默认取值为`pedantic`,表示完全遵循 ZIP 文件规范,所有的查看和托管都可以识别

`disregard`为加料模式,包括提取保护和改进的内部 ZIP 文件结构压缩,会获得更好的性能,非常推荐

:::warning

并不是所有的托管和查看程序都能识别`disregard`模式的 zip 文件

:::

#### ZIP 混淆

```toml
size_increasing_zip_obfuscation = true
```

当使用`disregard`模式时,启用此选项将增加对生成的 ZIP
文件进行查看、提取或篡改的保护，这会略微增加其大小。此选项不影响是否添加**不增加文件大小**的保护，并且如果ZIP标准不提供保护，则没有任何影响

#### 压缩保密性

```toml
percentage_of_zip_structures_tuned_for_obfuscation_discretion = 100
```

当此选项设置为 0（最小值）时，每个 ZIP 记录将优先存储以提高压缩性。相反，当设置为 100（最大值）时，每个 ZIP
记录将优先存储以提高保密性。其他值将结合提高保密性和压缩性。

#### OGG 混淆

```toml
ogg_obfuscation = true
two_pass_vorbis_optimization_and_validation = true
```

如果开启该选项,生成的 Ogg 文件将会被破坏,使得它们在 Minecraft 之外难以播放

### FAQ

#### ItemsAdder Armor 在使用 PackSquash 后无法正常工作

在配置文件中添加如下内容

```toml
['**/*?.{fsh,vsh,glsl}']
minify_shader = false

['**/textures/models/armor/*?.png']
image_data_compression_iterations = 0
skip_alpha_optimizations = true
color_quantization_target = 'none'
```

### 战绩

对测试资源包使用 PackSquash 进行压缩,其体积从 79 MB 下降至 35 MB

使用 OGG 混淆后,7 款音频播放器均无法播放(MC 内正常)

使用 ZIP 混淆后,大部分 ZIP 查看器无法打开(不是合法的 ZIP 文件),仅 BandiZIP 成功解压

当压缩保密性设为 100 时,所有 ZIP 查看器陨落,无人打开,测试配置文件:

```toml
zip_spec_conformance_level = 'disregard'
size_increasing_zip_obfuscation = true
percentage_of_zip_structures_tuned_for_obfuscation_discretion = 100
```

### 我想让客户端不要下载重复的资源包可以吗？

当然可以，找到以下配置

```properties
resource-pack-sha1=
```

填入资源包的sha1就行，如果你不知道怎么生成，你可以前往 [在线网站](https://www.strerr.com/cn/sha1_file.html)
，把你文件上传然后复制生成的哈希值到这里就可以

我们以 Slimefun 为例子

```properties
resource-pack-sha1=633183ce43a0282328153e63ba6ab8788a0417164b2146db8da1b5c40c8cf411
```

最后整出来应该是这样子的
