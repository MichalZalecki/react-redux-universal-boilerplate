import React, { Component } from "react";
import { Router, browserHistory } from "react-router";
import { Provider } from "react-redux";

import store from "../../../store";
import routes from "../../../routes";

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>{routes}</Router>
      </Provider>
    );
  }
}

export default Root;
