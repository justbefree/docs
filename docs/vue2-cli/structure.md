# 目录结构

vue2 + ts 遵循 **“约定优于配置”** 的原则，推荐的目录结构如下：
这里只展示主要的目录

::: tip vue2 + ts
    .
    ├── src
    │   ├── applications _(**必选**)_
    │   │   ├── applicationName _(**应用名称**)_
    │   │   │   ├── component _(**组件名**)_
    │   │   │   │   └── index.ts  _(**组件对外暴露文件，必须有**)_
    │   │   │   │   └── componentName.vue  _(**组件**)_
    │   │   │   │   └── locale  _(**多语言**)_
    │   │   │   │   │   └── zh-CN.lang.ts  _(**中文**)_
    │   │   │   │   │   └── en.lang.ts  _(**英文**)_
    │   │   │   │   └── sass  _(**样式**)_
    │   │   │   │   │   └── style.scss  _(**样式文件**)_
    │   │   │   └── layout _(**页面级组件，必须有**)_
    │   │   │   │   └── layoutComponent _(**页面级组件，必须有**)_
    │   │   │   │   │   └── index.ts _(**页面级组件对外暴露文件，必须有**)_
    │   │   │   │   │   └── layoutComponentName.vue _(**页面级组件，必须有**)_
    │   │   │   │   │   └── locale  _(**多语言**)_
    │   │   │   │   │   │   └── zh-CN.lang.ts  _(**中文**)_
    │   │   │   │   │   │   └── en.lang.ts  _(*英文**)_
    │   │   │   │   │   └── sass  _(**样式**)_
    │   │   │   │   │   │   └── style.scss  _(**样式文件**)_
    │   │   │   ├── `store` _(**可选的**)_
    │   │   │   ├── routes.ts _(**路由定义文件**)_
    │   │   │   ├── index.ts _(**应用对外暴露的文件，必须有，不然可能会导致应用无法安装**)_
    │   ├── styles _(**全局的公共样式**)_
    │   │       └──style.scss
    │   ├── overwrite
    │   │   ├──index.ts (必须保留)
    │   │ 
    │   ├── core _(**核心文件，不可修改**)_
    │   │   ├──Application
    │   │   ├──I18n
    │   │   ├──Platform
    │   │   ├──StoreManager
    │   │   ├──RouterManager
    │   │   ├──Super
    │   │   ├──types
    │   │   ├──utils
    │   │   
    │   └── config _(**配置**)_
    │       └── index.ts _(**可选的**)_
    │ 
    └── package.json
:::

::: warning 注意
组件文件夹命名一定要全小写，“-”连接，组件文件名因该以组件名为名称采用驼峰命名法首字母小写；具体组件里面类名称要采用驼峰命名首字母大写【切记！切记！切记！】
:::

- `src/applications`: 用于存放所有应用，每个应用应该有一个独立的文件夹，放到此（applications)目录下。
- `src/applications/applicationName`: 应用目录名称，applicationName即是应用名。
- `src/applications/applicationName/component/locale`: 用来存放每个组件的多语言文件（不是必须，如果有国际化需求就必须按照这种结构写），注意多语言的文件命名规范是`${language}.lang.ts`，其中`language`是变量，具体指的是语言简写，例如zh-CN代表简体中文，en代表英文等。
- `src/applications/applicationName/store`: 存放vuex文件，但是要注意此文件是经过高度封装后的，具体如何写可参考，[vuex相关](./store.md)
- `src/applications/applicationName/routes.ts`: 定义应用内路由。具体如何开发请参考，[如何定义路由文件](./router.md)
- `src/applications/applicationName/index.ts`: 应用对外暴露的文件，具体如何开发请参考，[如何定义对外应用对外暴露文件?](./export-application.md) 
- `src/applications/applicationName/component/locale/zh-CN.lang.ts`: 多语言文件，注意命名规范，第一个“.”之前代表实际对应的语言名称，两个“.”之间的部分，也即lang必须有，这个是标识，因为语言是自动加载的所以命名必须按照这种格式，不然会导致语言无法引入。
- `src/styles/style.scss`: 全局公共样式，以及一些变量主题色颜色，字号大小变量等。(此文件内不适合具体某个组件样式)
- `src/core`: 核心文件，开发无需要关注【不可修改】。
- `src/config/index.ts`: 配置文件【不是必须】。
- `src/config/index.ts`: 配置文件【不是必须】。
- `src/overwrite`: 这个文件夹主要是为二开以及继承使用，目录结构基本和applications保持一致，不过有细微的差别可以查看后续文档。

::: warning 注意
开发过程中一定要按照我们约定的文件目录结构。
:::

