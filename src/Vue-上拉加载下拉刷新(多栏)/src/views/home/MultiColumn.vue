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
      <div class="box1"><single-column></single-column></div>
      <div class="box1"><single-column></single-column></div>
      <div class="box1"><single-column></single-column></div>
    </div>
  </div>
</template>
<script>
  //!··········公共组件··········!//
  import SingleColumn from './SingleColumn.vue';
  export default {
    props: {},
    data() {
      return {
        tabName: ['one', 'two', 'three'],
        currentIndex: 0,
      };
    },
    components: {
      SingleColumn,
    },
    ////···············methods···············////
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
      height: calc(100vh - 53px);
      transition: all 0.25s;
      .box {
        width: 100%;
        font-size: 25px;
        overflow: hidden;
        flex-shrink: 0;
        .better-content {
          width: 100%;
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }
  .active {
    background-color: #fff !important;
    color: #000 !important;
  }
</style>
