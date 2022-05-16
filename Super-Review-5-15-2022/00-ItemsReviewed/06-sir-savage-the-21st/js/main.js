//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

document.querySelector("h1").addEventListener("click", savage21);

function savage21() {
  for (let i = 1; i <= 21; i++) {
    document.querySelector("#savageSays").innerHTML += "21 ";
  }
}

// function savage21() {
//   for (let i = 1; i <= 21; i++) {
//     console.log(21);
//   }
// }

// savage21();
