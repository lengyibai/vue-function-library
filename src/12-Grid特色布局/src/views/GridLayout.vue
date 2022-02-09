<template>
  <div class="GridLayout">
    <div class="grid" ref="GridLayout">
      <lyb-grid gap="5px" :count="5" ref="grid">
        <!-- 想让盒子的高度与宽度等比，需要在类名加入box，v-bind:eqhMultiple为等比倍数，默认宽高相等（1倍） -->
        <div class="box" v-for="index in count" :key="index" />
      </lyb-grid>
    </div>
    <div class="scroll">在此处可正常滑动/滚动</div>
  </div>
</template>
<script>
import LybGrid from "@/components/lyb-grid.vue";
export default {
  name: "GridLayout",
  data() {
    return {
      count: 1,
    };
  },
  watch: {
    // 模拟上拉加载，列表盒子数量增加的情况
    count: {
      handler() {
        this.$nextTick(() => {
          //测试函数，每次增加盒子就回到底部
          this.toBottom();
          //更新增加的盒子的高度
          this.$refs.grid.updateHeight();
        });
      },
    },
  },
  components: { LybGrid },
  mounted() {
    setInterval(() => {
      this.count++;
    }, 250);
  },
  methods: {
    toBottom() {
      let a = this.$refs.GridLayout;
      let b = a.scrollHeight - a.clientHeight;
      a.scrollTo({
        top: b > 0 && b,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style scoped lang="less">
.GridLayout {
  display: flex;
  width: 100vw;
  height: 100vh;
  .grid {
    width: 75%;
    height: 100%;
    overflow: auto;
    background-color: green;
    .box {
      height: 0;
      background-color: #000;
      transition: all 0.5s;
    }
  }
  .scroll {
    width: 25%;
    height: 100%;
    font-size: 35px;
    writing-mode: vertical-lr;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
