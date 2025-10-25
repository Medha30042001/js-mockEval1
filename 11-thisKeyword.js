//https://onecompiler.com/javascript/44286gy93

const employee = {
  firstname: 'Medha',
  lastname: 'Adepu',
  hourlyWage:20,
  hoursWorked:40,
  calculateSalary: function(){
    return this.hourlyWage*this.hoursWorked;
  }
};

console.log(employee.firstname + ' ' + employee.lastname);
console.log(employee.calculateSalary());
