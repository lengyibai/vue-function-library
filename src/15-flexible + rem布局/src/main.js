import Vue from "vue";
import App from "./App.vue";
import "@/utils/flexible.js";
import "@/style/default.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
