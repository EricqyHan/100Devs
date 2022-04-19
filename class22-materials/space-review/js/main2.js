// Question 1 review
let nums = [2, 3, 4];
nums[0];
nums[0] = 15;
console.log(nums);

let sum = nums.reduce((acc, c) => acc + c, 0);
console.log(sum);

// Question 2 Review
let numsSquared = nums.map((n) => n * n);
console.log(numsSquared);

function squareNums() {
  return nums.map((n) => n * n);
}
console.log(squareNums());

// Reverse String
function reverseString(str) {
  let reverseStr = str.split(" ").reverse().join(" ");
  console.log(reverseStr);
}

console.log(reverseString("my car is dope"));

// Palindrome
const isPalindrome = (s) =>
  s === s.split("").reverse.join("") ? console.log("yes") : console.log("no");

function isPalindrome2(str) {
  let reverseStr = str.split("").reverse().join("");
  if (str === reverseStr) {
    console.log("yes");
  } else {
    console.log("No");
  }
}

console.log(isPalindrome2("alsdfje"));

// sort Method
// least to greatest
Array.sort((a, b) => a - b);
// greatest to least
Array.sort((a, b) => b - a);
