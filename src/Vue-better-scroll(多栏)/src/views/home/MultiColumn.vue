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
      <!-- 第一个 -->
      <div class="lyb">
        <div class="box" ref="scroll1">
          <div class="better-content">
            <p v-for="(item, index) in 100" :key="index">{{ item }}</p>
          </div>
        </div>
        <back-top :show="backTopShow[0]" :father="scroll.scroll1" />
      </div>
      <!-- 第二个 -->
      <div class="lyb">
        <div class="box" ref="scroll2">
          <div class="better-content">
            <p v-for="(item, index) in 100" :key="index">{{ item }}</p>
          </div>
        </div>
        <back-top :show="backTopShow[1]" :father="scroll.scroll2" />
      </div>
      <!-- 第三个 -->
      <div class="lyb">
        <div class="box" ref="scroll3">
          <div class="better-content">
            <p v-for="(item, index) in 100" :key="index">{{ item }}</p>
          </div>
        </div>
        <back-top :show="backTopShow[2]" :father="scroll.scroll3" />
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
  import backTop from './back-top/back-top.vue';
  export default {
    props: {},
    data() {
      return {
        tabName: ['one', 'two', 'three'],
        currentIndex: 0,
        top: '0px',
        bottom: '0px',
        scroll: { scroll1: null, scroll2: null, scroll3: null },
        backTopShow: [false, false, false],
      };
    },
    mounted() {
      let attr = {
        // observeImage: true,
        // observeDOM: true,
        click: true,
        useTransition: false,
        // 监听滚动
        probeType: 3,
      };
      this.$nextTick(() => {
        Object.keys(this.scroll).forEach(item => {
          this.scroll[item] = new BScroll(this.$refs[item], attr);
        });
        //监听滚动位置
        Object.keys(this.scroll).forEach((item, index) => {
          this.scroll[item].on('scroll', position => {
            this.$set(
              this.backTopShow,
              index,
              -position.y > this.$refs[item].clientHeight,
            );
          });
        });
      });
    },
    components: { backTop },
    ////···············methods···············////
    methods: {
      //@tab栏点击
      tabClick(index) {
        this.currentIndex = index;
        this.$refs.box.style.transform = `translateX(-${index * 100}%)`;
      },

      scrollTo(x, y, time = 300) {
        this.scroll1.scrollTo(x, y, time);
      },

      refresh() {
        this.scroll1 && this.scroll1.refresh();
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
      .lyb {
        position: relative;
        display: flex;
        width: 100%;
        flex-shrink: 0;
        .box {
          width: 100%;
          overflow: hidden;
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
  }
  .active {
    background-color: #fff !important;
    color: #000 !important;
  }
</style>
