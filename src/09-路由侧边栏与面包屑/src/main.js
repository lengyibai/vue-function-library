import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/css/default.css';
Vue.config.productionTip = false;

import {
  Breadcrumb,
  BreadcrumbItem,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Submenu);

new Vue({
  render: (h) => h(App),
  router /* : router */, //前后一致可以省略
}).$mount('#app');
