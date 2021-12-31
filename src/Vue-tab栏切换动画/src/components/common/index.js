//返回顶部
import lybPdrPul from './lyb-pdr-pul/lyb-pdr-pul.vue';

//使用组件
const components = [lybPdrPul];
const lybUI = {
  //只会执行install
  install(Vue) {
    //注册组件
    components.forEach(component => {
      Vue.component(component.name, component);
    });
  },
};
export default lybUI;
