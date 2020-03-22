import React from "react";

class EmployeeTable extends React.Component {
  constructor() {
    super();
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
