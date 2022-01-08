<template>
  <div class="lyb">
    <div
      class="better-wrapper"
      ref="wrapper"
      :style="{ height: 'calc(100vh - ' + bottom + ' - ' + top + ')' }"
    >
      <div class="better-content">
        <slot></slot>
      </div>
    </div>
    <back-top :show="backTopShow" />
  </div>
</template>
<script>
  import backTop from './back-top/back-top.vue';
  import BScroll from '@better-scroll/core';
  import ObserveImage from '@better-scroll/observe-image';
  import ObserveDOM from '@better-scroll/observe-dom';
  BScroll.use(ObserveDOM);
  BScroll.use(ObserveImage);
  export default {
    name: 'scroll',
    props: {
      // 顶部外边距
      top: {
        type: String,
        default: '0px',
      },
      // 底部外边距
      bottom: {
        type: String,
        default: '0px',
      },
    },
    components: { backTop },
    data() {
      return {
        scroll: null,
        backTopShow: false,
      };
    },
    mounted() {
      this.scroll = new BScroll('.better-wrapper', {
        //解决不确定高度的图片滑动问题
        observeImage: true,
        observeDOM: true,
        click: true,
        useTransition: false,
        // 监听滚动
        probeType: 3,
      });
      //监听滚动位置
      this.scroll.on('scroll', position => {
        this.backTopShow = -position.y > this.$refs.wrapper.clientHeight;
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
  .lyb {
    overflow: hidden;
    .better-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }
  }
</style>
