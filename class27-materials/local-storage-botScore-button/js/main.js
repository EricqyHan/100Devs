//Create a button that adds 1 to a botScore stored in localStorage

// this will set to 0 on page refresh
// localStorage.setItem("botScore", 0);

if (localStorage.getItem("botScore")) {
  localStorage.setItem("botScore", 0);
}

document.querySelector("button").addEventListener("click", addAnotherOne);

function addAnotherOne() {
  let botScoreValue = Number(localStorage.getItem("botScore"));
  botScoreValue += 1;
  localStorage.setItem("botScore", botScoreValue);
}
