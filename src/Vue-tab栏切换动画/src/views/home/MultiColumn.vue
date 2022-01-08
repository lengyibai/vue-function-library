<!-- 单选多tab栏 -->
<template>
  <div class="SingleMultiple">
    <div class="tab">
      <div
        class="tab-item"
        :class="{ active: currentIndex == index }"
        v-for="(item, index) in tabName"
        :key="index"
        @click="tabClick(index)"
      >
        {{ item }}
      </div>
    </div>
    <div class="slide" ref="box">
      <div class="box wrapper1">
        <div class="better-content">
          <p v-for="(item, index) in 100" :key="index">{{ item }}</p>
        </div>
      </div>
      <div class="box wrapper2">
        <div class="better-content">
          <p v-for="(item, index) in 100" :key="index">{{ item }}</p>
        </div>
      </div>
      <div class="box wrapper3">
        <div class="better-content">
          <p v-for="(item, index) in 100" :key="index">{{ item }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  //!··········公共组件··········!//
  import BScroll from '@better-scroll/core';
  // import ObserveImage from '@better-scroll/observe-image';
  // import ObserveDOM from '@better-scroll/observe-dom';
  // BScroll.use(ObserveDOM);
  // BScroll.use(ObserveImage);
  export default {
    props: {},
    data() {
      return {
        tabName: ['one', 'two', 'three'],
        currentIndex: 0,
        top: '0px',
        bottom: '0px',
        scroll: null,
        backTopShow: false,
      };
    },
    created() {
      let attr = {
        // observeImage: true,
        // observeDOM: true,
        click: true,
        useTransition: false,
        // 监听滚动
        probeType: 3,
      };
      this.$nextTick(() => {
        this.scroll1 = new BScroll('.wrapper1', attr);
        this.scroll2 = new BScroll('.wrapper2', attr);
        this.scroll3 = new BScroll('.wrapper3', attr);
      });
    },
    components: {},
    ////···············methods···············////
    methods: {
      //@tab栏点击
      tabClick(index) {
        this.currentIndex = index;
        this.$refs.box.style.transform = `translateX(-${index * 100}%)`;
      },
    },
  };
</script>
<style scoped lang="less">
  .SingleMultiple {
    width: 100vw;
    height: 100vh;
    background-color: #000;
    overflow: hidden;
    // tab栏整体
    .tab {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      color: #fff;
      height: 50px;
      // tab栏标签
      .tab-item {
        flex: 1;
        font-size: 25px;
        text-align: center;
        line-height: 50px;
        &:hover {
          color: #000;
          background-color: #fff;
        }
      }
    }
    // 滑动位置
    .slide {
      display: flex;
      width: 100%;
      height: calc(100vh - 50px);
      transition: all 0.25s;
      .box {
        width: 100%;
        overflow: hidden;
        flex-shrink: 0;
        .better-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 25px;
          color: #fff;
        }
      }
    }
  }
  .active {
    background-color: #fff !important;
    color: #000 !important;
  }
</style>
