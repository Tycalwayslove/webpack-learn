module.exports = {
  devtool: "eval-source-map",
  entry: __dirname + "/app/main.js", // 多次提及的唯一入口文件
  output: {
    path: __dirname + "/public", // 打包后文件存放的地方
    filename: "bundle.js" // 打包后输出的文件
  },
  devServer: {
    contentBase: "./public",
    port: 1314,
    compress: true,
    historyApiFallback:true,
    inline:true
  }
};