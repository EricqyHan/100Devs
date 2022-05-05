// OG
// Not easy to add new features and functions
let hourlyRate = 250;
let hours = 160;
let taxRate = 0.35;

function calculateProfit(rate, numOfHours, taxes) {
  return rate * numOfHours * (1 - taxes);
}

// new function added
// this line can cause a lot of problems
function holdForTaxes(profitMade) {
  return hourlyRate * hours - profitMade;
}

let profit = calculateProfit(hourlyRate, hours, taxRate);
console.log(profit);

// new functionality
let taxesHeld = holdForTaxes(profit);
console.log(taxesHeld);
