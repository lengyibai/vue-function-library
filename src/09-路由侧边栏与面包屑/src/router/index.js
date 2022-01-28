import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err);
};
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
const layout = () => import('@/views/side-bar/side-bar.vue');
//设置hidden，如果为true，则不显示在侧边栏
const routes = [
  //#####··········一级路由··········#####//
  {
    path: '/',
    redirect: '/universe',
  },
  {
    path: '/universe',
    // 按照当前的逻辑，一级路由需要给重定向加 /
    redirect: 'universe/andromeda-galaxy',
    meta: { title: '宇宙' },
    component: layout,

    //####········二级路由········####//
    children: [
      {
        path: 'andromeda-galaxy',
        redirect: 'andromeda-galaxy/m31-galaxy',
        meta: { title: '仙女座星系' },
        component: () => import('@/views/son/源.vue'),

        //###·······三级路由·······###//
        children: [
          {
            path: 'm31-galaxy',
            meta: {
              title: 'M31星系',
              full_path: '/universe/andromeda-galaxy/m31-galaxy',
            },
            component: () => import('@/views/son/源/M31星系.vue'),
          },
        ],
      },
      {
        path: 'galaxy',
        redirect: 'galaxy/sun',
        meta: { title: '银河系' },
        component: () => import('@/views/son/源.vue'),

        //###·······三级路由·······###//
        children: [
          {
            path: 'sun',
            redirect: 'sun/hydrogen',
            meta: { title: '太阳' },
            component: () => import('@/views/son/源.vue'),

            //##·······四级路由·······##//
            children: [
              {
                path: 'hydrogen',
                meta: {
                  title: '氢',
                  full_path: '/universe/galaxy/sun/hydrogen',
                },
                component: () => import('@/views/son/源/氢.vue'),
              },
            ],
          },
          {
            path: 'earth',
            redirect: 'earth/america',
            meta: { title: '地球' },
            component: () => import('@/views/son/源.vue'),

            //##·······四级路由········##//
            children: [
              {
                path: 'america',
                redirect: 'america/washington',
                meta: {
                  title: '美国',
                },
                component: () => import('@/views/son/源.vue'),

                //#·······五级路由·······#//
                children: [
                  {
                    path: 'washington',
                    meta: {
                      title: '华盛顿',
                      full_path: '/universe/galaxy/earth/america/washington',
                    },
                    component: () => import('@/views/son/源/华盛顿.vue'),
                  },
                ],
              },
              {
                path: 'china',
                redirect: 'china/north',
                meta: {
                  title: '中国',
                },
                component: () => import('@/views/son/源.vue'),

                //#········五级路由········#//
                children: [
                  {
                    path: 'south',
                    redirect: 'south/sichuan',
                    meta: {
                      title: '南方',
                    },
                    component: () => import('@/views/son/源.vue'),

                    ////·······六级路由·······////
                    children: [
                      {
                        path: 'sichuan',
                        meta: {
                          title: '四川',
                          full_path:
                            '/universe/galaxy/earth/china/south/sichuan',
                        },
                        component: () => import('@/views/son/源/四川.vue'),
                      },
                    ],
                  },
                  {
                    path: 'north',
                    redirect: 'north/beijing',
                    meta: {
                      title: '北方',
                    },
                    component: () => import('@/views/son/源.vue'),
                    //#········五级路由········#//
                    children: [
                      {
                        path: 'beijing',
                        meta: {
                          title: '北京',
                          full_path:
                            '/universe/galaxy/earth/china/north/beijing',
                        },
                        component: () => import('@/views/son/源/北京.vue'),
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

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
