<template>
  <div class="index">
    <div class="head">导航栏</div>
    <TaskView />
    <div class="links">
      <div class="add" @click="add(item)" v-for="(item, index) in links" :key="index">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
import TaskView from "@/components/TaskView";
export default {
  name: "index",
  data() {
    return {
      links: [
        {
          name: "锚点路由",
          href: "https://lengyibai-vue2-function-library.netlify.app/dist/01",
        },
        {
          name: "单多选",
          href: "https://lengyibai-vue2-function-library.netlify.app/dist/04",
        },
        {
          name: "购物车",
          href: "https://lengyibai-vue2-function-library.netlify.app/dist/08",
        },
        {
          name: "文件上传",
          href: "https://lengyibai-vue2-function-library.netlify.app/dist/10",
        },
      ],
    };
  },
  components: { TaskView },
  methods: {
    add(item) {
      this.$bus.$emit("add-link", item);
    },
  },
};
</script>
<style scoped lang="less">
.index {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .head {
    width: 100vw;
    height: 50px;
    background-color: #000;
    color: #fff;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .links {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    .add {
      position: relative;
      width: fit-content;
      top: 0;
      left: 0;
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      border: 2px solid #000;
      font-size: 25px;
      cursor: pointer;
      user-select: none;
      color: #000;
      transition: all 0.5s;
      &:hover {
        transition: all 0s;
        background-color: #000;
        color: #fff;
      }
    }
  }
}
</style>
