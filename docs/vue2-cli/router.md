# 如何配置路由

配置路由相当简单，看下面案例
```js
import { default as RouterManager } from "@/core/RouterManager";
const router = new RouterManager("test/layout");
router.register([
  {
    pathName: "about",
    path: "/about",
    name: "about"
  },
  {
    pathName: "home",
    path: "/home",
    name: "home"
  }
]);
export default router.getRoutes();
```
- 需要引入路由管理类，并且实例化类
- 实例化创建类的参数为指定当前应用页面级组件所在的目录（此处是test应用layout目录）
- 调用register方法，参数为数组类型，每一个数组元素跟vue-router里面所规范的没有太大区别

::: warning 注意

数组每个元素都有一个pathName属性，此属性代表需要加载页面组件所在的目录文件夹名称，这个必填。在配置路由的时候不需要手动引入页面组件，页面组件会根据配置的pathName自动加载，所以需要保证pathName为正确的地址。

:::