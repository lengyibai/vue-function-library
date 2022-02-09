<template>
  <div class="GridLetter">
    <div
      style="display: grid; width: 100%; height: 100%; grid-gap: 5px"
      :style="{ gridTemplateAreas: layout }"
    >
      <lyb-grid-letter v-for="(item, index) in box" :area="item" :key="index">{{
        item
      }}</lyb-grid-letter>
    </div>
  </div>
</template>
<script>
/**
 * 字母模板虽然看着更直观、可读性强，但字母模板属于父元素属性，修改并不会触发子元素的响应式动画
 * 数字模板虽然可读性不强，但它直接修改的子元素属性，能触发子元素动画
 */
import LybGridLetter from "@/components/lyb-grid-letter.vue";
export default {
  name: "GridLetter",
  props: {},
  data() {
    return {
      box: "abcdefg",
      layouts: {
        500: `
            'a d d'
            'a d d'
            'a g f'
            'a g f'
            'b b e'
            'b b e'
            'c c c'
            'c c c'
          `,
        800: `
            'a b f f'
            'a b f f'
            'a b g e'
            'c b g e'
            'd d d e'
          `,
        1200: `
            'a a a a b b c c'
            'd d e e b b g g'
            'd d f f f f f f'
          `,
      },
      layout: "",
    };
  },
  components: { LybGridLetter },
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
      Object.keys(this.layouts).forEach(item => {
        if (document.documentElement.clientWidth > Number(item)) {
          this.layout = this.layouts[item];
        } else if (document.documentElement.clientWidth < 500) {
          this.layout = `
            'a a e e d d d d d d'
            'a a e e g g g g c c'
            'a a f f f f f f c c'
            'b b b b b b b b c c'
          `;
        }
      });
    },
  },
};
</script>
<style scoped lang="less">
.GridLetter {
  width: 100vw;
  height: 50vh;
  overflow: hidden;
  background-color: blue;
}
</style>
