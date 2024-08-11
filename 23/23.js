// Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
// Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
function findMedianSortedArrays(nums1, nums2) {
  let merged = [...nums1, ...nums2].sort((a, b) => a - b);
  let len = merged.length;
  if (len % 2 === 0) {
    return (merged[len / 2 - 1] + merged[len / 2]) / 2;
  } else {
    return merged[Math.floor(len / 2)];
  }
}

// Log the median for a few test cases, including edge cases.
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5

// Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
// Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function mergeKLists(lists) {
  if (lists.length === 0) return null;
  while (lists.length > 1) {
    let l1 = lists.shift();
    let l2 = lists.shift();
    const merged = mergeTwoLists(l1, l2);
    lists.push(merged);
  }
  return lists[0];
}

function mergeTwoLists(l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  current.next = l1 || l2;
  return dummy.next;
}

// Create a few test cases with linked lists and log the merged list.
let l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let l3 = new ListNode(2, new ListNode(6));
let mergedList = mergeKLists([l1, l2, l3]);

while (mergedList !== null) {
  console.log(mergedList.val); // Output: 1 1 2 3 4 4 5 6
  mergedList = mergedList.next;
}

// Task 3: Solve the "Trapping Rain Water" problem on LeetCode.
// Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining.
function trap(height) {
  if (height.length === 0) return 0;

  let left = 0,
    right = height.length - 1;
  let leftMax = 0,
    rightMax = 0;
  let totalWater = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      height[left] >= leftMax
        ? (leftMax = height[left])
        : (totalWater += leftMax - height[left]);
      left++;
    } else {
      height[right] >= rightMax
        ? (rightMax = height[right])
        : (totalWater += rightMax - height[right]);
      right--;
    }
  }

  return totalWater;
}

// Log the amount of trapped water for a few test cases.
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
console.log(trap([4, 2, 0, 3, 2, 5])); // Output: 9

// Task 4: Solve the "N-Queens" problem on LeetCode.
// Write a function that places n queens on an nxn chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle.
function solveNQueens(n) {
  const solutions = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));

  function canPlace(row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
      if (col - (row - i) >= 0 && board[i][col - (row - i)] === "Q")
        return false;
      if (col + (row - i) < n && board[i][col + (row - i)] === "Q")
        return false;
    }
    return true;
  }

  function placeQueens(row = 0) {
    if (row === n) {
      solutions.push(board.map((r) => r.join("")));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (canPlace(row, col)) {
        board[row][col] = "Q";
        placeQueens(row + 1);
        board[row][col] = ".";
      }
    }
  }

  placeQueens();
  return solutions;
}

// Log the distinct solutions for a few test cases.
console.log(solveNQueens(4));
// Output: [
// [".Q..",
//  "...Q",
//  "Q...",
//  "..Q."],

// ["..Q.",
//  "Q...",
//  "...Q",
//  ".Q.."]
// ]

// Task 5: Solve the "Word Ladder" problem on LeetCode.
// Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence such that only one letter can be changed at a time and each transformed word must exist in the word list.
function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const queue = [[beginWord, 1]];
  while (queue.length > 0) {
    const [word, length] = queue.shift();
    if (word === endWord) return length;

    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c < 123; c++) {
        const newWord =
          word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
        if (wordSet.has(newWord)) {
          queue.push([newWord, length + 1]);
          wordSet.delete(newWord);
        }
      }
    }
  }

  return 0;
}

// Log the length of the shortest transformation sequence for a few test cases.
console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
); // Output: 5
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // Output: 0
