//Create a constructor with 4 properties and 3 methods
function PizzaMachine(crust, cheese, toppings, sauce) {
  this.crust = crust;
  this.cheese = cheese;
  this.toppings = toppings;
  this.sauce = sauce;
  this.frisbee = function () {
    console.log("Fly");
  };
  this.estimatedDeliveryTime = function () {
    console.log("Calculating...");
  };
  this.burnMount = function () {
    console.log("Burn Mouth");
  };
}

let pineapplePizza = new PizzaMachine(
  "stuffed",
  "mozzerella",
  ["bacon", "chicken"],
  "heavy"
);

console.log(pineapplePizza);
