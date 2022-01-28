<template>
  <div class="App">
    <div class="data">已接收数据：{{ data ? data : '空' }}</div>
    <div class="box">
      <!-- 单选单tab栏 -->
      <single-Single :lyb="getData" />
      <!-- 单选多tab栏 -->
      <single-multiple :lyb="getData" />
      <!-- 多选单tab栏 -->
      <multiple-single :lyb="getData" />
      <!-- 多选多tab栏 -->
      <multiple-Multiple :lyb="getData" />
    </div>
  </div>
</template>
<script>
import SingleSingle from './views/SingleSingle.vue';
import SingleMultiple from './views/SingleMultiple.vue';
import MultipleSingle from './views/MultipleSingle.vue';
import MultipleMultiple from './views/MultipleMultiple.vue';
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
      setTimeout(() => {
        this.data = data;
      }, 750);
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
