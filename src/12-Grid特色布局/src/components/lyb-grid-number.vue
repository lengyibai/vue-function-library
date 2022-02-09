<template>
  <div class="lyb-grid-number" :style="{ gridArea: gridArea }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "lyb-grid-number",
  props: {
    //从左到右，从第几个格子开始？
    x: {
      type: Number,
      default: 0,
    },
    //从上到下，从第几个格子开始？
    y: {
      type: Number,
      default: 0,
    },
    //从左到右占用多少格
    countX: {
      type: Number,
      default: 0,
    },
    //从上到下占用多少格
    countY: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    gridArea() {
      return `${this.y} / ${this.x} / ${this.y + this.countY} / ${
        this.x + this.countX
      }`;
    },
  },
};
</script>
<style scoped lang="less">
.lyb-grid-number {
  width: 100%;
  height: 100%;
  background-color: #000;
  color: #fff;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "黑体";
  transition: all 1s;
}
</style>
