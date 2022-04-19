// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let someTrueVariable = true;
console.log(someTrueVariable);

// Declare a variable, reassign it to your favorite color, and console log the value
let favColor = "pink";
console.log(favColor);
favColor = "blue";
console.log(favColor);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth.
//Return the result.Call the function.
function fourNums(a, b, c, d) {
  return (a + b + c) / d;
}

console.log(fourNums(4, 5, 6, 7));

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function twoNums(a, b) {
  //   console.log(a ** b);
  console.log(Math.pow(a, b));
}

console.log(twoNums(3, 4));

// *Conditionals*
// Create a function that takes in a boolean and a string.
//If the boolean is true, alert the string.If the boolean is false, console log the string
// function boo(bool, str) {
//   if (bool === true) {
//     return str;
//   } else {
//     return false;
//   }
// }

function alertOrLog(b, str) {
  //   if (b) {
  //     alert.log(str);
  //   } else {
  //     console.log(str);
  //   }
  b ? alert(str) : console.log(str);
}

const alertOrLog2 = (b, str) => (b ? alert(str) : console.log(str));

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number,
// but if the number is divisible by 3 log "fizz" instead of that number,
// if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible
// by 3 and 5 log "fizzbuzz" instead of that number

function fizzBuzz(numb) {
  for (let i = 1; i <= numb; i++) {
    if (numb % 3 === 0 && numb % 5 === 0) {
      console.log(i + " FizzBuzz");
    } else if (i % 3 === 0) {
      console.log(i + " Fizz");
    } else if (i % 5 === 0) {
      console.log(i + " Buzz");
    } else {
      console.log(i);
    }
  }
}

console.log(fizzBuzz(15));
