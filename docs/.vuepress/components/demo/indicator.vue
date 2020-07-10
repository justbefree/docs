<template>
  <div>
    <ul>
      <li v-if="demo === '1'" @click="indicator('doubleBounce')">
        <yn-button type="primary">doubleBounce</yn-button>
      </li>
      <li v-if="demo === '2'" @click="indicator('fadingCircle')">
        <yn-button type="primary">fadingCircle</yn-button>
      </li>
      <li v-if="demo === '3'" @click="indicator('snake')">
        <yn-button type="primary">snake</yn-button>
      </li>
      <li v-if="demo === '4'" @click="indicator('tripleBounce')">
        <yn-button type="primary">tripleBounce</yn-button>
      </li>
      <li v-if="demo === '5'" @click="indicator('rotate', false)">
        <yn-button type="primary">rotate lockScreen</yn-button>
      </li>
      <li v-if="demo === '6'" @click="indicator('rotate', true)">
        <yn-button type="primary">rotate lockScreen transparent</yn-button>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
export default {
  name: "DemoIndicator",
  props: {
    demo: String
  },
  methods: {
    indicator(spinType, transparent) {
      if (spinType === "rotate") {
        this.Indicator.open({ spinType, background: "transparent", lockScreen: true, transparent });
      } else {
        this.Indicator.open({ text: spinType, spinType });
      }
      setTimeout(() => {
        this.Indicator.close();
      }, 3000);
    }
  }
};
</script>
<style type="text/css" scoped="scoped">
  ul {
    list-style: none;
    margin: 0;
    padding:  0;
  }
  ul li {
    margin: 20px 0;
  }
</style>
