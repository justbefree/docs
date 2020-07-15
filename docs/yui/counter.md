# yn-counter

<demo-counter></demo-counter>
```vue
<template>
  <div>
    <span>total {{ total }}</span>
    <ul>
      <li>
        <yn-counter min="-3" max="10" defaultValue="2" steps="1" @change="(e) => { this.handleChange('value1', e); }"></yn-counter>
      </li>
      <li>
        <yn-counter min="-3" max="10" defaultValue="2" steps="1" @change="(e) => { this.handleChange('value2', e); }"></yn-counter>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: "DemoCounter",
    props: {
      demo: String
    },
    data() {
      return {
        value1: 0,
        value2: 0
      };
    },
    computed: {
      total() {
        return this.value1 + this.value2;
      }
    },
    methods: {
      handleChange(attr, e) {
        this[attr] = e.parsedValue;
        console.log(e);
      }
    }
  };
</script>

```
