const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const animalFound = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const animalObj = data.species.find((specie) => specie.id === animalFound).residents;
  return Object.values(animalObj.sort((a, b) => a.age - b.age)[animalObj.length - 1]);
};

module.exports = getOldestFromFirstSpecies;
