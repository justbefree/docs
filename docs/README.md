| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $160 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |



:tada: :100:

# Heading

[[toc]]

## Sub heading 1
Some nice text

## Sub heading 2
Some even nicer text


::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::


::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::


``` js
export default {
  name: 'MyComponent',
  // ...
}
```

``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
