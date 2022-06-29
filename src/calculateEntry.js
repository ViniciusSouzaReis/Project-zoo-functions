const data = require('../data/zoo_data');

const { prices } = data;
const { adult, senior, child } = prices;

function countEntrants(entrants) {
  const obj = entrants.reduce((acc, curr) => {
    if (curr.age < 18) acc.child += 1;
    if (curr.age >= 18 && curr.age < 50) acc.adult += 1;
    if (curr.age >= 50) acc.senior += 1;
    return acc;
  }, { adult: 0, child: 0, senior: 0 });
  return obj;
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
  const newValue = Object.values(countEntrants(entrants));
  const getTotalValue = adult * newValue[0] + child * newValue[1] + senior * newValue[2];
  return getTotalValue;
}

module.exports = { calculateEntry, countEntrants };
