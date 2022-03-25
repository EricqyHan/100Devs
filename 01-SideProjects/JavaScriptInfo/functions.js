// Functions
function showMessage() {
  let message = "Hello, I am Iron Man!";
  console.log(message);
}

// showMessage();

let userName = "John";

function showMessage2() {
  userName = "Bob";
  let message = "Hello, " + userName;
  console.log(message);
}

console.log(userName);
showMessage2();
console.log(userName);

function messages(from, txt) {
  console.log(from, txt);
}

messages("ann", "hello");

// Parameters
function showMessageParameters(from, text) {
  console.log(from + " : " + text);
}

showMessageParameters("ann", "hello!");
showMessageParameters("Ann", "What's Up?");
