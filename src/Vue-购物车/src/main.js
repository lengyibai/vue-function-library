import Vue from 'vue';
import App from './App.vue';
import less from 'less';
Vue.use(less);
import '@/assets/css/default.css';
import '@/common/flexible.js';
import './plugins/vantUI';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
