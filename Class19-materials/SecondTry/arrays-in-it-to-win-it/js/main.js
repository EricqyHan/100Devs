//Create an array of movies with at least three movies.
let movies = ["Pacific Rim", "Pacific Rim 2", "Pacific Rim 3", "Pacific Rim 4"];

movies.forEach((x, i, a) => console.log(x, i, a));
console.log(movies);

movies.forEach((element) => console.log(element));

// or use a forEach loop that runs once in each element of array
// movies.forEach((x, i, a) => console.log(x, i, a)); use a to grab the entire array

// movies.forEach(element => console.log(element))

//Using the array from above, store the first movie in a variable
let firstInFranchise = movies[0];
console.log(firstInFranchise);

//Get the length of the original array and store it in a new variable
console.log(movies.length);

//Get the last element in that array and store it in a new variable.
// What if your array was really large and you didn't know the last index? Would your solution still work?
console.log(movies[movies.length - 1]);
