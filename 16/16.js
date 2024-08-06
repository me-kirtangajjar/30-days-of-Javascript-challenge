// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5));
console.log("Factorial of 0:", factorial(0));
console.log("Factorial of 10:", factorial(10));

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("5th Fibonacci number:", fibonacci(5));
console.log("10th Fibonacci number:", fibonacci(10));
console.log("0th Fibonacci number:", fibonacci(0));

// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}
console.log("Sum of [1, 2, 3, 4, 5]:", sumArray([1, 2, 3, 4, 5]));
console.log("Sum of []:", sumArray([]));
console.log("Sum of [10, -5, 7]:", sumArray([10, -5, 7]));

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function maxElement(arr) {
  if (arr.length === 1) return arr[0];
  return Math.max(arr[0], maxElement(arr.slice(1)));
}
console.log("Max of [3, 7, 2, 9, 1]:", maxElement([3, 7, 2, 9, 1]));
console.log("Max of [-5, -2, -8]:", maxElement([-5, -2, -8]));
console.log("Max of [100]:", maxElement([100]));

// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseString(str) {
  if (str.length <= 1) return str;
  return reverseString(str.slice(1)) + str[0];
}
console.log("Reverse of 'hello':", reverseString("hello"));
console.log("Reverse of 'a':", reverseString("a"));
console.log("Reverse of 'recursion':", reverseString("recursion"));

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}
console.log("Is 'racecar' a palindrome?", isPalindrome("racecar"));
console.log("Is 'hello' a palindrome?", isPalindrome("hello"));
console.log("Is 'a' a palindrome?", isPalindrome("a"));

// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) return -1;
  const mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1);
  return binarySearch(arr, target, mid + 1, high);
}
let sortedArr = [1, 3, 5, 7, 9, 11, 13];
console.log(
  "Index of 7 in [1, 3, 5, 7, 9, 11, 13]:",
  binarySearch(sortedArr, 7)
);
console.log(
  "Index of 1 in [1, 3, 5, 7, 9, 11, 13]:",
  binarySearch(sortedArr, 1)
);
console.log(
  "Index of 14 in [1, 3, 5, 7, 9, 11, 13]:",
  binarySearch(sortedArr, 14)
);

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function countOccurrences(arr, target) {
  if (arr.length === 0) return 0;
  return (arr[0] === target ? 1 : 0) + countOccurrences(arr.slice(1), target);
}
console.log(
  "Occurrences of 2 in [1, 2, 3, 2, 4, 2]:",
  countOccurrences([1, 2, 3, 2, 4, 2], 2)
);
console.log(
  "Occurrences of 5 in [1, 2, 3, 4]:",
  countOccurrences([1, 2, 3, 4], 5)
);
console.log("Occurrences of 1 in [1, 1, 1]:", countOccurrences([1, 1, 1], 1));

// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
function TreeNode(value, left = null, right = null) {
  this.value = value;
  this.left = left;
  this.right = right;
}
function inOrderTraversal(node) {
  if (!node) return;
  inOrderTraversal(node.left);
  console.log(node.value);
  inOrderTraversal(node.right);
}
let root = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(6, new TreeNode(5), new TreeNode(7))
);
console.log("In-order traversal of binary tree:");
inOrderTraversal(root);

// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
function treeDepth(node) {
  if (!node) return 0;
  return 1 + Math.max(treeDepth(node.left), treeDepth(node.right));
}
console.log("Depth of the binary tree:", treeDepth(root));
console.log("Depth of a single node tree:", treeDepth(new TreeNode(1)));
console.log("Depth of null tree:", treeDepth(null));
