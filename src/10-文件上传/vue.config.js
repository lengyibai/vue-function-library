module.exports = {
  devServer: {
    port: 9527,
    open: true,
    hot: true,
    proxy: {
      '/upload': {
        target: 'https://jsonplaceholder.typicode.com',
        pathRewrite: {
          '^/upload': '',
        },
      },
    },
  },
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        src: '@/',
      },
    },
  },
};
