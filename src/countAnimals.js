const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    const createObj = {};
    species.forEach((element) => {
      createObj[element.name] = element.residents.length;
    });
    return createObj;
  }
  const value = Object.values(animal);
  const quantity = Object.entries(animal).length;
  if (quantity === 1) {
    return species.find((element) => element.name === value[0]).residents.length;
  }
  if (quantity === 2) {
    return species.find((element) => element.name === value[0])
      .residents.filter((elemento) => elemento.sex === value[1]).length;
  }
}

module.exports = countAnimals;
