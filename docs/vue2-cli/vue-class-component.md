# Vue Class Component

> @Component 修饰符的作用是让当前这个类转换成一个Vue组件

```js
import Vue from 'vue'
import Component from 'vue-class-component'

// HelloWorld class will be a Vue component
@Component
export default class HelloWorld extends Vue {}
```


上面的代码片段跟下面的是等效的
```vue
<template></template>
<script>
export default {
  name: "HelloWorld"
};
</script>
```

## data

> data的声明等效于在类里面声明属性

```vue
<template>
  <div>{{ message }}</div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  // Declared as component data
  message = 'Hello World!'
}
</script>
```
上面的代码片段跟下面的是等效的
```vue
```vue
<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      message: "Hello World!";
    }
  }
}
</script>
```

::: warning 注意
在类里面不能把data的属性的值设置为undefined，如果初始化为空请用null代替
:::

## methods

> 组件的methods方法可以直接声明在类里面的方法

```vue
<template>
  <button v-on:click="hello">Click</button>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  // Declared as component method
  hello() {
    console.log('Hello World!')
  }
}
</script>
```

上面的代码片段跟下面的是等效的

```vue
<template>
  <button v-on:click="hello">Click</button>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    hello() {
      console.log('Hello World!')
    }
  }
}
</script>
```

## computed

> 计算属性可以直接在类里面声明getter / setter 属性:

```vue
<template>
  <input v-model="name">
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  firstName = 'John'
  lastName = 'Doe'

  // Declared as computed property getter
  get name() {
    return this.firstName + ' ' + this.lastName
  }

  // Declared as computed property setter
  set name(value) {
    const splitted = value.split(' ')
    this.firstName = splitted[0]
    this.lastName = splitted[1] || ''
  }
}
</script>
``` 
上面的代码片段跟下面的是等效的

```vue
<template>
  <input v-model="name">
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      firstName: "John",
      lastName: "Doe"
    };
  },
  computed: {
    name: {
      get() {
        return this.firstName + " " + this.lastName;
      },
      set(value) {
        const splitted = value.split(' ')
        this.firstName = splitted[0]
        this.lastName = splitted[1] || ''
      }
    }
  }
}
</script>
``` 

## hooks
> 组件声明周期钩子函数（mounted, created, destroyed...及render方法)都可直接在类里面声明方法

```js
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  // Declare mounted lifecycle hook
  mounted() {
    console.log('mounted')
  }

  // Declare render function
  render() {
    return <div>Hello World!</div>
  }
}
```

## Other options

> 其他的选项可以直接传入修饰符的方法内作为参数

```vue
<template>
  <OtherComponent />
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import OtherComponent from './OtherComponent.vue'

@Component({
  // Specify `components` option.
  // See Vue.js docs for all available options:
  // https://vuejs.org/v2/api/#Options-Data
  components: {
    OtherComponent
  }
})
export default class HelloWorld extends Vue {}
</script>
```

## extends

> 一个组件类可以继承另一个组件类

```js
// 父类
// super.js
import Vue from 'vue'
import Component from 'vue-class-component'

// Define a super class component
@Component
export default class Super extends Vue {
  superValue = 'Hello'
}
```

```js
// 子类可以继承父类
import Super from './super'
import Component from 'vue-class-component'

// Extending the Super class component
@Component
export default class HelloWorld extends Super {
  created() {
    console.log(this.superValue) // -> Hello
  }
}
```

::: warning 注意
每一个被继承的类必须是一个class形式的组件。换句话说，它需要继承Vue构造函数作为父类且必须用@Component修饰
:::

## mixins

> vue-class-component包提供了mixins工具类函数让你可以在类里面用[mixins](https://vuejs.org/v2/guide/mixins.html)

```js
// mixins.js
import Vue from 'vue'
import Component from 'vue-class-component'

// You can declare mixins as the same style as components.
@Component
export class Hello extends Vue {
  hello = 'Hello'
}

@Component
export class World extends Vue {
  world = 'World'
}
```

在类的组件内使用上面声明的mixins
```js
import Component, { mixins } from 'vue-class-component'
import { Hello, World } from './mixins'

// Use `mixins` helper function instead of `Vue`.
// `mixins` can receive any number of arguments.
@Component
export class HelloWorld extends mixins(Hello, World) {
  created () {
    console.log(this.hello + ' ' + this.world + '!') // -> Hello World!
  }
}
```

## @Prop
## @PropSync
## @Watch
## @Provide
## @Inject
## @Model
## @ProvideReactive
## @InjectReactive
## @Emit
## @Ref

[以上请参考](./vue-property-decorator.md)


