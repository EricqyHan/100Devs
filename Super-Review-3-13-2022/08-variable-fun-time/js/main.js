//--- Easy
//create a variable and assign it a number
let number = 42;

//minus 10 from that number
number -= 10;

//print that number to the console
console.log(number);

//--- Medium
//create a variable that holds a value from the input
let numberInput = Number(document.querySelector("input").value);

//add 25 to that number
numberInput += 25;

//alert that number
alert(numberInput);

//--- Hard
//create a variable that holds the h1
const variableH1 = document.querySelector("h1");

//add an event listener to that element that console logs the sum of the two previous variables
variableH1.addEventListener("click", addTwoNums);

function addTwoNums() {
  console.log(number + numberInput);
}
