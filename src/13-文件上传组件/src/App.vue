<template>
  <div class="app">
    <button @click="fn" style="width: 125px; height: 55px">
      开启{{ multiple }}文件上传
    </button>
    <lyb-upload
      :multiple="multiple !== '多'"
      url="https://jsonplaceholder.typicode.com/posts/"
      @finish="finish"
    />
  </div>
</template>
<script>
import LybUpload from './components/lyb-upload/lyb-upload.vue';
export default {
  components: { LybUpload },
  data() {
    return {
      multiple: '多',
    };
  },
  methods: {
    finish(res) {
      console.log(res);
    },
    fn() {
      this.multiple = this.multiple === '单' ? '多' : '单';
    },
  },
};
</script>
<style scoped>
.app {
  display: flex;

  flex-direction: column;
}
</style>
