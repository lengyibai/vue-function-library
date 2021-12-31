import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false; //阻止控制台启动生产消息

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
