# Git

版本管理工具，

## 常用命令

1、代码提交
git add .
git commit -m "add createcomponent"



2、再切换回开发分支
git checkout dev



3、分支合并
```
git merge 分支名 --no-ff
```
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



## 取消暂存

1、git checkout — //未git add的文件

2、git reset HEAD //已经git add的文件，可以用这个取消add，然后用上一条命令恢复

3、git reset –hard HEAD //把全部更改的文件都恢复（小心使用，不然辛辛苦苦写的全没了）

------

> git reset HEAD 可以全部恢复未提交状态

 

 

##  退出git log

```
英文状态 按Q
```

## 合并步骤

```
1、把代码clone到本地仓库
      git clone https://gitee.com/zhanghan_123/gittest.git
2、在本地创建dev分支并与远程dev分支对应
      git checkout -b dev origin/dev
3、切换到master分支
      git checkout master
4、本地的dev合并到master上（如果遇到冲突解决完后再次提交即可）
      git merge dev
5、推送到远程的master上
      git push origin master  
```



## 查看远程分支

```
git branch -a
1
```

带有“*”号的表示当前分支

##  查看本地分支

```
git branch
1
```

## 添加新分支

```
git checkout -b 新分支名
```

## [git commit之后，想撤销commit](https://www.cnblogs.com/lfxiao/p/9378763.html)

```
写完代码后，我们一般这样
git add . //添加所有文件
git commit -m "本功能全部完成"

执行完commit后，想撤回commit，怎么办？
 
这样凉拌：
git reset --soft HEAD^

这样就成功的撤销了你的commit
注意，仅仅是撤回commit操作，您写的代码仍然保留。
```

### 说一下个人理解：

HEAD^的意思是上一个版本，也可以写成HEAD~1

如果你进行了2次commit，想都撤回，可以使用HEAD~2

 

### 至于这几个参数：

#### --mixed 

意思是：不删除工作空间改动代码，撤销commit，并且撤销git add . 操作

这个为默认参数,git reset --mixed HEAD^ 和 git reset HEAD^ 效果是一样的。

 

#### --soft  

不删除工作空间改动代码，撤销commit，不撤销git add . 

 

### --hard

删除工作空间改动代码，撤销commit，撤销git add . 

注意完成这个操作后，就恢复到了上一次的commit状态。

 

 

#### 顺便说一下，如果commit注释写错了，只是想改一下注释，只需要：

git commit --amend

此时会进入默认vim编辑器，修改注释完毕后保存就好了。

# SVN

[使用方法](https://jingyan.baidu.com/article/6c67b1d6f524d52787bb1ef3.html)

[TortoiseSVN安装和使用](https://www.cnblogs.com/lijingbo/p/9116717.html)

