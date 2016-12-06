require("ignore-styles");
require("babel-register")({
  presets: ["es2015", "stage-2", "react"],
});

const React = require("react");
const express = require("express");
const compression = require("compression");
const ReactRouter = require("react-router");
const renderToString = require("react-dom/server").renderToString;
const exphbs = require("express-handlebars");
const createStore = require("redux").createStore;
const Provider = require("react-redux").Provider;

const app = express();
const match = ReactRouter.match;
const routerContext = React.createFactory(ReactRouter.RouterContext);
const routes = require("../src/routes").default;
const rootReducer = require("../src/rootReducer").default;

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
      const preloadedState = undefined; // to let reducers set default state/request API otherwise
      const head = `<script>window.__PRELOADED_STATE__=${JSON.stringify(preloadedState)};</script>`;
      const store = createStore(rootReducer, preloadedState);
      const reactHtml = renderToString(
        React.createElement(Provider, { store }, routerContext(renderProps))
      );
      res.render("index", { head, reactHtml });
    } else {
      res.status(404).send("Not found");
    }
  });
});

const listener = app.listen(process.env.PORT || 8080, () => {
  console.log("Express started at http://localhost:%d", listener.address().port);
});
