var PizzaCalc = {
  pizzaSize: 0,
  sliceCount: function(sliceCheck) {
    if (sliceCheck === 4) {
      this.pizzaSize += 10;
    }
  }
};