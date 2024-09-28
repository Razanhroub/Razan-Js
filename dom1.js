"use strict "

const form = document.getElementById('registerForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const registerBtn = document.getElementById('registerBtn');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const successMessage = document.getElementById('successMessage');

usernameInput.addEventListener('input', validateInputs);
passwordInput.addEventListener('input', validateInputs);
confirmPasswordInput.addEventListener('input', validateInputs);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    successMessage.textContent = "Registration successful!";
});

function validateInputs() {
    let valid = true; 

    if (usernameInput.value === "") {
        usernameError.textContent = "Username is required.";
        valid = false; 
    } else {
        usernameError.textContent = ""; 
    }

    if (passwordInput.value === "") {
        passwordError.textContent = "Password is required.";
        valid = false; 
    } else {
        passwordError.textContent = ""; 
    }

    if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        valid = false; 
    } else {
        confirmPasswordError.textContent = ""; 
    }

    registerBtn.disabled = !valid; 
}
