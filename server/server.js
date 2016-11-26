require("babel-register")({
  presets: ["es2015", "stage-0", "react"],
});

const React = require("react");
const express = require("express");
const compression = require("compression");
const ReactRouter = require("react-router");
const renderToString = require("react-dom/server").renderToString;
const exphbs = require("express-handlebars");

const app = express();
const match = ReactRouter.match;
const routerContext = React.createFactory(ReactRouter.RouterContext);
const routes = require("../src/routes").default;

app.use(compression());
app.engine("hbs", exphbs({ extname: ".hbs" }));

app.set("x-powered-by", false);
app.set("view engine", "hbs");
app.set("views", "build");

app.use(express.static("build", {
  // etag: false
}));

app.get("*", (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const reactHtml = renderToString(routerContext(renderProps));
      res.render("index", { reactHtml });
    } else {
      res.status(404).send("Not found");
    }
  });
});

const listener = app.listen(process.env.PORT || 8080, () => {
  console.log("Express started at http://localhost:%d", listener.address().port);
});
