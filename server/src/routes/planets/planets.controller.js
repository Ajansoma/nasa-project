const { getAllPlanets } = require('../../model/planets.model');

const httpGetPlanets = function (req, res) {
  return res.status(200).json(getAllPlanets());
};

module.exports = {
  httpGetPlanets,
};
