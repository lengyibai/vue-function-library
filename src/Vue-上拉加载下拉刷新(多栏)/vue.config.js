module.exports = {
  devServer: {
    port: 9527,
    open: true,
    hot: true,
    proxy: {
      '/api': {
        target: 'https://api.web.360kan.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        src: '@/',
      },
    },
  },
  publicPath: './',
};
