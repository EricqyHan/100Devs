//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
//Example fetch using pokemonapi.co
// https://api.nasa.gov/planetary/apod?api_key=qRvJnslXKsxgrQPBG9WqHE0XTxpy7Uae5qtKKcxl
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  console.log(choice);
  const url = `https://api.nasa.gov/planetary/apod?api_key=qRvJnslXKsxgrQPBG9WqHE0XTxpy7Uae5qtKKcxl&date=${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      if (data.media_type === "image") {
        document.querySelector("img").src = data.hdurl;
      } else if (data.media_type === "video") {
        document.querySelector("iframe").src = data.url;
      }
      document.querySelector("h3").innerText = data.explanation;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
