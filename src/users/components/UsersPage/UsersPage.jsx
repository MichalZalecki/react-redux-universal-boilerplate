import React, { Component, PropTypes } from "react";
import cls from "./UsersPage.css";

class UsersPage extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div>
        <h1 className={cls.title}>Users page</h1>
      </div>
    );
  }
}

export default UsersPage;
