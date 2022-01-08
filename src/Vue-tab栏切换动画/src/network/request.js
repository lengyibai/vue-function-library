import axios from 'axios';
import apiConfig from '../config/api.config';

//!··········配置默认参数··········!//
axios.defaults.baseURL = apiConfig.baseURL;
axios.defaults.timeout = 30000;

//!··········配置默认请求··········!//
//@········GET请求········@//
export function getReq(url, params, other = {}) {
  return axios.get(url, { params }, other);
}
