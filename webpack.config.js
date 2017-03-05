var path = require('path');

module.exports = {
  entry: './src/x-katex.js',
  output: {
    filename: 'x-katex.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
  },
  devServer: {
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'file?name=[path][name].[ext]'
      }
    ]
  }
};
