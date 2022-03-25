//---Easy
//create a function that subtracts two numbers and alerts the difference
function sub(a, b) {
  let difference = a - b;
  console.log(difference);
}

sub(10, 5);

//create a function that divides three numbers and console logs the quotient
function divide(a, b, c) {
  console.log(a / b / c);
}

console.log(divide(10, 5, 2));

//create a function that multiplys three numbers and returns the product
function multi(a, b, c) {
  return a * b * c;
}

console.log(multi(4, 5, 6));

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the
// first two numbers by the third number

function threeNumb(a, b, c) {
  return (a + b) / c;
}

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers.
// If the product is greater than 100 add the sum of the last two numbers and console log the value.
// If the product is less that 100, subtract the difference of the last two numbers and console log the value.
// If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function takeFour(a, b, c, d) {
  let multi = a * b;
  if (multi > 100) {
    console.log(multi);
  } else if (multi < 100) {
    console.log(multi - (c - d));
  } else if (multi === 100) {
    console.log(a * b * c) % d;
  }
}
