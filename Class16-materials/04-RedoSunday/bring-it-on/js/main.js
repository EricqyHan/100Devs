// *Variables*
// Create a variable and console log the value
let num = 7;
console.log(num);

// Create a variable, add 10 to it, and alert the value
let othaNum = 5;
othaNum += 10;
console.log(othaNum);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subForNumsAndAlerts(n1, n2, n3, n4) {
  const difference = n1 - n2 - n3 - n4;
  console.log(difference);
}

console.log(subForNumsAndAlerts(100, 20, 10, 5));

// Create a function that divides one number by another and returns the remainder

function returnsRemainder(a, b) {
  return a % b;
}

console.log(returnsRemainder(10, 5));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNums(a, b) {
  let sum = a + b;
  if (sum > 50) {
    console.log("Jumanji");
  } else {
    console.log(a + b);
  }
}
console.log(addTwoNums(40, 3));

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeNums(a, b, c) {
  if ((a * b * c) % 3 === 0) {
    console.log("ZEBRA");
  }
}

console.log(multiplyThreeNums(4, 5, 6));

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function logWordXTimes(word, num) {
  for (let i = 1; i <= num; i++) {
    console.log(word);
  }
}

console.log(logWordXTimes("adf", 4));
