# yn-counter

<demo-counter></demo-counter>
```vue
<template>
  <div>
    <span>total {{ total }}</span>
    <ul>
      <li v-for="(count, i) in counts" :key="i">
        <yn-counter :name="count.name" :key="i" v-model="count.value" :min="count.min" :max="count.max" steps="1" @change="handleChange"></yn-counter>
      </li>
      <!-- <li>
        <yn-counter min="-3" max="10" defaultValue="2" steps="1" @change="(e) => { this.handleChange('value2', e); }"></yn-counter>
      </li> -->
    </ul>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: "DemoCounter",
    props: {
      demo: String
    },
    data() {
      return {
        counts: [{ value: 0, min: -5, max: 10, name: "haha" }, { value: 1, min: -2, max: 6, name: "hehe" }, { value: 2, min: 1, max: 4, name: "heihei" }]
      };
    },
    computed: {
      total() {
        let result = 0;
        this.counts.forEach(e => {
          result += e.value;
        });
        return result;
      }
    },
    methods: {
      handleChange(e) {
        console.log(e);
        this.Toast(`${e.name} - ${e.type}`);
      }
    }
  };
</script>
```
