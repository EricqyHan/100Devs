//Create a stopwatch object that has four properties and three methods

// const stopWatch = {
//   brand: "Casio",
//   color: "Black",
//   thickness: ".5mm",
//   buttons: 4,
//   timer() {
//     return `Start ${this.brand} timer`;
//   },
// };

let stopwatch = {};
stopwatch.color = "Black";
stopwatch.shape = "Round";
stopwatch.brand = "Nike";
stopwatch.smell = "New";
stopwatch.start = function () {
  console.log("Start timer");
};
stopwatch.stop = function () {
  console.log("Stop timer");
};
stopwatch.morph = function () {};
