//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

let even = (arr) => {
  let evenArr = [];
  for (let i = 1; i <= arr.length; i++) {
    if (i % 2 === 0) {
      evenArr.push(i);
    }
  }
  return evenArr;
};

console.log(even([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// or
function onlyEven(arr) {
  let onlyEven = [];
  arr.forEach((item, index) => {
    if (item % 2 === 0) {
      onlyEven.push(item);
    }
  });
  return onlyEven;
}
console.log(onlyEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
