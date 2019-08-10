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

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps2.jpg) 

 

n 复制-修改-合并方案(Subversion默认的模式)

在这种模型里，每一个客户读取项目配置库建立一个私有工作副本——版本库中文件和目录的本地映射。用户并行工作，修改各自的工作副本，最终，各个私有的复制合并在一起，成为最终的版本，这种系统通常可以辅助合并操作，但是最终要靠人工去确定正误。

n 锁定-修改-解锁方案

在这样的模型里，在一个时间段里配置库的一个文件只允许被一个人修改。 此模式不适合软件开发这种工作。

 

### 2.5 **svn服务器的工作方式**

 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps3.jpg) 

 

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

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps4.jpg) 

官方提供的服务端安装包，安装后需要通过命令行操作，适用于专业配置管理员使用。

 

#### 3.1.2 **图形化服务端**

志愿者开发的图形化操作界面的svn服务端，它适用于普通软件开发人员使用。

 

下载地址：https://www.visualsvn.com/downloads/

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps5.jpg) 

 

### 3.2 **安装图形化服务端**

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps6.jpg) 

 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps7.jpg) 

 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps8.jpg) 

查看程序菜单：

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps9.jpg) 

查看服务，VisualSVN成功启动：

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps10.jpg) 

 

 

### 3.3 **创建仓库**

svn服务端创建完成需要创建仓库，仓库中存放要版本控制的文件。

 

通过开始菜单进入VisualSVN server manager：

 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps11.jpg) 

 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps12.jpg) 

 

 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps13.jpg) 

 

选择文件存储方式：

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps14.jpg) 

 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps15.jpg) 

 

 

创建一个空的仓库：

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps16.jpg) 

 

设置用户访问仓库权限：

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps17.jpg) 

 

仓库创建成功：

仓库地址为https://ip地址或计算机名/svn/仓库名称

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps18.jpg) 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps19.jpg) 

 

### 3.4 **创建工程目录**

仓库中存放开发项目代码、文档等，需要创建一个工程目录。

 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps20.jpg) 

 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps21.jpg) 

 

创建成功：

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps22.jpg) 

 

trunk：项目开发代码的主体，是从项目开始直到当前都处于活动的状态，从这里可以获得项目最新的源代码以及几乎所有的变更历史信息。

 

branch：从trunk的某个点分离出来的代码拷贝，通常可以在不影响主干的前提下在这里进行重大bug的修改，或者做实验性的开发，以及定制功能开发等。如果分支达到了预期的目的，通常可以被合并（Mgerge）到主干中。

 

tag：用来表示trunk和branch的某个点的状态，以代表项目的某个稳定状态，通常为最终发布状态。

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps23.jpg) 

 

工程目录创建完成，查看它的svn地址：

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps24.jpg) 

 

拷贝svn地址：

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps25.jpg) 

 

 

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

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps26.jpg) 

下载：http://tortoisesvn.net/downloads.html	提供 32位和64位不同版本，安装tortoiseSVN 需要修改客户端电脑右键菜单，安装后需要重启电脑。

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps27.jpg) 

 

### 4.3 **浏览仓库**

使用Tortoise浏览svn服务端的仓库的内容：

 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps28.jpg) 

 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps29.jpg) 

 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps30.jpg) 

 

## 5 **权限管理(了解)**

### 5.1 **认证授权机制**

​	在企业开发中会为每位程序员、测试人员等相关人员分配一个账号，用户通过使用svn客户端连接svn服务时需要输入账号和密码，svn服务对账号和密码进行校验，输入正确可以继续访问，当用户访问仓库下某个目录时，svn服务对用户进行授权，如果用户拥有该目录的访问权限方可访问。

​	判断账号和密码输入是否正确的过程即认证过程。

​	判断用户是否拥有目录的读/写权限时即授权过程。

 

### 5.2 **创建用户**

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps31.jpg) 

 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps32.jpg) 

查看已创建的用户：

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps33.jpg) 

修改用户：

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps34.jpg) 

 

 

### 5.3 **创建组**

 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps35.jpg) 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps36.jpg) 

 

查看创建的组：

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps37.jpg) 

 

修改组：

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps38.jpg) 

 

### 5.4 **分配仅限**

给仓库下的每个目录分配权限对访问进行控制。

#### 5.4.1 **删除默认权限**

删除系统安装后默认权限：

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps39.jpg) 

 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps40.jpg) 

 

#### 5.4.2 **示例一：开发人员拥有读写权限**

进入权限分配界面：

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps41.jpg) 

 

添加组或用户：

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps42.jpg) 

 

分配权限：

继承父目录权限、不可访问、读权限、读/写权限

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps43.jpg) 

 

 

访问时输入账号：

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps44.jpg) 

 

登陆测试是否有读/写权限：

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps45.jpg) 

 

#### 5.4.3 **示例二：测试人员拥有读权限**

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps46.jpg) 

 

登陆测试是否有读/写权限：

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps47.jpg) 

 

 

#### 5.4.4 **清除认证缓存**

有几种情况需要清除认证缓存：

1、本地使用多个账号登陆，每次输入的账号和密码都不一样

2、当账号密码修改后（建议清理）

 

 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps48.jpg) 

 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps49.jpg) 

 

## 6 **TortoiseSVN日常使用**

### 6.1 **浏览仓库**

Repo-browser ： 浏览仓库中资源信息 

​	![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps50.jpg)

 

### 6.2 **导入导出**

n Export ：导出项目 ，和checkout区别 （checkout检出后文件，含有.svn隐藏文件夹， 会和SVN仓库交互， export导出，没有.svn隐藏文件夹）

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps51.jpg) 

n import 将本地资源导入到svn 服务器

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps52.jpg) 

 

 

 

​	

### 6.3 **修改提交**

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps53.jpg) 

 

#### 6.3.1 **Checkout** 

检出项目，复制项目的副本到本地。

在要检出的目录中右键：

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps54.jpg) 

 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps55.jpg) 

 

#### 6.3.2 **add**

在检出的目录中添加文件：

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps56.jpg) 

图标：![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps57.jpg) 这是一个新文件 

 

n Add to ignore list ：添加到忽略列表 （标记该文件不需要版本控制 ）

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps58.jpg) 

n Add ： 标记这个文件添加到服务器 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps59.jpg) 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps60.jpg) 已经标记要添加到版本库 

 

#### 6.3.3 **C****ommit**

当检出目录或子目录中内容有修改，目录图标变为：![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps61.jpg)

提交Commit 提交本地修改至svn服务器：

在检出目录或要提交修改的目录右键：

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps62.jpg) 

 

 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps63.jpg) 

 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps64.jpg) 

 

提交后目录中的内容与svn服务同步，目录图标变为：![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps65.jpg)

 

#### 6.3.4 **update**

 

更新仓库的文件到本地

 

在检出目录或子目标或文件上右键：

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps66.jpg) 

##### 6.3.4.1 **更新到最新版本**

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps67.jpg) 

 

##### 6.3.4.2 **更新到指定版本**

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps68.jpg) 

 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps69.jpg) 

#### 6.3.5 **D****elete**

Delete ：删除版本库文件

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps70.jpg) 标记删除后，本地文件删除，标记删除后需要提交。

 

#### 6.3.6 **恢复**

在检出目录或子目录操作会记录操作日志，提交前可以回滚操作。

 

在要回滚的检出目录或子目录中右键：

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps71.jpg) 

 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps72.jpg) 

 

### 6.4 **冲突处理**

两个客户端同时修改同一个文件， 改动同一个位置，发生冲突情况 

​	如果当commit 遇到文件已经过时，说明另一个人可能改动过 ----- update

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps73.jpg) 

​	db.properties 将本地和服务器合并到一起的文件 （不要直接看）

​	db.properties.mine 我本地自己修改后的文件 

​	db.properties.r16 我修改之前的文件 

​	db.properties.r17 别人修改后的文件

 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps74.jpg) 

手动Merge 后，需要将编辑后冲突文件，标记为已经解决 ， 再进行commit 

![img](file:///C:\Users\ADMINI~1\AppData\Local\Temp\ksohtml10152\wps75.jpg) 

 