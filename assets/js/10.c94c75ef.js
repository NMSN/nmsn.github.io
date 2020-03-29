(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{413:function(t,s,n){t.exports=n.p+"assets/img/git.c51ea938.png"},414:function(t,s,n){t.exports=n.p+"assets/img/git2.ada1b8b2.png"},415:function(t,s,n){t.exports=n.p+"assets/img/gitflow.1c7311e7.png"},458:function(t,s,n){"use strict";n.r(s);var a=n(53),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git相关介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git相关介绍"}},[t._v("#")]),t._v(" Git相关介绍")]),t._v(" "),a("h2",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),a("p",[t._v("Git(读音为/gɪt/。)是一个开源的分布式版本控制系统，可以有效、高速的处理从很小到非常大的项目版本管理。Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。")]),t._v(" "),a("h3",{attrs:{id:"优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优势"}},[t._v("#")]),t._v(" 优势")]),t._v(" "),a("p",[t._v("① 本地是版本库的完整镜像，因此支持离线工作")]),t._v(" "),a("p",[t._v("② 绝大多数操作都只需要访问本地文件和资源，而且与每个提交都是所有文件的完整副本，因此速度非常快")]),t._v(" "),a("h2",{attrs:{id:"git流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git流程"}},[t._v("#")]),t._v(" git流程")]),t._v(" "),a("p",[a("img",{attrs:{src:n(413),alt:"git流程",title:"git流程"}})]),t._v(" "),a("p",[a("strong",[t._v("Workspace")]),t._v(": 工作区")]),t._v(" "),a("p",[a("strong",[t._v("Index / Stage")]),t._v(": 暂存区")]),t._v(" "),a("p",[a("strong",[t._v("Repository")]),t._v(": 仓库区（或本地仓库）")]),t._v(" "),a("p",[a("strong",[t._v("Remote")]),t._v(": 远程仓库")]),t._v(" "),a("p",[t._v("文件三种状态(modified, staged, committed)")]),t._v(" "),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),a("p",[a("img",{attrs:{src:n(414),alt:"git命令导图",title:"git命令导图"}})]),t._v(" "),a("h3",{attrs:{id:"新建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建"}},[t._v("#")]),t._v(" 新建")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在当前目录新建一个 Git 代码库")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个目录，将其初始化为 Git 代码库")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("project-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载一个项目和它的整个代码历史")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("Git 的设置文件为.gitconfig，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示当前的 Git 配置")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --list\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 编辑 Git 配置文件")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config -e "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置提交代码时的用户信息")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[name]"')]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[email address]"')]),t._v("\n")])])]),a("h3",{attrs:{id:"增加删除文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增加删除文件"}},[t._v("#")]),t._v(" 增加删除文件")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加指定文件到暂存区")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加指定目录到暂存区，包括子目录")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加当前目录的所有文件到暂存区")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除工作区文件，并且将这次删除放入暂存区")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 停止追踪指定文件，但该文件会保留在工作区")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" --cached "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 改名文件，并且将这个改名放入暂存区")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file-original"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file-renamed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"代码提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码提交"}},[t._v("#")]),t._v(" 代码提交")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交暂存区到仓库区")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交暂存区的指定文件到仓库区")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". -m "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交工作区自上次 commit 之后的变化，直接到仓库区")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -a\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交时显示所有 diff 信息")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -v\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用一次新的 commit，替代上一次提交")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果代码没有任何新变化，则用来改写上一次 commit 的提交信息")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend -m "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重做上一次 commit，并包括指定文件的新变化")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),a("h3",{attrs:{id:"分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[t._v("#")]),t._v(" 分支")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有本地分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有远程分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -r\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有本地分支和远程分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -a\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个分支，但依然停留在当前分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个分支，并切换到该分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个分支，指向指定 commit")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个分支，与指定的远程分支建立追踪关系")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch --track "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote-branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到指定分支，并更新工作区")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 建立追踪关系，在现有分支与指定的远程分支之间")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch --set-upstream "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote-branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并指定分支到当前分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选择一个 commit，合并进当前分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" cherry-pick "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远程分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --delete\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -dr\n")])])]),a("h3",{attrs:{id:"标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标签"}},[t._v("#")]),t._v(" 标签")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有 tag")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个 tag 在当前 commit")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个 tag 在指定 commit")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看 tag 信息")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交指定 tag")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交所有 tag")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --tags\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个分支，指向某个 tag")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"查看信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看信息"}},[t._v("#")]),t._v(" 查看信息")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示有变更的文件")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示当前分支的版本历史")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示 commit 历史，以及每次 commit 发生变更的文件")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --stat\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示某个文件的版本历史，包括文件改名")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --follow "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" whatchanged "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示指定文件相关的每一次 diff")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -p "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示指定文件是什么人在什么时间修改过")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" blame "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示暂存区和工作区的差异")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示暂存区和上一个 commit 的差异")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --cached "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示工作区与当前分支最新 commit 之间的差异")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" HEAD\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示两次提交之间的差异")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("first-branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("second-branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示某次提交的元数据和内容变化")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示某次提交发生变化的文件")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show --name-only "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示某次提交时，某个文件的内容")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示所有分支的所有操作记录（包括commit和reset的操作），包括已经被删除的commit记录（可用于回复删除的数据）")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog\n")])])]),a("h3",{attrs:{id:"远程同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程同步"}},[t._v("#")]),t._v(" 远程同步")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载远程仓库的所有变动")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示所有远程仓库")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示某个远程仓库的信息")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote show "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 增加一个新的远程仓库，并命名")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("shortname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 取回远程仓库的变化，并与本地分支合并")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 上传本地指定分支到远程仓库")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 强行推送当前分支到远程仓库，即使有冲突")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --force\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送所有分支到远程仓库")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --all\n")])])]),a("h3",{attrs:{id:"撤销"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤销"}},[t._v("#")]),t._v(" 撤销")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 恢复暂存区的指定文件到工作区")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 恢复某个 commit 的指定文件到工作区")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 恢复上一个 commit 的所有文件到工作区")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不变")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重置暂存区与工作区，与上一次 commit 保持一致")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重置当前分支的指针为指定 commit，同时重置暂存区，但工作区不变")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重置当前分支的 HEAD 为指定 commit，同时重置暂存区和工作区，与指定 commit 一致")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重置当前 HEAD 为指定 commit，但保持暂存区和工作区不变")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --keep "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个 commit，用来撤销指定 commit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 后者的所有变化都将被前者抵消，并且应用到当前分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" revert "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"变基"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变基"}},[t._v("#")]),t._v(" 变基*")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("不同分支间用于合并分支，将本分支的commits顶到最顶端(没有合并的痕迹，合并后的分支看起来像是只在一个分支上开发的)")])]),t._v(" "),a("li",[a("p",[t._v("单独分支使用可以调整分支上的commits(合并/删除/修改commits信息等功能)")])])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将某个分支变基到当前分支的最顶端(最新)")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解决冲突后，继续rebase")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase --continue\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 终止rebase")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase --abort\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将指定区间的提交复制到某个分支上")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase -i "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("startpoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("endpoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --onto  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branchName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n$ 对HEAD后面的n条commits做变基处理\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git rebase -i HEAD~n")]),t._v("\n")])])]),a("p",[t._v("其中-i的意思是--interactive，即弹出交互式的界面让用户编辑完成合并操作")]),t._v(" "),a("p",[t._v("[startpoint]  [endpoint]则指定了一个编辑区间，如果不指定[endpoint]，则该区间的终点默认是当前分支HEAD所指向的commit(注：该区间指定的是一个前开后闭的区间)")]),t._v(" "),a("p",[t._v("--onto的意思是要将该指定的提交复制到哪个分支上")]),t._v(" "),a("h3",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成一个可供发布的压缩包")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" archive\n")])])]),a("p",[t._v("参考:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://xitu.github.io/2016/04/06/git-start/",target:"_blank",rel:"noopener noreferrer"}},[t._v("稀土技术团队博客: http://xitu.github.io/2016/04/06/git-start"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/4a8f4af4e803",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git rebase 用法小结: https://www.jianshu.com/p/4a8f4af4e803"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"gitflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitflow"}},[t._v("#")]),t._v(" gitflow")]),t._v(" "),a("p",[a("img",{attrs:{src:n(415),alt:"gitflow",title:"gitflow"}})]),t._v(" "),a("p",[a("strong",[t._v("master")]),t._v(": 线上稳定版本分支(tag标记版本)")]),t._v(" "),a("p",[a("strong",[t._v("hotfix")]),t._v(": 快速修复bug的分支(修改后合并到master和develop分支中)")]),t._v(" "),a("p",[a("strong",[t._v("release")]),t._v(": 预发布分支(develop开发完成后在release进行上线预演)")]),t._v(" "),a("p",[a("strong",[t._v("develop")]),t._v(": 开发分支(开发主干分支，从该分支拉去新的feature分支进行新功能开发)")]),t._v(" "),a("p",[a("strong",[t._v("feature")]),t._v(": 功能分支(单独的功能开发分支)")]),t._v(" "),a("p",[t._v("待续...")])])}),[],!1,null,null,null);s.default=e.exports}}]);