function AgencyContractorOld(hourlyRate, hours, taxRate) {
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

// uuh oh they can see the proces
let leonOld = new AgencyContractorOld(250, 160, 0.35);
console.log(leonOld.invoiceClient()); //40000
console.log(leonOld.hourlyRate); //250
console.log(leonOld.calculateProfit()); //26000

// better version using Abstraction
// abstraction is showing essentials and hiding details
function AgencyContractor(hourlyRate, hours, taxRate) {
  this.hours = hours;
  this.taxRate = taxRate;
  // going from this to let changes them to local variables
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
// console.log(leon.calculateProfit()); can't calculate because of private variables let
//Uncaught TypeError: leon.calculateProfit is not a function

// how do we use hourly rate now?
// client doesn't need to know hourly rate to get their invoice
