//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ["Pacific Rim 1", "Pacific Rim 2", "Pacific Rim 3"];

for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
  document.querySelector("h2").innerText += movies[i];
}

//Create an array of numbers.

let numbers = [1, 2, 4, 5, 32, 3];
// Loop through the array and add three to each number and replace the old number.

numbers.forEach((item, i) => {
  numbers[i] = item + 3;
});

//Find the average of all the numbers from question three
let sum = 0;

for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}

console.log(sum / num.length);
