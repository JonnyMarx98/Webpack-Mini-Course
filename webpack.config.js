const path = require("path");
module.exports = {
  mode: "development",
  devtool: "none",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
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