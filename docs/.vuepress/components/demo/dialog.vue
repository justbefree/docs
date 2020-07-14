<template>
  <div>
    <ul>
      <li v-if="demo === '1'" @click="alert">
        <yn-button type="primary">
          Async alert
        </yn-button>
      </li>
      <li v-if="demo === '2'" @click="syncAlert">
        <yn-button type="primary">Sync alert</yn-button>
      </li>
      <li v-if="demo === '3'" @click="confirm">
        <yn-button type="primary">Sync cancel, Async confirm</yn-button>
      </li>
      <li v-if="demo === '4'" @click="confirm2">
        <yn-button type="primary">Async cancel, Async confirm</yn-button>
      </li>
      <li v-if="demo === '5'" @click="confirm3">
        <yn-button type="primary">html</yn-button>
      </li>
      <li v-if="demo === '6'">
        <yn-dialog v-model="show" closeModelOnClick>
          <img src="https://img.yzcdn.cn/vant/apple-3.jpg" />
        </yn-dialog>
        <yn-button @click="advanced" type="primary">advanced</yn-button>
      </li>
      <li v-if="demo === '7'">
        <yn-dialog
          :value="this.show2"
          @buttonClick="this.handleInput"
          @modalClick="this.handleClick"
        >
          <img src="https://img.yzcdn.cn/vant/apple-3.jpg" />
        </yn-dialog>
        <yn-button @click="advanced2" type="primary">
          advanced modal click callback
        </yn-button>
      </li>
      <li v-if="demo === '8'">
        <yn-button @click="advanced3" type="primary">
          异步加载数据渲染问题-{{ text.value }}
        </yn-button>
        <yn-dialog v-model="show3" closeModelOnClick>
          <span>我是固定内容，我后面的是动态内容{{ text.value }}</span>
        </yn-dialog>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "DemoDialog",
  props: {
    demo: String
  },
  data() {
    return {
      show: false,
      show2: false,
      show3: false,
      text: {
        value: "默认内容"
      }
    };
  },
  methods: {
    handleAfterClose() {
      this.Toast("彻底关闭了");
    },
    advanced2() {
      this.show2 = true;
    },
    advanced() {
      this.show = true;
    },
    advanced3() {
      this.show3 = true;
      setTimeout(() => {
        // this.text = "内容要改变了";
        this.text = { value: "内容要改变了" };
      }, 3000);
    },
    handleInput(e) {
      console.log("按钮事件触发", e);
    },
    handleClick() {
      console.log("收到回调信息");
    },
    handleBeforeClose(e) {
      if (e === "cancel") {
        return false;
      }
      console.log("这个是会告诉你点击了哪个按钮", e);
      return new Promise((resolve, reject) => {
        console.log(reject);
        setTimeout(() => {
          resolve("请求结束");
        }, 2000);
      }).catch(err => {
        console.log("错误信息在这里展示", err);
      });
    },
    handleBeforeClose2(e) {
      console.log("这个是会告诉你点击了哪个按钮", e);
      return new Promise((resolve, reject) => {
        console.log(reject);
        setTimeout(() => {
          resolve("请求结束");
        }, 3000);
      }).catch(err => {
        console.log("错误信息在这里展示", err);
      });
    },
    alert() {
      this.Dialog.alert({
        title: "这个是标题",
        message: "这个是内容",
        beforeClose: this.handleBeforeClose,
        afterClose: this.handleAfterClose
      });
    },
    syncAlert() {
      this.Dialog.alert({ title: "这个是标题", message: "这个是内容" });
    },
    confirm() {
      this.Dialog.confirm({
        title: "这个是标题",
        message: "这个是内容",
        beforeClose: this.handleBeforeClose
      });
    },
    confirm2() {
      this.Dialog.confirm({
        title: "这个是标题",
        message: "这个是内容",
        beforeClose: this.handleBeforeClose2
      });
    },
    confirm3() {
      this.Dialog.confirm({
        title: "这个是标题",
        message: "<span>我是span标签</span><br/>我换行了",
        beforeClose: this.handleBeforeClose2
      });
    }
  }
};
</script>
<style type="text/css" scoped>
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
ul li {
  line-height: 44px;
}
.yn-dialog-content img {
  width: 100%;
}
</style>
