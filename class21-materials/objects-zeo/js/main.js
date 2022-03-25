//Create a stopwatch object that has four properties and three methods
let stopwatch = {};
stopwatch.color = "black";
stopwatch.shape = "round";
stopwatch.brand = "Nike";
stopwatch.size = "shmmmedium";

console.log(stopwatch.color);
console.log(stopwatch);

// function start
stopwatch.start = function () {
  console.log("starting");
};

console.log(stopwatch.start());

// Function end
stopwatch.end = function () {
  console.log("stoping");
};
console.log(stopwatch.end());

// function sayBrand
stopwatch.sayBrand = function () {
  console.log(stopwatch.brand);
};

console.log(stopwatch.sayBrand());
