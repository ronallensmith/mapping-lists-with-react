import React, { Component } from 'react';

class Employees extends Component {
  render() {
    const { employees } = this.props;
    const employeeList = employees.map(employee => {
      return (
        <div className="employee" key={employee.id}>
          <div>First Name: { employee.firstName }</div>
          <div>Last Name: { employee.lastName }</div>
          <div>Position: { employee.position }</div>
        </div>
      )
    });
    return (
      <div className="employee-list">
        { employeeList }
      </div>
    )
  }
}

export default Employees;