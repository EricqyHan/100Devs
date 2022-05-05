// Ut oh people can see all the info and how much we charge
function AgencyContractor(hourlyRate, hours, taxRate) {
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

let leon = new AgencyContractor(250, 160, 0.35);
console.log(leon.invoiceClient()); //40000
console.log(leon.hourlyRate); //250
console.log(leon.calculateProfit()); //26000
