//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arrNumbers = [1, 2, 3, 4, 5];
let arrNumbersSum = 0;
for (let i = 0; i < arrNumbers.length; i++) {
  arrNumbersSum += arrNumbers[i];
}
console.log(arrNumbersSum);

let arrNumbers2 = ["42", 19, 77, 33, 57];
// reduce will run once for each element in our array and
// we will pass in the arrow function, but reduce grabs two values
// first value is the acculumator and second value is the current value
let sum = arrNumbers2.reduce((acc, c) => acc + +c, 0);

console.log(sum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function arrNum(arr) {
  let numSquared = [];
  for (let i = 0; i < arr.length; i++) {
    // arr.push(numSquared);
  }
}

console.log(arrNum([1, 2, 3, 4, 5]));

//Create a function that takes string
//Print the reverse of that string to the console

//Create a function that takes in a string
//Alert if the string is a palindrome or not
