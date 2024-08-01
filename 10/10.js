// Task 1: Add a click event listener to a button that changes the text content of a paragraph
document.querySelector("button").addEventListener("click", function () {
  document.querySelector("p").textContent = "Text content changed!";
});

// Task 2: Add a double-click event listener to an image that toggles its visibility
document.querySelector("img").addEventListener("dblclick", function () {
  this.style.display = this.style.display === "none" ? "block" : "none";
});

// Task 3: Add a mouseover event listener to an element that changes its background color
document
  .querySelector(".hoverElement")
  .addEventListener("mouseover", function () {
    this.style.backgroundColor = "yellow";
  });

// Task 4: Add a mouseout event listener to an element that resets its background color
document
  .querySelector(".hoverElement")
  .addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
  });

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console
document.querySelector("input").addEventListener("keydown", function (event) {
  console.log("Key pressed: " + event.key);
});

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph
document.querySelector("input").addEventListener("keyup", function () {
  document.querySelector("p").textContent = this.value;
});

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form data: ", new FormData(this));
});

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph
document.querySelector("select").addEventListener("change", function () {
  document.querySelector("p").textContent = "Selected value: " + this.value;
});

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation
document.querySelector("ul").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("Clicked item: " + event.target.textContent);
  }
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements
document.querySelector("#parent").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".dynamicChild")) {
    console.log("Dynamic child clicked: " + event.target.textContent);
  }
});
