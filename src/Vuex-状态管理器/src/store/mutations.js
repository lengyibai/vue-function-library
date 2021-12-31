import Vue from 'vue';
export default {
  inc(state) {
    state.counter++;
  },
  dec(state) {
    state.counter--;
  },
  add(state, count) {
    state.counter += count;
  },
  addStu(state, stu) {
    state.arr.push(stu);
  },
  setName(state) {
    Vue.set(state.arr[0], 'master', '冷弋白');
  },
};
