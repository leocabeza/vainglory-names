import {expect} from 'chai'
import vainglory from './index'

describe('vainglory-hero-names', function() {
  describe('all', function() {
    it ('should be an array of strings', function() {
      expect(vainglory.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain Adagio', function() {
      expect(vainglory.all).to.include('Adagio')
    })
  });

  describe('random', function() {
    it ('should return a random item from vainglory.all', function() {
      var randomItem = vainglory.random();
      expect(vainglory.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function() {
      var randomItems = vainglory.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(vainglory.all).to.include(item);
      });
    });
  });
});
