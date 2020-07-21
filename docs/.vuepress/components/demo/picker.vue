<template>
  <div>
    <ul>
      <li v-if="demo === '1'" @click="handleClick(1)">
        <yn-button type="primary">single picker</yn-button>
      </li>
      <li v-if="demo === '2'" @click="handleClick(2)">
        <yn-button type="primary">multiple picker</yn-button>
      </li>
      <li v-if="demo === '3'" @click="handleClick(3)">
        <yn-button type="primary">multiple picker2</yn-button>
      </li>
      <li v-if="demo === '4'" @click="handleClick(4)">
        <yn-button type="primary">只有一个数据</yn-button>
      </li>
    </ul>
    <yn-picker
      v-model="show1"
      :columns="columns1"
      @change="handleChange"
      @confirm="handleConfirm"
    ></yn-picker>
    <yn-picker
      v-model="show2"
      :columns="columns2"
      @change="handleChange"
      @confirm="handleConfirm"
    ></yn-picker>
    <yn-picker
      v-model="show3"
      :columns="columns3"
      @change="handleChange"
      @confirm="handleConfirm"
    ></yn-picker>
    <yn-picker
      v-model="show4"
      :columns="columns4"
      @change="handleChange"
      @confirm="handleConfirm"
    ></yn-picker>
  </div>
</template>
<script type="text/javascript">
export default {
  name: "DemoPicker",
  props: {
    demo: String
  },
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      // columns1: ["Delaware", "Florida"]
      columns1: [
        "Delaware",
        "Florida",
        "Georqia",
        "Indiana",
        "Maine",
        "Amenda"
      ],
      columns2: [
        { value: ["Delaware", "Florida", "Georqia", "Indiana", "Maine"] },
        { value: ["Delaware", "Florida", "Georqia", "Indiana", "Maine"] }
      ],
      columns3: [
        { value: ["Delaware", "Florida", "Georqia", "Indiana", "Maine"] },
        { value: ["Delaware", "Florida", "Georqia", "Indiana", "Maine"] },
        { value: ["Delaware", "Florida", "Georqia", "Indiana", "Maine"] }
      ],
      columns4: ["Delaware"]
    };
  },
  methods: {
    handleChange(pick, index) {
      console.log(`选择第${index}个，值为${pick}`);
      this.Toast(`选择第${index}个，值为${pick}`);
    },
    handleConfirm(e) {
      this.Toast(JSON.stringify(e));
      console.log("confirm", e);
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

