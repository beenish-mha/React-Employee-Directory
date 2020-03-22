import React from "react";
import EmployeeTable from "./EmployeeTable";

class Main extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Enter the Employee name"
        ></input>
        <EmployeeTable />
      </div>
    );
  }
}

export default Main;
