<template>
  <div class="App">
    <!-- 面包屑 -->
    <el-breadcrumb style="background-color: #000;" separator=">>">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item
          style="font-size: 25px;"
          v-for="(item, index) in levelList"
          :key="item.path"
        >
          <!-- 判断是否处于最后一个路由 -->
          <span v-if="index == levelList.length - 1" style="color:#fff">
            {{ item.meta.title }}
          </span>
          <!-- 不是则用于路由跳转 -->
          <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
    <router-view />
  </div>
</template>

<script>
  export default {
    data() {
      return { levelList: [] };
    },
    watch: {
      $route() {
        this.getBreadcrumb();
      },
    },
    created() {
      this.getBreadcrumb();
    },
    methods: {
      getBreadcrumb() {
        // 将拥有title的路由筛选出来
        let matched = this.$route.matched.filter(
          item => item.meta && item.meta.title,
        );
        // 将带有标题的筛选出来
        this.levelList = matched.filter(item => item.meta && item.meta.title);
        console.log(this.levelList);
      },
      // 用于点击跳转
      handleLink(item) {
        const { redirect, path, parent } = item;
        // 判断是否存在重定向
        if (redirect) {
          this.$router.push(
            // 判断重定向路由是否存在父路由，存在则拼接父路由的完整路径
            item.parent ? parent.path + '/' + redirect : '/' + redirect,
          );
          return;
        }
        this.$router.push(path);
      },
    },
  };
</script>

<style>
  .App {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .lyb {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: #000;
    color: #fff;
    transform-origin: center;
    font-size: 50px;
  }

  /* 面包屑切换动画 */
  .breadcrumb-enter-active,
  .breadcrumb-leave-active {
    transition: all 0.5s;
  }

  .breadcrumb-enter,
  .breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(100%);
  }

  .breadcrumb-move {
    transition: all 0.5s;
  }

  .breadcrumb-leave-active {
    position: absolute;
  }
</style>
