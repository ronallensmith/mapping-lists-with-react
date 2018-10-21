import React from 'react';

const EmployeeOfTheMonth = ({employees}) => {
  const months = ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec'];
  const dateAsNumber = Number(new Date());
  const month = new Date(dateAsNumber).getMonth();

  const employeeList = employees.map(employee  => {
    if (employee.hireMonth === months[month]) {
      return (
        <div className="employee" key={employee.id}>
          <div>{ employee.firstName } { employee.lastName } - { employee.position }</div>
        </div>
      )
    } else {
      return null
    }
  });

  return (
    <div className="employee-of-the-month">
      { employeeList }
    </div>
  )
};

export default EmployeeOfTheMonth;