---
title: 搭建官网
sidebar_position: 8
---

# 使用 Github + CloudFlare saas 回源

如果无法正常访问请下载 [steam++]

## 要准备的

主域名，回源域名，

### 1\.注册一个github账号*（可选）

进入 `github.com`，点击 sign up

进入后按照提示完成注册(看不懂自己用翻译)

进入主页后点击左上的 绿色的 new

会跳转到一个界面

Repository name 填 `用户名.github.io`

如果不会git的话就勾选Add a README

然后点 Create repository

会直接到创建的项目主页

点 Add file 会出来两个选项点 Upload files

会来到上传界面，上传你的网站源码(首页的名字要改成index)

上传完后点 Commit changes

然后你访问 `你的用户名.github.io` 就可以访问了

如果你做到这一步至此你的网站已经是搭建完成了可是呢github的网站服务器在国外，

访问的延迟不太行为了降低延迟可以选择以下方式

## 2\. Cloudflare saas 回源

先将你的回源域名绑定到 Cloudflare

然后创建一个 DNS 记录

类型填 CNAME 名称填 origin 内容填你刚刚搭建完的网站

`你的用户名.github.io` 选择开启小黄云 点保存

然后来到 ssl/tls-自定义主机名

然后选择开通，如果它提示你要绑卡的话，如果你没有卡，你可以上闲鱼买一个15块的代绑

开通完成后，先在回退源那输入你刚刚创建的 DNS 记录 `origin.你的回源域名`

等待到那里显示生效后 点击添加自定义主机名 自定义主机名填你的用来开网站的域名

填完后点击添加

然后按照提示完成 txt 授权

然后回到 DNS 记录

添加一个类型为 `CNAME` 名称为 `cdn` 内容为 `cf-cname.xingpingcn.top` 不需要开启小黄云

然后来到你的主域名添加 DNS 记录

添加一个类型为 `CNAME` 名称为输入你刚刚在自定义主机名时输入的前缀，内容为 `cdn.你的回源域名`

并等待 DNS 记录生效，生效后就可以正常使用你的域名访问了

### 3\. 使用Linux搭建网站

以 Ubuntu 为例

在控制台输入 `apt install nginx`

然后找到 `var-www-html` 将网站源码上传上去，然后你就可以直接访问 IP 看到你的网站，

然后添加一个 a 类型的解析内容就填你服务器的 IP，然后就可以正常访问了
