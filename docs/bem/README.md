
# BEM

> There are only two hard problems in Computer Science: cache invalidation and naming things — Phil Karlton

> 计算机科学中只有两个难题：缓存失效和命名——菲尔·卡尔顿


## Block 块

封装一个独立的实体，它本身是有意义的。虽然块可以嵌套并相互作用，但在语义上它们保持相等；没有优先级或层次结构。没有DOM表示的整体实体（如控制器或模型）也可以是块。

> 块名可以由拉丁字母、数字和破折号组成。若要形成CSS类，请为命名空间添加一个短前缀：.block

任何一个DOM块都可以作为一个block
```html
<div class="block">...</div>
```

```css
.block { color: #042; }
```

## Element 元素

块的一部分，没有独立的意义。任何元素在语义上都与其块相关联。
> 元素名称可以由拉丁字母、数字、破折号和下划线组成。CSS类的格式是块名加上两个下划线加上元素名：.block_yuelem

任何一个block里面的代码块都可以作为一个element，所有的element在语义上保持相等

```html
<div class="block">
    ...
    <span class="block__elem"></span>
</div>
```
```css
.block { background: gray; }
.block__elem { color: #042; }
```

## Modifier 状态

块或元素上的标志。使用它们来改变外观、行为或状态。
> 修饰名可以由拉丁字母、数字、破折号和下划线组成。CSS类的格式为block或element的名称加上两个破折号：.block--mod或.block_yuelem--mod和.block--color black with.block--color red。复杂修饰符中的空格将替换为短划线。

```html
<div class="block block--mod">...</div>
<div class="block block--size-big block--shadow-yes">...</div>
```

```css
.block--hidden { }
.block--mod .block__elem { }
.block__elem--mod { }
```

## Examples

```html
<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input
    class="form__submit form__submit--disabled"
    type="submit" />
</form>
```
```css
.form { }
.form--theme-xmas { }
.form--simple { }
.form__input { }
.form__submit { }
.form__submit--disabled { }
```

## Implemented

- [awesome-scss-bem](https://github.com/justbefree/awesome-scss-bem)

## Reference
- [Get BEM](http://getbem.com)
- [bem.info](https://en.bem.info/methodology/quick-start/)



