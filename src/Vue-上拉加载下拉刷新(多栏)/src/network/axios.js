import Axios from 'axios';
//引入qs库
//判断开发环境是本地还是线上 true是本地 false是线上
//保存url 如果是本地 则url前缀为/api 如果是线上 则url前缀为线上api地址
let url =
  process.env.NODE_ENV == 'development' ? '/api' : 'https://api.web.360kan.com';
const axios = Axios.create({
  //以application / x-www-form-urlencoded格式发送数据
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
  },
  //带cookie请求
  withCredentials: true,
});
//给每个url添加默认前缀
axios.defaults.baseURL = url;

//请求拦截
axios.interceptors.request.use(config => {
  //如果发送的数据本身就是FormData格式的数据 那么就不需要用qs模块进行转换
  if (
    typeof config.data == 'object' &&
    config.data.__proto__.toString() == '[object FormData]'
  )
    return config;
  if (config.method == 'post') {
    //如果是post请求 使用qs模块转换发送的数据
    config.data = qs.stringify(config.data);
  }
  return config;
});
export default axios;
