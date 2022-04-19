// Objects

let drink = {};
drink.brand = "Gatorade";
drink.size = "20 fl oz";
drink.color = "Yellow";
drink.hasAlcohol = false;
drink.pour = function () {
  console.log("Now it is all over the floor");
};

//  or create objects like
let drink2 = {
  brand: "Gatorade",
  size: "20 fl oz",
  pour: function () {
    console.log(`I love my ${this.brand}`);
  },
};
