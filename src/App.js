import React, { Component } from 'react';
import Employees from './Employees';
import EmployeeOfTheMonth from './EmployeeOfTheMonth';

class App extends Component {
  state = {
    employees: [
      {firstName: 'Bob', lastName: 'Brown', position: 'Owner', hireMonth: 'Oct', id: 1},
      {firstName: 'Richard', lastName: 'Nixon', position: 'Manager', hireMonth: 'Dec', id: 2},
      {firstName: 'Ron', lastName: 'Smith', position: 'Software Engineer', hireMonth: 'Nov', id: 3},
      {firstName: 'Ginger', lastName: 'Rogers', position: 'Secretary', hireMonth: 'Oct', id: 4},
      {firstName: 'William', lastName: 'Robinson', position: 'Sales Manager', hireMonth: 'Nov', id: 5},
      {firstName: 'Robin', lastName: 'Willams', position: 'Public Relations Officer', hireMonth: 'Dec', id: 6},

    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Employees</h1>
        <Employees employees={this.state.employees} />
        <h2>Employee of the Month</h2>
        <EmployeeOfTheMonth employees={this.state.employees} />
        <h4>Take a look at the 'state' object and the 'EmployeeOfTheMonth' Component <br />
          in my codebase to see how these employees ended up as Employees of the Month.</h4>
      </div>
    );
  }
}

export default App;
