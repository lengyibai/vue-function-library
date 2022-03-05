import axios from 'axios';
import apiConfig from '@/config/api.config.js';
const server = axios.create({
  baseURL: apiConfig.movie,
  time: 10000,
});

//#####··········配置默认请求··········#####//
//####········GET请求········####//
export function getReq(url, params, other = {}) {
  return server({ method: 'GET', url, params, ...other });
}
