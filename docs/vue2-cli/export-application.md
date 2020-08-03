# 如何定义对外应用对外暴露文件


  - 每个应用都有自己的路由
  - 每个应用都有自己的状态管理器
  - 每个应用都有自己的所依赖的组件
  - 每个应用都有自己的多语言包
  - 每个应用都是一个独立完整的可运行的应用


每个应用的跟文件夹下都有一个对外的暴露文件，为index.ts，内容相当固定：

```js
import { default as routes } from "./routes";
import i18n from "./i18n";
export default {
  i18n,
  routes,
  name: "test"
};

```
也就是说每个应用下面的index.ts文件是引入了当前应用下每个独立的组成单元并且都通过index.ts暴露出去。

::: tip 注意
上面name字段代表当前应用名称，必须存在
:::

### 如何安装应用

在项目的src/main.ts中

```js
import { default as Platform } from "@/core/Platform";
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

Vue.config.productionTip = false;

const p = new Platform({ id: "#app", App });
p.install("test");
p.startUp();
console.log(p);

```

- 引入平台类，然后注入id(页面渲染成DOM元素上对应的ID)
- 平台的实例有install方法，可以安装对应的应用
- 最后在调用平台实例的startUp方法就可以使整个项目运行起来了

