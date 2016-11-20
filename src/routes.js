import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./common/components/App/App";
import DocumentsPage from "./documents/components/DocumentsPage";
import UsersPage from "./users/components/UsersPage/UsersPage";

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={DocumentsPage} />
    <Route path="/users" component={UsersPage} />
  </Route>
);

export default routes;
