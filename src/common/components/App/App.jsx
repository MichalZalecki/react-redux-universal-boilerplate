import React, { Component, PropTypes } from "react";
import { Link } from "react-router";

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div>
        <Link to="/">Documents</Link> | <Link to="/users">Users</Link>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
