const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

const object = (em) => ({
  id: em.id,
  fullName: `${em.firstName} ${em.lastName}`,
  species: species.filter((spec) => em.responsibleFor.includes(spec.id)).map((anim) => anim.name),
  locations: species.filter((spec) => em.responsibleFor.includes(spec.id)).map((x) => x.location),
});

const gettingEmployee = (em) => {
  if (em.name) return employees.find((e) => e.firstName === em.name || e.lastName === em.name);
  if (em.id) return employees.find((e) => em.id === e.id);
};

const getEmployeesCoverage = (em) => {
  if (!em) return employees.map((employee) => object(employee));
  if (!gettingEmployee(em)) throw new Error('Informações inválidas');
  return object(gettingEmployee(em));
};

module.exports = getEmployeesCoverage;
