// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let bachelor = "Pineapple Pizza";
bachelor = "Cake";
console.log(bachelor);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let character = "Sponge Bob";
console.log(character.charAt(1));
console.log(character[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function threeNums(a, s, d) {
  let prod = (a / s) * d;
  console.log(prod);
}

console.log(threeNums(4, 6, 8));

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function oneNum(a) {
  console.log(Math.cbrt(a).toFixed(4));
}
console.log(oneNum(9));

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function month(month) {
  let monthLowerCase = month.toLowerCase();
  if (
    monthLowerCase === "may" ||
    monthLowerCase === "june" ||
    monthLowerCase === "july" ||
    monthLowerCase === "september"
  ) {
    console.log("yay");
  } else if (
    monthLowerCase === "january" ||
    monthLowerCase === "february" ||
    monthLowerCase === "march" ||
    monthLowerCase === "april" ||
    monthLowerCase === "october" ||
    monthLowerCase === "november" ||
    monthLowerCase === "december"
  ) {
    console.log("Boo");
  }
}

console.log(month("may"));

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function skip5s(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 5 !== 0) {
      console.log(i);
    }
  }
}

console.log(skip5s(22));
