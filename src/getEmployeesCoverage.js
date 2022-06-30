const data = require('../data/zoo_data');

const { employees, species } = data;

const information = employees.map((person) => {
  const obj = {
    id: person.id,
    fullName: `${person.firstName} ${person.lastName}`,
    species: person.responsibleFor.map((id) =>
      species.find((element) => element.id === id).name),
    locations: person.responsibleFor.map((id) =>
      species.find((element) => element.id === id).location),
  };
  return obj;
});

function getEmployeesCoverage(idOrName = information) {
  const Check = information.find((element) =>
    element.fullName.includes(idOrName.name) || element.id === idOrName.id);
  if (idOrName.name || idOrName.id) {
    if (Check === undefined) {
      throw new Error('Informações inválidas');
    }
    return Check;
  }
  return idOrName;
}

console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
