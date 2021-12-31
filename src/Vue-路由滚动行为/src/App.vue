<template>
  <div class="app">
    <div class="top">
      <router-link
        v-for="(item, index) in data"
        :key="index"
        :to="{ name: item, hash: '#' + item }"
        tag="button"
      >
        跳转到{{ item }}
      </router-link>
    </div>
    <div class="main">
      <div v-for="(item, index) in data" :key="index" :id="item">
        第{{ item }}页
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        data: ['A', 'B', 'C', 'D', 'E'],
      };
    },
  };
</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    position: relative;
    width: 100vw;
    overflow-x: hidden;
    background-color: #000;
  }
  button {
    font-size: 25px;
    padding: 10px 25px;
  }
  .app {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .top {
    position: fixed;
    width: 100vw;
    min-width: 500px;
    top: 0;
    display: flex;
    justify-content: center;
    font-size: 50px;
    z-index: 999;
    background-color: #000;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  .main {
    position: relative;
    width: 750px;
    font-size: 100px;
    top: 100px;
  }
  .main div {
    width: 100%;
    height: 1000px;
    margin-bottom: 50px;
    color: #fff;
    text-align: center;
    border: 5px solid #fff;
  }
  .router-link-active {
    color: green;
  }
</style>
