# popup

<demo-popup demo="1"></demo-popup>

```vue
<yn-popup v-model="popup1" position="bottom">
  <div class="popup-content">
    底部出现遮罩
    <template v-for="item in 10">
      <h3 :key="item">我是{{ item }}</h3>
    </template>
  </div>
</yn-popup>
```

<demo-popup demo="2"></demo-popup>

```vue
<yn-popup v-model="popup2" position="right" :showCloseIcon="true">
  <div class="popup-content">右侧出现遮罩</div>
</yn-popup>
```

<demo-popup demo="3"></demo-popup>

```vue
<yn-popup v-model="popup3" position="top" :showCloseIcon="true">
  <div class="popup-content">上面出现遮罩</div>
</yn-popup>
```

<demo-popup demo="4"></demo-popup>

```vue
<yn-popup v-model="popup4" position="bottom" :showCloseIcon="true">
  <div class="popup-content">
    <yn-button type="primary" @click="handleClick(5)">打开内层</yn-button>
    上面出现遮罩
    <yn-popup v-model="popup5" position="bottom">
      <div class="popup-content">
        内层嵌套
      </div>
    </yn-popup>
  </div>
</yn-popup>
```

<demo-popup demo="5"></demo-popup>

```vue
<yn-popup v-model="popup6" position="middle" :showCloseIcon="true" fixed>
  <div class="popup-content">中间fade</div>
</yn-popup>
```