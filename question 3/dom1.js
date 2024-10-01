"use strict";

let password_1 = document.getElementById("pw1");
let password_2 = document.getElementById("pw2");
let erro_msg = document.getElementById("error");
let btn = document.getElementById("submit");
let form = document.getElementById("form");

// Function to enable or disable the button based on password lengths
function enable() {
    if (password_1.value.length === password_2.value.length && password_1.value.length !== 0) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

// Call enable function on initial load
enable();

// Add event listeners to input fields to call enable function on input
password_1.addEventListener('input', enable);
password_2.addEventListener('input', enable);

form.onsubmit = function checkpw(event) {
    // Check if passwords match
    if (password_1.value !== password_2.value) {
        event.preventDefault();
        erro_msg.innerHTML = "<p>your passwords are not matching </p>";
    } else {
        event.preventDefault();
        erro_msg.innerHTML = '<p style="color: green;" >Registration successful</p>';
       
    }
};
