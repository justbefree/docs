# tabs

<demo-tabs demo="1"></demo-tabs>
```vue
<template>
  <div>
    <div class="box">
      <yn-tabs v-model="active" @change="change">
        <yn-tab-item :key="index" :title="'Tab' + index" v-for="index in 4">
          content of tab {{ index }}
        </yn-tab-item>
      </yn-tabs>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: "DemoTabs",
  props: {
    demo: String
  },
  data() {
    return {
      active: 1
    };
  },
  methods: {
    change(e) {
      this.Toast(`${e.value} changed`);
    },
    handleClick(e) {
      if (e.disabled) {
        this.Toast(`${e.value} is disabled`);
      } else {
        this.Toast(`${e.value} clicked`);
      }
    }
  }
};
</script>
```
<demo-tabs demo="2"></demo-tabs>
```vue
<template>
  <div>
    <div class="box">
      <yn-tabs v-model="active2" @click="handleClick">
        <yn-tab-item
          :key="index"
          :title="'Tab' + index"
          v-for="index in 8"
          :disabled="index === 4"
        >
          content of tab {{ index }}
        </yn-tab-item>
      </yn-tabs>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: "DemoTabs",
  props: {
    demo: String
  },
  data() {
    return {
      active2: 1
    };
  },
  methods: {
    change(e) {
      this.Toast(`${e.value} changed`);
    },
    handleClick(e) {
      if (e.disabled) {
        this.Toast(`${e.value} is disabled`);
      } else {
        this.Toast(`${e.value} clicked`);
      }
    }
  }
};
</script>
```
<demo-tabs demo="3"></demo-tabs>
```vue
<template>
  <div>
    <div class="box">
      <yn-tabs v-model="active3">
        <yn-tab-item :key="index" :title="'Tab' + index" v-for="index in 2">
          content of tab {{ index }}
        </yn-tab-item>
      </yn-tabs>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: "DemoTabs",
  props: {
    demo: String
  },
  data() {
    return {
      active3: 1
    };
  },
  methods: {
    change(e) {
      this.Toast(`${e.value} changed`);
    },
    handleClick(e) {
      if (e.disabled) {
        this.Toast(`${e.value} is disabled`);
      } else {
        this.Toast(`${e.value} clicked`);
      }
    }
  }
};
</script>
```