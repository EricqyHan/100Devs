// abstraction
function AgencyContractor(hourlyRate, hours, taxRate) {
  this.hours = hours;
  this.taxRate = taxRate;
  // rate and calculateProfit were changed to local variables and are no longer bound to the object
  // they only live inside this function
  let rate = hourlyRate;
  let calculateProfit = function () {
    return rate * this.hours * (1 - this.taxRate);
  };
  this.invoiceClient = function () {
    return `Your invoice total is ${rate * this.hours}`;
  };
}

let leon = new AgencyContractor(250, 160, 0.35);
console.log(leon.invoiceClient()); //40000
console.log(leon.hourlyRate); //undefined
console.log(leon.calculateProfit());
//Uncaught TypeError: leon.calculateProfit
