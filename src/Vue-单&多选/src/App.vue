<template>
  <div class="App">
    <div class="data">已接收数据：{{ data ? data : '空' }}</div>
    <div class="box">
      <!-- 单选单tab栏 -->
      <single-Single :lyb="getData"></single-Single>
      <!-- 单选多tab栏 -->
      <single-multiple :lyb="getData"></single-multiple>
      <!-- 多选单tab栏 -->
      <multiple-single :lyb="getData"></multiple-single>
      <!-- 多选多tab栏 -->
      <multiple-Multiple :lyb="getData"></multiple-Multiple>
    </div>
  </div>
</template>
<script>
  import SingleSingle from './views/SingleSingle';
  import SingleMultiple from './views/SingleMultiple.vue';
  import MultipleSingle from './views/MultipleSingle';
  import MultipleMultiple from './views/MultipleMultiple';
  export default {
    name: '',
    components: {
      SingleSingle,
      SingleMultiple,
      MultipleSingle,
      MultipleMultiple,
    },
    data() {
      return {
        data: '',
      };
    },
    methods: {
      getData(data) {
        this.data = data;
      },
    },
  };
</script>
<style scoped lang="less">
  * {
    line-height: 1.25;
  }
  .App {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000;
    color: #fff;
    .data {
      display: flex;
      height: 1.3333rem;
      font-size: 0.3333rem;
    }
    .box {
      width: 100vw;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
</style>
