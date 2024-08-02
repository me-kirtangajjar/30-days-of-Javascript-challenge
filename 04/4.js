// Activity 1: For Loop
// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5 * i}`);
}

// Activity 2: While Loop
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let num = 1;
let sumOfNumbers = 0;
while (num <= 10) {
  sumOfNumbers += num;
  num++;
}
console.log(`Sum of numbers from 1 to 10 is ${sumOfNumbers}`);

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let num2 = 10;
while (num2 >= 1) {
  console.log(num2);
  num2--;
}

// Activity 3: Do...While Loop
// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let num3 = 1;
do {
  console.log(num3);
  num3++;
} while (num3 <= 5);

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let count = 1;
let factorialAns = 1;
do {
  factorialAns *= count;
  count++;
} while (count <= 5);
console.log(factorialAns);

// Activity 4: Nested Loops
// Task 7: Write a program to print a pattern using nested for loops.
let strForPattern = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    // console.log(j);
    strForPattern += "*";
  }
  strForPattern += "\n";
}
console.log(strForPattern);

// Activity 5: Loop Control Statements
// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
