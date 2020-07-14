<template>
  <div class="button-box">
    <yn-button v-if="demo === '1'" class="block" @click="handleClick"><span>这是文案，可点击</span></yn-button>
    <yn-button v-if="demo === '2'" class="block" disabled><span>禁止点击</span></yn-button>
    <yn-button v-if="demo === '3'" class="block" :loading="true" loadingColor="red"
      ><span>这是文案</span></yn-button
    >
    <yn-button v-if="demo === '4'" class="block" :loading="true" size="large" loadingColor="green"
      ><span>这是文案</span></yn-button
    >
    <yn-button v-if="demo === '5'" class="block" :loading="true" size="small"
      ><span>我不可以点击</span></yn-button
    >
    <yn-button v-if="demo === '6'" class="block" type="danger">危险</yn-button>
    <yn-button v-if="demo === '7'" class="block" type="primary">主题色</yn-button>
    <yn-button v-if="demo === '8'" class="block" type="warning">警告</yn-button>
    <yn-button v-if="demo === '9'" class="block" type="primary" plain>plain</yn-button>
    <yn-button v-if="demo === '10'" class="block" type="warning" plain>plain</yn-button>
    <yn-button v-if="demo === '11'" class="block" :loading="true" loadingText="loading text">plain</yn-button>
    <yn-button v-if="demo === '12'" class="block" iconName="iconback" iconColor="red">button with icon</yn-button>
  </div>
</template>
<script>
export default {
  name: "DemoButton",
  props: {
    demo: String
  },
  methods: {
    handleClick() {
      console.log("接收到click事件");
      alert("我被点击了~~");
    }
  }
};
</script>
<style type="text/css">
.button-box {
  text-align: center;
}
.block{
  display: block;
  margin: 20px 0;
}
hr {
  border: none;
}
</style>
