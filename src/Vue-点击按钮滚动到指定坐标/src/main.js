import Vue from 'vue';
import App from './App.vue';
import router from './router';
import less from 'less';
Vue.use(less);

Vue.config.productionTip = false; //阻止控制台启动生产消息

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
