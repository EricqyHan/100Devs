// Create a function that takes in an array.
// If the first number, is less than the last number,
// alert "Hi".If the first number is greater than the last number,
// alert "Bye".If they are equal, alert "We close in an hour".

let coolArray = [10, 20, 30, 40, 50];

function coolArrays(array) {
  if (array[0] > array[array.length - 1]) {
    console.log("hi");
  } else if (array[0] < array[array.length - 1]) {
    console.log("Bye");
  } else if (array[0] === array[array.length - 1]) {
    console.log("We close in an hour");
  }
}

console.log(coolArrays([65, 4, 6]));
