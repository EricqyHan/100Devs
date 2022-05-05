//Create an a class and extend it - Can be anything you would like it to be!

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

class Parrot extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
}

class Cat extends Animal {
  // extends gives you access to all methods
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  speak() {
    console.log("Meow");
  }
}

let simba = new Dog("Simba", "Sheperd");

console.log(simba);
console.log(simba.name);
console.log(simba.breed);
console.log(simba.speak());

let paulie = new Parrot("Paulie", "green");
console.log(paulie);
console.log(paulie.name);
console.log(paulie.color);

let catdog = new Cat("Catdog", "King");
console.log(catdog);
console.log(catdog.name);
console.log(catdog.rank);
