// Activity 1: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const array1 = [1, 2, 3, 4, 5];
console.log("Array:", array1);

// Task 2: Access the first and last elements of the array and log them to the console.
console.log("First Element:", array1[0]);
console.log("Last Element:", array1[array1.length - 1]);

// Activity 2: Array Methods (Basic)
// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
array1.push(6);
console.log("After push:", array1);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
array1.pop();
console.log("After pop:", array1);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
array1.shift();
console.log("After shift:", array1);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
array1.unshift(1);
console.log("After unshift:", array1);

// Activity 3: Array Methods (Intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const doubledArray = array1.map((num) => num * 2);
console.log("Doubled Array:", doubledArray);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const evenNumbersArray = array1.filter((num) => num % 2 === 0);
console.log("Even Numbers Array:", evenNumbersArray);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const sumOfNumbers = array1.reduce((total, currentValue) => total + currentValue, 0);
console.log("Sum of All Numbers:", sumOfNumbers);

// Activity 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to the console.
console.log("Using for loop:");
for (let i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log("Using forEach method:");
array1.forEach((num) => console.log(num));

// Activity 5: Multi-dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Matrix:", matrix);

// Task 13: Access and log a specific element from the two-dimensional array.
const specificElement = matrix[0][1]; // Accessing the element at row index 0 and column index 1
console.log("Specific Element:", specificElement);
