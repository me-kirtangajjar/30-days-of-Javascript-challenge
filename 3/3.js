// Constants
const VOTING_AGE = 18;

// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
/**
 * Determines if a number is positive, negative, or zero.
 * @param {number} num - The number to check.
 * @returns {string} The result of the check.
 */
function checkNumberSign(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
/**
 * Checks if a person is eligible to vote.
 * @param {number} age - The person's age.
 * @returns {string} The voting eligibility status.
 */
function checkVotingEligibility(age) {
  if (age >= VOTING_AGE) {
    return "Yes, you can vote.";
  } else {
    return "No, you can't vote.";
  }
}

// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
/**
 * Finds the largest of three numbers using nested if-else statements.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @param {number} c - Third number.
 * @returns {number} The largest number.
 */
function findLargestNumber(a, b, c) {
  if (a >= b) {
    if (a >= c) {
      return a;
    } else {
      return c;
    }
  } else {
    if (b >= c) {
      return b;
    } else {
      return c;
    }
  }
}

// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
/**
 * Determines the day of the week using a switch case.
 * @param {number} dayNumber - Number representing the day (1-7).
 * @returns {string} The name of the day or an error message.
 */
function getDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day number. Please use a number between 1 and 7.";
  }
}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
/**
 * Assigns a grade based on a score using a switch case.
 * @param {number} score - The numeric score.
 * @returns {string} The letter grade.
 */
function assignGrade(score) {
  switch (true) {
    case score >= 90 && score <= 100:
      return "A";
    case score >= 80 && score < 90:
      return "B";
    case score >= 70 && score < 80:
      return "C";
    case score >= 60 && score < 70:
      return "D";
    case score >= 0 && score < 60:
      return "F";
    default:
      return "Invalid score. Please use a number between 0 and 100.";
  }
}

// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
/**
 * Checks if a number is even or odd using the ternary operator.
 * @param {number} num - The number to check.
 * @returns {string} 'Even' or 'Odd'.
 */
function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
/**
 * Checks if a year is a leap year.
 * @param {number} year - The year to check.
 * @returns {string} Indicates whether the year is a leap year or not.
 */
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "Yes, it's a leap year";
  } else {
    return "No, it's not a leap year";
  }
}

// Example usage
console.log("Task 1:", checkNumberSign(50));
console.log("Task 2:", checkVotingEligibility(17));
console.log("Task 3:", findLargestNumber(9, 9, 999));
console.log("Task 4:", getDayOfWeek(6));
console.log("Task 5:", assignGrade(85));
console.log("Task 6:", checkEvenOdd(10));
console.log("Task 7:", isLeapYear(2024));
