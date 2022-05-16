// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye".If they are equal, alert "We close in an hour".

function arrayMethod(arr) {
  if (arr[0] < arr[arr.length - 1]) {
    return "Hi";
  } else if (arr[0] > arr[arr.length - 1]) {
    return "Bye";
  } else if (arr[0] === arr[arr.length - 1]) {
    return "We close in an hour";
  }
}

console.log(arrayMethod([4, 2, 3, 1]));
