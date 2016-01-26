
var basket = require('./shopping');
var assert = require('assert');

// We need to find the price of a shopping basket. A shopping basket can have multiple items.

// Discounts:

// 10% discount for all shopping baskets over £20

// Certain items are buy one get on free, this should be considered.

// If the customer has a valid discount card then they get and additional 5% off.

// Test drive your objects. Commit after every passing test.

describe('Shopping Basket', function(){
  it('should calculate the total cost of all items', function(){
    var total = basket.total();
    assert.equal(25, total);
  });
  it('should apply a 10% discount on baskets over £20', function(){
    var price = basket.price();
    assert.equal(22.5, price)
  });




});