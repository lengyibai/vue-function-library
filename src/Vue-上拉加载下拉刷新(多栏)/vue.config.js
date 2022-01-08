module.exports = {
  devServer: {
    port: 9527,
    open: true,
    hot: true,
    proxy: {
      '/api': {
        target: 'https://api.web.360kan.com',
        //设置是否跨域，开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
        changeOrigin: true,
        // 是否启用websockets
        ws: true,
        //访问路径重写
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
