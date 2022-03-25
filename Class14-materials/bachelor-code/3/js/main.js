const contestants = document.querySelectorAll(".contestant");

// Event listener to loop through each contestant and we are
// going to add and event listener to it
Array.from(contestants).forEach((element) =>
  element.addEventListener("click", checkForRose)
);

function checkForRose(click) {
  if (click.target.classList.contains("rose")) {
    document.querySelector("#nikki").classList.toggle("hidden");
  } else {
    alert("Wrong!");
  }
}
