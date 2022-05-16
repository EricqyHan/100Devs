//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeStreetFigher(name, health, speed, specialMove) {
  this.name = name;
  this.health = health;
  this.speed = speed;
  this.specialMove = specialMove;
  this.taunt = function () {
    return `You can't handle my ${this.specialMove}`;
  };
  this.winning = function () {
    return `haha ${this.catchPhrase}`;
  };
  this.dash = function () {
    return `Whoop, miss me`;
  };
}

let ruy = new StreetFighter("High", "High High", "Get over here", "gitoken");
