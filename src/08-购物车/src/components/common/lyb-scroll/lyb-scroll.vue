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
  </div>
</template>
<script>
  import BScroll from '@better-scroll/core';
  import ObserveImage from '@better-scroll/observe-image';
  import ObserveDOM from '@better-scroll/observe-dom';
  BScroll.use(ObserveDOM);
  BScroll.use(ObserveImage);
  export default {
    name: 'lyb-scroll',
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
    data() {
      return {
        scroll: null,
      };
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll('.better-wrapper', {
          observeImage: true,
          observeDOM: true,
          click: true,
          useTransition: false,
        });
      });
    },
  };
</script>
<style scoped lang="less">
  .lyb-scroll {
    overflow: hidden;
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
