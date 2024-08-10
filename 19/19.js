// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
const text1 = "JavaScript is awesome. I love JavaScript!";
const regex1 = /JavaScript/g;
console.log(text1.match(regex1)); // Output: ['JavaScript', 'JavaScript']

// Task 2: Write a regular expression to match all digits in a string. Log the matches.
const text2 = "My phone number is 123-456-7890.";
const regex2 = /\d+/g;
console.log(text2.match(regex2)); // Output: ['123', '456', '7890']

// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
const text3 = "Hello World, this is a JavaScript Tutorial.";
const regex3 = /\b[A-Z][a-z]*\b/g;
console.log(text3.match(regex3)); // Output: ['Hello', 'World', 'JavaScript', 'Tutorial']

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
const text4 = "There are 123 apples and 45 oranges.";
const regex4 = /\d+/g;
console.log(text4.match(regex4)); // Output: ['123', '45']

// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
const text5 = "(123) 456-7890";
const regex5 = /\((\d{3})\) (\d{3})-(\d{4})/;
const matches5 = text5.match(regex5);
console.log(matches5); // Output: ['(123) 456-7890', '123', '456', '7890']

// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
const text6 = "email@example.com";
const regex6 = /([^@]+)@([^@]+)/;
const matches6 = text6.match(regex6);
console.log(matches6); // Output: ['email@example.com', 'email', 'example.com']

// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
const text7 = "JavaScript is awesome. I love JavaScript!";
const regex7 = /^\w+/;
console.log(text7.match(regex7)); // Output: ['JavaScript']

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
const text8 = "JavaScript is awesome. I love programming.";
const regex8 = /\w+$/;
console.log(text8.match(regex8)); // Output: ['programming']

// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
const password = "Password123!";
const regex9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
console.log(regex9.test(password)); // Output: true

// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
const url = "https://www.example.com";
const regex10 = /^(https?:\/\/)?(www\.)?[\w-]+(\.[\w-]+)+[/#?]?.*$/;
console.log(regex10.test(url)); // Output: true
