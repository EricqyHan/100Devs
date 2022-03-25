//Write your pseduo code first!
// °C = (°F − 32) x 5/9

document
  .getElementById("#temperatureSubmit")
  .addEventListener("click", convert);

function convert() {
  let celsius = Number(document.getElementById("#temp").value);
  let temp = celsius * 1.8 + 32;
  document.getElementById("temp").value = temp;
}
