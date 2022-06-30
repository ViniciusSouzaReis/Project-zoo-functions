const data = require('../data/zoo_data');

const { employees, species } = data;

const undefinedParam = [
  {
    id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    fullName: 'Nigel Nelson',
    species: ['lions', 'tigers'],
    locations: ['NE', 'NW'],
  },
  {
    id: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
    fullName: 'Burl Bethea',
    species: ['lions', 'tigers', 'bears', 'penguins'],
    locations: ['NE', 'NW', 'NW', 'SE'],
  },
  {
    id: 'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    fullName: 'Ola Orloff',
    species: ['otters', 'frogs', 'snakes', 'elephants'],
    locations: ['SE', 'SW', 'SW', 'NW'],
  },
  {
    id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
    fullName: 'Wilburn Wishart',
    species: ['snakes', 'elephants'],
    locations: ['SW', 'NW'],
  },
  {
    id: '9e7d4524-363c-416a-8759-8aa7e50c0992',
    fullName: 'Stephanie Strauss',
    species: ['otters', 'giraffes'],
    locations: ['SE', 'NE'],
  },
  {
    id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
    fullName: 'Sharonda Spry',
    species: ['otters', 'frogs'],
    locations: ['SE', 'SW'],
  },
  {
    id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
    fullName: 'Ardith Azevado',
    species: ['tigers', 'bears'],
    locations: ['NW', 'NW'],
  },
  {
    id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
    fullName: 'Emery Elser',
    species: ['lions', 'bears', 'elephants'],
    locations: ['NE', 'NW', 'NW'],
  },
];

function findAnimal(ids) {
  const createArray = [];
  const animal = ids.map((id) => species.find((element) => element.id === id));
  animal.forEach((element) => createArray.push(element.name));
  return createArray;
}

function findLocations(ids) {
  const createArray = [];
  const animal = ids.map((id) => species.find((element) => element.id === id));
  animal.forEach((element) => createArray.push(element.location));
  return createArray;
}

function createObject(idOrName) {
  const obj = {};
  let arrayResponsibleFor;
  const getValue = Object.values(idOrName).join();
  employees.forEach((element) => {
    if (element.id === getValue
      || element.firstName === getValue
      || element.lastName === getValue) {
      const fullNamee = `${element.firstName} ${element.lastName}`;
      obj.id = element.id;
      obj.fullName = fullNamee;
      arrayResponsibleFor = element.responsibleFor;
      obj.species = findAnimal(arrayResponsibleFor);
      obj.locations = findLocations(arrayResponsibleFor);
    }
  });
  return obj;
}

function getEmployeesCoverage(parameter) {
  if (!parameter) {
    return undefinedParam;
  }
  return createObject(parameter);
}
console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
module.exports = getEmployeesCoverage;
