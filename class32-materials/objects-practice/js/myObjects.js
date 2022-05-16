class Contractor {
  constructor(name, role) {
    this._name = name;
    this._role = role;
  }
  // need get to prevent name from changing
  get name() {
    return this._name;
  }
  get role() {
    return this._role;
  }
  sayHello() {
    return `Hello, my name is ${this._name} I am in the ${this._role} team at #100Devs!`;
  }
}

let machi = new Contractor("The Machine", "Front-End Engineer");
console.log((machi.name = "moe"));
console.log(machi);
console.log(machi.sayHello());

class Frontend extends Contractor {
  constructor(name, role, tech) {
    super(name, role);
    this._tech = tech;
  }
  get tech() {
    return this._tech;
  }
  sayHello() {
    return `Hello, I am ${this._name} and I work on the Front-End`;
  }
}
let eric = new Frontend("Eric", "Front-End React Developer", "React");
console.log(eric);
// console.log(eric.sayHello());

class Backend extends Contractor {
  constructor(name, role, tech) {
    super(name, role);
    this._tech = tech;
  }
  get tech() {
    return this._tech;
  }
  sayHello() {
    return `Hello, I am ${this._name} and I work on the Back-End`;
  }
}

let simba = new Backend("Simba", "Back-end Team", "Node");
console.log(simba);
// console.log(simba.sayHello());

// This is an example of Polymorphism
let agencyList = [machi, eric, simba];
// we want to make sure everone at agency knows how to say hello
// note that person is just a "vairable" that holds machi, eric and simba
for (person of agencyList) {
  person.sayHello();
}
