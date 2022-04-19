//Create a function that takes in an array of numbers.
// Return a new array containing every even number from
// the original array(do not use map or filter)

function numbers2(nums) {
  let even = [];
  nums.forEach((n) => {
    if (n % 2 === 0) {
      even.push(n);
    }
  });
  return even;
}

console.log(numbers2([1, 2, 3, 4, 5, 6]));
