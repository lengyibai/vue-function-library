import Vue from 'vue';
import App from './App.vue';
import '@/assets/css/default.css';
Vue.config.productionTip = false;

import 'vant/lib/index.css';
import { Toast } from 'vant';
Vue.use(Toast);

new Vue({
  render: h => h(App),
}).$mount('#app');
