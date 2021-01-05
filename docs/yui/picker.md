# picker

<demo-picker demo="1"></demo-picker>
```vue
<template>
  <div>
    <yn-button type="primary" @click="handleClick(1)">single picker</yn-button>
    <yn-picker
      v-model="show1"
      :columns="columns1"
      @confirm="handleConfirm"
      @change="handleChange"
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
      columns1: [
        "Shanghai",
        "Toyko",
        "Beijing",
        "NewYork",
        "Shenzhen",
        "Hongkong"
      ]
    };
  },
  methods: {
    handleChange(pick, index) {
      this.Toast(`选择第${index}个，值为${pick.value || pick}`);
    },
    handleConfirm(e) {
      console.log(e);
      this.Toast(JSON.stringify(e));
    },
    handleClick(i) {
      this[`show${i}`] = !this[`show${i}`];
    }
  }
};
</script>
```
<demo-picker demo="2"></demo-picker>

```vue
<template>
  <div>
    <yn-button type="primary" @click="handleClick(2)">multiple picker</yn-button>
    <yn-picker
      v-model="show2"
      :columns="columns2"
      @confirm="handleConfirm"
      @change="handleChange"
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
      show2: false,
      columns2: [
        { value: ["Shanghai", "Toyko", "Beijing", "NewYork", "Shenzhen"], defaultIndex: 2 },
        { value: ["Shanghai", "Toyko", "Beijing", "NewYork", "Shenzhen"], defaultIndex: 1 }
      ]
    };
  },
  methods: {
    handleChange(pick, index) {
      this.Toast(`选择第${index}个，值为${pick.value || pick}`);
    },
    handleConfirm(e) {
      console.log(e);
      this.Toast(JSON.stringify(e));
    },
    handleClick(i) {
      this[`show${i}`] = !this[`show${i}`];
    }
  }
};
</script>
```


<demo-picker demo="3"></demo-picker>

```vue
<template>
  <div>
    <yn-button type="primary" @click="handleClick(3)">multiple picker2</yn-button>
    <yn-picker
      v-model="show3"
      :columns="columns3"
      @confirm="handleConfirm"
      @change="handleChange"
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
      show3: false,
      columns3: [
        { value: [{ value: "Shanghai", disabled: true }, "Toyko", "Beijing", "NewYork", "Shenzhen"] },
        { value: ["Shanghai", "Toyko", "Beijing", "NewYork", "Shenzhen"] },
        { value: ["Shanghai", "Toyko", "Beijing", "NewYork", "Shenzhen"] }
      ]
    };
  },
  methods: {
    handleChange(pick, index) {
      this.Toast(`选择第${index}个，值为${pick.value || pick}`);
    },
    handleConfirm(e) {
      console.log(e);
      this.Toast(JSON.stringify(e));
    },
    handleClick(i) {
      this[`show${i}`] = !this[`show${i}`];
    }
  }
};
</script>
```

<demo-picker demo="4"></demo-picker>

```vue
<template>
  <div>
    <yn-button type="primary" @click="handleClick(4)">Only one option</yn-button>
    <yn-picker
      v-model="show4"
      :columns="columns4"
      @confirm="handleConfirm"
      @change="handleChange"
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
      show4: false,
      columns4: ["Delaware"]
    };
  },
  methods: {
    handleChange(pick, index) {
      this.Toast(`选择第${index}个，值为${pick.value || pick}`);
    },
    handleConfirm(e) {
      console.log(e);
      this.Toast(JSON.stringify(e));
    },
    handleClick(i) {
      this[`show${i}`] = !this[`show${i}`];
    }
  }
};
</script>
```

<demo-picker demo="5"></demo-picker>
```vue
<template>
  <div>
    <yn-button type="primary" @click="handleClick(5)">禁止某项选中</yn-button>
    <yn-picker
      v-model="show5"
      :columns="columns5"
      @confirm="handleConfirm"
      @change="handleChange"
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
      show5: false,
      columns5: [{ value: "北京", disabled: true }, { value: "上海" }, { value: "深圳" }, { value: "广州" }]
    };
  },
  methods: {
    handleChange(pick, index) {
      this.Toast(`选择第${index}个，值为${pick.value || pick}`);
    },
    handleConfirm(e) {
      console.log(e);
      this.Toast(JSON.stringify(e));
    },
    handleClick(i) {
      this[`show${i}`] = !this[`show${i}`];
    }
  }
};
</script>
```
