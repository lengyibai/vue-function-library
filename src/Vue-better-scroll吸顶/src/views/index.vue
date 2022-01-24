<template>
  <div class="Home">
    <!-- 顶部导航栏 -->
    <div class="tab">better-scroll吸顶</div>

    <!-- 第一tab栏 -->
    <div class="tab1" v-if="isTabFixed">lengyibai</div>

    <!-- 滚动组件 -->
    <scroll class="content" @scroll="contentScroll" ref="scroll" top="50px">
      <div class="lyb" v-for="(item, index) in 10" :key="index * 100 + 100">
        冷弋白冷弋白冷弋白冷弋白
      </div>

      <!-- 第二tab栏 -->
      <div class="tab2" ref="tab2">lengyibai</div>
      <div class="lyb" v-for="(item, index) in 100" :key="index">
        冷弋白冷弋白冷弋白冷弋白
      </div>
    </scroll>
  </div>
</template>
<script>
  // 滚动组件
  import Scroll from '@/components/lyb-scroll/lyb-scroll.vue';

  export default {
    components: { Scroll },
    data() {
      return {
        //显示第一tab栏条件
        isTabFixed: false,
        //第二tab栏距离顶部的高度
        tabOffsetTop: 0,
      };
    },
    mounted() {
      //获取第二个tab栏距离顶部的高度
      this.$nextTick(() => {
        this.tabOffsetTop = this.$refs.tab2.offsetTop;
      });
    },
    methods: {
      contentScroll(position) {
        //当第二tab栏滚动到顶部导航栏，显示第一tab栏
        this.isTabFixed = -position.y > this.tabOffsetTop;
      },
    },
  };
</script>
<style scoped lang="less">
  .flex {
    width: 100%;
    max-width: 750px;
    height: 50px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
  }
  .Home {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    .tab {
      .flex();
    }
    .tab1 {
      .flex();
      position: absolute;
      top: 50px;
      z-index: 1;
    }
    .content {
      width: 100%;
      max-width: 750px;
      .tab2 {
        .flex();
      }
      .lyb {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
      }
    }
  }
</style>
