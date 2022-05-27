<template>
  <div id="app">
    <index />
  </div>
</template>

<script>
import index from "@/views/index.vue";
export default {
  name: "App",
  components: { index },
};
</script>

<style lang="less">
#app {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
