<template>
  <div class="btn">
    <button @click="fn1">&nbsp;-&nbsp;</button>
    <button @click="fn2">&nbsp;+&nbsp;</button>
    <button @click="fn3(5)">点我+5</button>
    <button @click="fn5">添加学生名：冷弋白</button>
    <button @click="fn4">Vue.set添加年龄</button>
    <button @click="moduleAfn">lyb改成moduleA</button>
    <button @click="moduleAfn12">moudleA或lyb延迟一秒改成冷弋白</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    computed: {},
    methods: {
      fn1() {
        this.$store.commit('dec');
      },
      fn2() {
        this.$store.commit('inc');
      },
      fn3(count) {
        this.$store.commit('add', count);
      },
      fn4() {
        let stu = { age: 20 };
        this.$store.commit('addStu', stu);
      },
      fn5() {
        this.$store.commit('setName');
      },
      fn6() {
        this.$store.dispatch('addStus', '冷弋白').then(res => {
          console.log('里面已经完成了');
          console.log('resolve：' + res);
        });
      },
      moduleAfn() {
        this.$store.commit('fn8', 'moduleA');
      },
      moduleAfn12() {
        this.$store.dispatch('fn12');
      },
    },
  };
</script>
<style scope>
  .btn {
    position: relative;
    display: flex;
    flex-direction: column;
  }
  button {
    padding: 5px 5px;
  }
</style>
