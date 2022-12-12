const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) =>
  data.species
    .find((oneSpecie) => oneSpecie.name === animal)
    .residents.every((oneResident) => oneResident.age > age);

module.exports = getAnimalsOlderThan;
