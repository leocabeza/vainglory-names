var uniqueRandomArray = require('unique-random-array');
var vainGloryHeroNames = require('./names.json');

module.exports = {
  all: vainGloryHeroNames,
  random: uniqueRandomArray(vainGloryHeroNames)
};