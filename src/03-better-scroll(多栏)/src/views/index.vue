<!-- 单选多tab栏 -->
<template>
  <div class="index">
    <lyb-tabslide>
      <scroll class="slide-item" top="50px">
        <div class="flex">
          <p v-for="(item, index) in 100" :key="index">{{ item }}</p>
        </div>
      </scroll>
      <scroll class="slide-item" top="50px">
        <div class="flex">
          <p v-for="(item, index) in 100" :key="index">{{ item }}</p>
        </div>
      </scroll>
      <scroll class="slide-item" top="50px">
        <div class="flex">
          <p v-for="(item, index) in 100" :key="index">{{ item }}</p>
        </div>
      </scroll>
    </lyb-tabslide>
  </div>
</template>
<script>
import scroll from '@/components/lyb-scroll/lyb-scroll.vue';
import lybTabslide from '@/components/lyb-tabslide/lyb-tabslide.vue';
export default {
  data() {
    return {};
  },
  components: { lybTabslide, scroll },
};
</script>
<style scoped lang="less">
.index {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .slide-item {
    p {
      text-align: center;
      font-size: 50px;
    }
  }
}
</style>
