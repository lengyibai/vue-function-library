<template>
  <div class="App">
    <router-view />
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
  };
</script>

<style>
  * {
    color: #fff !important;
  }
  .App {
    display: flex;
    flex-direction: column;
  }
  .lyb {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: #000;
    transform-origin: center;
    font-size: 16px;
  }
</style>
