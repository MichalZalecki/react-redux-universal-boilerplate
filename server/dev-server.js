const path = require("path");
const express = require("express");
const webpack = require("webpack");
const devMiddleware = require("webpack-dev-middleware");
const hotMiddleware = require("webpack-hot-middleware");
const config = require("../webpack/webpack.dev.config");
const DashboardPlugin = require("webpack-dashboard/plugin");

const PORT = process.env.PORT || 8080;

const app = express();

const compiler = webpack(config);

compiler.apply(new DashboardPlugin());

const middleware = devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: "build",
  stats: { colors: true },
  historyApiFallback: true,
});

app.use(middleware);
app.use(hotMiddleware(compiler));

app.get("*", (req, res) => {
  res.write(middleware.fileSystem.readFileSync(path.resolve("build/index.html")));
  res.end();
});

const listener = app.listen(PORT, () => {
  console.log("express started at http://localhost:%d", listener.address().port);
});
