// Is "else" required?

function checkAge2(age) {
  if (age > 18) {
    return true & alert("Proceed");
  } else {
    return confirm("Did parents allow you?");
  }
}

function checkAge3(age) {
  if (age > 18) {
    return true;
  }
}

function checkAge4(age) {
  return age > 18 ? true : false;
  // return condition  : code to run if true
}

function checkAge5(age) {
  return age > 18 || confirm("did your parents allow you");
}

checkAge4(12);
console.log(checkAge4(12));

function math(a, b) {
  return a < b ? a : b;
}

console.log(math(2, 5));
console.log(math(3, -1));
console.log(math(1, 1));

function pow(x, n) {
  return x ** n;
}
console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));

function pow2(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

const list = [1, 2, 3, 4, 5];
for (let lists of list) {
  console.log(lists);
}
