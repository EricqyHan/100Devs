//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EspressoMachine {
  // parameters inside constructor()
  constructor(color, make, model, price) {
    // properties for espressoMachine
    // this.(property)
    // = (parameters)
    this.color = color;
    this.make = make;
    this.model = model;
    this.price = price;
  }
  turnOn() {
    console.log(`Good day. I am now on!`);
  }
  steam() {
    console.log(`Ittss summer sale 50% off`);
  }
  brew() {
    console.log(`Good stuff coming your way`);
  }
}

let gaggia = new EspressoMachine("red", "Gaggia", "Classic Pro", 400);
console.log(gaggia);
