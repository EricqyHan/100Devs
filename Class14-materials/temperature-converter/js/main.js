//Write your pseduo code first!

document.querySelector("#check").addEventListener("click", check);

function check() {
  console.log("test");
  let pumpkin = document.querySelector("#convert").value;
  pumpkin = (pumpkin * 9) / 5 + 32;
  document.querySelector("#converted").innerText = pumpkin;
}
