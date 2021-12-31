export default {
  //异步函数写在此处
  addStus(context, payLoad) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //发挥Vue.set
        context.commit('addStu', payLoad);
        resolve('已确认');
      }, 1000);
    });
  },
};
