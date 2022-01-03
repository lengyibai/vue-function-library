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
  </div>
</template>
<script>
  import { $lybF5 } from './lyb.js';
  import { appear_animate } from './appear_animate.js';
  export default {
    name: 'lyb',
    data() {
      return {
        arr: [],
        $lybF5: null,
      };
    },
    mixins: [appear_animate],
    created() {
      let arr = [];
      let i = 0;
      while (i < 50) {
        arr.push(i);
        i++;
      }
      this.arr.push(...arr);
      this.$lybF5 = $lybF5(
        function() {
          this.$lybS2({ el: ['box', 'lyb'] });
        }.bind(this),
        100,
      );
    },
    mounted() {
      this.$lybF5();
      window.onscroll = () => {
        this.$lybF5();
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
    width: 100px;
    height: 100px;
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

  .del-enter-active,
  .del-leave-active {
    transition: all 0.5s;
  }
</style>
