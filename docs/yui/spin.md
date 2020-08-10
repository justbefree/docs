# spin

<demo-spin demo="1"></demo-spin>
```vue
<yn-spin type="triple-bounce"></yn-spin>
```
<demo-spin demo="2"></demo-spin>
```vue
<yn-spin type="snake"></yn-spin>
```
<demo-spin demo="3"></demo-spin>
```vue
<yn-spin type="fading-circle"></yn-spin>
```
<demo-spin demo="4"></demo-spin>
```vue
<yn-spin type="double-bounce"></yn-spin>
```
<demo-spin demo="5"></demo-spin>
```vue
<yn-spin type="rotate"></yn-spin>
```
<demo-spin demo="6"></demo-spin>
```vue
<yn-spin type="rotate-svg" size="50"></yn-spin>
```

::: warning 注意
可以发现当type值为rotate或者rotate-svg的时候实际渲染的效果是一模一样的，但是其实现有着不一样的区别。“rotate”的是基于css3的技术实现；而rotate-svg是基于svg图片。在实际测试过程中发现，css3的实现方式在最新版iOS上不兼容，会出现小点往外扩散的错乱效果。但是IE版本又不支持SVG格式，所以在使用的过程中，针对IE使用基于CSS3的技术，而在iOS下使用svg图片。
:::