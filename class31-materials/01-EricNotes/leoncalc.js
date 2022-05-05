function AgencyContractor(hourlyRate, hours, taxRate) {
  this.hours = hours;
  this.taxRate = taxRate;
  let rate = hourlyRate;
  // calculateProfit can be reused multiple times
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
//Uncaught TypeError: leon.calculateProfit is not a function
