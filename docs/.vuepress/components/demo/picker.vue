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
      <li v-if="demo === '5'" @click="handleClick(5)">
        <yn-button type="primary">禁止某项选中</yn-button>
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
    <yn-picker
      v-model="show5"
      :columns="columns5"
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
      show5: false,
      // columns1: ["Delaware", "Florida"]
      columns1: [
        "Shanghai",
        "Toyko",
        "Beijing",
        "NewYork",
        "Shenzhen",
        "Hongkong"
      ],
      columns2: [
        { value: ["Shanghai", "Toyko", "Beijing", "NewYork", "Shenzhen"], defaultIndex: 2 },
        { value: ["Shanghai", "Toyko", "Beijing", "NewYork", "Shenzhen"], defaultIndex: 1 }
      ],
      columns3: [
        { value: [{ value: "Shanghai", disabled: true }, "Toyko", "Beijing", "NewYork", "Shenzhen"] },
        { value: ["Shanghai", "Toyko", "Beijing", "NewYork", "Shenzhen"] },
        { value: ["Shanghai", "Toyko", "Beijing", "NewYork", "Shenzhen"] }
      ],
      columns4: ["Shanghai"],
      columns5: [{ value: "北京", disabled: true }, { value: "上海" }, { value: "深圳" }, { value: "广州" }]
    };
  },
  methods: {
    handleChange(pick, index) {
      this.Toast(`选择第${index}个，值为${pick.value || pick}`);
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

