<template>
  <div class="index">
    <div class="top">顶部文字</div>
    <div class="content">
      <div class="left">左侧</div>
      <div class="right">
        <div class="box" v-for="(item, index) in 100" :key="index"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
* {
  color: #fff;
}
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.index {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .top {
    .flex();
    width: 100%;
    height: 0.651rem;
    background-color: #e74c3c;
    font-size: 0.3255rem;
  }
  .content {
    @padding: 0.1628rem;
    @padding-480: 0.2279rem;
    display: flex;
    width: 100%;
    height: calc(100% - 0.651rem - @padding);
    align-items: stretch;
    background-color: #f39c12;
    padding: @padding;
    @media screen and (max-width: 750px) {
      flex-direction: column;
    }
    @media screen and (max-width: 480px) {
      padding: @padding-480;
    }
    .left {
      .flex();
      width: 25%;
      background-color: #2980b9;
      margin-right: @padding;
      font-size: 0.3255rem;
      @media screen and (max-width: 750px) {
        width: 100%;
        height: 1.3021rem;
        margin-bottom: 0.1628rem;
      }
      @media screen and (max-width: 480px) {
        margin-bottom: @padding-480;
      }
    }
    .right {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-flow: row dense;
      align-content: flex-start;
      gap: @padding;
      flex: 1;
      overflow: auto;
      background-color: #27ae60;
      font-size: 0.3255rem;
      overflow: auto;
      padding: @padding;
      @media screen and (max-width: 840px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media screen and (max-width: 480px) {
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
        padding: @padding-480;
        gap: @padding-480;
      }
      .box {
        height: 1.3021rem;
        background-color: #8e44ad;
        @media screen and (max-width: 840px) {
          height: 1.9531rem;
        }
        @media screen and (max-width: 480px) {
          height: 1.9531rem;
        }
      }
    }
  }
}
</style>
