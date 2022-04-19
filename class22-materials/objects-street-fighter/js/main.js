//Create a street fighter constructor that makes fighting
// game characters with 4 properties and 3 methods

function StreetFighter(punch, kick, catchPhrase, specialMove) {
  this.punch = punch;
  this.kick = kick;
  this.catchPhrase = catchPhrase;
  this.specialMove = specialMove;
  this.taunt = function () {
    return `You can't handle my ${this.specialMove}`;
  };
  this.winning = function () {
    return `Haha ${this.catchPhrase}`;
  };
  this.dash = function () {
    return `Whoopp, miss me`;
  };
}

let ryu = new StreetFighter("Hight", "High high", "Get over here", "Gitoken");
console.log(ryu);
console.log(ryu.taunt());
console.log(ryu.winning());
console.log(ryu.dash());
