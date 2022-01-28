<template>
  <div class="btn">
    <img :src="isSelect ? selectedImg : unSelectedImg" alt="" />
  </div>
</template>
<script>
export default {
  props: {
    //是否选中
    isSelect: {
      type: Boolean,
      default: false,
    },
    //修改图标，本地图片使用 require 传入
    unSelectedImg: {
      //未选中
      default: require('./img/unSelected.png'),
    },
    selectedImg: {
      //选中
      default: require('./img/selected.png'),
    },
  },
};
</script>
<style scoped>
.btn img {
  width: 100%;
  height: 100%;
  vertical-align: top;
}
</style>
