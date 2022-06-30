const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const findEmployee = employees.find((element) => element.id === id);
  const findFirstSpecie = findEmployee.responsibleFor[0];
  const getAnimal = species.find((element) => element.id === findFirstSpecie);
  let countAge = 0;
  getAnimal.residents.forEach((element) => {
    if (element.age > countAge) countAge = element.age;
    return countAge;
  });
  const display = getAnimal.residents.find((element) => element.age === countAge);
  const finalresult = Object.values(display);
  return finalresult;
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
