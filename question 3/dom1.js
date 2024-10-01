"use strict";

let password_1 = document.getElementById("pw1");
let password_2 = document.getElementById("pw2");
let erro_msg = document.getElementById("error");
let btn = document.getElementById("submit");
let form = document.getElementById("form");
let inputFields = document.querySelectorAll(".in");

// Function to check if any input field is empty and show the required message
function checkRequired() {
    let allFilled = true; // Flag to check if all fields are filled
    inputFields.forEach(input => {
        let req = input.nextElementSibling; // Select the next sibling span for the error message
        if (input.value === "") {
            req.innerHTML = '<p style="color:red;">Required</p>'; // Show required message
            allFilled = false; // Set flag to false if any input is empty
        } else {
            req.innerHTML = ''; // Clear the message if the input is filled
        }
    });
    return allFilled; // Return whether all fields are filled
}

// Add event listener to each input field
inputFields.forEach(input => {
    input.addEventListener('input', () => {
        checkRequired(); // Check required status on input
        enable(); // Call enable function after checking requirements
    });
});

// Function to enable or disable the button based on password lengths
function enable() {
    const allFilled = checkRequired(); // Check if all input fields are filled
    if (password_1.value.length === password_2.value.length && password_1.value.length !== 0 && allFilled) {
        btn.disabled = false; // Enable button if all conditions are met
    } else {
        btn.disabled = true; // Disable button otherwise
    }
}

// Call enable function on initial load
enable();

// Form submission handling
form.onsubmit = function checkpw(event) {
    event.preventDefault(); // Prevent form submission to handle the logic
    // Check if passwords match
    if (password_1.value !== password_2.value) {
        erro_msg.innerHTML = "<p style='color:red;'>Your passwords are not matching.</p>";
    } else {
        erro_msg.innerHTML = '<p style="color: green;">Registration successful!</p>';
    }
};
