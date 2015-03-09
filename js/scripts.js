var PizzaCalc = {
  slices: 0,
  size: 0,
  toppings: "",
  
  sizer: function(size) {
    if (size === 10) {
      this.slices += 4;
    } else if (size === 16) {
      this.slices += 12;
    } else if (size === 24) { 
      this.slices += 16;
    }
  },
  topper: function(topIt) {
    if (topIt === "cheese") {
      this.toppings = "cheese";
    } else if (topIt === "pepperoni") {
      this.toppings = "pepperoni";
    }
  } 
};

$(function() {
  $("form#enter-pizza").submit(function(event) {
    event.preventDefault();

    var sizer = parseInt($("#sizer").val());
    var topper = $("#topper").val();


    var newPizza = Object.create(PizzaCalc);
    newPizza.sizer(sizer);
    newPizza.topper(topper);

    $("#new-pizza").show();
    $("#slices").text(newPizza.slices);
    $("#toppings").text(newPizza.toppings);


  });

});