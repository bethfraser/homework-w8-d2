
var banana = {
  price: 0.5,
  bogof: false,
}

var cake = {
  price: 3,
  bogof: true,
}

var chicken = {
  price: 4.5,
  bogof: false,
}

var pizza = {
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
  price: function(){
    var total = this.total();
    if(total >= 20){
      var price = total * 0.9;
    }
    else {
      var price = total;
    }
    return price;
  },

}

myBasket.price();


module.exports = myBasket;