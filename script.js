// Global counter variable
let counter = 0;

// Increase counter and update message
function incrementCounter(elementId, count) {
  return `Button clicked ${count} times.`;
}

// Toggle dark mode class on body
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Validate form fields with parameters and return error messages
function validateField(value, minLength, fieldName) {
  if (value.length < minLength) {
    return `${fieldName} must be at least ${minLength} characters.`;
  }
  return "";
}
const clickButton = document.getElementById("clickButton");
const message = document.getElementById("message");

clickButton.addEventListener("click", () => {
  counter++;
  message.textContent = incrementCounter("message", counter);
  // Add blink animation class on click
  message.classList.add("blink");
  // Remove animation class after 1 second
  setTimeout(() => {
    message.classList.remove("blink");
  }, 1000);
});

// Dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", toggleDarkMode);

// Form validation on submit
const form = document.getElementById("myForm");
const formError = document.getElementById("formError");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formError.textContent = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const nameError = validateField(name, 2, "Name");
  if (nameError) {
    formError.textContent = nameError;
    return;
  }
  if (!email.includes("@")) {
    formError.textContent = "Please enter a valid email.";
    return;
  }
  const passError = validateField(password, 6, "Password");
  if (passError) {
    formError.textContent = passError;
    return;
  }

  formError.style.color = "green";
  formError.textContent = "Form submitted successfully!";
});
