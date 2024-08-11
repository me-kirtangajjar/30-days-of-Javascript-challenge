// Task 1: Solve the "Add Two Numbers" problem on LeetCode.
// Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function addTwoNumbers(l1, l2) {
  let dummy = new ListNode(0);
  let p = l1,
    q = l2,
    current = dummy;
  let carry = 0;

  while (p !== null || q !== null) {
    let x = p !== null ? p.val : 0;
    let y = q !== null ? q.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (p !== null) p = p.next;
    if (q !== null) q = q.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummy.next;
}

// Create a few test cases with linked lists and log the sum as a linked list.
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
let result = addTwoNumbers(l1, l2);

while (result !== null) {
  console.log(result.val); // Output: 7 0 8
  result = result.next;
}

// Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.
// Write a function that takes a string and returns the length of the longest substring without repeating characters.
function lengthOfLongestSubstring(s) {
  let map = new Map();
  let maxLen = 0,
    start = 0;

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      start = Math.max(map.get(s[i]) + 1, start);
    }
    map.set(s[i], i);
    maxLen = Math.max(maxLen, i - start + 1);
  }

  return maxLen;
}

// Log the length for a few test cases, including edge cases.
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3

// Task 3: Solve the "Container With Most Water" problem on LeetCode.
// Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.
function maxArea(height) {
  let maxWater = 0;
  let left = 0,
    right = height.length - 1;

  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);
    maxWater = Math.max(maxWater, width * minHeight);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

// Log the maximum amount of water for a few test cases.
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
console.log(maxArea([1, 1])); // Output: 1

// Task 4: Solve the "3Sum" problem on LeetCode.
// Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// Log the triplets for a few test cases, including edge cases.
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([])); // Output: []
console.log(threeSum([0])); // Output: []

// Task 5: Solve the "Group Anagrams" problem on LeetCode.
// Write a function that takes an array of strings and groups anagrams together.
function groupAnagrams(strs) {
  const map = new Map();

  for (let str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }
    map.get(sortedStr).push(str);
  }

  return Array.from(map.values());
}

// Log the grouped anagrams for a few test cases.
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
