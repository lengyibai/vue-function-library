<template>
  <div class="back-top" :class="{ backTopShow: show }" @click="backTop">
    <img :src="imgUrl" />
  </div>
</template>
<script>
  export default {
    name: 'lybBackTop',
    props: {
      //更换返回顶部图标，引入本地图片方式要使用require，和下面一致
      imgUrl: {
        default: require('./img/backTop.png'),
      },
      show: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {};
    },
    methods: {
      backTop() {
        const scrollBox = this.$parent.$refs.scroll;
        scrollBox.scrollTop = 250;
        (function fn() {
          if (scrollBox.scrollTop <= 0) return;
          scrollBox.scrollTop -= scrollBox.scrollTop / 10;
          requestAnimationFrame(fn);
        })();
      },
    },
  };
</script>
<style scoped>
  .back-top {
    width: 1rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 1rem;
    bottom: 0;
    box-sizing: border-box;
    background-color: #fff;
    transition: all 0.25s;
    transform: translateY(100%);
    border-radius: 50%;
    box-shadow: 0rem 0 0.1333rem 0rem rgba(0, 0, 0, 0.2);
    z-index: 999;
  }
  .back-top img {
    width: 60%;
    height: 60%;
    background-color: #fff;
  }
  .backTopShow {
    bottom: 2.6667rem;
    transform: translateY(0);
  }
</style>
