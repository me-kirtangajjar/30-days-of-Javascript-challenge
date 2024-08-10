// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.
localStorage.setItem("myString", "Hello, World!");
const retrievedString = localStorage.getItem("myString");
console.log(retrievedString); // Output: Hello, World!

// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const myObject = { name: "John", age: 30 };
localStorage.setItem("myObject", JSON.stringify(myObject));
const retrievedObject = JSON.parse(localStorage.getItem("myObject"));
console.log(retrievedObject); // Output: { name: "John", age: 30 }

// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    displaySavedData();
});

function displaySavedData() {
    const savedName = localStorage.getItem("name");
    const savedEmail = localStorage.getItem("email");
    if (savedName && savedEmail) {
        document.querySelector("#savedData").textContent = `Name: ${savedName}, Email: ${savedEmail}`;
    }
}

document.addEventListener("DOMContentLoaded", displaySavedData);

// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.
console.log(localStorage.getItem("name")); // Output before removal: "John"
localStorage.removeItem("name");
console.log(localStorage.getItem("name")); // Output after removal: null

// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.
sessionStorage.setItem("mySessionString", "Hello, Session!");
const retrievedSessionString = sessionStorage.getItem("mySessionString");
console.log(retrievedSessionString); // Output: Hello, Session!

// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const sessionObject = { name: "Doe", age: 25 };
sessionStorage.setItem("sessionObject", JSON.stringify(sessionObject));
const retrievedSessionObject = JSON.parse(sessionStorage.getItem("sessionObject"));
console.log(retrievedSessionObject); // Output: { name: "Doe", age: 25 }

// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    sessionStorage.setItem("sessionName", name);
    sessionStorage.setItem("sessionEmail", email);
    displaySessionSavedData();
});

function displaySessionSavedData() {
    const savedSessionName = sessionStorage.getItem("sessionName");
    const savedSessionEmail = sessionStorage.getItem("sessionEmail");
    if (savedSessionName && savedSessionEmail) {
        document.querySelector("#savedSessionData").textContent = `Name: ${savedSessionName}, Email: ${savedSessionEmail}`;
    }
}

document.addEventListener("DOMContentLoaded", displaySessionSavedData);

// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.
console.log(sessionStorage.getItem("sessionName")); // Output before removal: "Doe"
sessionStorage.removeItem("sessionName");
console.log(sessionStorage.getItem("sessionName")); // Output after removal: null

// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.
function saveToBothStorages(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
    console.log("localStorage:", localStorage.getItem(key));
    console.log("sessionStorage:", sessionStorage.getItem(key));
}

saveToBothStorages("dualStorageKey", "Dual Storage Value");

// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.
function clearAllStorage() {
    localStorage.clear();
    sessionStorage.clear();
    console.log("localStorage is empty:", localStorage.length === 0);
    console.log("sessionStorage is empty:", sessionStorage.length === 0);
}

clearAllStorage();
