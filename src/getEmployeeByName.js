const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) return {};

  const employeeFound = data.employees.find((person) => person.firstName === employeeName
  || person.lastName === employeeName);

  return employeeFound;
};

module.exports = getEmployeeByName;
