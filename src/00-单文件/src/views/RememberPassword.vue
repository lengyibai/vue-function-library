<template>
  <div class="RememberPassword">
    <input type="text" v-model="text" />
    <input type="password" v-model="password" />
    <div class="rem"></div>
    <div class="rem">
      <label for="a"> 记住账号及密码</label>
      <input type="checkbox" id="a" v-model="isSelect" />
    </div>
    <button @click="login">点击登录</button>
  </div>
</template>
<script>
import { $storage } from '@/util/lyb.js';
export default {
  data() {
    return {
      text: '',
      password: '',
      //是否记住密码
      isSelect: false,
    };
  },
  mounted() {
    //自动填充
    if ($storage.get('lyb')) {
      this.text = JSON.parse($storage.get('lyb')).text;
      this.password = JSON.parse($storage.get('lyb')).pw;
      this.isSelect = JSON.parse($storage.get('lyb')).isSelect;
      console.warn('已获取账号及密码');
    }
  },
  methods: {
    // 记住密码及帐号
    remember() {
      if (this.isSelect) {
        $storage.set(
          'lyb',
          JSON.stringify({
            text: this.text,
            pw: this.password,
            isSelect: this.isSelect,
          })
        );
        console.warn('已记住 账号及密码');
      } else {
        $storage.del('lyb');
        console.warn('已清除密码');
      }
    },
    login() {
      this.remember();
      location.reload();
    },
  },
};
</script>
<style scoped lang="less">
.RememberPassword {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
