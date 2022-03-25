// We can create a stopwatch object using literal notation
let stopwatch = {};
stopwatch.currentTime = 12;

stopwatch.tellTime = function (time) {
  console.log(`The current time is ${time}`);
};

console.log(stopwatch.tellTime(stopwatch.currentTime));
// tellTime is a method. We know it's a method becasue it told on itself
