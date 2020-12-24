# dialog

<demo-dialog demo="1"></demo-dialog>
```js
this.Dialog.alert({
  title: "这个是标题",
  message: "这个是内容",
  beforeClose: (e) => {// 关闭之前的回调事件
    // e代表点击了哪个事件
  },
  afterClose: () => {// 关闭之后的回调事件
    this.Toast("彻底关闭了");
  }
});
```

<demo-dialog demo="2"></demo-dialog>
```js
this.Dialog.alert({ title: "这个是标题", message: "这个是内容" });
```

<demo-dialog demo="3"></demo-dialog>
```js
this.Dialog.confirm({
  title: "这个是标题",
  message: "这个是内容",
  beforeClose: () => {}
});
```

<demo-dialog demo="4"></demo-dialog>
```js
this.Dialog.confirm({
  title: "这个是标题",
  message: "这个是内容",
  beforeClose: (e) => {
    console.log("这个是会告诉你点击了哪个按钮", e);
    return new Promise((resolve, reject) => {
      console.log(reject);
      setTimeout(() => {
        resolve("请求结束");
      }, 3000);
    }).catch(err => {
      console.log("错误信息在这里展示", err);
    });
  }
});
```

<demo-dialog demo="5"></demo-dialog>
```js
this.Dialog.confirm({
  title: "这个是标题",
  message: "<span>我是span标签</span><br/>我换行了",
  beforeClose: (e) => {
    console.log("这个是会告诉你点击了哪个按钮", e);
    return new Promise((resolve, reject) => {
      console.log(reject);
      setTimeout(() => {
        resolve("请求结束");
      }, 3000);
    }).catch(err => {
      console.log("错误信息在这里展示", err);
    });
  }
});
```
<demo-dialog demo="6"></demo-dialog>
```vue
<yn-dialog v-model="show" closeModelOnClick>
  <img src="https://img.yzcdn.cn/vant/apple-3.jpg" />
</yn-dialog>
```
<demo-dialog demo="7"></demo-dialog>
```vue
<yn-dialog
  :value="this.show2"
  @buttonClick="this.handleInput"
  @modalClick="this.handleClick"
>
  <img src="https://img.yzcdn.cn/vant/apple-3.jpg" />
</yn-dialog>
```
<demo-dialog demo="8"></demo-dialog>
```vue
<yn-dialog :value="this.show3" closeModelOnClick>
  <span>我是固定内容，我后面的是动态内容{{ text.value }}</span>
</yn-dialog>
```


