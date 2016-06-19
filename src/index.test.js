var expect = require('chai').expect;
var vainglory = require('./index');

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
});