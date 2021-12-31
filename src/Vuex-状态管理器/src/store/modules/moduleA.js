export default {
  state: {
    name: 'lyb',
  },
  mutations: {
    fn8(state, payLoad) {
      state.name = payLoad;
    },
  },
  actions: {
    fn12(context) {
      setTimeout(() => {
        context.commit('fn8', '冷弋白');
      }, 1000);
    },
  },
  getters: {
    //三个函数依次被下一个调用
    fn9(state) {
      return state.name + '冷弋白';
    },
  },
};
