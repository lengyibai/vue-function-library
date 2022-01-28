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
      <div
        class="foil"
        :style="{
          left: (currentIndex / tabName.length) * 100 + '%',
          width: 100 / tabName.length + '%',
        }"
      ></div>
    </div>
    <div class="slide" ref="slide">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tabName: {
      type: Array,
      default() {
        return ['one', 'two', 'three'];
      },
    },
    fixed: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentIndex: 0, // 鼠标按下位置
    };
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      this.$refs.slide.style.transform = `translateX(-${index * 100}%)`;
    },
  },
};
</script>
<style scoped lang="less">
.SingleMultiple {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  // tab栏整体
  .tab {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #aaa;
    height: 50px;
    // tab栏标签
    .tab-item {
      flex: 1;
      font-size: 25px;
      text-align: center;
      line-height: 50px;
    }
    .foil {
      position: absolute;
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      transition: all 0.25s;
      &::before {
        content: '';
        position: absolute;
        width: 25%;
        height: 3px;
        background-color: #000;
        bottom: 5px;
      }
    }
  }
  // 滑动位置
  .slide {
    display: flex;
    width: 100%;
    height: calc(100vh - 50px);
    transition: all 0.25s;
    .slide-item {
      width: 100%;
      height: 100%;
      flex-shrink: 0;
    }
  }
}
.active {
  transition: all 0.1s;
  font-size: 30px !important;
  color: #000 !important;
}
</style>
