import React from "react";
import API from "./utils/Api";

class EmployeeTable extends React.Component {
  state = {
    isLoading: true,
    employees: [{}],
    people: []
  };

  componentDidMount() {
    API.getUsers().then(res => {
      this.setState({
        people: res.data.results,
        employees: res.data.results,

        isLoading: false
      });

      //console.log(this.state.employees);
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
    const data = this.state.employees;
    const nameList = data.map(name => {
      return name.name;
    });
    console.log(nameList[0]);
    // const { name } = this.state.employees[0];
    //console.log(name);

    return this.state.isLoading ? (
      <h3>Loading...</h3>
    ) : (
      <div>
        <form>
          <input
            className="form-control form-control-lg"
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
            {this.state.people.map(person => (
              <div>
                {" "}
                <tr key={person.id} className="table-active">
                  <td data-th="Image" className="align-middle">
                    <img
                      src={person.picture.medium}
                      className="img-responsive"
                    />
                  </td>
                  <td>
                    {person.name.first} {person.name.last}
                  </td>
                  <td>{person.phone}</td>
                  <td>{person.email}</td>
                  <td>{this.formatDate(person.dob.date)}</td>
                </tr>
              </div>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeTable;
