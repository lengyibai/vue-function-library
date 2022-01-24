import Vue from 'vue';
import App from './App.vue';
import '@/utils/flexible.js';
import '@/assets/css/default.css';
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
