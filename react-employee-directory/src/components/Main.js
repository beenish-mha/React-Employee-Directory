import React from "react";
import EmployeeTable from "./EmployeeTable";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeName: ""
    };
  }
  handleChange = event => {
    this.setState({
      employeeName: event.target.value
    });
    console.log(this.state.employeeName);
  };
  render() {
    return (
      <div>
        <input
          className="form-control form-control-lg"
          type="text"
          value={this.state.employeeName}
          onChange={this.handleChange}
        ></input>
        <EmployeeTable />
      </div>
    );
  }
}

export default Main;
