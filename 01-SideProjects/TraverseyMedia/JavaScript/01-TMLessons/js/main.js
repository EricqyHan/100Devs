// console.log("hello world");
// let age = 30;
// age = 31;

// console.log(age);

// Data Types
// Strings, numbers, boolean, null and undefined

const name = "John";
const age = 34;
// const isCool = true;
// const rating = 4.5;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isCool);
// console.log(typeof rating);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

// concat
console.log("My name is " + name + " " + age);
// new way
// Template literals
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

const s = `hello world`;
console.log(s.length);
console.log(s.substring(0, 5));
console.log(s.split(""));

const q = "technology, computers, IT, code";
console.log(q.split(", "));

// Arrays - variables that hold multiple values
// array constructor
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ["apples", "oranges", "pears"];
console.log(fruits);

fruits[3] = "grapes";
fruits.push = "mangos";
fruits.unshift = "strwberries";
fruits.pop();
console.log(fruits);
console.log(fruits[1]);
console.log(Array.isArray(fruits));

// Object Literals
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 Main Street",
    city: "Boston",
    state: "MA",
  },
};

console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);
person.email = "john@gmail.com";
console.log(person);

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appt",
    isCompleted: true,
  },
];

console.log(todos[1].text);
// how to send data to sever
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For Loops
for (let i = 0; i < 10; i++) {
  console.log(`For loop number: ${i}`);
}

// while
let k = 0;
while (k < 10) {
  console.log(`While Loop number: ${k}`);
  k++;
}

// looping through a array
for (let x = 0; x < todos.length; x++) {
  console.log(todos[x].text);
}
console.log(`_______`);
console.log(`for of loop`);
// for of loop
// for (let todo of todos) {
//   console.log(todo.text);
// }

console.log(`---------`);
console.log("for each");
// forEach, map, filter
todos.forEach(function (todo) {
  console.log(todo.text);
});

// Map
console.log(`----- MAP -------`);
const todoText = todos.map(function (todo) {
  return todo.text;
});
console.log(todoText);

console.log(`----- Filter ------`);
const todoTextMap = todos
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todoTextMap);
