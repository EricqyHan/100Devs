//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arrNumbers = [10, 29, 30, 50];
let sum = arrNumbers.reduce((acc, item) => acc + item, 0);
console.log(sum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

let numbersSquared = arrNumbers.map((item) => {
  console.log(item * item);
});

//Create a function that takes string
//Print the reverse of that string to the console

let unoReverse = (str) => str.split("").reverse("").join("");

console.log(unoReverse("currahee"));

//Create a function that takes in a string. Alert if the string is a palindrome or not
let palindromeString = (str) => console.log(str === unoReverse(str));

console.log(palindromeString("racecar"));
