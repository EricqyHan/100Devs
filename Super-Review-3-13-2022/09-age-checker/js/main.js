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
const h1 = document.querySelector("h1").addEventListener("click", age);
let p = doucment.querySelector("p");
function age() {
  let age = document.querySelector("#danceDanceRevolution").value;
  if (age < 16) {
    document.querySelector("p").innerText = "Cant drive you";
  } else if (age < 18) {
    document.querySelector("p").innerText = "Can't hate from outside club";
  } else if (age < 21) {
    document.querySelector("p").innerText = "Can't drink'";
  } else if (age < 25) {
    document.querySelector("p").innerText = "Can't rent cars";
  } else if (age < 30) {
    document.querySelector("p").innerText = "Can't rent fancy cars";
  } else if (age < 30) {
    document.querySelector("p").innerText = "Life sucks";
  }
}
