module.exports = {
  entry: __dirname + "/app/index.js",
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    //use weak webpack
    // filename: 'bundle.js',
    //use webpack
    path: __dirname + "/dist",//打包后的文件存放的地方
    filename: "[name].js", //打包后输出文件的文件名
    chunkFilename: '[name].js',
    //use webpack
  },
  mode: 'development',
  // devtool: false,

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  }
}