import uniqueRandomArray from 'unique-random-array'
import vainGloryHeroNames from './names.json'

var getRandomItem = uniqueRandomArray(vainGloryHeroNames); 

module.exports = {
  all: vainGloryHeroNames,
  random: random
};

function random(number) {
  if (number) {
    var randomItems = [];
    for(var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
  return getRandomItem();
}