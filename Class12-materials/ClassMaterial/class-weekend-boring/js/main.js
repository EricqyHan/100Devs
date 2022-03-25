console.log("hi");
let dayText = document.getElementById("placeToSee");
let timeText = document.getElementById("time");

document.getElementById("check").addEventListener("click", check);

function check() {
  // pull value out of input
  let day = document.querySelector("#day").value;
  let dayLowerCase = day.toLowerCase();
  if (
    dayLowerCase === "monday" ||
    dayLowerCase === "wednesday" ||
    dayLowerCase === "friday"
  ) {
    console.log("Boring Day");
    dayText.textContent = "Boring Day";
    timeText.textContent = "Code All Day";
    console.log("Boring Day - code all day");
  } else if (dayLowerCase === "tuesday" || dayLowerCase === "thursday") {
    dayText.textContent = "Class Day";
    timeText.textContent = "Class at 6:30 PM EST";
    console.log("Class Day - Code at 6:30");
  } else if (dayLowerCase === "saturday") {
    dayText.textContent = "Weekend!";
    timeText.textContent = "Code all day!";
    console.log("Beekend Day - Code all weekend!");
  } else if (dayLowerCase === "sunday") {
    dayText.textContent = "Weekend";
    dayText.textContent = "Office Hour Day";
    timeText.textContent = "Office hours at 12:00 PM EST";
  } else {
    dayText.textc = "not a day";
    console.log("not a day");
  }
  //Conditionals go here
}
