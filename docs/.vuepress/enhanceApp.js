/*
* @Author: Just be free
* @Date:   2020-07-10 10:06:14
* @Last Modified by:   Just be free
* @Last Modified time: 2020-07-10 15:24:38
* @E-mail: justbefree@126.com
*/
// 使用异步函数也是可以的
import YnComponents from "yn-components";
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  Vue.use(YnComponents);
  // ...做一些其他的应用级别的优化
};
