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

# From 0 to 1
根据上述对前端架构的一些诉求，如果要在Vue里面实现继承，就需要用typescript，当然ES6的类也可以，但是看起来并没有TS优雅。而要摒弃Vue的template语法其实也很简单，就需要使用Vue的createElement方法，也即render(h: createElement) {...}，这个要求对开发人员会高一点，因为这样写起来比较不直观，没有写HTML那样结构化语义化的简单。但是事情总有好的一面，直接写render不是更高级感觉更cool吗？再说插件机制，插件机制我们并不陌生，有些电脑软件时不时地更新个补丁或者有些软件如果需要额外的功能，都可以通过安装插件完成，要保证这一点就需要保证每个组件或者说插件需要有独立的目录，功能独立，目录独立，我觉得这个是必要条件~~目前我没发现目录不独立的插件如何实现~~。既然每个插件都是独立的目录了，那也就意味着把这个问题转化为，如何更优雅的加载这一个个独立的小插件，这个问题是核心，值得好好想想。实际上前端的继承可以理解为一种伪继承，因为它并不像后台语言设计那样专门为继承而生。【此刻脑子里幻想一下HTML页面如何继承...？】。所以这种前端的伪继承实际上就是一种后面的资源覆盖前面的资源，子组件覆盖父组件，后面的路由覆盖前面的路由，子页面覆盖父页面等等。具体实现上也就是有两个目录，一个是原应用的目录(applications)，一个是覆盖原应用的目录(overwrite)，核心开发负责applications里面的应用，有二开的伙伴负责overwrite里面的应用。overwrite里面的应用可以覆盖applications里面的应用。

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