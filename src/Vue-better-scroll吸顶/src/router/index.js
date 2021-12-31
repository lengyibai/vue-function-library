import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

/* 首页 */
const home = () => import('@/views/home/Home.vue');

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    meta: {
      title: '首页',
    },
    path: '/home',
    component: home,
  },
];
const router = new VueRouter({
  routes,
});

// 设置标签名
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
