const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");

const cleanPlugin = new CleanWebpackPlugin(["build", "release", "*.tgz"]);
const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  target: "electron-renderer",
  entry: "./src/app/index.js",
  output: {
    path: path.join(__dirname, "/build/"),
    filename: "bundled.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["css-loader", "style-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  plugins: [cleanPlugin, htmlPlugin, new webpack.HotModuleReplacementPlugin()]
};
