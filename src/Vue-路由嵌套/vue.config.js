const path = require('path');
module.exports = {
  devServer: {
    port: 9527,
    open: true,
    hot: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        src: '@/',
      },
    },
  },
  publicPath: './',
  css: {
    loaderOptions: {},
  },
};
