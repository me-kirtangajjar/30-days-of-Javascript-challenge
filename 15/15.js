// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outerFunction() {
  let outerVariable = "Hello";

  function innerFunction() {
    return outerVariable + ", World!";
  }

  return innerFunction;
}

const inner = outerFunction();
console.log(inner()); // Output: Hello, World!

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createCounter() {
  let counter = 0;

  return {
    increment: function () {
      counter++;
    },
    getValue: function () {
      return counter;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // Output: 2

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function createIDGenerator() {
  let lastID = 0;

  return function () {
    lastID++;
    return lastID;
  };
}

const generateID = createIDGenerator();
console.log(generateID()); // Output: 1
console.log(generateID()); // Output: 2

// Task 4: Create a closure that captures a user’s name and returns a function that greets the user by name.
function createGreeter(name) {
  return function () {
    return `Hello, ${name}!`;
  };
}

const greetJohn = createGreeter("John");
console.log(greetJohn()); // Output: Hello, John!

// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
function createFunctionArray() {
  const functions = [];

  for (let i = 0; i < 5; i++) {
    functions.push(function () {
      console.log(i);
    });
  }

  return functions;
}

const functionArray = createFunctionArray();
functionArray[0](); // Output: 0
functionArray[1](); // Output: 1

// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
function createItemManager() {
  let items = [];

  return {
    addItem: function (item) {
      items.push(item);
    },
    removeItem: function (item) {
      items = items.filter((i) => i !== item);
    },
    listItems: function () {
      return items;
    },
  };
}

const manager = createItemManager();
manager.addItem("Apple");
manager.addItem("Banana");
manager.removeItem("Apple");
console.log(manager.listItems()); // Output: ['Banana']

// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

function add(a, b) {
  return a + b;
}

const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2)); // Output: 3
console.log(memoizedAdd(1, 2)); // Output: 3 (retrieved from cache)

// Task 8: Create a memoized version of a function that calculates the factorial of a number.
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); // Output: 120
console.log(memoizedFactorial(5)); // Output: 120 (retrieved from cache)
