//Create a button that adds 1 to a botScore stored in localStorage
// click event
// set up a value in local storage
// when page loads, we set bot score to 0
//localStorage.setItem("botScore", 0);

// if we don't get a null value back, if there is something there we get a turue value,
//
if (!localStorage.getItem("botScore")) {
  localStorage.setItem("botScore", 0);
}

document.querySelector("button").addEventListener("click", addAnotherOne);

function addAnotherOne() {
  // if there is a botScore in local storage, it will give value, and store it in botscore
  let botScoreVal = Number(localStorage.getItem("botScore"));
  botScoreVal += 1;
  localStorage.setItem("botScore", botScoreVal);
  document.querySelector(".score").innerText = botScoreVal;
}
