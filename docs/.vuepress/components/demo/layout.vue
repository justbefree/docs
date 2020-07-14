<template>
  <div class="layout-box">
    <yn-layout
      monitor
      @scroll="handleScroll"
      :showHeader="showHeader"
      @reachBottom="handleReachBottom"
      bottomDistance="500"
      @reachTop="handleReachTop"
      topDistance="100"
    >
      <div slot="header" class="header">header</div>
      <div slot="body">
        body区域，可以滑动
        <div>
          <h2>yn-layout</h2>
        </div>
        <template v-for="item in dataList">
          <div :key="item">{{ item }}</div>
        </template>
        <yn-spin type="triple-bounce"></yn-spin>
      </div>
      <div slot="footer" class="custom-footer">footer</div>
    </yn-layout>
  </div>
</template>
<script>
export default {
  name: "DemoLayout",
  data() {
    const dataList = [];
    for (let i = 0; i < 100; i++) {
      dataList.push(i);
    }
    return {
      showHeader: true,
      dataList
    };
  },
  methods: {
    loadMore() {
      const length = this.dataList.length;
      setTimeout(() => {
        for (let i = length; i < 100 + length; i++) {
          this.dataList.push(i);
        }
      }, 1000);
    },
    handleReachBottom() {
      console.log("滚动到底部触发事件了");
      this.Toast("滚动到底部触发事件了");
      this.loadMore();
    },
    handleReachTop() {
      console.log("滚动到顶部了");
      this.Toast("滚动到顶部了");
    },
    handleScroll(e) {
      if (e.diff > 0) {
        this.showHeader = false;
      } else {
        this.showHeader = true;
      }
      console.log(e, e.diff);
    }
  }
};
</script>
<style type="text/css">
.layout-box{
  width: 320px;
  height: 560px;
  border: 2px solid #eee;
}
div.header {
  background: yellow;
  height: 100%;
  height: 44px;
}
div.custom-footer{
  background: red;
  height: 100%;
  color: #fff;
}
</style>
