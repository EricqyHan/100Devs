//Write your pseduo code first!
// Take input from user
// Calculate (input x 1.8) + 32
// display on html page
document.querySelector("#check").addEventListener("click", check);

function check() {
  let temp = document.querySelector("#convert").value;
  temp = (temp * 9) / 5 + 32;
  document.querySelector("#convertTemp").innerText = temp;
}
