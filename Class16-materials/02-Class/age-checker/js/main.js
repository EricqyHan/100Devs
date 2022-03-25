//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

// const h1 = document.querySelector("h1");
// h1.addEventListener("click", checkAge);

// function checkAge() {
//   let age = document.querySelector("#danceDanceRevolution").value;
//   let description = document.querySelector("p").innerText;
//   if (age < 16) {
//     description = "You can't drive.";
//   } else if (age > 16 && age < 18) {
//     description =
//       "You can't hate from outside the club, because they can't even get in";
//   } else if (age < 21) {
//     description = "you can't drink";
//   } else if (age < )
// }

let age = 30;

if (age < 16) {
  console.log("You Can't drive");
} else if (age < 18) {
  console.log(
    `can't hate from outside the club, because they can't even get in`
  );
} else if (age < 21) {
  console.log(`You can't drink`);
} else if (age < 25) {
  console.log("You can't rent a car");
} else if (age < 30) {
  console.log(`You can't rent fancy cars`);
} else if (age >= 30) {
  console.log("There is nothing else to look forward to");
}
