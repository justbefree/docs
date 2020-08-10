<template>
  <div class="spin">
    <div v-if="demo === '1'">
      <h4>triple-bounce</h4>
      <yn-spin type="triple-bounce"></yn-spin>
    </div>
    <div v-if="demo === '2'">
      <h4>snake</h4>
      <yn-spin type="snake"></yn-spin>
    </div>
    <div v-if="demo === '3'">
      <h4>fading-circle</h4>
      <yn-spin type="fading-circle"></yn-spin>
    </div>
    <div v-if="demo === '4'">
      <h4>double-bounce</h4>
      <yn-spin type="double-bounce"></yn-spin>
    </div>
    <div v-if="demo === '5'">
      <h4>rotate</h4>
      <yn-spin type="rotate"></yn-spin>
    </div>
    <div v-if="demo === '6'">
      <h4>rotate svg</h4>
      <yn-spin type="rotate-svg" size="50"></yn-spin>
    </div>
  </div>
</template>

<script>
export default {
  name: "DemoSpin",
  props: {
    demo: String
  }
};
</script>