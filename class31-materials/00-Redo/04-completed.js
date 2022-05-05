// completed work

class Animal {
  constructor(name) {
    //   that way we can abstract out the name and not have to worry about it
    this._name = name;
  }
  // we new a getter so we can use the name in our program
  get name() {
    return this._name;
  }
  speak() {
    console.log(`${this._name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this._breed = breed;
  }
  get breed() {
    return this._breed;
  }
  speak() {
    super.speak();
    console.log(`${this.name} barks`);
  }
}

class Cat extends Animal {
  constructor(name, breed) {
    super(name);
    this._breed = breed;
  }
  get breed() {
    return this._breed;
  }
  speak() {
    super.speak();
    console.log(`${this.name} said I hate mondays`);
  }
}

class Cow extends Animal {
  constructor(name, show) {
    super(name);
    this._show = show;
  }
  get show() {
    return this._show;
  }
}

let simba = new Dog("Simba", "Shepard");
let machi = new Dog("The Machine", "Pitbull");
let salem = new Cat("Salem", "American Shorthair");
let cowAndChicken = new Cow("Cow", "Cow and Chicken");
console.log(cowAndChicken.speak);
// we put our objects into an array
let farm = [simba, machi, salem];
for (a of farm) {
  a.speak();
}

// know the four pillars of OOP
// encapsulation - process of storing functions (methods) whti their associated data properties in one object
// makes it easier to add new stuff. Easier to read through already coded. Made it so you were not afraid to make changes
// Abstraction - hide details and show essentials
// abstraction makes our code base smaller more manageable pieces of code
// Inheritance - makes a class from another class for a hierachy of classes that share a set of properties and methods
// this helps you eliminate redundant code
// Polymorphism - code written to use an interface automatically knows how to work with any number of different objects that provide the interface
// helps uou aviod if/else and switch chase statements
