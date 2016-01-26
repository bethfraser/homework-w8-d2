
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
    assert.equal(26, total);
  });
  it('should take discount off for BOGOF items', function(){
    var totalwithbogof = basket.totalwithbogof();
    assert.equal(22, totalwithbogof);
  });
  it('should apply a 10% discount on baskets over £20', function(){
    var price = basket.price();
    assert.equal(19.8, price)
  });
  it('should apply a 5% discount if the basket has a discount card', function(){
    basket.discountCard = true;
    var price = basket.price();
    assert.equal(18.81, price)
  });



});