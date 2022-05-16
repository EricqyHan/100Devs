//---Easy
//create a function that subtracts two numbers and alerts the difference
function sub(a, b) {
  let difference = a - b;
  alert(difference);
}
console.log(sub(5, 2));

//create a function that divides three numbers and console logs the quotient
function divideThreeAndLog(a, b, c) {
  return a / b / c;
}

console.log(divideThreeAndLog(100, 25, 5));

//create a function that multiplys three numbers and returns the product
function multiplyThree(a, b, c) {
  let product = a * b * c;
  return product;
}

let returnVal = multiplyThree(5, 10, 15);
console.log(returnVal);

//---Medium
//create a function that takes in three numbers.
// Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function medium(a, b, c) {
  return a + (b % c);
}

// or
const sumAndDivide = (a, b, c) => (a + b) % c;

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers.
//If the product is greater than 100 add the sum of the last two numbers and console log the value.
//If the product is less that 100, subtract the difference of the last two numbers and console log the value.
//If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function hard(a, b, c, d) {
  let multi = a * b;
  if (multi > 100) {
    console.log(multi + c + d);
  } else if (multi < 100) {
    let sub = c - d;
    console.log(multi - sub);
  } else if (multi == 100) {
    let multi = a * b * c;
    alert(multi % d);
  }
}

console.log(hard(5, 4, 3, 2));
console.log(hard(100, 25, 10, 5));
