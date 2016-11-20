import React, { PropTypes } from "react";

class DocumentsPage extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div>
        <h1>Documents page</h1>
      </div>
    );
  }
}

export default DocumentsPage;
