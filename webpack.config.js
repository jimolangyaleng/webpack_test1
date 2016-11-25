var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');//css样式从js文件中分离出来,需要通过命令行安装 extract-text-webpack-plugin依赖包
module.exports = {
  entry: "./src/main.js",
  output: {
    path: 'build',
    filename: "build.js"
  },
  module: {
    loaders: [
       //.css 文件使用 style-loader 和 css-loader 来处理
      { test: /\.css$/, loader: "style!css" },
      //.js 文件使用 jsx-loader 来编译处理
      { test: /\.js$/,    loader: "jsx-loader" },
      { test: /\.coffee$/, loader: "coffee-loader"}
      // { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
      //  //解析.scss文件,对于用 import 或 require 引入的sass文件进行加载，以及<style lang="sass">...</style>声明的内部样式进行加载
      // {test: /\.scss$/,loader: ExtractTextPlugin.extract("style", 'css!sass')} //这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 loader:'style!css!sass'

    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
      new webpack.BannerPlugin('Author:黄小明  2016-11-06')
      // new ExtractTextPlugin("xiaoming.css") //提取出来的样式放在xiaoming.css文件中
      ]
};