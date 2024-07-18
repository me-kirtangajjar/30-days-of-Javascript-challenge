// Activity 1: If-Else Statements
const num = 50;
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

const personAge = 17;
if (personAge >= 18) {
  console.log("Yes, you can vote.");
} else {
  console.log("No, you can't vote.");
}

// Activity 2: Nested If-Else Statements
const num1 = 9;
const num2 = 9;
const num3 = 999;
if (num1 > num2) {
  if (num1 > num3) {
    console.log(num1);
  } else {
    console.log(num3);
  }
} else if (num2 > num3) {
  console.log(num2);
} else {
  console.log(num3);
}

// Activity 3: Switch Case
const weekNum = 6;
switch (weekNum) {
  case 1:
    console.log("Mon");
    break;
  case 2:
    console.log("Tue");
    break;
  case 3:
    console.log("Wed");
    break;
  case 4:
    console.log("Thu");
    break;
  case 5:
    console.log("Fri");
    break;
  case 6:
    console.log("Sat");
    break;
  case 7:
    console.log("Sun");
    break;

  default:
    console.log("No day");
    break;
}

// Activity 4: Conditional (Ternary) Operator
const numEvenOdd = 10;
console.log(numEvenOdd % 2 == 0 ? "Even" : "Odd");

// Activity 5: Combining Conditions
const leapYear = 2024;
if (leapYear % 4 === 0 && leapYear % 100 === 0 && leapYear % 400 == 0) {
  console.log("Yes, it's leap year");
}
