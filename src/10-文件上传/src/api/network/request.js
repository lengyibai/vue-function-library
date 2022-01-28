import axios from 'axios';
axios.defaults.timeout = 30000;

//#####··········域名管理··········#####//
import apiConfig from '@/config/api.config.js';
const http = {
  movie: apiConfig.movie,
  upload: apiConfig.upload,
};

//#####·········配置默认请求··········#####//
//####·······GET请求········####//
export function getReq(name, url, params, other = {}) {
  return axios.get(http[name] + url, { params }, other);
}

//####·······POST请求········####//
export function postReq(name, url, data, other = {}) {
  return axios.post(http[name] + url, data, other);
}

//#####·········拦截器··········#####//
//####·······请求拦截器········####//
axios.interceptors.request.use((config) => {
  // config.headers.token = localStorage.getItem('token');
  return config;
});
//####·······响应拦截器········####//
axios.interceptors.response.use((res) => {
  return res;
});
