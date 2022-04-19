// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentenceString = "We stand alone together";
console.log(sentenceString.endsWith("?"));

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let multiWords = "I am a jr.dev trying to find my palace in the world.";
// newString = multiWords.replace(/jr.dev/, "software engineer");
console.log(multiWords.replaceAll("jr.dev", "software engineer"));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
let rpsGame = () => {
  let rps = ["rock", "paper", "scissor"];
  let rpsPick = Math.floor(Math.random() * rps.length);
  let result = rps[rpsPick];
  return result;
};

console.log(rpsGame());
console.log(rpsGame());
console.log(rpsGame());
console.log(rpsGame());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors)
//and determines if they won a game of rock paper scissors
//against a bot using the above function

let checkWin = (playerChoice) => {
  // Very first thing this function will do is run the rpsGame()
  let botChoice = rpsGame();
  if (
    (playerChoice === "rock" && botChoice === "scissor") ||
    (playerChoice === "paper" && botChoice === "rock") ||
    (playerChoice === "scissor" && botChoice === "paper")
  ) {
    return `You win!`;
  } else if (playerChoice === botChoice) {
    return `You tied!`;
  } else {
    `You lose`;
  }
};

checkWin();

//*Loops*
//Create a function that takes an array of choices.
//Play the game x times where x is the number of choices in the array.
//Print the results of each game to the console.
