<template>
  <div class="index">
    <div class="box" ref="scroll">
      <div class="better-content">
        <slot></slot>
      </div>
    </div>
    <back-top :show="backTopShow" :father="scroll" />
  </div>
</template>
<script>
  import BScroll from '@better-scroll/core';
  // import ObserveImage from '@better-scroll/observe-image';
  // import ObserveDOM from '@better-scroll/observe-dom';
  // BScroll.use(ObserveDOM);
  // BScroll.use(ObserveImage);
  import backTop from './back-top';
  export default {
    name: 'index',
    components: { backTop },
    props: {
      top: {
        type: String,
        default: '0px',
      },
      bottom: {
        type: String,
        default: '0px',
      },
    },
    data() {
      return {
        scroll: null,
        backTopShow: false,
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
        this.scroll = new BScroll(this.$refs.scroll, attr);
        //监听滚动位置
        this.scroll.on('scroll', position => {
          this.backTopShow = -position.y > this.$refs.scroll.clientHeight;
        });
      });
    },
    methods: {
      scrollTo(x, y, time = 300) {
        this.scroll.scrollTo(x, y, time);
      },

      refresh() {
        this.scroll && this.scroll.refresh();
      },
    },
  };
</script>
<style scoped lang="less">
  .index {
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
</style>
