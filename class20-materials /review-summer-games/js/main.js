//Create a function that takes in an array of numbers.
// Multiply each number together and alert the product.

function multiply(arr) {
  // We need to multiply so we need to start with something or we always end up with 0
  // The whole array is being passed into arr
  let product = 1;
  // loop through the array
  // Very first time this runs we will get 10 for num
  // Where we see num it's actually 10 and product will be 1
  // after it's done, it will be 10
  // second time this runs, num will be 2 and product will be 10
  // very last time it runs num will be 3 and product will be 20
  arr.forEach((num) => (product *= num));
  console.log(product);
  return product;
}

console.log(multiply([10, 2, 3]));
