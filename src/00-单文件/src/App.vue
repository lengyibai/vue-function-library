<template>
  <div class="App">
    <h3>倒计时</h3>
    <count-down />
    <hr />
    <h3>记住密码</h3>
    <remember-password />
    <hr />
    <h3>拖拽排序</h3>
    <drag-sort />
  </div>
</template>
<script>
import CountDown from '@/views/CountDown.vue'; //倒计时
import RememberPassword from '@/views/RememberPassword.vue'; //记住密码
import DragSort from '@/views/DragSort.vue'; //记住密码
export default {
  name: 'App',
  props: {},
  data() {
    return {};
  },
  components: { CountDown, RememberPassword, DragSort },
  methods: {},
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.App {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
hr {
  width: 100vw;
  margin: 10px 0;
}
</style>
