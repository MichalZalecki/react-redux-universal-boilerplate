const webpack = require("webpack");
const config = require("./webpack.config");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractText = (fallbackLoader, loader) =>
  ExtractTextPlugin.extract({ fallbackLoader, loader });

const prodConfig = {
  devtool: "source-map",

  entry: config.entry,

  resolve: config.resolve,

  output: config.output,

  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new ExtractTextPlugin("styles.[hash].css"),
    ...config.plugins,
  ],

  module: {
    rules: [
      { test: /\.css$/, loader: extractText("style-loader", "css-loader") },
      ...config.module.rules,
    ],
  },
};

module.exports = prodConfig;
