const webpack = require('webpack');
var path = require ('path') ;


module.exports = {
  entry: [
    path.resolve(__dirname, './app.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // node: {
  //   __dirname: false,
  //   __filename: false
  // },
  plugins: [],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
