import React from "react";
import API from "./utils/Api";

class EmployeeTable extends React.Component {
  state = {
    isLoading: true,
    search: "",
    employees: []
  };
  updateSearch(event) {
    this.setState({
      search: event.target.value
    });
  }

  componentDidMount() {
    API.getUsers().then(res => {
      this.setState({
        employees: res.data.results,

        isLoading: false
      });

      console.log(this.state.employees);
    });
  }

  formatDate(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  }

  render() {
    let filteredEmployee = this.state.employees.filter(person => {
      return (
        `${person.name.first} ${person.name.last}`
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    return this.state.isLoading ? (
      <h3>Loading...</h3>
    ) : (
      <div>
        <form>
          <input
            className="input"
            type="text"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
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
            {filteredEmployee.map(person => (
              <tr key={person.id} className="table-active">
                <td data-th="Image" className="align-middle">
                  <img src={person.picture.medium} className="img-responsive" />
                </td>
                <td>
                  {person.name.first} {person.name.last}
                </td>
                <td>{person.phone}</td>
                <td>{person.email}</td>
                <td>{this.formatDate(person.dob.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeTable;
