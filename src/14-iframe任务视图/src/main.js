import Vue from "vue";
import App from "./App.vue";
import "@/style/default.css";

Vue.prototype.$bus = new Vue(); // event Bus 用于无关系组件间的通信。

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
