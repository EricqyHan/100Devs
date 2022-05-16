//Write your pseduo code first!
// Convert from celsius to fahrenheit
// divide by 5, then multiply by 9, then add 32

// function celsiusToFahrenheit(temperature) {
//   //divide "temperature" by 5 and then * 9
//   // add 32 to that number
//   return (temperature / 5) * 9 + 32;
// }

document.querySelector("h1").addEventListener("click", cToF);

function cToF() {
  let temp = Number(document.querySelector("input").value);
  temp = temp * 1.8 + 32;
  document.querySelector("h2").innerText = temp;
}
