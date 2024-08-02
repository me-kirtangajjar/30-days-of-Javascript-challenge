// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // Output: 5

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
const person = {
  name: "John Doe",
  age: 30,
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};
console.log(person.greet()); // Output: Hello, my name is John Doe and I am 30 years old.

// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}
console.log(multiply(3, 4)); // Output: 12
console.log(subtract(10, 5)); // Output: 5

// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}
console.log(divide(10, 2)); // Output: 5

// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
const PI = 3.14159;
function circleArea(radius) {
  return PI * radius * radius;
}
function circleCircumference(radius) {
  return 2 * PI * radius;
}
console.log(circleArea(5)); // Output: 78.53975
console.log(circleCircumference(5)); // Output: 31.4159

// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
const _ = require("lodash");
const array = [1, 2, 3, 4, 5];
console.log(_.reverse(array)); // Output: [5, 4, 3, 2, 1]

// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
const axios = require("axios");
axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));

// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.
// (This task is typically done with configuration files and requires a build step, but here's a simple example of using multiple modules before bundling.)
const utils = {
  add,
  multiply,
  subtract,
  divide,
};
console.log(utils.add(10, 20)); // Output: 30
console.log(utils.multiply(5, 6)); // Output: 30
