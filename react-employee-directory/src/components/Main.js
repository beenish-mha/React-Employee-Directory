import React from "react";

class Main extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <input
        class="form-control form-control-lg"
        type="text"
        placeholder="Enter the Employee name"
      ></input>
    );
  }
}

export default Main;
