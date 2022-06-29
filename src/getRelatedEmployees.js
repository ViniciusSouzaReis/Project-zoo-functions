const data = require('../data/zoo_data');

function isManager(id) {
  const { employees } = data;
  return employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const { employees } = data;
  const manager = employees.filter((element) => element.managers.includes(managerId));
  const name = manager.map((element) => `${element.firstName} ${element.lastName}`);
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return name;
}

module.exports = { isManager, getRelatedEmployees };
