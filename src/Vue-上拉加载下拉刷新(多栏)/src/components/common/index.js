//返回顶部
import lybPdrPul from './lyb-pdr-pul/lyb-pdr-pul.vue';
//滚动组件精简版
import scroll from './scroll/scroll.vue';

//使用组件
const components = [lybPdrPul,scroll];
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
