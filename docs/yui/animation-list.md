# infinite-list

::: warning 注意
刷新页面查看当前组件效果
:::
<demo-animationList demo="1"></demo-animationList>
```vue
<yn-infinite-list :dataList="asyncData">
  <yn-infinite-list-item style="borderBottom: 1px solid #eee;line-height: 100px" height="100" v-for="i in asyncData" :key="i">
    <span>这是第{{i}}个元素</span>
  </yn-infinite-list-item>
</yn-infinite-list>
```
```js
...
methods: {
  getData() {
    setTimeout(() => {
      for (let i = 0; i < 200; i++) {
        this.asyncData.push(i);
      }  
    }, 1000);
  }
},
mounted() {
  this.getData();
}
...
```