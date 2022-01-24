<template>
  <div class="lyb">
    <transition-group name="del" appear>
      <div
        class="box"
        v-for="(item, index) in arr"
        @click="remove(index)"
        :key="item"
        ref="box"
      >
        点击删除{{ item }}
      </div>
    </transition-group>
    <div class="box" ref="lyb"></div>
    <div style="height: 100vh"></div>
  </div>
</template>
<script>
  import { $lybF5 } from '../utils/lyb';
  import { $lybS2, mixedTR5 } from '../utils/scroll-animate';
  export default {
    name: 'lyb',
    data() {
      return {
        arr: [],
        $lybF5: null,
      };
    },
    created() {
      let arr = [];
      let i = 0;
      while (i < 50) {
        arr.push(i);
        i++;
      }
      this.arr.push(...arr);
      this.$lybF5 = $lybF5(
        function () {
          $lybS2({
            el: this.$refs.box,
            animate: mixedTR5,
          });
        }.bind(this),
        100,
      );
    },
    mounted() {
      window.onscroll = () => {
        this.$lybF5();
        // 跟随页面滚动播放动画，由于是根据滚动距离逐帧播放动画，此时不能使用节流
        $lybS2(
          {
            el: [this.$refs.lyb],
            scrollFllow: true,
            playY: '0%',
            PLAYY: '300%',
          },
          { x: '200%' },
        );
      };
    },
    methods: {
      remove(index) {
        this.arr.splice(index, 1);
        this.$lybF5();
      },
    },
  };
</script>
<style scoped lang="less">
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    user-select: none;
    &:hover {
      color: #999;
    }
    &:active {
      color: #ccc;
    }
  }
  .del-enter {
    transform: translateX(-100%) rotate(-180deg) scale(0) !important;
    opacity: 0;
  }

  .del-leave-active {
    transition-delay: 0s !important;
    transform: translateX(100%) rotateZ(-360deg) scale(0) !important;
    height: 0;
    overflow: hidden;
  }
  .del-move,
  .del-enter-active,
  .del-leave-active {
    transition: all 0.5s;
  }
</style>
