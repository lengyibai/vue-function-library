<template>
  <div class="tabBar" :style="{ bottom: bottom }">
    <div class="box1" v-show="box1">
      <div class="left" @click="allSelectClick">
        <div class="select">
          <select-button :isSelect="isAllSelect" />
        </div>
        <div class="clear">清空购物车</div>
      </div>
      <div class="total">
        <span>合计：</span>
        <span>$</span>
        <span>{{ total }}</span>
      </div>
    </div>
    <div class="box2" v-show="box2">
      <span>实付款：</span>
      <span>$</span>
      <span>78</span>
    </div>
    <input
      placeholder="写下你的评价"
      type="text"
      v-model="value"
      v-show="input"
      @input="evaluate"
    />
    <div class="box3" @click="fn">
      <slot name="box3"></slot>
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
      //是否显示输入框
      input: {
        type: Boolean,
        default: false,
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
    data() {
      return {
        value: '',
      };
    },
    components: { SelectButton },
    methods: {
      //输入评价
      evaluate() {
        this.$emit('value', this.value);
      },
    },
  };
</script>
<style scoped lang="less">
  .tabBar {
    position: fixed;
    width: 100vw;
    height: 1.9733rem;
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 0.44rem;
    background-color: #fff;
    border: 1px solid #ccc;
    input {
      height: 1.3333rem;
      margin-right: 0.2133rem;
      border: none;
      background: #f8f8f8;
      border-radius: 0.2133rem 0rem 0.2133rem 0.2133rem;
      font-size: 0.3733rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: #000;
      padding-left: 0.2933rem;
    }
    .box1 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 5.84rem;
      margin-right: 0.5333rem;
      .left {
        display: flex;
        flex-direction: row;
        align-items: center;
        .select {
          width: 0.4267rem;
          height: 0.4267rem;
          margin-right: 0.1733rem;
        }
        .clear {
          font-size: 0.2667rem;
          font-family: PingFang SC;
          font-weight: 400;
          color: #b8b9bd;
        }
      }
      .total {
        font-size: 0.3733rem;
        font-family: PingFang SC;
        font-weight: bold;
        color: #ff6d66;
      }
    }
    .box2 {
      font-size: 0.3733rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: #ff6d66;
      margin-right: 1.3867rem;
    }
    .box3 {
      flex: 1;
      // 解决文字居中问题
      display: flex;
      justify-content: center;
      align-items: center;
      height: 1.3333rem;
      background: #151518;
      border-radius: 0.2133rem;
      font-size: 0.4267rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: #ffffff;
    }
  }
</style>
