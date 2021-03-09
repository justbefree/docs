# vue2-pro-cli

::: warning 注意
如果你还不懂如何用基于class的形式写组件，建议你先看一下 [Vue Class Component](./vue-class-component.md)

如果你还不熟悉TypeScript我建议你需要先看一下[TS文档](https://www.typescriptlang.org/docs/handbook/intro.html)
:::

# Intro

快速生成基于vue2 + TypeScript + vuex + vue-router 的前端项目

# Description

你是否幻想过前端如何像后台类似Java一样优雅的实现<Badge text="继承😊"/>  ？

你是否幻想过写Vue如何像写<Badge text="TypeScript" />一样不用在写<Badge text="HTML template😡" type="error"/>但又避免react那种恶心的<Badge text="jsx😡" type="error"/>语法？

你是否幻想过前端如何设计<Badge text="插件机制😊"/>，把一个个独立的应用安装在平台上面组成一个大的应用，并且又保持每个小插件相互独立【插件==应用】？

你是否幻想过前端如何优雅的实现<Badge text="二开机制😊"/>而不需要每次把主线合到分叉分支后一大堆<Badge text="报错😭" type="error"/>？

~~你是否幻想过前端再也不用被后台<Badge text="鄙视👎" type="error"/>被称为写页面的了？~~

你是否幻想过同一个前端大项目如何更好<Badge text="多人协同😊"/>而不冲突？
# Installation

```js
npm install vue2-pro-cli -g
```
# Usage

#### Commands

list|l          查看所有的模版
```js
vue2 list
```

init| -i          生成一个新项目
```js
vue2 init
```



help| -h          帮助查看命令
```js
vue2 -h


Strongs-MacBook-Pro:~ stronglee$ vue2 --help
Usage: vue2 <command> [options]

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  list|l          View all avaliable templates
  docs|d          View docs online
  wechat|w        Wechat QR code ^_^
  init|i          Create a new project using template!
  help [command]  display help for command

```