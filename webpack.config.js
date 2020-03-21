// 这些配置都是webpack提供给我们的配置接口和配置规则  
// 引入node的核心模块
const path = require("path");
//webpack使用插件必须引入
const HtmlWebpackPlugin=require('html-webpack-plugin');
// 因为源码导出的是一个对象,不是构造函数所以要获取该构造函数
const CleanWebpackPlugin=require('clean-webpack-plugin').CleanWebpackPlugin;
module.exports = {
  //entry我们要打包哪个文件
  // development 用于项目的开发阶段   打包的代码不会被压缩  代码不被压缩可以快速编译
  // production  用于项目发布         打包的代码会被压缩   开发时不使用这个压缩浪费事件
  //不写的话默认是production
  mode: "development",
  entry: "./src/js/index",
  //我们打包的文件放在哪，和打包的文件名

  module: {
    rules: [
      //打包图片文件。，，
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name]_[hash].[ext]",
              // 指定图片文件的输出文件名称
              outputPath: "images/",
              limit: 10000
            }
          }
        ]
      },
      //打包css文件
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            // 作用是在scss里进行import引入别的css文件时的时候都会先走postcss-loader和sass-loader
            loader: "css-loader",
            options: {
              importLoaders: 2,
              // 开启css样式的模块化，如果不开启的话css样式是全局的。
              // modules: true
            }
          },
          "sass-loader",
          "postcss-loader"
        ]
      },
     
    ]
  },
  plugins:[new HtmlWebpackPlugin({
    template:'src/index.html'
  },
  ),new CleanWebpackPlugin()],
  output: {
    filename: "bundle.js",
    //   path后面必须要跟一个绝对路径
    path: path.join(__dirname, "dist")
  }
};
