<template>
  <div class="skeleton-box">
    <template v-if="demo === '1'">
      <yn-skeleton rows="10" :avatar="false"></yn-skeleton>
    </template>
    <template v-if="demo === '2'">
      <yn-skeleton rows="10"></yn-skeleton>
    </template>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: "DemoSkeleton",
    props: {
      demo: [String, Number]
    },
    data() {
      return {};
    }
  };
</script>