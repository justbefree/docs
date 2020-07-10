<template>
  <div>
    <ul>
      <li @click="toast('middle')" v-if="demo === '1'">
        <yn-button type="primary">toast middle</yn-button>
      </li>
      <li @click="toast('bottom')" v-if="demo === '2'">
        <yn-button type="primary">toast bottom</yn-button>
      </li>
      <li @click="toast()" v-if="demo === '3'">
        <yn-button type="primary">Hello, world</yn-button>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
export default {
  name: "DemoToast",
  props: {
    demo: [String]
  },
  data() {
    return {};
  },
  methods: {
    toast(position) {
      if (position) {
        this.Toast({ message: `hello , ${position}`, position });
      } else {
        this.Toast("Hello, world");
      }
    }
  }
};
</script>
<style type="text/css" scoped="scoped">
  ul{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  ul li {
    margin: 20px 0;
  }
</style>
