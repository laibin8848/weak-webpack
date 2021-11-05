module.exports = {
  entry: __dirname + "/app/index.js",
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: 'bundle.js',
    // filename: "[name].js", //打包后输出文件的文件名
    // chunkFilename: '[name].js',
  },
  mode: 'development',
  // devtool: false,

  // optimization: {
  //   runtimeChunk: true,
  //   splitChunks: {
  //     chunks: "initial", 
  //     automaticNameDelimiter: '~',  
  //     name: true,
  //     cacheGroups: { // 缓存组
  //       vendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //       },
  //     }
  //   }
  // },
}