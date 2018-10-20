import React, { Component } from 'react';
import Employees from './Employees';

class App extends Component {
  state = {
    employees: [
      {firstName: 'Bob', lastName: 'Brown', position: 'Owner', id: 1},
      {firstName: 'Richard', lastName: 'Nixon', position: 'Manager', id: 2},
      {firstName: 'Ron', lastName: 'Smith', position: 'Software Engineer', id: 3}
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Employees</h1>
        <Employees employees={this.state.employees} />
      </div>
    );
  }
}

export default App;
