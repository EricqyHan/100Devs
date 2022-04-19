//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);
document.querySelector(".book-name").innerText = localStorage.getItem("books");

function getFetch() {
  const isbn = document.querySelector("input").value;
  const url = `https://openlibrary.org/isbn/${isbn}.json`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.title);
      //  if not null
      if (!localStorage.getItem("books")) {
        localStorage.setItem("books", data.title);
      } else {
        let books = localStorage.getItem("books") + " ; " + data.title;
        localStorage.setItem("books", books);
      }
      //  put title into local storage
      // localStorage.setItem("books", data.title);
      document.querySelector(".book-name").innerText =
        localStorage.getItem("books");
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

// 9781451612592
