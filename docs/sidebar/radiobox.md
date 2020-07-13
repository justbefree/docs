# radiobox

<demo-radiobox></demo-radiobox>

```vue
<template>
  <div>
    <yn-radiobox v-model="checked" @change="handleChange"></yn-radiobox>
    <span>这个可以点击</span>
    <span>当前状态{{ checked }}</span>
    <hr />
    <yn-radiobox :checked="value"></yn-radiobox>
    <span>这个不支持点击</span>
  </div>
</template>

<script>
export default {
  name: "DemoRadiobox",
  data() {
    return {
      checked: true,
      value: true
    };
  },
  methods: {
    handleChange(e) {
      console.log("改变了", e);
    }
  }
};
</script>

```