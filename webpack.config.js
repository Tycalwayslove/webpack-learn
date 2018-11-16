const path = require("path");
module.exports = {
  devtool: false,
  //   devtool: "eval-source-map",
  entry: __dirname + "/app/main.js", // 多次提及的唯一入口文件
  output: {
    path: __dirname + "/public", // 打包后文件存放的地方
    filename: "bundle.js" // 打包后输出的文件
  },
  devServer: {
    contentBase: path.join(__dirname, "public"), //确定应该从哪里提供 bundle，并且此选项优先。
    port: 1314, //端口
    open: true //自动打开浏览器
    // filename: "bundle.js" //惰性模式下可减少编译。具体可看 https://webpack.docschina.org/configuration/dev-server/#devserver-filename-
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react"]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        use:{
            loader: "json-loader"
        }
      }
    ]
  }
};
