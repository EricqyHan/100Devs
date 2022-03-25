const x = 9;
const y = 10;

if (x > 5 || y > 10) {
  console.log(`x is 10`);
} else if (x > 10) {
  console.log(`x is greater than 10`);
} else {
  console.log(`x is less than 10`);
}

// ternary operator
const xx = 120;
const color = xx > 10 ? `red` : `blue`;
console.log(color);

// Switches
console.log(`-- Swithces --`);
switch (color) {
  case `red`:
    console.log(`Color is red`);
    break;
  case `blue`:
    console.log(`Color is blue`);
    break;
  default:
    console.log(`color is not red or blue`);
    break;
}

// functions
console.log(`Functions`);

function addNums(num1, num2) {
  //   console.log(num1 + num2);
  return num1 + num2;
}

// Consturctors function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

// Prototypes
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Creating Classes
// for syntatic sugar
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return this.dob.getFullYear;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Instantiate objefct
const person1 = new Person(`John`, `Fox`, `4-3-1920`);
const person2 = new Person(`Peter`, `Kaiser`, `10-30-1990`);
console.log(person1.dob);
console.log(person2.getFullName());
