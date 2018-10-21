import React from 'react';

const Employees = ({employees}) => {
  const employeeList = employees.map(employee => {
    return (
      <div className="employee" key={employee.id}>
        <div>{ employee.firstName } { employee.lastName } - { employee.position }</div>
      </div>
    )
  });

  return (
    <div className="employee-list">
      { employeeList }
    </div>
  )
};

export default Employees;