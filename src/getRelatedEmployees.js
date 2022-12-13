const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((employee) => employee.managers.includes(id));

console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const managed = data.employees.filter((persons) => persons.managers.includes(managerId));
  const managedNamesAndLast = managed.map((persons) => `${persons.firstName} ${persons.lastName}`);
  return managedNamesAndLast;
};

module.exports = { isManager, getRelatedEmployees };
