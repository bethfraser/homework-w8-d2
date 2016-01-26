Array.prototype.contains = function ( needle ) {
   for (i in this) {
       if (this[i] == needle) return true;
   }
   return false;
}

Array.prototype.unique = function () {
    var newArray = [];
   for (item of this) {
       if (!newArray.contains(item)) {
        newArray.push(item);
       }
     }
     return newArray;
}

Array.prototype.collect = function ( item_function, argument ) {
  var collectArray = []
   for (item of this) {
       if (item[item_function] == argument){
        collectArray.push(item);
       } 
     }
     return collectArray;
}

var banana = {
  name: "banana",
  price: 1,
  discount: true,
  discountAmount: [2, 1]
}

var cake = {
  name: "cake",
  price: 3,
  discount: true,
  discountAmount: [2, 1]
}

var chicken = {
  name: "chicken",
  price: 4.5,
  discount: false,
}

var pizza = {
  name: "pizza",
  price: 3,
  discount: false,
}

var soap = {
  name: "soap",
  price: 2,
  discount: true,
  discountAmount: [3, 1]
}

var myBasket = {
  items: [ banana, banana, cake, cake, cake, chicken, chicken, pizza, pizza, soap, soap, soap, soap ],
  discountCard: false,
  total: function(){
    var total = 0;
    for(item of this.items){
      total += item.price;
    }
    return total;
  },

  calcDiscounts: function(){
    var priceToDiscount = 0;
    var discountArray = this.items.collect("discount", true);
    var oneOfEachItemArray = discountArray.unique();
   
    for(var item of oneOfEachItemArray){
      var numberOfThisItem = discountArray.collect("name", item.name).length;
      var remainder = numberOfThisItem % item.discountAmount[0];
      var discountItems = numberOfThisItem - remainder;
      var discountNumber = (discountItems / item.discountAmount[0]) * item.discountAmount[1];
      priceToDiscount += (item.price * discountNumber);
    }
    return priceToDiscount;
  },

  totalWithDiscounts: function(){
    var totalwithdiscounts = this.total() - this.calcDiscounts();
    return totalwithdiscounts;
  },
  price: function(){
    var total = this.totalWithDiscounts();
    if(total >= 20){
      var price = total * 0.9;
    }
    else {
      var price = total;
    }
    if(this.discountCard === true){
      price = price * 0.95
    }
    return price;
  },

}


module.exports = myBasket;