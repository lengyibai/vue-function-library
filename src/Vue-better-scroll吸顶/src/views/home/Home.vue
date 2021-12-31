<template>
  <div class="Home">
    <!-- 顶部导航栏 -->
    <nav-bar :isShow="false" titleColor="#000" :leftShow="false">
      <template #title>better-scroll吸顶</template>
    </nav-bar>
    <!-- 第一tab栏 -->
    <van-tabs class="tab1" v-model="currentIndex" v-if="isTabFixed">
      <van-tab
        :title="item"
        v-for="(item, index) in tab"
        :key="index"
        :title-style="tabStyle(index)"
      ></van-tab>
    </van-tabs>
    <!-- 滚动组件 -->
    <scroll class="content" @scroll="contentScroll" ref="scroll" :probeType="3">
      <div class="lyb" v-for="(item, index) in 10" :key="index * 100 + 100">
        冷弋白冷弋白冷弋白冷弋白
      </div>
      <!-- 第二tab栏 -->
      <van-tabs class="tab2" v-model="currentIndex" ref="tab2">
        <van-tab
          :title="item"
          v-for="(item, index) in tab"
          :key="index"
          :title-style="tabStyle(index)"
        ></van-tab>
      </van-tabs>
      <div class="lyb" v-for="(item, index) in 100" :key="index">
        冷弋白冷弋白冷弋白冷弋白
      </div>
    </scroll>
  </div>
</template>
<script>
  /* 公共方法 */
  // 网络请求

  /* 公共组件 */
  //顶部导航栏
  import NavBar from '@/components/common/navbar/NavBar.vue';
  // 滚动组件
  import Scroll from '@/components/common/scroll/Scroll.vue';
  //

  /* 业务组件 */
  export default {
    name: 'Home',
    components: { Scroll, NavBar },
    data() {
      return {
        // tab栏标签标识符
        currentIndex: 0,
        //显示第一tab栏条件
        isTabFixed: false,
        //第二tab栏距离顶部的高度
        tabOffsetTop: 0,
        data: {},
      };
    },
    mounted() {
      //获取第二个tab栏距离顶部的高度
      this.tabOffsetTop = this.$refs.tab2.$el.offsetTop;
      setTimeout(() => {
        this.$refs.scroll.refresh();
      }, 300);
    },
    computed: {},
    methods: {
      tabStyle(index) {
        let a = `
        font-weight:bold;
        `;
        let b =
          this.currentIndex == index
            ? 'font-size:0.4267rem'
            : 'font-size:0.32rem;color:#B2B2B2';
        return a + b;
      },
      contentScroll(position) {
        //当第二tab栏滚动到顶部导航栏，显示第一tab栏
        this.isTabFixed = -position.y > this.tabOffsetTop;
      },
    },
  };
</script>
<style scoped lang="less">
  * {
    line-height: 1;
  }
  .Home {
    position: relative;
    height: 100vh;
    .tab1 {
      position: fixed;
      width: 100%;
      z-index: 999;
      &::after {
        content: '';
        position: absolute;
        background-color: #fff;
        width: 100vw;
        height: 10px;
      }
    }
    .content {
      top: 1rem;
      bottom: 0;
      .tab2 {
        @bottom: 10px;
        margin-bottom: @bottom;
        &::after {
          content: '';
          position: absolute;
          background-color: #fff;
          width: 100vw;
          height: @bottom;
        }
      }
      .lyb {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.666667rem;
      }
    }
  }
</style>
