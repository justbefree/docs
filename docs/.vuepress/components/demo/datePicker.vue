<template>
  <div>
    <ul>
      <li @click="handleClick(1)" v-if="demo === '1'">
        <yn-button type="primary">默认</yn-button>
      </li>
      <li @click="handleClick(2)" v-if="demo === '2'">
        <yn-button type="primary">指定起止日期 & 自定义语言词条</yn-button>
      </li>
    </ul>
    <yn-date-picker v-model="show1" @confirm="handleConfirm"></yn-date-picker>
    <yn-date-picker
      v-model="show2"
      start="2021-01-21"
      end="2031-12-30"
      defaultDate="2021-01-21"
      confirmText="confirm"
      cancelText="cancel"
      title="Date"
      @confirm="handleConfirm"
    ></yn-date-picker>
  </div>
</template>
<script type="text/javascript">
export default {
  name: "DemoDatePicker",
  props: {
    demo: String
  },
  data() {
    return {
      show1: false,
      show2: false
    };
  },
  methods: {
    handleConfirm(e) {
      console.log(e);
    },
    handleClick(i) {
      this[`show${i}`] = !this[`show${i}`];
    }
  }
};
</script>
<style type="text/css" scoped="scoped">
  ul {list-style: none;padding: 0;}
</style>

