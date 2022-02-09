<template>
  <div class="lyb-grid-letter" :style="{ gridArea: area }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    area: {
      type: String,
      default: "",
    },
  },
  name: "lyb-grid-letter",
};
</script>
<style scoped lang="less">
.lyb-grid-letter {
  width: 100%;
  height: 100%;
  background-color: #000;
  color: #fff;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "黑体";
}
</style>
