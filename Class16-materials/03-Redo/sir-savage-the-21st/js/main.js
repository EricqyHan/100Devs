//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

document.querySelector("h1").addEventListener("click", twentyOne);

// let test = document.querySelector("#test").innerHTML;
function twentyOne() {
  console.log("test");

  for (i = 1; i <= 8; i++) {
    const repeat21 = document.createElement("p");
    repeat21.innerHTML = "21";
    document.body.appendChild(repeat21);
  }
}
