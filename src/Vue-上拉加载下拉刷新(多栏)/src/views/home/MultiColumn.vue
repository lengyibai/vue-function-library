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
      <div class="box"><single-column></single-column></div>
      <div class="box">
        <single-column v-if="cache[1]"></single-column>
      </div>
      <div class="box">
        <single-column v-if="cache[2]"></single-column>
      </div>
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
        // tab栏标签页懒加载
        cache: [true, false, false],
      };
    },
    components: {
      SingleColumn,
    },
    ////···············methods···············////
    methods: {
      //@tab栏点击
      tabClick(index) {
        // tab栏标签页懒加载
        this.cache[index] = true;
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
      position: relative;
      height: 50px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      color: #fff;
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
      transition: all 0.25s;
      .box {
        height: 100%;
      }
    }
  }
  .active {
    background-color: #fff !important;
    color: #000 !important;
  }
</style>
