//Example fetch using DnD5eAPI - place subclasses in ul
// console.log("test");
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.subclasses);
      // console.log(data.subclasses[0].name);
      // console.log(data.subclasses[1].name);
      //  forEach will enable us to loop through the array
      //  This will let us log all 3 objects
      // The {} will enable you to do multiple lines of code
      data.subclasses.forEach((obj) => {
        console.log(obj.name);
        // create an li to go into ul
        const li = document.createElement("li");
        // add text to li
        li.textContent = obj.name;
        // append the li ot the ul
        document.querySelector("ul").appendChild(li);
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
