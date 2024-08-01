// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds");
  }, 2000);
});

promise1.then((message) => console.log(message));

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch()
const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
    reject("Promise rejected after 2 seconds");
  }, 2000);
});

promise2.catch((error) => console.error(error));

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Fetched data part 1");
  }, 1000);
});

promise3
  .then((message) => {
    console.log(message);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Fetched data part 2");
      }, 1000);
    });
  })
  .then((message) => {
    console.log(message);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Fetched data part 3");
      }, 1000);
    });
  })
  .then((message) => console.log(message));

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value
async function waitForPromise() {
  const message = await promise1;
  console.log(message);
}

waitForPromise();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message
async function handlePromiseRejection() {
  try {
    const message = await promise2;
    console.log(message);
  } catch (error) {
    console.error(error);
  }
}

handlePromiseRejection();

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching data:", error));

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await
async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values
const promiseA = new Promise((resolve) => setTimeout(() => resolve("A"), 1000));
const promiseB = new Promise((resolve) => setTimeout(() => resolve("B"), 2000));
const promiseC = new Promise((resolve) => setTimeout(() => resolve("C"), 3000));

Promise.all([promiseA, promiseB, promiseC]).then((values) =>
  console.log(values)
);

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises
Promise.race([promiseA, promiseB, promiseC]).then((value) =>
  console.log("First resolved:", value)
);
