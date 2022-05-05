class Animal {
  constructor(name) {
    // the underscore does nothing special, nothing to do with security
    // it's a convention we all agreed to. When we see the unerscore we are screaming to say don't touch this.
    // and we have the lovely GET below
    // it returns this._name
    this._name = name;
  }
  // the getter goes and gets the _name
  get name() {
    return this._name;
  }
  speak() {
    console.log(`${this._name} makes a sound`);
  }
}

let simba = new Animal("Simba");

simba.name; // "Simba"

simba.name = "Bob"; //nothing happens
// The property that simba has is _name
/// there is no name property. It's underscore name.
console.log(simba.name);
console.log((simba.name = "Bob"));
console.log(simba); // name is till simba
