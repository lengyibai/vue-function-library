import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/index.css';

Vue.config.productionTip = false; //阻止控制台启动生产消息

new Vue({
  render: h => h(App),
  router /* : router */, //前后一致可以省略
}).$mount('#app');
