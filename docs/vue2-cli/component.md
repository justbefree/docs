# 如何写一个组件

ts版Vue组件跟js版template部分没有太大区别。js部分区别在于以下几点：


- 首先要引入类的修饰器, 然后继承基类（Super）创建新的组件类, 以下是创建一个HelloWorld类

```vue
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Super from "@/core/Super";
@Component
export default class HelloWorld extends Super {
}
</script>
```

- 如何在组件内定义组件方法及属性

```vue
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Super from "@/core/Super";
@Component
export default class HelloWorld extends Super {
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
import Super from "@/core/Super";
@Component({
  componets: { HelloWorld }
})
export default class HelloWorld extends Super {
}
</script>
```

- 如何使用vuex？

```vue
<script lang="ts">
import { mapActions, mapState, mapGetters } from "vuex";
import { Component, Prop, Vue } from "vue-property-decorator";
import HelloWorld from "@/applications/test/hello-world";
import Super from "@/core/Super";
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
export default class HelloWorld extends Super {
}
</script>
```
::: tip 说明

vuex的ts版用法跟js的差别仅仅在于引用方式上，在组件内使用没有任何区别

:::