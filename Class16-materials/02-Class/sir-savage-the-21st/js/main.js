//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?
// for (i = 1; i <= 21; i++) {
//   console.log([i]);
// }

function savage21() {
  for (i = 1; i <= 21; i++) {
    console.log([i]);
  }
}

savage21();

function savage21DOM() {
  //   let dom21 = document.querySelector("#savageSays").innerText;
  //   let dom = (document.querySelector("#savageSays").innerText = 21);

  for (i = 1; i <= 21; i++) {
    document.querySelector("#savageSays").innerText += " 21";
  }
}

savage21DOM();
