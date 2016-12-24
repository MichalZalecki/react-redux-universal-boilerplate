require("dotenv").config({ silent: true });

const webpack = require("webpack");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: [
    path.resolve("src/index.jsx"),
  ],

  output: {
    path: path.resolve("build"),
    filename: "app.[hash].js",
    publicPath: "/",
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  plugins: [
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new HTMLWebpackPlugin({
      template: path.resolve("src/index.hbs"),
      minify: { collapseWhitespace: true },
      filename: "index.hbs",
    }),
  ],

  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.(png|jpg)$/, loader: "file-loader" },
    ],
  },
};

module.exports = config;
