//Create an array of movies with at least three movies.
let movies = [
  "Better Luck Tomorrow",
  "The Fast and the Furious",
  "2 Fast 2 Furious",
  "Tokyo Drift",
  "Fast and Furious",
  "Fast Five",
  "Fast Six",
  "Furious 7",
  "Fast 8",
  "Hobbs and Shaw",
  "Fast 9",
];

for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}

// or use a forEach loop that runs once in each element of array
// movies.forEach((x, i, a) => console.log(x, i, a)); use a to grab the entire array

movies.forEach((x, i) => console.log(x, i));

// movies.forEach(element => console.log(element))

//Using the array from above, store the first movie in a variable
let fastFranchise1 = movies[0];
console.log("First Movies" + fastFranchise1);

//Get the length of the original array and store it in a new variable
let fastFranchiseLength = movies.length;
console.log(fastFranchiseLength);

//Get the last element in that array and store it in a new variable.
// What if your array was really large and you didn't know the last index? Would your solution still work?
console.log(movies[movies.length - 1]);
