// *Variables*
// Create a variable and console log the value
let num = 24;
console.log(num);

// Create a variable, add 10 to it, and alert the value
let secondNum = 5 + 10;
alert(secondNum);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4(a, b, c, d) {
  return a - b - c - d;
}

// Create a function that divides one number by another and returns the remainder
function divide(a, b) {
  return a % b;
}

console.log(divide(12, 3));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function adds(a, b) {
  if (a + b > 50) {
    alert("Jumanji");
  }
}

adds(50, 1);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multi(a, b, c) {
  let multiple = a * b * c;
  if (multiple % 3 === 0) {
    alert("zebra");
  }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function logWordXTimes(word, number) {
  for (let i = 1; i <= number; i++) {
    console.log(word);
  }
}
logWordXTimes("shit", 9);
