import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};
const routes = [
  {
    path: '/',
    redirect: '/lyb/A',
  },
  {
    meta: {
      title: '冷弋白的网页',
    },
    name: 'lyb',
    path: '/lyb/:page',
    component: () => import('../views/index.vue'),
  },
];
const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
