<template>
  <div class="tabBar" :style="{ bottom: bottom }">
    <div class="box1" v-show="box1">
      <div class="left" @click="allSelectClick">
        <div class="select">
          <select-button :isSelect="isAllSelect" />
        </div>
        <div class="clear">全选</div>
      </div>
      <div class="total">
        <span>合计：</span>
        <span>￥</span>
        <span>{{ total }}</span>
      </div>
    </div>
    <div class="box2" @click="fn">
      <slot name="box2"></slot>
    </div>
  </div>
</template>
<!--
配置：
#box3 按钮文字
 -->
<script>
  // 复选框组件
  import SelectButton from '@/components/common/selectButton/selectButton.vue';
  export default {
    props: {
      bottom: {
        type: String,
        default: '0px',
      },
      // 是否显示全选、清空、合计
      box1: {
        type: Boolean,
        default: false,
      },
      // 是否显示合计
      box2: {
        type: Boolean,
        default: false,
      },
      //合计多少钱
      total: {
        type: Number,
        default: 0,
      },
      // 点击底部按钮后触发的函数
      fn: {
        type: Function,
        default() {},
      },
      //所有全选函数
      allSelectClick: {
        type: Function,
        default() {},
      },
      // “所有全选按钮”的状态
      isAllSelect: {
        type: Boolean,
        default: false,
      },
    },
    components: { SelectButton },
  };
</script>
<style scoped lang="less">
  @fontsize: 20px;
  .tabBar {
    position: absolute;
    width: 100%;
    height: 75px;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    background-color: #fff;
    border: 1px solid #eee;
    .box1 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 200px;
      margin-right: 15px;
      .left {
        display: flex;
        align-items: center;
        .select {
          width: @fontsize;
          height: @fontsize;
          margin-right: 10px;
        }
        .clear {
          font-size: @fontsize;
          font-family: PingFang SC;
          font-weight: 400;
          color: #b8b9bd;
        }
      }
      .total {
        font-size: 18px;
        font-weight: bold;
      }
    }
    .box2 {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      background: #151518;
      border-radius: 15px;
      font-size: @fontsize;
      font-family: PingFang SC;
      font-weight: bold;
      color: #ffffff;
    }
  }
</style>
