//Create an array of movie titles. Loop through the array and each element to the h2.
// let movies = ["Pacific Rim", "Pacific Rim 2", "Pacific Rim 3"];

// for (let i = 0; i < movies.length; i++) {
//   document.querySelector("h2").innerText += movies[i];
// }

//Create an array of numbers.
// Loop through the array and add three to each number and replace the old number.
let nums = [1, 2, 3, 4, 5, 6];

nums.forEach((item, i) => {
  // item is element and i is the index
  console.log(item, i);
  nums[i] = item + 3;
  console.log(nums);
});

//Find the average of all the numbers from question three
let sum = 0;

for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log(sum / nums.length);
