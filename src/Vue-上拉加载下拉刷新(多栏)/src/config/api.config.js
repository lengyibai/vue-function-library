//判断是否是生产环境
var isPro = process.env.NODE_ENV === 'production'; //process.env.NODE_ENV用于区分是生产环境还是开发环境
//配置不同的baseURL
module.exports = {
  baseURL: isPro ? 'https://api.web.360kan.com' : '/api',
};
