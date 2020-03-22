import React from "react";
import API from "./utils/Api";

class EmployeeTable extends React.Component {
  state = {
    employees: [{}]
  };

  componentDidMount() {
    API.getUsers().then(res => {
      this.setState({
        employees: res.data.results
      });
      console.log(this.state.employees);
    });
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">E-mail</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-active">
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>something</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default EmployeeTable;
