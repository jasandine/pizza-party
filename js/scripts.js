var PizzaCalc = {
  pizzaSize: 0,
  toppings: 0,
  sliceCount: function(sliceCheck) {
    if (sliceCheck === 4) {
      this.pizzaSize += 10;
    } else if (sliceCheck === 8) {
      this.pizzaSize += 16;
    } else if (sliceCheck === 12) {
      this.pizzaSize += 24;
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