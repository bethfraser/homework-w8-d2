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
  bogof: true,
}

var cake = {
  name: "cake",
  price: 3,
  bogof: true,
}

var chicken = {
  name: "chicken",
  price: 4.5,
  bogof: false,
}

var pizza = {
  name: "pizza",
  price: 3,
  bogof: false,
}

var myBasket = {
  items: [ banana, banana, cake, cake, cake, chicken, chicken, pizza, pizza ],
  discountCard: false,
  total: function(){
    var total = 0;
    for(item of this.items){
      total += item.price;
    }
    return total;
  },

  bogof: function(){
    var priceToDiscount = 0;
    var bogofArray = this.items.collect("bogof", true);
    var oneOfEachItemArray = bogofArray.unique();
   
    for(var item of oneOfEachItemArray){
      var numberOfThisItem = bogofArray.collect("name", item.name).length;
      var discountNumber = (numberOfThisItem - (numberOfThisItem % 2)) / 2;
      priceToDiscount += (item.price * discountNumber);
    }
    return priceToDiscount;
  },

  totalwithbogof: function(){
    var totalwithbogof = this.total() - this.bogof();
    return totalwithbogof;
  },
  price: function(){
    var total = this.totalwithbogof();
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