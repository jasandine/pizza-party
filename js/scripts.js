var PizzaCalc = {
  pizzaSize: 0,
  toppings: 0,
  sliceCount: function(sliceCheck) {
    if (sliceCheck === 4) {
      this.pizzaSize += 10;
    }
  },
  toppingCount: function(toppingCheck) {
    if (toppingCheck === 0) {
      this.toppings = "cheese";
    } else if (toppingCheck === 1) {
      this.toppings = "pepperoni";
    }
  }
};