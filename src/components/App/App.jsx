import React from "react";
import cls from "./App.css";

import Hello from "../Hello/Hello";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Hello World!",
    };
  }

  render() {
    return (
      <div>
        <Hello text={this.state.text} />
      </div>
    );
  }
}

export default App;
