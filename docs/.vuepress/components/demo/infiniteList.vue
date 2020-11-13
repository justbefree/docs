<template>
  <div class="infinite-list-box">
    <template v-if="demo === '1'">
      <yn-infinite-list :dataList="asyncData">
        <yn-infinite-list-item style="borderBottom: 1px solid #eee;line-height: 100px" height="100" v-for="i in asyncData" :key="i">
          <span>这是第{{i}}个元素</span>
        </yn-infinite-list-item>
      </yn-infinite-list>
    </template>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: "DemoInfiniteList",
    props: {
      demo: [String, Number]
    },
    data() {
      const dataList = [];
      for (let i = 0; i < 20; i++) {
        dataList.push(i);
      }
      return {
        showHeader: true,
        dataList,
        asyncData: []
      };
    },
    methods: {
      getData() {
        setTimeout(() => {
          for (let i = 0; i < 200; i++) {
            this.asyncData.push(i);
          }  
        }, 1000);
      }
    },
    mounted() {
      this.getData();
    }
  };
</script>
