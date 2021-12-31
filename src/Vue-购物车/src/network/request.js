// import Vue from 'vue';
import axios from 'axios';

export const lyb = axios.create({
  //设置token
  headers: {
    // token: Vue.prototype.$token,
    token:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90ZXN0Lmhhb2xpbm1lbmcuY29tXC9hcGlcL3YxXC9sb2dpbiIsImlhdCI6MTYzNDExNTA4NCwiZXhwIjo0Nzg3NzE1MDg0LCJuYmYiOjE2MzQxMTUwODQsImp0aSI6IjlTWTZNb3RvYVJ2RlE2UUMiLCJzdWIiOjIzMywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.ZtEj836i0U-3Oq6a91ifVOSYDXsY_bXXU3ThXVe8CRo',
  },
  baseURL: 'http://test.haolinmeng.com',
  time: 10000,
});
//绑定请求拦截器
lyb.interceptors.request.use(config => {
  return config;
});

//绑定响应拦截器
lyb.interceptors.response.use(res => {
  return res;
});
