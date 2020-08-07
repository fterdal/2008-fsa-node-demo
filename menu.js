const { restaurantName, toppings } = require('./toppings');

// const toppingsExports = require('./toppings');
// const toppings = toppingsExports.toppings;
// const restaurantName = toppingsExports.restaurantName;

console.log(`Welcome to ${restaurantName}`);

console.log(`Here's the Menu! ${toppings.map(topping => {
  return '\n* ' + topping
}).join('')}`);
