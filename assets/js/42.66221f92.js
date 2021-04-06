(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{444:function(t,n,s){"use strict";s.r(n);var a=s(43),_=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),s("p",[t._v("vue2 + ts 遵循 "),s("strong",[t._v("“约定优于配置”")]),t._v(" 的原则，推荐的目录结构如下：\n这里只展示主要的目录")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("vue2 + ts")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v(".\n├── src\n│   ├── applications _(**必选**)_\n│   │   ├── applicationName _(**应用名称**)_\n│   │   │   ├── component _(**组件名**)_\n│   │   │   │   └── index.ts  _(**组件对外暴露文件，必须有**)_\n│   │   │   │   └── componentName.vue  _(**组件**)_\n│   │   │   │   └── locale  _(**多语言**)_\n│   │   │   │   │   └── zh-CN.lang.ts  _(**中文**)_\n│   │   │   │   │   └── en.lang.ts  _(**英文**)_\n│   │   │   │   └── sass  _(**样式**)_\n│   │   │   │   │   └── style.scss  _(**样式文件**)_\n│   │   │   └── layout _(**页面级组件，必须有**)_\n│   │   │   │   └── layoutComponent _(**页面级组件，必须有**)_\n│   │   │   │   │   └── index.ts _(**页面级组件对外暴露文件，必须有**)_\n│   │   │   │   │   └── layoutComponentName.vue _(**页面级组件，必须有**)_\n│   │   │   │   │   └── locale  _(**多语言**)_\n│   │   │   │   │   │   └── zh-CN.lang.ts  _(**中文**)_\n│   │   │   │   │   │   └── en.lang.ts  _(*英文**)_\n│   │   │   │   │   └── sass  _(**样式**)_\n│   │   │   │   │   │   └── style.scss  _(**样式文件**)_\n│   │   │   ├── `store` _(**可选的**)_\n│   │   │   ├── routes.ts _(**路由定义文件**)_\n│   │   │   ├── index.ts _(**应用对外暴露的文件，必须有，不然可能会导致应用无法安装**)_\n│   ├── styles _(**全局的公共样式**)_\n│   │       └──style.scss\n│   ├── overwrite\n│   │   ├──index.ts (必须保留)\n│   │ \n│   ├── core _(**核心文件，不可修改**)_\n│   │   ├──Application\n│   │   ├──I18n\n│   │   ├──Platform\n│   │   ├──StoreManager\n│   │   ├──RouterManager\n│   │   ├──Super\n│   │   ├──types\n│   │   ├──utils\n│   │   \n│   └── config _(**配置**)_\n│       └── index.ts _(**可选的**)_\n│ \n└── package.json\n")])])])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("组件文件夹命名一定要全小写，“-”连接，组件文件名因该以组件名为名称采用驼峰命名法首字母小写；具体组件里面类名称要采用驼峰命名首字母大写【切记！切记！切记！】")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("src/applications")]),t._v(": 用于存放所有应用，每个应用应该有一个独立的文件夹，放到此（applications)目录下。")]),t._v(" "),s("li",[s("code",[t._v("src/applications/applicationName")]),t._v(": 应用目录名称，applicationName即是应用名。")]),t._v(" "),s("li",[s("code",[t._v("src/applications/applicationName/component/locale")]),t._v(": 用来存放每个组件的多语言文件（不是必须，如果有国际化需求就必须按照这种结构写），注意多语言的文件命名规范是"),s("code",[t._v("${language}.lang.ts")]),t._v("，其中"),s("code",[t._v("language")]),t._v("是变量，具体指的是语言简写，例如zh-CN代表简体中文，en代表英文等。")]),t._v(" "),s("li",[s("code",[t._v("src/applications/applicationName/store")]),t._v(": 存放vuex文件，但是要注意此文件是经过高度封装后的，具体如何写可参考，"),s("RouterLink",{attrs:{to:"/vue2-cli/store.html"}},[t._v("vuex相关")])],1),t._v(" "),s("li",[s("code",[t._v("src/applications/applicationName/routes.ts")]),t._v(": 定义应用内路由。具体如何开发请参考，"),s("RouterLink",{attrs:{to:"/vue2-cli/router.html"}},[t._v("如何定义路由文件")])],1),t._v(" "),s("li",[s("code",[t._v("src/applications/applicationName/index.ts")]),t._v(": 应用对外暴露的文件，具体如何开发请参考，"),s("RouterLink",{attrs:{to:"/vue2-cli/export-application.html"}},[t._v("如何定义对外应用对外暴露文件?")])],1),t._v(" "),s("li",[s("code",[t._v("src/applications/applicationName/component/locale/zh-CN.lang.ts")]),t._v(": 多语言文件，注意命名规范，第一个“.”之前代表实际对应的语言名称，两个“.”之间的部分，也即lang必须有，这个是标识，因为语言是自动加载的所以命名必须按照这种格式，不然会导致语言无法引入。")]),t._v(" "),s("li",[s("code",[t._v("src/styles/style.scss")]),t._v(": 全局公共样式，以及一些变量主题色颜色，字号大小变量等。(此文件内不适合具体某个组件样式)")]),t._v(" "),s("li",[s("code",[t._v("src/core")]),t._v(": 核心文件，开发无需要关注【不可修改】。")]),t._v(" "),s("li",[s("code",[t._v("src/config/index.ts")]),t._v(": 配置文件【不是必须】。")]),t._v(" "),s("li",[s("code",[t._v("src/config/index.ts")]),t._v(": 配置文件【不是必须】。")]),t._v(" "),s("li",[s("code",[t._v("src/overwrite")]),t._v(": 这个文件夹主要是为二开以及继承使用，目录结构基本和applications保持一致，不过有细微的差别可以查看后续文档。")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("开发过程中一定要按照我们约定的文件目录结构。")])])])}),[],!1,null,null,null);n.default=_.exports}}]);