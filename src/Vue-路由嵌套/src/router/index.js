import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
const layout = () => import('@/views/side-bar/side-bar.vue');
//设置hidden，如果为true，则不显示在侧边栏
const routes = [
  //!··········一级路由··········!//
  {
    path: '/',
    redirect: '/A',
  },
  {
    path: '/A',
    component: layout,
    redirect: '/A/A1',
    meta: { title: 'A' },
    //@········二级路由········@//
    children: [
      {
        path: 'A1',
        meta: { title: 'A1', full_path: '/A/A1' },
        component: () => import('@/views/son/A/A1.vue'),
      },
    ],
  },

  //!··········一级路由··········!//
  {
    path: '/B',
    component: layout,
    redirect: '/B/B1',
    meta: { title: 'B' },
    //@········二级路由········@//
    children: [
      {
        path: 'B1',
        meta: { title: 'B1', full_path: '/B/B1' },
        component: () => import('@/views/son/B/B1.vue'),
      },
      {
        path: 'B2',
        redirect: '/B2/B2-1',
        meta: { title: 'B2', full_path: '/B/B2' },
        component: () => import('@/views/son/empty.vue'),
        //#········三级路由········#//
        children: [
          {
            path: 'B2-1',
            meta: { title: 'B2-1', full_path: '/B/B2/B2-1' },
            component: () => import('@/views/son/B/B2-1.vue'),
          },
        ],
      },
    ],
  },

  //!··········一级路由··········!//
  {
    path: '/C',
    meta: { title: 'C' },
    component: layout,
    redirect: '/C/C1',
    //@········二级路由········@//
    children: [
      {
        path: 'C1',
        meta: { title: 'C1', full_path: '/C/C1' },
        component: () => import('@/views/son/C/C1.vue'),
      },
      {
        path: 'C2',
        meta: { title: 'C2', full_path: '/C/C2' },
        component: () => import('@/views/son/C/C2.vue'),
      },
      {
        path: 'C3',
        redirect: '/C3/C3-1',
        meta: { title: 'C3', full_path: '/C/C3' },
        component: () => import('@/views/son/empty.vue'),
        //#········三级路由········#//
        children: [
          {
            path: 'C3-1',
            meta: { title: 'C3-1', full_path: '/C/C3/C3-1' },
            component: () => import('@/views/son/C/C3-1.vue'),
          },
          {
            path: 'C3-2',
            redirect: '/C3-2/C3-2-1',
            meta: { title: 'C3-2', full_path: '/C/C3/C3-2' },
            component: () => import('@/views/son/empty.vue'),
            //$········四级路由········$//
            children: [
              {
                path: 'C3-2-1',
                meta: { title: 'C3-2-1', full_path: '/C/C3/C3-2/C3-2-1' },
                component: () => import('@/views/son/C/C3-2-1.vue'),
              },
              {
                path: 'C3-2-2',
                redirect: '/C3-2-2/C3-2-2-1',
                meta: { title: 'C3-2-2', full_path: '/C/C3/C3-2/C3-2-2' },
                component: () => import('@/views/son/empty.vue'),
                //%········五级路由········%//
                children: [
                  {
                    path: 'C3-2-2-1',
                    meta: {
                      title: 'C3-2-2-1',
                      full_path: '/C/C3/C3-2/C3-2-2/C3-2-2-1',
                    },
                    component: () => import('@/views/son/C/C3-2-2-1.vue'),
                  },
                  {
                    path: 'C3-2-2-2',
                    meta: {
                      title: 'C3-2-2-2',
                      full_path: '/C/C3/C3-2/C3-2-2/C3-2-2-2',
                    },
                    component: () => import('@/views/son/empty.vue'),
                    //%········五级路由········%//
                    children: [
                      {
                        path: 'C3-2-2-2-1',
                        meta: {
                          title: 'C3-2-2-2-1',
                          full_path: '/C/C3/C3-2/C3-2-2/C3-2-2-2/c3-2-2-2-1',
                        },
                        component: () => import('@/views/son/C/C3-2-2-2-1.vue'),
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
const router = new VueRouter({
  routes,
});

// //全局前置守卫
// router.beforeEach((to, from, next) => {
//   console.log('1、触发全局前置守卫beforeEach');
//   document.title = to.meta.title;
//   //next()正确用法
//   /* if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   else next() */
//   next();
// });

// //全局解析守卫
// router.beforeResolve((to, from, next) => {
//   console.log('2、触发全局解析守卫beforeResolve');
//   next();
// });

// //全局后置钩子
// router.afterEach((to, from) => {
//   console.log('3、触发全局后置钩子afterEach');
// });
export default router;
