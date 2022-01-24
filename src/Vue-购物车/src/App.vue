<template>
  <div class="App">
    <index />
  </div>
</template>
<script>
  import index from './view/index.vue';
  export default {
    components: { index },
  };
</script>

<style scoped lang="less">
  .App {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #eee;
  }
</style>
