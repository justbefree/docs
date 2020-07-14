# slider

### basic usage

<demo-slider demo="1"></demo-slider>
```vue
<yn-slider v-model="value"></yn-slider>
```


### set steps
<demo-slider demo="2"></demo-slider>
```vue
<yn-slider v-model="value" step="10"></yn-slider>
```

### change drag icon
<demo-slider demo="3"></demo-slider>
```vue
<yn-slider
  v-model="value"
  :dragIcon="dragIcon"
  :parse="parse"
  tip
></yn-slider>
```
```js
const dragIcon = require("./drag.svg");
function parse(e) {
  if (e === 0) {
    return "min value";
  } else if (e === 100) {
    return "max value";
  }
  return `custom value is ${e}`;
}
```

### show tips
<demo-slider demo="4"></demo-slider>
```vue
<h3>tip value {{ value4 }}</h3>
<yn-button type="primary" @click="update" class="update">更新</yn-button>
<yn-button type="primary" @click="set" class="update">自定义</yn-button>
<span class="display"></span>
<yn-slider ref="slider4" v-model="value4" :parse="doubleValue" tip></yn-slider>
```
```js
function update() {
  this.value4 = { start: 0, end: 100 };
}
function set() {
  this.$refs.slider4.set({ start: 10, end: 50 });
}
function doubleValue(e) {
  return e * 10;
}
```




### dynamic register slider component
<demo-slider demo="5"></demo-slider>




</br>
</br>
</br>
</br>
</br>
</br>
</br>
</br>

```vue
<yn-dropdown-menu>
  <yn-dropdown-menu-item
    v-model="value8"
    ref="closeAble"
    @afterEnter="handleBeforeEnter"
  >
    <div style="height: 100px;width: 90%;margin: 0 auto;">
      <yn-slider class="dropdown-slider" v-if="visiable1" v-model="value5" :parse="doubleValue" tip></yn-slider>
    </div>
  </yn-dropdown-menu-item>
</yn-dropdown-menu>
```
```js
function handleBeforeEnter() {
  this.visiable1 = !this.visiable1;
}
function doubleValue(e) {
  return e * 10;
}
```











### inside popup component
<demo-slider demo="6"></demo-slider>
```vue
<yn-popup v-model="visiable">
  <div class="box">
    <yn-slider v-if="visiable" v-model="value5" :parse="doubleValue" tip></yn-slider>
  </div>
</yn-popup>
```

















