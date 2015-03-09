describe("PizzaCalc", function() {

  describe("sliceCount", function() {
    it("will calculate how many slices a small pizza has", function() {
      var testPizzaCalc = Object.create(PizzaCalc);
      testPizzaCalc.sliceCount(4);
      expect(testPizzaCalc.pizzaSize).to.equal(10);
    });
  });

  describe("toppingCount", function() {
    it("will calculate whether the pizza is cheese of pepperoni", function() {
      var testPizzaCalc = Object.create(PizzaCalc);
      testPizzaCalc.toppingCount(0);
      expect(testPizzaCalc.toppings).to.equal("cheese");
    });
  });

});