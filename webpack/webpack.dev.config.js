const webpack = require("webpack");
const config = require("./webpack.config");

const devConfig = {
  devtool: "eval",

  performance: { hints: false },

  entry: [
    "react-hot-loader/patch",
    "webpack-hot-middleware/client?reload=true",
    ...config.entry,
  ],

  output: config.output,

  resolve: config.resolve,

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    ...config.plugins,
  ],

  module: {
    rules: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      ...config.module.rules,
    ],
  },
};

module.exports = devConfig;
