// *Variables*
// Declare a variable, assign it a value, and alert the value
let variables = 101;
console.log(variables);

// Create a variable, divide it by 10, and console log the value
let var2 = 100;
var2 = var2 / 10;
console.log(var2);

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multi(a, b, c) {
  console.log(a * b * c);
}
multi(3, 4, 5);

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function adding(a, b, c, d) {
  let add = a + b;
  console.log(add - c - d);
}

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third.
// If the value is greater then 25, console log "WE HAVE A WINNNA"
function three(a, b, c) {
  let add = 100 + a;
  add = add - b;
  add = add / c;
  if (add > 25) {
    console.log("WE have a winna");
  }
}
three(25, 5, 4);

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function weekend(dayOfWeek) {
  if (
    dayOfWeek.toLowerCase() === "saturday" ||
    dayOfWeek.toLowerCase() === "sunday"
  ) {
    console.log("weekend");
  } else if (
    dayOfWeek.toLowerCase() === "monday" ||
    dayOfWeek.toLowerCase() === "tuesday" ||
    dayOfWeek.toLowerCase() === "wedneday" ||
    dayOfWeek.toLowerCase() === "thursday" ||
    dayOfWeek.toLowerCase() === "friday"
  ) {
    console.log("weekday");
  }
}

console.log(weekend("MONDAY"));

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function aNumber(a) {
  for (let i = 0; i <= a; i += 3) {
    console.log([i]);
  }
}
