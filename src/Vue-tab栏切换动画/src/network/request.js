import axios from 'axios';
import apiConfig from '../config/api.config';
// import { $lybPA1 } from '@/common/lyb.vue.js';

//!··········配置默认参数··········!//
// axios.defaults.baseURL = '/api';
axios.defaults.baseURL = apiConfig.baseURL;
axios.defaults.timeout = 30000;

//!··········配置默认请求··········!//
//@········GET请求········@//
export function getReq(url, params, other = {}) {
  return axios.get(url, { params }, other);
}

//@········POST请求········@//
export function postReq(url, data, other = {}) {
  return axios.post(url, data, other);
}

//!··········拦截器··········!//
//@········请求拦截器········@//
axios.interceptors.request.use(config => {
  // config.headers.token = $lybPA1.get('token');
  return config;
});
//@········响应拦截器········@//
axios.interceptors.response.use(res => {
  return res;
});
