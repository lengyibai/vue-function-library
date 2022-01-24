module.exports = {
  devServer: {
    port: 9527,
    open: true,
    hot: true,
    proxy: {
      '/movie': {
        target: 'https://api.web.360kan.com',
        pathRewrite: {
          '^/movie': '',
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
