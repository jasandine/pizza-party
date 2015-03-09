describe("PizzaCalc", function() {

  describe("size", function() {
    it("will calculate how many slices a small pizza has", function() {
      var testPizzaCalc = Object.create(PizzaCalc);
      testPizzaCalc.size(10);
      expect(testPizzaCalc.slices).to.equal(4);
    });
  });

  describe("toppingCount", function() {
    it("will calculate whether the pizza is cheese of pepperoni", function() {
      var testPizzaCalc = Object.create(PizzaCalc);
      testPizzaCalc.toppings("cheese");
      expect(testPizzaCalc.toppings).to.equal("cheese");
    });
  });

});