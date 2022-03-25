// *Variables*
// Create a variable and console log the value
let numberVariable = 52;
console.log(numberVariable);

// Create a variable, add 10 to it, and alert the value
let newNumberVariable = 42;
newNumberVariable += 10;
console.log(newNumberVariable);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFour(a, b, c, d) {
  let minus = a - b - c - d;
  alert(minus);
}

// Create a function that divides one number by another and returns the remainder
function divides(a, b) {
  return a % b;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwo() {
  let add = a + b;
  if (add > 50) {
    console.log("Jumanji");
  }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multi(a, b, c) {
  let multiply = a * b * c;
  if (multiply % 3 === 0) {
    console.log("Zebra");
  }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function logWordXTimes(word, num) {
  for (let i = 1; i <= num; i++) {
    console.log(word);
  }
}
