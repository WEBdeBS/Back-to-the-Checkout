var assert = require('assert'),
    discountService = require('../libs/discountService');

describe('discountService', function() {
  it('return 0 with empty cart', function(){
    assert.equal(discountService({}),0);
  });

  it('return 20 with three A', function(){
    var cart = {'A': 3};
    assert.equal(discountService(cart),20);
  });

  it('return 15 with two B', function(){
    var cart = {'B': 2};
    assert.equal(discountService(cart),15);
  });

  it('return 40 with six A', function(){
    var cart = {'A': 6};
    assert.equal(discountService(cart),40);
  });

  it('return 30 with four B', function(){
    var cart = {'B': 4};
    assert.equal(discountService(cart),30);
  });

  it('return 35 with three A and two B', function(){
    var cart = {
      'A': 3,
      'B': 2
    };
    assert.equal(discountService(cart),35);
  });
});