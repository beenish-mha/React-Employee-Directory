import React from "react";
import API from "./utils/Api";

class EmployeeTable extends React.Component {
  state = {
    isLoading: true,
    employees: [{}]
  };

  componentDidMount() {
    API.getUsers().then(res => {
      this.setState({
        employees: res.data.results,

        isLoading: false
      });
      //console.log(this.state.employees);
    });
  }

  render() {
    const { name } = this.state.employees[0];
    console.log(name);

    return this.state.isLoading ? (
      <h3>Loading...</h3>
    ) : (
      <div>
        <form>
          <input
            class="form-control form-control-lg"
            type="text"
            placeholder="Employee Name"
          />
        </form>
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
            <tr key={this.state.employees[0].id.name} className="table-active">
              <td data-th="Image" className="align-middle">
                <img
                  src={this.state.employees[0].picture.medium}
                  className="img-responsive"
                />
              </td>
              <td>
                {this.state.employees[0].name.first}{" "}
                {this.state.employees[0].name.last}
              </td>
              <td>{this.state.employees[0].phone}</td>
              <td>{this.state.employees[0].email}</td>
              <td>{this.state.employees[0].dob.date}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeTable;
