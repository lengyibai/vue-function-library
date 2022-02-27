<template>
  <div class="lyb">
    <transition-group name="del" appear>
      <div class="box" v-for="(item, index) in arr" :key="item" ref="box">
        <div class="son" @click="remove(index)" ref="son">
          点击删除{{ item }}
        </div>
      </div>
    </transition-group>
  </div>
</template>
<script>
import { $throttle } from '../utils/lyb';
import { scrollRepeat, mixedTS1 } from '../utils/scroll-animate';
export default {
  name: 'lyb',
  data() {
    return {
      arr: [],
      $throttle: null,
    };
  },
  created() {
    let arr = [];
    let i = 0;
    while (i < 100) {
      arr.push(i);
      i++;
    }
    this.arr.push(...arr);
    this.$throttle = $throttle(
      function () {
        scrollRepeat({
          repeat: this,
          el: this.$refs.box,
          son: this.$refs.son,
          into: 0.5,
          animate: mixedTS1,
          time: 0.5,
        });
      }.bind(this),
      100
    );
  },
  mounted() {
    window.onscroll = () => {
      this.$throttle();
    };
  },
  methods: {
    remove(index) {
      this.arr.splice(index, 1);
      // 删除元素有个 500ms 动画
      setTimeout(() => {
        this.$throttle();
      }, 500);
    },
  },
};
</script>
<style scoped lang="less">
.Box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  color: #fff;
  cursor: pointer;
  user-select: none;
}
.box {
  .Box();
  .son {
    .Box();
    background-color: #000;
    &:hover {
      color: #999;
    }
    &:active {
      color: #ccc;
    }
  }
}
.del-enter {
  transform: translateX(-200%) scale(0.1) !important;
  opacity: 0;
}

.del-leave-active {
  transition-delay: 0s !important;
  transform: translateX(200%) scale(0) !important;
}
.del-move,
.del-enter-active,
.del-leave-active {
  transition: all 0.5s;
}

.del-leave-active {
  position: absolute;
}
</style>
