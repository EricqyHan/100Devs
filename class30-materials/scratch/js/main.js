function AgencyContractorOG(hourlyRate, hours, taxRate) {
  this.hourlyRate = hourlyRate;
  this.hours = hours;
  this.taxRate = taxRate;
  this.calculateProfit = function () {
    return this.hourlyRate * this.hours * (1 - this.taxRate);
  };
  this.invoiceClient = function () {
    return `Your invoice total is ${this.hourlyRate * this.hours}`;
  };
}

let leons = new AgencyContractorOG(250, 160, 0.35);
console.log(leon.invoiceClient()); //40000
console.log(leon.hourlyRate); //250
console.log(leon.calculateProfit());

//  Better Version
function AgencyContractor(hourlyRate, hours, taxRate) {
  this.hours = hours;
  this.taxRate = taxRate;
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
//Uncaught TypeError: leon.calculateProfit is not a function
