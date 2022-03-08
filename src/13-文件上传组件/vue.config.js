module.exports = {
  devServer: {
    port: 9527,
    open: true,
    hot: true,
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
