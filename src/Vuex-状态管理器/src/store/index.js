import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import mutations from './mutations';
import getters from './getters';
import actions from './actions';
import moduleA from './modules/moduleA';
import moduleB from './modules/moduleB';

const store = new Vuex.Store({
  state: {
    counter: 2,
    arr: [
      {
        age: 18,
      },
    ],
    arr2: [],
  },
  mutations,
  actions,
  getters,
  modules: {
    moduleA,
    moduleB,
  },
});

export default store;
