const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  publicPath: "./",
  outputDir: "dist",
  transpileDependencies: [],
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        //target 我们要连接的后端地址
        target: 'http://192.168.17.56:80',
        changeOrigin: true, //是否跨域
        pathRewrite: { '^/api': '' }
      }
    },
  },
})