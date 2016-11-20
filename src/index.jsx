import React from "react";
import ReactDOM from "react-dom";

import Container from "./components/Container/Container";
import App from "./components/App/App";

const root = document.getElementById("root");

ReactDOM.render(<Container><App /></Container>, root);

if (module.hot) {
  module.hot.accept("./components/App/App", () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require("./components/App/App").default;
    ReactDOM.render(<Container><NextApp /></Container>, root);
  });
}
