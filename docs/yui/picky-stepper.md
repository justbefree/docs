# picky-stepper

<demo-pickyStepper demo="1"></demo-pickyStepper>
```vue
<template>
  <div>
    <yn-button @click="handleClick(1)" type="primary">简单用法（单选）</yn-button>
    <yn-picky-stepper
      v-model="picker1"
      :submit="submit"
      :steps="steps1"
    ></yn-picky-stepper>
  </div>
</template>
<script type="text/javascript">
export default {
  name: "DemoPickyStepper",
  props: {
    demo: String
  },
  methods: {
    handleClick(e) {
      this[`picker${e}`] = !this[`picker${e}`];
    },
    submit(args = {}) {
      console.log("这个是需要提交的参数", args);
      return new Promise((resolve, reject) => {
        console.log(reject);
        setTimeout(() => {
          resolve("ok");
        }, 3000);
      }).catch(err => {
        console.log("错误要在外面执行", err);
      });
    },
    handleSuccess(res) {
      console.log("选择的数据", res);
    }
  },
  data() {
    return {
      picker1: false,
      steps1: [
        {
          title: "请选择原因",
          list: [
            { label: "行程变化", value: "行程变化" },
            { label: "目的地有住宿", value: "目的地有住宿" },
            { label: "预算超支", value: "预算超支" },
            {
              label: "其他",
              type: "input",
              placeholder: "请输入原因，不是必填",
              value: "",
              required: false
            },
            {
              label: "还有其他呢",
              type: "textarea",
              placeholder: "请输入原因，默认必填",
              value: "",
              counter: true,
              maxlength: 100,
              // required: true
            }
          ],
          multiple: false
        }
      ]
    };
  }
};
</script>
```

<demo-pickyStepper demo="2"></demo-pickyStepper>
```vue
<template>
  <div>
    <yn-button @click="handleClick(2)" type="primary">简单用法（多选）</yn-button>
    <yn-picky-stepper
      v-model="picker2"
      :submit="submit"
      :steps="steps2"
    ></yn-picky-stepper>
  </div>
</template>
<script type="text/javascript">
export default {
  name: "DemoPickyStepper",
  props: {
    demo: String
  },
  methods: {
    handleClick(e) {
      this[`picker${e}`] = !this[`picker${e}`];
    },
    submit(args = {}) {
      console.log("这个是需要提交的参数", args);
      return new Promise((resolve, reject) => {
        console.log(reject);
        setTimeout(() => {
          resolve("ok");
        }, 3000);
      }).catch(err => {
        console.log("错误要在外面执行", err);
      });
    },
    handleSuccess(res) {
      console.log("选择的数据", res);
    }
  },
  data() {
    return {
      picker2: false,
      steps2: [
        {
          title: "请选择改签人员",
          list: [
            { label: "lizhuang", value: "李壮" },
            { label: "keyanqin", value: "柯艳琴" },
            { label: "xionglonghui", value: "熊龙辉" },
            { label: "liyan", value: "李妍" },
            { label: "wangshengzi", value: "王生资" }
          ],
          multiple: true
        }
      ]
    };
  }
};
</script>
```

<demo-pickyStepper demo="3"></demo-pickyStepper>
```vue
<template>
  <div>
    <yn-button @click="handleClick(3)" type="primary">简单用法(可以不需要异步操作)</yn-button>
    <yn-picky-stepper
      v-model="picker3"
      :submit="submit"
      :steps="steps3"
    ></yn-picky-stepper>
  </div>
</template>
<script type="text/javascript">
export default {
  name: "DemoPickyStepper",
  props: {
    demo: String
  },
  methods: {
    handleClick(e) {
      this[`picker${e}`] = !this[`picker${e}`];
    },
    submit(args = {}) {
      console.log("这个是需要提交的参数", args);
      return new Promise((resolve, reject) => {
        console.log(reject);
        setTimeout(() => {
          resolve("ok");
        }, 3000);
      }).catch(err => {
        console.log("错误要在外面执行", err);
      });
    },
    handleSuccess(res) {
      console.log("选择的数据", res);
    }
  },
  data() {
    return {
      picker3: false,
      steps3: [
        {
          title: "请选择改签人员",
          list: [
            { label: "lizhuang", value: "李壮" },
            { label: "keyanqin", value: "柯艳琴" },
            { label: "xionglonghui", value: "熊龙辉" },
            { label: "liyan", value: "李妍" },
            { label: "wangshengzi", value: "王生资" }
          ],
          multiple: true
        },
        {
          title: "请选择原因",
          list: [
            { label: "行程变化", value: "行程变化" },
            { label: "目的地有住宿", value: "目的地有住宿" },
            { label: "预算超支", value: "预算超支" },
            {
              label: "其他",
              type: "input",
              placeholder: "请输入原因",
              value: ""
            }
          ],
          multiple: false
        }
      ],
    };
  }
};
</script>
```

<demo-pickyStepper demo="4"></demo-pickyStepper>
```vue
<template>
  <div>
    <yn-button @click="handleClick(4)" type="primary">高级用法（多步骤）</yn-button>
    <yn-picky-stepper
      v-model="picker4"
      :submit="submit"
      :steps="steps4"
    ></yn-picky-stepper>
  </div>
</template>
<script type="text/javascript">
export default {
  name: "DemoPickyStepper",
  props: {
    demo: String
  },
  methods: {
    handleClick(e) {
      this[`picker${e}`] = !this[`picker${e}`];
    },
    submit(args = {}) {
      console.log("这个是需要提交的参数", args);
      return new Promise((resolve, reject) => {
        console.log(reject);
        setTimeout(() => {
          resolve("ok");
        }, 3000);
      }).catch(err => {
        console.log("错误要在外面执行", err);
      });
    },
    handleSuccess(res) {
      console.log("选择的数据", res);
    }
  },
  data() {
    return {
      picker4: false,
      steps4: [
        {
          title: "请选择改签人员",
          list: [
            { label: "lizhuang", value: "李壮" },
            { label: "keyanqin", value: "柯艳琴" },
            { label: "xionglonghui", value: "熊龙辉" },
            { label: "liyan", value: "李妍" },
            { label: "wangshengzi", value: "王生资" }
          ],
          multiple: true
        },
        {
          title: "请选择原因",
          list: [
            { label: "行程变化", value: "行程变化" },
            { label: "目的地有住宿", value: "目的地有住宿" },
            { label: "预算超支", value: "预算超支" },
            {
              label: "其他",
              type: "input",
              placeholder: "请输入原因",
              value: ""
            }
          ],
          multiple: false
        }
      ]
    };
  }
};
</script>
```


<demo-pickyStepper demo="5"></demo-pickyStepper>
```vue
<template>
  <div>
    <yn-button @click="handleClick(5)" type="primary">高级用法实际案例（多步骤）</yn-button>
    <yn-picky-stepper
      v-model="picker5"
      :submit="submit"
      :steps="steps5"
    ></yn-picky-stepper>
  </div>
</template>
<script type="text/javascript">
const persons = require("./persons.json");
persons.forEach(p => {
  p.label = p.Name;
});
const reasons = require("./reasons.json");
export default {
  name: "DemoPickyStepper",
  props: {
    demo: String
  },
  methods: {
    handleClick(e) {
      this[`picker${e}`] = !this[`picker${e}`];
    },
    submit(args = {}) {
      console.log("这个是需要提交的参数", args);
      return new Promise((resolve, reject) => {
        console.log(reject);
        setTimeout(() => {
          resolve("ok");
        }, 3000);
      }).catch(err => {
        console.log("错误要在外面执行", err);
      });
    },
    handleSuccess(res) {
      console.log("选择的数据", res);
    }
  },
  data() {
    return {
      picker5: false,
      steps5: [
        {
          title: "请选择改签人员",
          list: persons,
          multiple: true
        },
        {
          title: "请选择原因",
          list: reasons,
          multiple: false
        }
      ],
    };
  }
};
</script>
```
<demo-pickyStepper demo="6"></demo-pickyStepper>
```vue
<template>
  <div>
    <yn-button @click="handleClick(5)" type="primary">高级用法实际案例（多步骤）</yn-button>
    <yn-picky-stepper
      v-model="picker6"
      :submit="submit"
      :steps="steps6"
    ></yn-picky-stepper>
  </div>
</template>
<script type="text/javascript">
const persons = require("./persons.json");
persons.forEach(p => {
  p.label = p.Name;
});
const reasons = require("./reasons.json");
export default {
  name: "DemoPickyStepper",
  props: {
    demo: String
  },
  methods: {
    handleClick(e) {
      this[`picker${e}`] = !this[`picker${e}`];
    },
    submit(args = {}) {
      console.log("这个是需要提交的参数", args);
      return new Promise((resolve, reject) => {
        console.log(reject);
        setTimeout(() => {
          resolve("ok");
        }, 3000);
      }).catch(err => {
        console.log("错误要在外面执行", err);
      });
    },
    handleSuccess(res) {
      console.log("选择的数据", res);
    }
  },
  data() {
    return {
      picker6: false,
      steps6: [],
    };
  },
  mounted() {
    const personStep = {
      title: "请选择改签人员",
      list: persons,
      multiple: true
    };
    const reasonStep = {
      title: "请选择原因",
      list: reasons,
      multiple: false
    };
    this.steps6.push(personStep);
    setTimeout(() => {
      this.steps6.push(reasonStep);
    }, 1000);
    console.log(this.steps6);
  }
};
</script>
```
### Test data
::: details persons.json
```js
[{"IdentityType":"身份证","ChangeOrderId":"0","OrderFlightId":"1586855211118030675","IsOutsider":false,"Cellphone":"15925665444","OrderId":"1586855211097582433","IdentityTypeCode":"ID","Name":"张素姿", "RefundOrderId":"0","UserId":"4aaa287c-c809-45df-a81b-b2a3ab37a03f","ChangeOrderFlightId":"0","OrderPassengerId":"1586855211121334854","TicketNo":"000-111","IdentityNo":"430181199007078949"},{"IdentityType":"港澳通行证","ChangeOrderId":"0","OrderFlightId":"1586855211118030675","IsOutsider":false,"Cellphone":"18569520144","OrderId":"1586855211097582433","IdentityTypeCode":"HKMP","Name":"王玉杰", "RefundOrderId":"0","UserId":"408e9394-4056-4ec9-ad7f-b18e8da36e0b","ChangeOrderFlightId":"0","OrderPassengerId":"1586855211121322266","TicketNo":"000-222","IdentityNo":"GA112255"}]
```
:::

::: details reasons.json
```js
[{"reason":"航班延误或取消","reasonEn":"Flight delayed or cancelled","id":"43","reasonCode":"FDEL","isBelongVolunteer":"0","selectedDefault":"false","value":"","label":"航班延误或取消"},{"reason":"业务行程/会议取消","reasonEn":"Business schedule/conference cancelled","id":"44","reasonCode":"JCXL","isBelongVolunteer":"1","selectedDefault":"false","value":"","label":"业务行程/会议取消"},{"reason":"随客户出行","reasonEn":"Travel with customer","id":"45","reasonCode":"TOTH","isBelongVolunteer":"1","selectedDefault":"false","value":"","label":"随客户出行"},{"reason":"赶不上飞机","reasonEn":"Can not catch flight","id":"46","reasonCode":"CNCF","isBelongVolunteer":"1","selectedDefault":"false","value":"","label":"赶不上飞机"},{"reason":"提前到达机场","reasonEn":"Early arrival at the airport","id":"47","reasonCode":"EATA","isBelongVolunteer":"1","selectedDefault":"false","value":"","label":"提前到达机场"}]
```

