class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  speak() {
    return `${this.name} makes a sound`;
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    //   super is a command that enables us to take all stuff from "parent"
    // we use this to make DRY code
    super(name);
    this.breed = breed;
  }
}
class Parrot extends Animal {
  constructor(name, color, type) {
    super(name, color);
    this.type = type;
  }
}
class Cat extends Animal {
  constructor(name, rank) {
    super(name);
    this.rank = rank;
  }
  speak() {
    return `${this.name} wants lasagna`;
  }
}

let simba = new Dog("Simba", "Sheperd");
console.log(simba);
let paulie = new Parrot("Paulie", "green", "yellow crown");
console.log(paulie);
console.log(paulie.speak());
let garfield = new Cat("Garfield", "King of the House");
console.log(garfield);
