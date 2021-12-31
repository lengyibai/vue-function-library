export default {
  //计算函数写在此处
  fn(state) {
    return state.counter * state.counter;
  },
  fn1(state, getters) {
    //调用内部函数，state不能省，fn隐式使用
    return getters.fn * 2;
  },
  filterAge(state) {
    //筛选年龄大于20的，getter不能获取自定义参数，需要返回函数来获取
    return age => state.arr.filter(a => a.age > age).map(b => b.name);
  },
};
