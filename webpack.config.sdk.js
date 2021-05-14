const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '.'),
    filename: './dist/joyconn-zepto.js',
    library: 'MA',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
    ]
  },
  resolve: {
    extensions: ['.js'],
  },
 
  plugins:[
  ],
  optimization: {
    // minimize: false//不压缩
    minimizer: [
             new UglifyJSPlugin({
                 uglifyOptions: {
                     output: {
                         comments: false,
                     },
                     compress: {
                         warnings: false,
                         drop_debugger: true,
                         drop_console: true
                     }
                 }
             }),
         ]
   },
  // devtool: "inline-source-map"
};