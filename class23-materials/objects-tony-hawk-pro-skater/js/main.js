//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function MakeProSkater(characterName, skateboard, wheels, helmet) {
  this.characterName = characterName;
  this.skateboard = skateboard;
  this.wheels = wheels;
  this.helmet = helmet;
  this.kickflip = function () {
    console.log("Do a kick flip");
  };
  this.balance = function () {
    console.log("balance");
  };
  this.trick = function () {
    console.log(`trick with ${this.wheels}`);
  };
}

let darthMaul = new MakeProSkater(
  "Darth Maul",
  "Hoverboard",
  0,
  "Black Helmet"
);

console.log(darthMaul.skateboard);
console.log(darthMaul.kickflip);
