// *Variables*
// Create a variable and console log the value
let a = 52;
console.log(a);

// Create a variable, add 10 to it, and alert the value
let b = 55;
b += 10;
console.log(b);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
let sub = (a, b, c, d) => a - b - c - d;
console.log(sub(20, 8, 6, 4));

// Create a function that divides one number by another and returns the remainder
let dividesOneNum = (a, b) => a % b;
console.log(dividesOneNum(100, 23));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
let addTwo = (a, b) => {
  if (a + b > 50) {
    console.log("Jumanji");
  }
};
console.log(addTwo(50, 22));

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThree(a, b, c) {
  if ((a * b * c) % 3 === 0) {
    return "Zebra";
  }
}

console.log(multiplyThree(1, 2, 3));

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordNum(word, number) {
  for (let i = 1; i <= number; i++) {
    console.log(word);
  }
}

console.log(wordNum("Hello", 7));
