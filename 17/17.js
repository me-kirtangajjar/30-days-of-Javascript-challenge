// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  remove() {
    if (!this.head) return null;
    if (!this.head.next) {
      const value = this.head.value;
      this.head = null;
      return value;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    const value = current.next.value;
    current.next = null;
    return value;
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// Testing LinkedList (Task 2)
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
console.log("LinkedList:");
list.display(); // Should print 1, 2, 3

console.log("Removed:", list.remove()); // Should print 3
list.display(); // Should print 1, 2

// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) return "Underflow";
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

// Testing Stack (Task 3)
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Stack Top Element (Peek):", stack.peek()); // Should print 30
console.log("Popped Element:", stack.pop()); // Should print 30
console.log("Stack Top Element (Peek) after pop:", stack.peek()); // Should print 20

// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
function reverseString(str) {
  const stack = new Stack();
  for (let char of str) {
    stack.push(char);
  }
  let reversed = "";
  while (stack.items.length > 0) {
    reversed += stack.pop();
  }
  return reversed;
}

// Testing reverseString (Task 4)
const originalString = "hello";
console.log("Original String:", originalString);
console.log("Reversed String:", reverseString(originalString)); // Should print "olleh"

// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.items.length === 0) return "Underflow";
    return this.items.shift();
  }

  front() {
    if (this.items.length === 0) return "No elements in Queue";
    return this.items[0];
  }
}

// Testing Queue (Task 5)
const queue = new Queue();
queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);
console.log("Front Element of Queue:", queue.front()); // Should print 100
console.log("Dequeued Element:", queue.dequeue()); // Should print 100
console.log("Front Element after Dequeue:", queue.front()); // Should print 200

// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
function simulatePrinterQueue() {
  const printerQueue = new Queue();
  printerQueue.enqueue("Document1");
  printerQueue.enqueue("Document2");
  printerQueue.enqueue("Document3");
  console.log("Processing:", printerQueue.dequeue()); // Should print "Processing: Document1"
  console.log("Processing:", printerQueue.dequeue()); // Should print "Processing: Document2"
  console.log("Processing:", printerQueue.dequeue()); // Should print "Processing: Document3"
}

// Testing simulatePrinterQueue (Task 6)
simulatePrinterQueue();

// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this._insertRec(this.root, value);
  }

  _insertRec(node, value) {
    if (node === null) {
      return new TreeNode(value);
    }
    if (value < node.value) {
      node.left = this._insertRec(node.left, value);
    } else if (value > node.value) {
      node.right = this._insertRec(node.right, value);
    }
    return node;
  }

  inOrderTraversal() {
    this._inOrderTraversalRec(this.root);
  }

  _inOrderTraversalRec(node) {
    if (node !== null) {
      this._inOrderTraversalRec(node.left);
      console.log(node.value);
      this._inOrderTraversalRec(node.right);
    }
  }
}

// Testing BinaryTree (Task 8)
const binaryTree = new BinaryTree();
binaryTree.insert(50);
binaryTree.insert(30);
binaryTree.insert(70);
binaryTree.insert(20);
binaryTree.insert(40);
binaryTree.insert(60);
binaryTree.insert(80);
console.log("In-Order Traversal of Binary Tree:");
binaryTree.inOrderTraversal(); // Should print 20, 30, 40, 50, 60, 70, 80

// Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
class Graph {
  constructor() {
    this.vertices = new Map();
  }

  addVertex(v) {
    this.vertices.set(v, []);
  }

  addEdge(v, w) {
    this.vertices.get(v).push(w);
    this.vertices.get(w).push(v);
  }

  bfs(startingNode) {
    const visited = new Set();
    const queue = [startingNode];
    visited.add(startingNode);

    while (queue.length > 0) {
      const vertex = queue.shift();
      console.log(vertex);

      for (let neighbor of this.vertices.get(vertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
}

// Testing Graph BFS (Task 9)
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");

console.log("BFS starting from vertex A:");
graph.bfs("A"); // Should print A, B, C, D, E

// Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.
function findShortestPath(graph, start, end) {
  const queue = [[start]];
  const visited = new Set();

  while (queue.length > 0) {
    const path = queue.shift();
    const vertex = path[path.length - 1];

    if (vertex === end) {
      return path;
    }

    if (!visited.has(vertex)) {
      for (let neighbor of graph.vertices.get(vertex)) {
        const newPath = [...path, neighbor];
        queue.push(newPath);
      }
      visited.add(vertex);
    }
  }
  return null;
}

// Testing findShortestPath (Task 10)
const simpleGraph = new Graph();
simpleGraph.addVertex("A");
simpleGraph.addVertex("B");
simpleGraph.addVertex("C");
simpleGraph.addVertex("D");
simpleGraph.addVertex("E");

simpleGraph.addEdge("A", "B");
simpleGraph.addEdge("A", "C");
simpleGraph.addEdge("B", "D");
simpleGraph.addEdge("C", "E");
simpleGraph.addEdge("D", "E");

console.log(
  "Shortest Path from A to E:",
  findShortestPath(simpleGraph, "A", "E")
);
// Should print [ 'A', 'C', 'E' ]
