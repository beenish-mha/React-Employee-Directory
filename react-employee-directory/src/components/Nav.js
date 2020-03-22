import React from "react";

class Nav extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <nav className="navbar navbar-light bg-dark">
        <span className="navbar-brand mb-0 h1">Employee Directory</span>
      </nav>
    );
  }
}
export default Nav;
