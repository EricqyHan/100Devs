//Example fetch using pokemonapi.co
// document.querySelector("button").addEventListener("click", getFetch);

// function getFetch() {
//   const choice = document.querySelector("input").value.toLowerCase();
//   const url = `https://pokeapi.co/api/v2/pokemon/${choice}`;

//   fetch(url)
//     .then((res) => res.json()) // parse response as JSON
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(`error ${err}`);
//     });
// }

let saveAPItoVar;

fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  .then((res) => res.json())
  .then((data) => {
    console.log("First Console.log ");
    console.log(data.results[2]);
    saveAPItoVar = data.results[2];
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

console.log(saveAPItoVar);
