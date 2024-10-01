"use strict";

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

// Validate input fields
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

    if (confirmPasswordInput.value === "") {
        confirmPasswordError.textContent = "Confirm Password is required.";
        valid = false; 
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        valid = false; 
    } else {
        confirmPasswordError.textContent = ""; 
    }

    registerBtn.disabled = !valid; 
}

// Text manipulation features
const paragraph = document.getElementById("text");

// Split sentences by ". " and display each on a new line
const sentences = paragraph.innerHTML.split('. ');
paragraph.innerHTML = sentences.join('.<br>');

// Highlight words longer than 8 characters
const words = paragraph.innerHTML.split(' ');
const highlightedWords = words.map(word => {
    if (word.length > 8) {
        return `<span class="highlight">${word}</span>`;
    }
    return word;
});
paragraph.innerHTML = highlightedWords.join(' ');

// Count the number of words and display in the heading
const wordCount = words.length;
const heading = document.querySelector('h1');
heading.innerHTML += ` (${wordCount} words)`; // Add word count to heading
