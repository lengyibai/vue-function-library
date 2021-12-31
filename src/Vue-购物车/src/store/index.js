import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import shopCart from './modules/shopCart';
const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    shopCart,
  },
});
export default store;
