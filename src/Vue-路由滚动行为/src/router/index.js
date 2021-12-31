import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const originalReplace = VueRouter.prototype.replace;

VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};
let lyb = ['A', 'B', 'C', 'D', 'E'];
let routes = [{ path: '/', redirect: '/A' }];
lyb.forEach(item => {
  routes.push({
    meta: {
      title: item,
    },
    name: item,
    path: '/' + item,
  });
});
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, save) {
    if (save) {
      console.log(to.hash);
      /* save记录上一次的位置 */
      return save;
    } else {
      return {
        selector: to.hash,
        behavior: 'smooth',
        offset: {
          y: 65,
        },
      };
    }
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
