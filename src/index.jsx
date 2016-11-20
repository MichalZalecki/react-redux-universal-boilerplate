import React from "react";
import ReactDOM from "react-dom";

import Container from "./common/components/Container/Container";

function renderApp(Root) {
  ReactDOM.render(
    <Container>
      <Root />
    </Container>
  , document.getElementById("root"));
}

renderApp(require("./common/components/Root/Root").default, root);

if (module.hot) {
  module.hot.accept("./common/components/Root/Root", () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    renderApp(require("./common/components/Root/Root").default);
  });
}
