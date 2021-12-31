import Vue from 'vue';
import App from './App.vue';
import router from './router';
import less from 'less';
Vue.use(less);
// import VConsole from 'vconsole';
// const vConsole = new VConsole();
// Vue.use(vConsole);
import '@/assets/css/default.css';
import '@/common/flexible.js';
import './plugins/vantUI';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
