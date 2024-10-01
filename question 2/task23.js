// Question 1: Check Password Length
let password = "mypassword123"; // Example password

if (password.length >= 8) { // Check if password is at least 8 characters
    console.log("Your password is strong"); // Output message
} else {
    console.log("Your password is weak"); // Optional: Output message for weak password
}
console.log("Question 1"); // Indicate question number


// Question 2: Check Primary Color
let color = "red"; // Example color

if (color === "red" || color === "green" || color === "blue") { // Check if color is primary
    console.log("color is a primary color"); // Output message
} else {
    console.log("color is not a primary color"); // Optional: Output message for non-primary color
}
console.log("Question 2"); // Indicate question number


// Question 3: Check if Negative Number
let y = -5; // Example value

if (y < 0) { // Check if y is negative
    console.log("y is a negative number"); // Output message
} else {
    console.log("y is not a negative number"); // Optional: Output message for non-negative y
}
console.log("Question 3"); // Indicate question number


// Question 4: Check if Variable is an Array
let list = [1, 2, 3]; // Example list

if (Array.isArray(list)) { // Check if list is an array
    console.log("It's an array"); // Output message
} else {
    console.log("It's not an array"); // Optional: Output message for non-array
}
console.log("Question 4"); // Indicate question number
