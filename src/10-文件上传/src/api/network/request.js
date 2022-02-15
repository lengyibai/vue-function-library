import axios from 'axios';
axios.defaults.timeout = 30000;

//#####··········域名管理··········#####//
import apiConfig from '@/config/api.config.js';

const server = axios.create({
  baseURL: apiConfig.upload,
  time: 1000,
});

//#####·········配置默认请求··········#####//
//####········POST请求········####//
/**
 * @description: POST请求封装
 * @param {String} url /接口地址
 * @param {Object} data 请求参数
 * @param {Object} other header等其他属性存放
 * @return {Promise} 接口请求
 */
export function postReq(url, data, other = {}) {
  return server({ url, data, ...other });
}
