<template>
  <div class="side-bar">
    <div class="side-items">
      <!-- 侧边栏 -->
      <el-menu
        :default-active="$route.meta.full_path"
        active-text-color="#ffd04b"
        class="el-menu-vertical-demo"
        background-color="#000"
        text-color="#fff"
        router
      >
        <!-- 侧边栏栏目 -->
        <side-item :routes="routes"></side-item>
      </el-menu>
    </div>
    <!-- 右边页面 -->
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
    computed: {},
    created() {
      this.routes = this.$router.options.routes;
    },
  };
</script>
<style scoped lang="less">
  .side-bar {
    display: flex;
    height: 100%;
    background-color: #000;
    overflow: hidden;
    .side-items {
      min-width: 300px;
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
