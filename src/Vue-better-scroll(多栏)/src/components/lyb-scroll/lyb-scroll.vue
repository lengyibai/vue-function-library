<template>
  <div class="lyb-scroll">
    <div
      class="better-wrapper"
      ref="wrapper"
      :style="{ height: 'calc(100vh - ' + bottom + ' - ' + top + ')' }"
    >
      <div class="better-content">
        <slot></slot>
      </div>
    </div>
    <back-top :show="backTopShow" :father="scroll" />
  </div>
</template>
<script>
  import BScroll from '@better-scroll/core';
  import ObserveImage from '@better-scroll/observe-image';
  import ObserveDOM from '@better-scroll/observe-dom';
  BScroll.use(ObserveDOM);
  BScroll.use(ObserveImage);
  import backTop from './back-top/back-top.vue';
  export default {
    name: 'index',
    components: { backTop },
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
      //是否显示回到顶部和监听坐标
      backTop: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        scroll: null,
        backTopShow: false,
      };
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          observeImage: true,
          observeDOM: true,
          click: true,
          useTransition: false,
          // 监听滚动
          probeType: this.backTop && 3,
        });

        this.scroll.on('scroll', position => {
          this.backTopShow = -position.y > this.$refs.wrapper.clientHeight;
          this.$emit('scroll', position);
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
  .lyb-scroll {
    position: relative;
    width: 100%;
    flex-shrink: 0;
    .better-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
      .better-content {
        min-height: 100%;
      }
    }
  }
</style>
