import React from "react";

const Container = process.env.NODE_ENV === "development" ?
  require("react-hot-loader").AppContainer :
  ({ children }) => React.children.only(children);

export default Container;
