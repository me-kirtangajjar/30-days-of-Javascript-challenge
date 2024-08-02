// Activity 1: Variable Declaration
// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var number1 = 10;
console.log(number1); //10

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let name1 = "Kirtan";
console.log(name1); // Kirtan

// Activity 2: Constant Declaration
// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const isTrue = true;
console.log(isTrue); // true

// Activity 3: Data Types
// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
const number2 = 9;
const string2 = "gajjar";
const isFalse = false;
const object2 = { firstName: "Kirtan", lastName: "Gajjar" };
const array2 = [1, 2, 3, 4, 5];

console.log(typeof number2); // number
console.log(typeof string2); // string
console.log(typeof object2); // object
console.log(typeof array2); // object (arrays are objects in JavaScript)
console.log(typeof isFalse); // boolean

// Activity 4: Reassigning Variables
// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let userPhoneModel = "iPhone 15";
console.log(userPhoneModel); // iPhone 15
userPhoneModel = "iPhone 20";
console.log(userPhoneModel); // iPhone 20

// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error.
const userLaptopModel = "Macbook Pro M3 16";
console.log(userLaptopModel); // Macbook Pro M3 16
userLaptopModel = "Macbook Pro M6 16";
console.log(userLaptopModel); //TypeError: Assignment to constant variable.
