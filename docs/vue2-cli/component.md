# 如何写一个组件

::: tip 提示
如果你还不清楚如何写基于class修饰的Vue组件，可以先看一下class修饰[基础用法](./vue-class-component.md)
:::

ts版Vue组件跟js版template部分没有太大区别。js部分区别在于以下几点：


- 首先要引入类的修饰器, 然后继承基类（Application）创建新的组件类, 以下是创建一个HelloWorld类

```vue
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Application from "@/Application";
@Component
export default class HelloWorld extends Application {
}
</script>
```

- 如何在组件内定义组件方法及属性

```vue
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Application from "@/Application";
@Component
export default class HelloWorld extends Application {
  public name = "张三";
  getName() {
    return this.name;
  }
}
</script>
```

- 如何引入其他组件？

```vue
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HelloWorld from "@/applications/test/hello-world";
import Application from "@/Application";
@Component({
  componets: { HelloWorld }
})
export default class HelloWorld extends Application {
}
</script>
```

- 如何使用vuex？

```vue
<script lang="ts">
import { mapActions, mapState, mapGetters } from "vuex";
import { Component, Prop, Vue } from "vue-property-decorator";
import HelloWorld from "@/applications/test/hello-world";
import Application from "@/Application";
@Component({
  componets: { HelloWorld },
  methods: {
    ...mapActions("test", ["increase", "getInfo"])
  },
  computed: {
    ...mapState("test", ["number"]),
    ...mapGetters("test", ["getNumber"])
  }
})
export default class HelloWorld extends Application {
}
</script>
```
::: tip 说明

vuex的ts版用法跟js的差别仅仅在于引用方式上，在组件内使用没有任何区别

:::