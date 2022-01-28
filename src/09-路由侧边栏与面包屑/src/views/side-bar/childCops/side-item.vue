<template>
  <div class="side-item">
    <template v-for="route in routes">
      <!-- 判断是否存在子路由 -->
      <template v-if="route.children && route.children.length">
        <!-- index决定是否展开 -->
        <el-submenu :index="route.path" :key="route.path">
          <template slot="title">
            <span style="font-size: 25px; color: #fff">
              {{ route.meta.title }}
            </span>
          </template>
          <!-- 存在子路由则进行递归生成栏目 -->
          <side-item :routes="route.children"></side-item>
        </el-submenu>
      </template>
      <!-- 如果不存在子路由，则作为路由跳转链接 -->
      <template v-else>
        <!-- index决定是否高亮 -->
        <el-menu-item
          :index="route.meta.full_path"
          :key="route.path"
          v-if="route.meta"
          style="font-size: 25px"
        >
          <span slot="title">{{ route.meta.title }}</span>
        </el-menu-item>
      </template>
    </template>
  </div>
</template>
<script>
export default {
  name: 'side-item',
  props: {
    routes: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
};
</script>
