import React, { PropTypes } from "react";

class UsersPage extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div>
        <h1>Users page</h1>
      </div>
    );
  }
}

export default UsersPage;
