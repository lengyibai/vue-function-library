<template>
  <div class="GridNumber">
    <transition-group
      style="display: grid; width: 100%; height: 100%; grid-gap: 5px"
    >
      <lyb-grid-number
        v-for="(item, index) in box"
        :x="item[0]"
        :y="item[1]"
        :countX="item[2]"
        :countY="item[3]"
        :key="index"
        >{{ index + 1 }}</lyb-grid-number
      >
    </transition-group>
  </div>
</template>
<script>
/**
 * 数字模板虽然可读性不强，但它直接修改的子元素属性，能触发子元素动画
 * 字母模板虽然看着更直观、可读性强，但字母模板属于父元素属性，修改并不会触发子元素的响应式动画
 */
import LybGridNumber from "@/components/lyb-grid-number.vue";
export default {
  name: "GridNumber",
  props: {},
  data() {
    return {
      boxs: {
        500: [
          [1, 1, 1, 2],
          [1, 3, 2, 1],
          [1, 4, 3, 1],
          [2, 1, 2, 1],
          [3, 3, 1, 1],
          [3, 2, 1, 1],
          [2, 2, 1, 1],
        ],
        800: [
          [1, 1, 1, 2],
          [2, 1, 1, 3],
          [1, 3, 1, 1],
          [1, 4, 3, 1],
          [4, 2, 1, 3],
          [3, 1, 2, 1],
          [3, 2, 1, 2],
        ],
        1200: [
          [1, 1, 4, 1],
          [5, 1, 2, 2],
          [7, 1, 2, 1],
          [1, 2, 2, 2],
          [3, 2, 2, 1],
          [3, 3, 6, 1],
          [7, 2, 2, 1],
        ],
      },
      box: [],
    };
  },
  components: { LybGridNumber },
  mounted() {
    this.fn();
    window.addEventListener(
      "resize",
      function () {
        this.fn();
      }.bind(this)
    );
  },
  methods: {
    fn() {
      Object.keys(this.boxs).forEach(item => {
        if (document.documentElement.clientWidth > Number(item)) {
          this.box = this.boxs[item];
        } else if (document.documentElement.clientWidth < 500) {
          this.box = [
            [1, 1, 1, 3],
            [1, 4, 4, 1],
            [5, 2, 1, 3],
            [3, 1, 3, 1],
            [2, 1, 1, 2],
            [2, 3, 2, 1],
            [4, 2, 1, 2],
            [3, 2, 1, 1],
          ];
        }
      });
    },
  },
};
</script>
<style scoped lang="less">
.GridNumber {
  width: 100vw;
  height: 50vh;
  overflow: hidden;
  background-color: red;
}
</style>
