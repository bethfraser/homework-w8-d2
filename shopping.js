Array.prototype.contains = function ( needle ) {
   for (i in this) {
       if (this[i] == needle) return true;
   }
   return false;
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
    var filterBogof = function(item){
      if(item.bogof === true){
        return true;
      }
      else {
        return false;
      }
    }
    var bogofArray = this.items.filter(filterBogof);
    var bogofItemArray = [];
    for(item of bogofArray){
      if(!bogofItemArray.contains(item)){
        bogofItemArray.push(item);
      }
    }
    var priceToDiscount = 0;
   
    for(var item of bogofItemArray){
      var onlyThisItem = function(item_to_find){
        if(item == item_to_find){
          return true;
        }
        else{
          return false;
        }
      }
      var arrayOfThisItem = bogofArray.filter(onlyThisItem);
      var number = arrayOfThisItem.length;
      var remainder = number % 2;
      number = number - remainder;
      number = number / 2;
      var price = item.price * number;
      priceToDiscount += price;
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
    return price;
  },

}


module.exports = myBasket;