const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((nme) => nme.firstName === employeeName || nme.lastName === employeeName);
}
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
