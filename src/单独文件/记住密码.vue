<template>
  <div class="Home">
    <input type="text" v-model="text" />
    <input type="password" v-model="password" />
    <div class="rem"></div>
    <div class="rem">
      记住账号及密码
      <lyb-select-button
        :isSelect="isSelect"
        @click.native="isSelect = !isSelect"
        size="20"
      />
    </div>
    <button @click="login">点击登录</button>
  </div>
</template>
<script>
  import { $lybPA1 } from '@/common/lyb.js';
  export default {
    name: 'Home',
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
      if ($lybPA1.get('lyb')) {
        this.text = JSON.parse($lybPA1.get('lyb')).text;
        this.password = JSON.parse($lybPA1.get('lyb')).pw;
        this.isSelect = JSON.parse($lybPA1.get('lyb')).isSelect;
      }
    },
    methods: {
      // 记住密码及帐号
      remember() {
        if (this.isSelect) {
          $lybPA1.set(
            'lyb',
            JSON.stringify({
              text: this.text,
              pw: this.password,
              isSelect: this.isSelect,
            }),
          );
        } else {
          $lybPA1.del('lyb');
        }
      },
      login() {
        this.remember();
      },
    },
  };
</script>
<style scoped lang="less">
  .Home {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
      font-size: 20px;
      padding: 7px;
    }
    .rem {
      font-size: 18px;
      display: flex;
      align-items: center;
    }
  }
</style>
