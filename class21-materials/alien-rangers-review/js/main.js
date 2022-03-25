//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ["Lost", "BSG", "Agents of Shield", "King of the Hill"];
tvShows.forEach((tvShow) => {
  return tvShow;
});

//Create and array of numbers
let numbers = [21, 56, 88, 24, 99, 710];

//Return a new array of numbers that includes every even number from the previous Arrays
// note that the very first time (n) will be 21. Does 21 % 2 === 0? NO
// second time (n) will be 56. Does 56 %2 === 0 ? YES. So we add 56 into our new array.
// third time (n) will be 88. Does 88 % 2 === 0? Yes. and we go on until the end of the array
// (n) is just a parameter. We can call it anything!
let onlyEvens = (arr) => arr.filter((n) => n % 2 === 0);
console.log(onlyEvens(numbers));

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function sumSecondLowAndHigh(arr) {
  let sorted = arr.sort((a, b) => a - b);
  console.log(sorted);
  let secondLowest = sorted[0 + 1];
  let secondHighest = sorted[sorted.length - 2];

  console.log(secondLowest);
  console.log(secondHighest);
}

console.log(sumSecondLowAndHigh([21, 56, 88, 24, 99, 710]));
