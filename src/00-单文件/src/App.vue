<template>
  <div class="App">
    <h3>倒计时</h3>
    <count-down />
    <hr style="width: 100vw" />
    <h3>记住密码</h3>
    <remember-password />
  </div>
</template>
<script>
import CountDown from '@/views/CountDown.vue'; //倒计时
import RememberPassword from '@/views/RememberPassword.vue'; //记住密码
export default {
  name: 'App',
  props: {},
  data() {
    return {};
  },
  components: { CountDown, RememberPassword },
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
</style>
