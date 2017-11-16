var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: 'style.css',
    disable: true,
    allChunks: true
});

module.exports = {
  context: path.resolve(__dirname, 'src'),
  devtool: debug ? "inline-sourcemap" : '',
  entry: "./index.js",
  output: {
    filename: "bundle.min.js",
    path: path.resolve(__dirname, 'src'),
  },
  devServer: {
    contentBase: './src'
  },
  module: {
  	rules: [
  		{
  			test: /\.js$/,
  			exclude: /(node_modules|bower_components)/,
  			use: {
  				loader: 'babel-loader',
  				options: {
  					presets: ['env', 'react']
  				}
  			}
  		},
      {
        test: /\.(css|sass|scss)$/,
        use: extractSass.extract({
          fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
      }
  	]
  },
  plugins: debug ? [extractSass] : [
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    extractSass
  ],
};