//Create a mouse object that has four properties and three methods
let mouse = {
  color: "Black",
  rgb: true,
  wireless: true,
  buttons: 10,
  rapidFire() {
    console.log("bang bang");
  },
  calc() {
    console.log("Calculators");
  },
  tab() {
    console.log("Tab down");
  },
};

let leonMouse = {};
mouse.brand = "Logitech";
mouse.color = "black";
mouse.model = "MX Ergo";
mouse.wireless = true;
mouse.leftClick = function () {
  console.log("left click");
};
mouse.rightClick = function () {
  console.log(`right click`);
};
mouse.scroll = function () {
  console.log(`jump jump jump`);
};

function MakeCar(carMake, carModel, carColor, numOfDoors) {
  this.make = carMake;
  this.model = carModel;
  this.color = carColor;
  this.doors = numOfDoors;
  this.honk = function () {
    return "BEEP BEEP FUCKER";
  };
  this.lock = function () {
    return `Locked ${this.doors} doors!`;
  };
}

let hondaCivic = new MakeCar("Honda", "Civic", "Silver", 4);

let teslaRoadster = new MakeCar("Tesla", "Roadster", "Red", 2);

let v60CrossCountry = new MakeCar("Volvo", "V60 CC", "Silver", 4);
console.log(v60CrossCountry.lock());

MakeCar.prototype.bluetooth = true;
// this is called prototypal type inheritance
console.log(teslaRoadster.bluetooth);
