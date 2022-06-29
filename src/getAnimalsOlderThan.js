const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const animalMap = species.find((element) => element.name === animal);
  const { residents } = animalMap;
  return residents.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;
