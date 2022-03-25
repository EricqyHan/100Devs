// *Variables*
// Declare a variable and assign it to your fav drink as a string.
// Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = " Coke ";
console.log(favDrink);
favDrink = favDrink.trim();
console.log(favDrink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let str = "Bob Duck apple dog";
if (str.search("apple") !== -1) {
  console.log("yes");
} else {
  console.log("no");
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissor() {
  let rps = ["rock", "paper", "scissor"];
  let rpsPick = Math.floor(Math.random() * rps.length);
  let result = rps[rpsPick];
  return result;
}

console.log(rockPaperScissor());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors)
//and determines if they won a game of rock paper scissors
// against a bot using the above function
function checkWin(playerChoice) {
  let botChoice = rockPaperScissor();
  if (
    (playerChoice === "rock" && botChoice === "scissor") ||
    (playerChoice === "paper" && botChoice === "rock") ||
    (playerChoice === "scissor" && botChoice === "paper")
  ) {
    return `You Win!`;
  } else if (playerChoice === botChoice) {
    return `You Tied`;
  } else {
    return `You Lose`;
  }
}

console.log(checkWin("rock"));
console.log(checkWin("paper"));
console.log(checkWin("scissor"));

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGameXTimes(arr) {
  // Time stamp is at 1:10ish in class 22
  // when we stt arr we pass in the array "the rock, paper, and scisor"
  // this forEach goblin will run three times
  // the very first time choice will be rock
  // and we will pass rock into checkWin(function)'
  // and the bot will throw in

  arr.forEach((choice) => checkWin(choice));
}

console.log(playGameXTimes(["rock", "paper", "scissor"]));
