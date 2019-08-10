# Git

版本管理工具，

## 常用命令

1、代码提交
git add .
git commit -m "add createcomponent"



2、再切换回开发分支
git checkout dev



3、分支合并
git merge createcomponents --no-ff
--no-ff 会将合并记录添加到git log当中



4、git log
Merge: 035d0b2 b9d9034
Author: gangking <gangking@foxmail.com>
Date:   Sat Aug 10 18:06:42 2019 +0800

    Merge branch 'createcomponents' into dev

commit b9d90342edf7bdaee662519e3d899e796bd72e98 (createcomponents)
Author: gangking <gangking@foxmail.com>
Date:   Sat Aug 10 18:02:34 2019 +0800

    add reatecomponnet
说明合并成功！

5、提交到远程仓库
git push origin dev



6、删除分支
git branch -d createcomponents



7、查看当前分支
git branch



8、创建分支：

git checkout -b createcomponents



技巧：

1、退出vm模式

```
esc+shift+;再输入wq!回车即可
```

2、当Pull报错，除了使用git stash还可以：

```
- 先通过 git log 查看最近提交的版本Id
- 再通过 git reset --soft 版本id  来回退到最近提交版本
```

3、更新代码冲突时

```
- 先通过git stash暂存
- 在git pull项目
- 再释放stash 
```



## 常用git stash命令

```
（1）git stash save "save message"  : 执行存储时，添加备注，方便查找，只有git stash 也要可以的，但查找时不方便识别。

（2）git stash list  ：查看stash了哪些存储

（3）git stash show ：显示做了哪些改动，默认show第一个存储,如果要显示其他存贮，后面加stash@{$num}，比如第二个 git stash show stash@{1}

（4）git stash show -p : 显示第一个存储的改动，如果想显示其他存存储，命令：git stash show  stash@{$num}  -p ，比如第二个：git stash show  stash@{1}  -p

（5）git stash apply :应用某个存储,但不会把存储从存储列表中删除，默认使用第一个存储,即stash@{0}，如果要使用其他个，git stash apply stash@{$num} ， 比如第二个：git stash apply stash@{1} 

（6）git stash pop ：命令恢复之前缓存的工作目录，将缓存堆栈中的对应stash删除，并将对应修改应用到当前的工作目录下,默认为第一个stash,即stash@{0}，如果要应用并删除其他stash，命令：git stash pop stash@{$num} ，比如应用并删除第二个：git stash pop stash@{1}

（7）git stash drop stash@{$num} ：丢弃stash@{$num}存储，从列表中删除这个存储

（8）git stash clear ：删除所有缓存的stash
```



# SVN

[使用方法](https://jingyan.baidu.com/article/6c67b1d6f524d52787bb1ef3.html)

## 1 内容概述

1、svn服务端、svn客户端、svn eclipse插件安装方法

2、svn的基本使用方法

 

## 2 **svn介绍**

### 2.1 **项目管理中的版本控制问题**

​	通常软件开发由多人协作开发，如果对代码文件、配置文件、文档等没有进行版本控制，将会出现很多问题：

 

Ø 备份多个版本，占用磁盘空间大

Ø 解决代码冲突困难 

Ø 容易引发BUG 

Ø 难于追溯问题代码的修改人和修改时间

Ø 难于恢复至以前正确版本

Ø 无法进行权限控制 

Ø 项目版本发布困难

 

### 2.2 **什么是版本控制**

​	版本控制(Revision control)是维护工程蓝图的标准做法，能追踪工程蓝图从诞生一直到定案的过程。是一种记录若干文件内容变化，以便将来查阅特定版本修订情况的系统。

 

### 2.3 **svn是什么？**

​	SVN（Subversion）是近年来崛起的版本管理工具，在当前的开源项目里(J2EE)，几乎95%以上的项目都用到了 SVN。Subversion 项目的初衷是为了替换当年开源社区最为流行的版本控制软件 CVS，在 CVS的功能的基础上有很多的提升同时也能较好的解决 CVS 系统的一些不足。

 

### 2.4 **svn的使用方法**

svn是基于客户/服务器模式：

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记538.png) 

 

n 复制-修改-合并方案(Subversion默认的模式)

在这种模型里，每一个客户读取项目配置库建立一个私有工作副本——版本库中文件和目录的本地映射。用户并行工作，修改各自的工作副本，最终，各个私有的复制合并在一起，成为最终的版本，这种系统通常可以辅助合并操作，但是最终要靠人工去确定正误。

n 锁定-修改-解锁方案

在这样的模型里，在一个时间段里配置库的一个文件只允许被一个人修改。 此模式不适合软件开发这种工作。

 

### 2.5 **svn服务器的工作方式**

 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记761.png) 

 

独立服务器方式：

​	svnserve 

借助Apache方式：

​	mod_dav_svn 

 

SVN版本数据存储方式

BDB （Berkeley DB）

​	数据库方式

FSFS

​	文件方式 （推荐）

 

## 3 **svn服务端安装配置**

### 3.1 **两种服务端安装包**

#### 3.1.1 **官方安装包**

官方网站：http://subversion.apache.org/

下载：http://subversion.apache.org/download.cgi

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记973.png) 

官方提供的服务端安装包，安装后需要通过命令行操作，适用于专业配置管理员使用。

 

#### 3.1.2 **图形化服务端**

志愿者开发的图形化操作界面的svn服务端，它适用于普通软件开发人员使用。

 

下载地址：https://www.visualsvn.com/downloads/

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记1102.png) 

 

### 3.2 **安装图形化服务端**

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记1114.png) 

 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记1117.png) 

 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记1120.png) 

查看程序菜单：

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记1130.png) 

查看服务，VisualSVN成功启动：

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记1152.png) 

 

 

### 3.3 **创建仓库**

svn服务端创建完成需要创建仓库，仓库中存放要版本控制的文件。

 

通过开始菜单进入VisualSVN server manager：

 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记1229.png) 

 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记1232.png) 

 

 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记1236.png) 

 

选择文件存储方式：

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记1249.png) 

 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记1252.png) 

 

 

创建一个空的仓库：

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记1266.png) 

 

设置用户访问仓库权限：

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记1281.png) 

 

仓库创建成功：

仓库地址为https://ip地址或计算机名/svn/仓库名称

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记1324.png) 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记1326.png) 

 

### 3.4 **创建工程目录**

仓库中存放开发项目代码、文档等，需要创建一个工程目录。

 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记1365.png) 

 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记1368.png) 

 

创建成功：

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记1377.png) 

 

trunk：项目开发代码的主体，是从项目开始直到当前都处于活动的状态，从这里可以获得项目最新的源代码以及几乎所有的变更历史信息。

 

branch：从trunk的某个点分离出来的代码拷贝，通常可以在不影响主干的前提下在这里进行重大bug的修改，或者做实验性的开发，以及定制功能开发等。如果分支达到了预期的目的，通常可以被合并（Mgerge）到主干中。

 

tag：用来表示trunk和branch的某个点的状态，以代表项目的某个稳定状态，通常为最终发布状态。

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记1608.png) 

 

工程目录创建完成，查看它的svn地址：

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记1643.png) 

 

拷贝svn地址：

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记1994.png) 

 

 

## 4 **TortoiseSVN****客户端**

### 4.1 **svn客户端类型**

svn客户端需要通过网络访问svn服务端提交文件、查询文件等，可通过以下客户端类型访问svn服务端：

1、使用Subversion提供的客户端命令

使用方式：在命令行下输入命令操作。

2、使用Torotise图形化界面操作（推荐）

3、使用Eclipse等开发工具插件操作（推荐）

 

 

### 4.2 **下载安装**

​	TortoiseSVN是Subversion版本控制系统的一个免费开源客户端，不需要为使用它而付费。

​	TortoiseSVN是 Subversion 的 Windows 扩展。它使你避免接触 Subversion 枯燥而且不方便的 Command Line。它完全嵌入 Windows Explorer，使用时只需在正常的窗口里右键操作就可以了

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2091.png) 

下载：http://tortoisesvn.net/downloads.html	提供 32位和64位不同版本，安装tortoiseSVN 需要修改客户端电脑右键菜单，安装后需要重启电脑。

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2126.png) 

 

### 4.3 **浏览仓库**

使用Tortoise浏览svn服务端的仓库的内容：

 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2129.png) 

 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2132.png) 

 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2341.png) 

 

## 5 **权限管理(了解)**

### 5.1 **认证授权机制**

​	在企业开发中会为每位程序员、测试人员等相关人员分配一个账号，用户通过使用svn客户端连接svn服务时需要输入账号和密码，svn服务对账号和密码进行校验，输入正确可以继续访问，当用户访问仓库下某个目录时，svn服务对用户进行授权，如果用户拥有该目录的访问权限方可访问。

​	判断账号和密码输入是否正确的过程即认证过程。

​	判断用户是否拥有目录的读/写权限时即授权过程。

 

### 5.2 **创建用户**

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记1643.png) 

 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2356.png) 

查看已创建的用户：

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2364.png) 

修改用户：

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2373.png) 

 

 

### 5.3 **创建组**

 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2375.png) 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2386.png) 

 

查看创建的组：

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2394.png) 

 

修改组：

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2444.png) 

 

### 5.4 **分配仅限**

给仓库下的每个目录分配权限对访问进行控制。

#### 5.4.1 **删除默认权限**

删除系统安装后默认权限：

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2447.png) 

 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2475.png) 

 

#### 5.4.2 **示例一：开发人员拥有读写权限**

进入权限分配界面：

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2486.png) 

 

添加组或用户：

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2518.png) 

 

分配权限：

继承父目录权限、不可访问、读权限、读/写权限

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2531.png) 

 

 

访问时输入账号：

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2548.png) 

 

登陆测试是否有读/写权限：

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2565.png) 

 

#### 5.4.3 **示例二：测试人员拥有读权限**

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2582.png) 

 

登陆测试是否有读/写权限：

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2655.png) 

 

 

#### 5.4.4 **清除认证缓存**

有几种情况需要清除认证缓存：

1、本地使用多个账号登陆，每次输入的账号和密码都不一样

2、当账号密码修改后（建议清理）

 

 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2658.png) 

 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2709.png) 

 

## 6 **TortoiseSVN日常使用**

### 6.1 **浏览仓库**

Repo-browser ： 浏览仓库中资源信息 

​	![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2804.png)

 

### 6.2 **导入导出**

n Export ：导出项目 ，和checkout区别 （checkout检出后文件，含有.svn隐藏文件夹， 会和SVN仓库交互， export导出，没有.svn隐藏文件夹）

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2829.png) 

n import 将本地资源导入到svn 服务器

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2841.png) 

 

 

 

​	

### 6.3 **修改提交**

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2883.png) 

 

#### 6.3.1 **Checkout** 

检出项目，复制项目的副本到本地。

在要检出的目录中右键：

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2886.png) 

 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2906.png) 

 

#### 6.3.2 **add**

在检出的目录中添加文件：

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2911.png) 

图标：![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2967.png) 这是一个新文件 

 

n Add to ignore list ：添加到忽略列表 （标记该文件不需要版本控制 ）

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记2991.png) 

n Add ： 标记这个文件添加到服务器 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记3037.png) 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记3081.png) 已经标记要添加到版本库 

 

#### 6.3.3 **C****ommit**

当检出目录或子目录中内容有修改，目录图标变为：![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps61.jpg)

提交Commit 提交本地修改至svn服务器：

在检出目录或要提交修改的目录右键：

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记3085.png) 

 

 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记3089.png) 

 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记3117.png) 

 

提交后目录中的内容与svn服务同步，目录图标变为：![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记3157.png)

 

#### 6.3.4 **update**

 

更新仓库的文件到本地

 

在检出目录或子目标或文件上右键：

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记3167.png) 

##### 6.3.4.1 **更新到最新版本**

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记3178.png) 

 

##### 6.3.4.2 **更新到指定版本**

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记3181.png) 

 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记3206.png) 

#### 6.3.5 **D****elete**

Delete ：删除版本库文件

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记3286.png) 标记删除后，本地文件删除，标记删除后需要提交。

 

#### 6.3.6 **恢复**

在检出目录或子目录操作会记录操作日志，提交前可以回滚操作。

 

在要回滚的检出目录或子目录中右键：

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记3289.png) 

 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记3374.png) 

 

### 6.4 **冲突处理**

两个客户端同时修改同一个文件， 改动同一个位置，发生冲突情况 

​	如果当commit 遇到文件已经过时，说明另一个人可能改动过 ----- update

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记3507.png) 

​	db.properties 将本地和服务器合并到一起的文件 （不要直接看）

​	db.properties.mine 我本地自己修改后的文件 

​	db.properties.r16 我修改之前的文件 

​	db.properties.r17 别人修改后的文件

 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记3551.png) 

手动Merge 后，需要将编辑后冲突文件，标记为已经解决 ， 再进行commit 

![img](https://raw.githubusercontent.com/gangking/myBlog/master/docs/static/img/svn/svn-笔记3825.png) 

 