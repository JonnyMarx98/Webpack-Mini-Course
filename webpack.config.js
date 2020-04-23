const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: "none",
  entry: "./src/index.js",
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/template.html"
  })],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 3) injects styles into DOM
          "css-loader", // 2) turn css into js
          "sass-loader" // 1) turn sass into css
        ]
      }
    ]
  }
 
}