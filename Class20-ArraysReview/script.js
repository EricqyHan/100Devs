function example(parameter) {}
//example(argument);

// new es 6 way
const example2 = (x, i) => {
  console.log(x, i);
};

//
const example2a = (x) => console.log(x);
// console.log(x) is an implicit return
console.log(example2a("Bob"));

let pokemon = ["bulbasaur", "ditto", "mew"];
let favePoke = pokemon[0];
console.log(favePoke);

// for each will run once for each element in pokemon array
pokemon.forEach((x, i) => {
  console.log(x);
});

// Map - will run for each element in the array
// map differs from forEach by creating a new array
let nums = [10, 20, 30];
// not that map is a function call
// whatever we pass into map is an argument
// functions can take in other functions
let robotArray = nums.map((taco) => (taco += 10));
// note that (n) => (n += 10 is an arrow function that is passed into map
// we know map will run three times becasue there are three elements in nums
// whats happening is
// taco => 10 += 10 // 20
// taco => 20 += 10 // 30
// taco => 30 += 10 // 40
// it doesn't poof into thin air because it;s stores robotArray
console.log(robotArray); // [20, 30, 40]

// using in a real world scenario
// we own a bogeda
// we want to figure out all the math for tax on all items in our store
// put array of items prices and throw into a map to calculate sales tax

let months = [
  "January",
  "February",
  "march",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let lowerCaseMonths = months.map((m) => m.toLowerCase());
console.log(lowerCaseMonths);
