import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import "./style.css";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
