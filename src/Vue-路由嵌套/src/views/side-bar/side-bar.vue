<template>
  <div class="side-bar">
    <div class="side-items">
      <side-item v-for="(item, index) in routes" :item="item" :key="index" />
    </div>
    <div class="box">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
  </div>
</template>
<script>
  import sideItem from './childCops/side-item.vue';
  export default {
    components: { sideItem },
    data() {
      return { routes: [] };
    },
    created() {
      this.routes = this.$router.options.routes;
      console.log(JSON.parse(JSON.stringify(this.$router.options.routes)));
    },
  };
</script>
<style scoped lang="less">
  .side-bar {
    display: flex;
    height: 100vh;
    background-color: #000;
    overflow: hidden;
    .side-items {
      min-width: 50vw;
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
      overflow-y: auto;
    }
    .box {
      position: relative;
      flex: 1;
      background-color: #111;
    }
  }
</style>
