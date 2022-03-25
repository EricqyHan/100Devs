// *Variables*
// Create a variable and console log the value
let number = 44;
console.log(number);

// Create a variable, add 10 to it, and alert the value
let newNumber = 30;
newNumber + 10;
console.log(newNumber);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub(a, b, c, d) {
  return a - b - c - d;
}
console.log(sub(100, 20, 10, 5));

// Create a function that divides one number by another and returns the remainder
function divide(a, b) {
  return a % b;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function add(a, b) {
  //   let sum = a + b;
  if (a + b > 50) {
    console.log("Jumanji");
  } else {
    console.log(a + b);
  }
}
console.log(add(4, 44));

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiply(a, b, c) {
  if ((a * b * c) % 3 === 0) {
    console.log("ZEBRA");
  } else {
    console.log(a * b * c);
  }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function inputFromUser(word, number) {
  for (let i = 1; i < number; i++) {
    console.log(word);
  }
}
inputFromUser("shit", 9);
