<template>
  <div class="App">
    <grid-number v-if="true" style="margin-bottom: 5px" />
    <grid-letter v-if="true" style="margin-bottom: 5px" />
    <grid-layout v-if="true" />
  </div>
</template>
<script>
import GridLayout from "./views/GridLayout.vue";
import GridLetter from "./views/GridLetter.vue";
import GridNumber from "./views/GridNumber.vue";
export default {
  name: "App",
  components: { GridLayout, GridLetter, GridNumber },
};
</script>
<style scoped lang="less">
.App {
  width: 100vw;
}
</style>
