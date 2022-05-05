// serious business person object
// Easier to read
let seriousBusinessPerson = {
  hourlyRate: 250,
  hours: 160,
  //   taxRate: 0.35,
  taxRate: 0.4, // changed from 0.35 in example as code update
  //   this is a method
  //   Also examples of Encapsulation
  // Encapsulation - process of storing functions (methods) with their associated data (properties) in on thing
  // We use encapsulation becasue make code more readable and make changes to function and not worry
  calculateProfit: function () {
    return this.hourlyRate * this.hours * (1 - this.taxRate);
  },
  calculateTaxesHeld: function () {
    return this.hourlyRate * this.hours - this.calculateProfit();
  },
};

console.log(seriousBusinessPerson.hourlyRate);
