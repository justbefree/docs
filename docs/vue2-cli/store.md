# 如何开发store 


### 第一步需要先定义好对外暴露的store文件
在每个应用的根目录下都有一个store文件夹。在store文件夹下有一个index.ts文件，这个文件是暴露当前应用的store对象。

下面是index.ts的标准格式
```js
export const API = {
  getInfo: "/api"
};
import importAll from "@/core/utils/importAll";
export default importAll(require.context("./", false, /\.ts$/), [
  "./index.ts"
]).toArray();
```

::: tip 说明
 
API对象是当前应用所依赖的接口，格式为 key: value形式

importAll方法使用很固定，有连个参数，第一个参数固定不动（当然如果你知道怎么改也可以修改，但一般不建议改）；第二个参数是数组类型，表示在当前文件夹内【require.context("./", false, /\.ts$/)】不引入数组内指定的文件【此处是index.ts 因为index.ts是对外暴露文件，里面内容也即上面案例内容，不是单纯的store文件】

:::

### 教你如何写Vuex部分

![An image](./images/vuex.png)

> 从上图可以看出，首先用户通过事件触发action，这时候会有两种情况，一种是异步请求需要去向后台发起http拿数据，另一种是直接数据是现成的直接通过action方法传过来。但是不管action的数据从哪里来，下一步到mutation的处理都是一致的，mutation的本质实际上就是一个纯数据处理函数，mutation里面适合做数据计算，计算完以后在把数据挂载到state上，然后view更新。这个是一个完整组件跟vuex的交互的数据流。

因为本架构是把action mutation getters等抽象成了一个聚合类，在写的时候跟官网的案例有点区别：

先贴一个案例感受一下
```js
// 这个是同步的数据流转情况
import StoreManager from "@/core/StoreManager";
const store = new StoreManager("test");
store
  .register({ state: { number: 0 } })
  .action("increase")
  .getters("getNumber", result => {
    console.log("getters getNumber", result);
    const { state } = result;
    return 10 * state.number;
  })
  .mutation(res => {
    const { payload, state } = res;
    if (payload.type === "add") {
      state.number = state.number + 1;
    } else if (payload.type === "mins") {
      state.number = state.number - 1;
    }
    console.log(res);
  });
export default store;
```

- 首先要引入store类来创建一个实例，注意实例化的时候参数传的值为当前应用的名称，这个非常关键，因为我们开发模式是基于插件化开发，每个插件是一个独立完整并且可运行的应用，每个独立的应用安装在平台上就成了一个聚合的超大应用。所以为了保证每个应用的状态不会交叉，命名空间就会以应用名区分。

- 接下来就相当简单了，支持调用一系列方法【register, action, mutation, getters】，支持链式操作。下面讲一下具体每个方法都有哪些注意事项：

  - register 方法是初始化state并赋值【此方法非必须】
  - action action的参数有三个，第一个为事件的名称，对应的是store文件夹下事件文件。第二个参数代表是否为异步请求接口，默认是false。第三个参数只有在第二个参数为true的情况下才有意义，代表异步请求的方式，get,post,postJSON，目前支持这三种方式。【此方法必须】
  - mutation ，参数只有一个回调函数，回调函数({ state, payload }) => any; 其中state为当前应用下状态对象。payload里面信息包含接口请求回来的数据，res，以及用户请求的参数params等。【此方法非必须】
  ::: tip 说明
  如果action已经确定为异步请求接口，而mutation又没有的情况下，择异步请求的接口数据不会经过上图所示数据流流转。取而代之的是仅仅发送ajax请求，数据需要在调用的地方做接收处理。
  :::
  - getters方法也相对比较简单，该方法有两个参数，第一个是getterName,第二个为回调函数，({ state, getters, rootState, rootGetters }) => any;【此方法非必须】


下面列出的是异步请求的案例
```js
import StoreManager from "@/core/StoreManager";
const store = new StoreManager("test");
store
  .register({ state: {} })
  .action("getInfo", true)
  .mutation(res => {
    const { payload, state } = res;
    console.log(payload, state);
  });
export default store;
```



