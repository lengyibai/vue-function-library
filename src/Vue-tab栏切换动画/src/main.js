import Vue from 'vue';
import App from './App.vue';
import less from 'less';
Vue.use(less);
import './assets/css/default.css';

Vue.config.productionTip = false;
import lybUI from '@/components/common/index.js';
Vue.use(lybUI);

new Vue({
  render: h => h(App),
}).$mount('#app');
