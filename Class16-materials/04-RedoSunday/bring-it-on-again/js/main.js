// *Variables*
// Declare a variable, assign it a value, and alert the value
let num = 42;
console.log(num);
// Create a variable, divide it by 10, and console log the value
let secondNum = 52 / 10;
console.log(secondNum);

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplyThreeNumbers(a, b, c) {
  console.log(a * b * c);
}

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two.
//Console log the result
function fourNums(a, b, c, d) {
  let add = a + b - c - d;
  console.log(add);
}
console.log(fourNums(8, 6, 4, 2));

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third.
//If the value is greater then 25, console log "WE HAVE A WINNNA"
function threeNums(a, b, c) {
  const results = (100 + a - b) / c;
  if (results > 25) {
    console.log("WE HAVE A WINNA");
  }
}
console.log(threeNums(10, 5, 4));

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day".
// Handle capitilization and if the user does not enter a day of the week alert "Try again!"

function dayOfWeek(day) {
  const dayOfWeekLower = day.toLowerCase();
  if (dayOfWeekLower === "saturday" || dayOfWeekLower === "sunday") {
    console.log("weekend");
  } else if (
    dayOfWeekLower === "monday" ||
    dayOfWeekLower === "tuesday" ||
    dayOfWeekLower === "wednesday" ||
    dayOfWeekLower === "thursday" ||
    dayOfWeekLower === "friday"
  ) {
    console.log("weekday");
  } else {
    console.log("Not a weekday or weekend");
  }
}

console.log(dayOfWeek("sunday"));

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function numbers(a) {
  for (let i = 1; i <= a; i += 3) {
    console.log(i);
  }
}

console.log(numbers(9));
