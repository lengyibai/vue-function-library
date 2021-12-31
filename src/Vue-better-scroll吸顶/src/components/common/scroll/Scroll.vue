<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll';
  import ObserveImage from '@better-scroll/observe-image';
  BScroll.use(ObserveImage);
  export default {
    props: {
      //通过传值来操作判断是否实时监听坐标
      probeType: {
        type: Number,
        default: 0,
      },
      // 开启上拉加载
      pullUpLoad: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        scroll: null,
      };
    },
    components: {},
    mounted() {
      this.scroll = new BScroll('.wrapper', {
        pullUpLoad: this.pullUpLoad, //上拉加载
        pullDownRefresh: true, //下拉刷新
        probeType: this.probeType, //开启侦测滚动坐标3
        observeImage: true, //解决不确定高度的图片滑动问题
        click: true, //解决 BetterScroll 默认会阻止浏览器的原生 click 事件的问题
        bounceTime: 500, //回弹动画时长
        useTransition: false, //不使用css3滚动
      });
      //监听滚动位置
      this.scroll.on('scroll', position => {
        this.$emit('scroll', position);
      });
      // 监听上拉加载(由于上拉加载通过this.pullUpLoad判断是否开启，但默认值为false，而这又使用了上拉加载，会导致报错，所以需要进行一个判断是否使用)
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp');
          setTimeout(() => {
            this.scroll.finishPullUp();
          }, 500);
        });
      }
      this.scroll.on('pullingDown', () => {
        this.$emit('pullingDown');
        setTimeout(() => {
          this.scroll.finishPullDown();
        }, 2000);
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
<style scoped>
  .wrapper {
    position: absolute;
    top: 1rem;
    left: 0;
    right: 0;
    bottom: 1.3867rem;
    overflow: hidden;
  }
</style>
