let coolCars = ["Civic Si", "Mustang", "GTR", "CTR"];

coolCars[3] = "Civic Type-R";

console.log(coolCars);

let cars = ["Honda", "Toyota", "Ford"];
let nums = [1, 2, 3];
cars = nums;
console.log(cars);
console.log(cars.length);

// Array Iteration

let bestColors = ["green", "blue", "yellow", "black"];

// for (let i = 0; i < bestColors.length; i++) {
//   console.log(bestColors[i]);
// }

// Better method to loop through arrays - for each
// this will run four times
// everytime it will grab the element, the index, and take note what array it just stole stuff from
// "Oh, I stole that from the bestColors array"
// the golbin is throwing the element into bucket of X
// and throwing index it into bucket i
// step 1: throwing Green into x and 0 into i
// Step 2: throwing blue into x and 1 into i
// Step 2: throwing yellow into x and 2 into i
// Step 2: throwing black into x and 3 into i
bestColors.forEach((x, i) => console.log(x));

// Other array methods
let bestRappers = ["Post Malone", "Eminem", "50Cent"];
let removed = bestRappers.shift();
// "Post Malone" has been removed
// We shifted "Post Malone" off and we would only see Eminem and 50 Cent
console.log(bestRappers);
// pop moves off from the end
let removedAgain = bestRappers.pop();
console.log(removedAgain);

// unshift puts it at the front
let bestRappers2020 = ["Polo G"];
bestRappers2020.unshift("Dylan");
bestRappers2020.push("Dylan");
console.log(bestRappers2020);

// Map - will spit out a new array at the end
let bestRappersAllTime = bestRappers2020.map((x) => "Dylan");
console.log(bestRappersAllTime);
bestRappersAllTime.unshift("Dylan");
bestRappersAllTime.push("Dylan");
console.log(bestRappersAllTime);
