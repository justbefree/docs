<template>
  <div>
    <ul>
      <li v-if="demo === '1'">
        <yn-button type="primary" @click="handleClick(1)">底部出现遮罩</yn-button>
      </li>
      <li v-if="demo === '2'">
        <yn-button type="primary" @click="handleClick(2)">右侧出现遮罩</yn-button>
      </li>
      <li v-if="demo === '3'">
        <yn-button type="primary" @click="handleClick(3)">上面出现遮罩</yn-button>
      </li>
      <li v-if="demo === '4'">
        <yn-button type="primary" @click="handleClick(4)">双层嵌套</yn-button>
      </li>
      <li v-if="demo === '5'">
        <yn-button type="primary" @click="handleClick(6)">中间fade</yn-button>
      </li>
    </ul>
    <yn-popup v-model="popup1" position="bottom">
      <div class="popup-content">
        底部出现遮罩
        <template v-for="item in 10">
          <h3 :key="item">我是{{ item }}</h3>
        </template>
      </div>
    </yn-popup>
    <yn-popup v-model="popup2" position="right" :showCloseIcon="true">
      <div class="popup-content">右侧出现遮罩</div>
    </yn-popup>
    <yn-popup v-model="popup3" position="top" :showCloseIcon="true">
      <div class="popup-content">上面出现遮罩</div>
    </yn-popup>
    <yn-popup v-model="popup4" position="bottom" :showCloseIcon="true">
      <div class="popup-content">
        <yn-button type="primary" @click="handleClick(5)">打开内层</yn-button>
        上面出现遮罩
        <yn-popup v-model="popup5" position="bottom">
          <div class="popup-content">
            内层嵌套
          </div>
        </yn-popup>
      </div>
    </yn-popup>
    <yn-popup v-model="popup6" position="middle" :showCloseIcon="true" fixed>
      <div class="popup-content">中间fade</div>
    </yn-popup>
  </div>
</template>
<script>
export default {
  name: "DemoPopup",
  props: {
    demo: String
  },
  data() {
    return {
      popup1: false,
      popup2: false,
      popup3: false,
      popup4: false,
      popup5: false,
      popup6: false
    };
  },
  methods: {
    handleClick(num) {
      this[`popup${num}`] = !this[`popup${num}`];
    }
  }
};
</script>
<style type="text/css" scoped="scoped">
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul li {
  margin: 10px auto;
}
.popup-content {
  width: 100%;
  min-height: 200px;
  background: #fff;
}

</style>
