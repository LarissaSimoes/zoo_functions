const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === undefined) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  const animalName = species.find((specie) => (specie.name === animal.species) && specie);
  const animalGender = animalName.residents.filter(({ sex }) => sex === animal.sex);

  if (animal.sex) {
    return animalGender.length;
  }
  return animalName.residents.length;
};

module.exports = countAnimals;
