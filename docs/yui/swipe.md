# swipe

<demo-swipe demo="1"></demo-swipe>
```vue
<template>
  <div>
    <yn-swipe ref="swipe1" indicatorType="number">
      <yn-swipe-item>
        <div>
          <img src="./images/apple-1.jpg" />
        </div>
      </yn-swipe-item>
      <yn-swipe-item>
        <img src="./images/apple-2.jpg" />
      </yn-swipe-item>
      <yn-swipe-item>
        <img src="./images/apple-3.jpg" />
      </yn-swipe-item>
      <yn-swipe-item>
        <img src="./images/apple-4.jpg" />
      </yn-swipe-item>
    </yn-swipe>
    <div class="api">
      <span>对外接口</span>
      <yn-button @click="prev('swipe1')">prev</yn-button>
      <yn-button @click="next('swipe1')">next</yn-button>
      <yn-button @click="open('swipe1')">open</yn-button>
      <yn-button @click="open('swipe1')">close</yn-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    prev(ref) {
      console.log(ref);
      this.$refs[ref].prev();
    },
    next(ref) {
      this.$refs[ref].next();
    },
    open(ref) {
      this.$refs[ref].openImageViewer();
    },
    close(ref) {
      this.$refs[ref].closeImageViewer();
    }
  }
}
</script>
```
<demo-swipe demo="2"></demo-swipe>
```vue
<template>
  <div>
    <yn-swipe ref="swipe2" vertical>
      <yn-swipe-item>
        <div>
          <img src="./images/apple-1.jpg" />
        </div>
      </yn-swipe-item>
      <yn-swipe-item>
        <img src="./images/apple-2.jpg" />
      </yn-swipe-item>
      <yn-swipe-item>
        <img src="./images/apple-3.jpg" />
      </yn-swipe-item>
      <yn-swipe-item>
        <img src="./images/apple-4.jpg" />
      </yn-swipe-item>
    </yn-swipe>
    <div class="api">
      <span>对外接口</span>
      <yn-button @click="prev('swipe2')">prev</yn-button>
      <yn-button @click="next('swipe3')">next</yn-button>
      <yn-button @click="open('swipe2')">open</yn-button>
      <yn-button @click="open('swipe3')">close</yn-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    prev(ref) {
      console.log(ref);
      this.$refs[ref].prev();
    },
    next(ref) {
      this.$refs[ref].next();
    },
    open(ref) {
      this.$refs[ref].openImageViewer();
    },
    close(ref) {
      this.$refs[ref].closeImageViewer();
    }
  }
}
</script>
```