//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector("#help").addEventListener("click", stopEating);

function stopEating() {
  let snacks = document.querySelector("input").value;
  //   document.querySelector("#stops").innerText = "";
  for (let i = 1; i <= snacks; i++) {
    const repeatStopSnacking = document.createElement("h2");
    repeatStopSnacking.innerHTML = " Stop Snacking! ";
    document.body.appendChild(repeatStopSnacking);
    //  document.querySelector("#stops").innerText += " Stop Snacking! ";
  }
}
