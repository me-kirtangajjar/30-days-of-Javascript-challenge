// Activity 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkOddEven(number) {
  if (number % 2 === 0) {
    return `${number} is even`;
  } else {
    return `${number} is odd`;
  }
}
console.log(checkOddEven(50));

// Task 2: Write a function to calculate the square of a number and return the result.
function calculateSquare(number) {
  return number * number;
}
console.log(calculateSquare(5));

// Activity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const findMaximum = function (num1, num2) {
  return num1 > num2 ? num1 : num2;
};
console.log(findMaximum(5, 50));

// Task 4: Write a function expression to concatenate two strings and return the result.
const concatenateStrings = function (str1, str2) {
  return `${str1} ${str2}`;
};
console.log(concatenateStrings("Kirtan", "Gajjar"));

// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const calculateSum = (num1, num2) => num1 + num2;
console.log(calculateSum(50, 100));

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const containsCharacter = (str, char) => str.includes(char);
console.log(containsCharacter("kirtan", "n"));

// Activity 4: Function Parameters and Default Values
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function findProduct(num1, num2 = 10) {
  return num1 * num2;
}
console.log(findProduct(50, 5));
console.log(findProduct(50)); // To test default parameter

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greetMessage(personName, personAge = 18) {
  return `Hello ${personName}, age is ${personAge}`;
}
console.log(greetMessage("Kirtan"));
console.log(greetMessage("Kirtan", 25));

// Activity 5: Higher-Order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function repeatFunction(func, count) {
  for (let i = 0; i < count; i++) {
    func();
  }
}
repeatFunction(() => console.log("Hello dude"), 3);

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function applyFunctions(func1, func2, value) {
  const firstResult = func1(value);
  const secondResult = func2(firstResult);
  return secondResult;
}
function doubleNumber(num) {
  return num + num;
}
function squareNumber(num) {
  return num * num;
}

console.log(applyFunctions(doubleNumber, squareNumber, 5));
