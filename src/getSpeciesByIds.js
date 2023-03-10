const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  return ids.map((id) => species.find((element) => element.id === id));
}

module.exports = getSpeciesByIds;
