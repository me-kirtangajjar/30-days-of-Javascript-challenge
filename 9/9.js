// Task 1: Select an HTML element by its ID and change its text content
document.getElementById("myElement").textContent = "New Text Content";

// Task 2: Select an HTML element by its class and change its background color
document.querySelector(".myClass").style.backgroundColor = "lightblue";

// Task 3: Create a new div element with some text content and append it to the body
const newDiv = document.createElement("div");
newDiv.textContent = "This is a new div element";
document.body.appendChild(newDiv);

// Task 4: Create a new li element and add it to an existing ul list
const newListItem = document.createElement("li");
newListItem.textContent = "New List Item";
document.querySelector("ul").appendChild(newListItem);

// Task 5: Select an HTML element and remove it from the DOM
const elementToRemove = document.getElementById("removeMe");
elementToRemove.parentNode.removeChild(elementToRemove);

// Task 6: Remove the last child of a specific HTML element
const list = document.querySelector("ul");
list.removeChild(list.lastElementChild);

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag)
document.querySelector("img").setAttribute("src", "newImageSource.jpg");

// Task 8: Add and remove a CSS class to/from an HTML element
const element = document.querySelector(".myClass");
element.classList.add("newClass");
element.classList.remove("oldClass");

// Task 9: Add a click event listener to a button that changes the text content of a paragraph
document.querySelector("button").addEventListener("click", function() {
    document.querySelector("p").textContent = "The text content has been changed!";
});

// Task 10: Add a mouseover event listener to an element that changes its border color
document.querySelector(".hoverElement").addEventListener("mouseover", function() {
    this.style.borderColor = "red";
});
