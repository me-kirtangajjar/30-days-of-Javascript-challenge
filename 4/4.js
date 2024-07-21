// Activity 1: For Loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("");

for (let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5 * i}`);
}
console.log("");

// Activity 2: While Loop
let num = 1;
let sumOfNumbers = 0;
while (num <= 10) {
  sumOfNumbers += num;
  num++;
}
console.log(`Sum of numbers from 1 to 10 is ${sumOfNumbers}`);
console.log("");

let num2 = 10;
while (num2 >= 1) {
  console.log(num2);
  num2--;
}
console.log("");

// Activity 3: Do...While Loop
let num3 = 1;
do {
  console.log(num3);
  num3++;
} while (num3 <= 5);
console.log("");

let count = 1;
let factorialAns = 1;
do {
  factorialAns *= count;
  count++;
} while (count <= 5);
console.log(factorialAns);
console.log("");

// Activity 4: Nested Loops
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
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
console.log("");

for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
