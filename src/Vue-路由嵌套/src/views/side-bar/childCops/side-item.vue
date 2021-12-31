<template>
  <div class="router-btn">
    <div
      @click="fn(item)"
      :class="{
        btn: !item.children,
        title: item.children,
        active: item.meta.full_path == $route.path,
      }"
      v-if="item.path != '/'"
    >
      {{ item.meta.title }}
    </div>

    <transition name="oc" appear>
      <div v-if="item.children" v-show="show">
        <side-item
          v-for="(item, index) in item.children"
          :item="item"
          :key="index"
          ref="box"
        />
      </div>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'side-item',
    props: ['item'],
    data() {
      return {
        show: false,
      };
    },
    created() {
      console.log(this.item);
      if (this.item.children && this.$route.path.includes(this.item.path)) {
        this.show = true;
      }
    },
    methods: {
      fn(path) {
        console.log(JSON.parse(JSON.stringify(path)));
        this.show = !this.show;
        if (this.item.children) {
        } else {
          this.$router.push(this.item.meta.full_path);
        }
      },
    },
  };
</script>
<style scoped>
  .title,
  .btn {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    user-select: none;
    cursor: pointer;
  }
  /* 没有子路由使用 */
  .title {
    border: 1px solid #fff;
  }
  /* 有子路由使用 */
  .btn {
    color: #555 !important;
    font-style: italic;
    background-color: #000;
  }
  .btn:hover {
    color: rgb(0, 153, 255) !important;
  }
  .active {
    background-color: #000;
    color: rgb(0, 153, 255) !important;
  }
</style>
