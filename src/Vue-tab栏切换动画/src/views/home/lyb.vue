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
    <div class="scroll">
      <div class="box" ref="box">
        <div class="box1" v-for="(item, index) in tabName" :key="index">
          {{ index }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  //!··········公共组件··········!//
  export default {
    props: {},
    data() {
      return {
        tabName: ['one', 'two', 'three'],
        currentIndex: 0,
      };
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
    .tab {
      position: sticky;
      top: 0rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      background-color: #000;
      color: #fff;
      z-index: 999;
      .tab-item {
        flex: 1;
        text-align: center;
        font-size: 0.666667rem;
        padding: 0.16rem 0;
        &:hover {
          color: #000;
          background-color: #fff;
        }
      }
    }
    .scroll {
      display: flex;
      justify-content: center;
      width: 100vw;
      overflow: hidden;
      .box {
        width: 100%;
        display: flex;
        flex-direction: row;
        height: calc(100vh - 1.066667rem);
        transition: all 0.5s;
        color: #fff;
        flex-shrink: 0;
        .box1 {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 100%;
          height: 100%;
          flex-shrink: 0;
          font-size: 100px;
        }
      }
    }
  }
  .active {
    background-color: #fff !important;
    color: #000 !important;
  }
  @keyframes rotate {
    100% {
      transform: rotateZ(360deg);
    }
  }
</style>
