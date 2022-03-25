// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = "St. Patricks Day";
favHoliday = "Chinese New Year";
console.log(favHoliday.toUpperCase());

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let favPowerRangers = "Alien Rangers";
console.log(favPowerRangers.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference.
//Call the function.
function fiveNumbs(a, b, c, d, e) {
  let subtract = 100 - a - b - c - d - e;
  return Math.abs(subtract);
}
console.log(fiveNumbs(27, 83, 42, 1, 5));

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function threeNums(a, b, c) {
  let min = Math.min(a, b, c);
  let max = Math.max(a, b, c);
  return `min is ${min} and max is ${max}`;
}
console.log(threeNums(5, 3, 9));

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails() {
  let result = Math.random();
  if (result < 0.5) {
    return "heads";
  } else {
    return "tails";
  }
  //   let headTail = ["heads", "tail"];
  //   let flip = Math.floor(Math.random() * headTail.length);
  //   let result = headTail[flip];
  //   return result;
}

console.log(headsOrTails());
console.log(headsOrTails());
console.log(headsOrTails());
console.log(headsOrTails());

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function
// x times where x is the number passed into the function. Call the function.

function loop(n) {
  for (let i = 1; i <= n; i++) {
    let result = headsOrTails();
    console.log(result);
  }
}

console.log(loop(10));

const newHeadsOrTails = () => (Math.random() < 0.5 ? "heads" : "tails");
console.log(newHeadsOrTails());
console.log(newHeadsOrTails());
console.log(newHeadsOrTails());
console.log(newHeadsOrTails());
console.log(newHeadsOrTails());
console.log(newHeadsOrTails());
console.log(newHeadsOrTails());
console.log(newHeadsOrTails());
console.log(newHeadsOrTails());
console.log(newHeadsOrTails());
console.log(newHeadsOrTails());
