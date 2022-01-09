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
    </div>
    <div class="slide" ref="box">
      <scroll>
        <p v-for="(item, index) in 100" :key="index">{{ item }}</p>
      </scroll>
      <scroll>
        <p v-for="(item, index) in 100" :key="index">{{ item }}</p>
      </scroll>
      <scroll>
        <p v-for="(item, index) in 100" :key="index">{{ item }}</p>
      </scroll>
    </div>
  </div>
</template>
<script>
  import scroll from './scroll';
  export default {
    data() {
      return {
        tabName: ['one', 'two', 'three'],
        currentIndex: 0,
      };
    },
    components: { scroll },
    methods: {
      //@tab栏点击
      tabClick(index) {
        this.currentIndex = index;
        this.$refs.box.style.transform = `translateX(-${index * 100}%)`;
      },
    },
  };
</script>
<style scoped lang="less">
  .SingleMultiple {
    width: 100vw;
    height: 100vh;
    background-color: #000;
    overflow: hidden;
    // tab栏整体
    .tab {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      color: #fff;
      height: 50px;
      // tab栏标签
      .tab-item {
        flex: 1;
        font-size: 25px;
        text-align: center;
        line-height: 50px;
        &:hover {
          color: #000;
          background-color: #fff;
        }
      }
    }
    // 滑动位置
    .slide {
      display: flex;
      width: 100%;
      height: calc(100vh - 50px);
      transition: all 0.25s;
    }
  }
  .active {
    background-color: #fff !important;
    color: #000 !important;
  }
</style>
