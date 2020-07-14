<template>
  <div>
    <div class="box" v-if="demo === '1'">
      <span class="display">The current value is {{ value }}</span>
      <yn-slider v-model="value"></yn-slider>
    </div>
    <div class="box" v-if="demo === '2'">
      <span class="display">The current value is {{ value2 }}</span>
      <yn-slider v-model="value2" step="10"></yn-slider>
    </div>
    <div class="box" v-if="demo === '3'">
      <span class="display"></span>
      <yn-slider
        v-model="value3"
        :dragIcon="dragIcon"
        :parse="parse"
        tip
      ></yn-slider>
    </div>
    <div class="box" v-if="demo === '4'">
      <h3>tip value {{ value4 }}</h3>
      <yn-button type="primary" @click="update" class="update">更新</yn-button>
      <yn-button type="primary" @click="set" class="update">自定义</yn-button>
      <span class="display"></span>
      <yn-slider ref="slider4" v-model="value4" :parse="doubleValue" tip></yn-slider>
    </div>
    <div class="box" v-if="demo === '5'">
      <yn-dropdown-menu>
        <yn-dropdown-menu-item
          v-model="value8"
          ref="closeAble"
          @afterEnter="handleBeforeEnter"
        >
          <div style="height: 100px;width: 90%;margin: 0 auto;">
            <yn-slider class="dropdown-slider" v-if="visiable1" v-model="value5" :parse="doubleValue" tip></yn-slider>
          </div>
        </yn-dropdown-menu-item>
      </yn-dropdown-menu>
    </div>
    <yn-button type="primary" @click="handlePopup" v-if="demo === '6'">弹框案例</yn-button>
    <yn-popup v-model="visiable">
      <div class="box">
        <yn-slider v-if="visiable" v-model="value5" :parse="doubleValue" tip></yn-slider>
      </div>
    </yn-popup>
  </div>
</template>
<script type="text/javascript">
const dragIcon = require("./drag.svg");
export default {
  name: "DemoSlider",
  props: {
    demo: String
  },
  data() {
    return {
      visiable: false,
      visiable1: false,
      value: 10,
      value2: 50,
      value3: 0,
      value4: {
        start: 4,
        end: 25
      },
      value5: {
        start: 0,
        end: 100
      },
      value8: "dddd",
      dragIcon
    };
  },
  methods: {
    handleBeforeEnter() {
      this.visiable1 = !this.visiable1;
    },
    getOptions() {
      return new Promise((resolve, reject) => {
        console.log(reject);
        setTimeout(() => {
          const options = [
            { text: "Option1", value: 0 },
            { text: "Option2", value: 1 },
            { text: "Option3", value: 2 }
          ];
          resolve(options);
        }, 3000);
      });
    },
    doubleValue(e) {
      return e * 10;
    },
    handlePopup() {
      this.visiable = !this.visiable;
    },
    parse(e) {
      if (e === 0) {
        return "min value";
      } else if (e === 100) {
        return "max value";
      }
      return `custom value is ${e}`;
    },
    update() {
      this.value4 = { start: 0, end: 100 };
    },
    set() {
      this.$refs.slider4.set({ start: 10, end: 50 });
    }
  }
};
</script>
<style type="text/css" scoped="scoped">
.box {
  width: 90%;
  margin: 60px auto;
}
.box .display {
  display: block;
  margin-bottom: 20px;
}
.update {
  display: inline-block;
  margin: 20px 10px;
}
.dropdown-slider{
  margin-top: 40px;
}
</style>
