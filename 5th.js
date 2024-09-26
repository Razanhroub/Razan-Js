"use strict"
// 1. Print even numbers between 1 and 50 using a for loop and a while loop

// Using for loop
for (let i = 2; i <= 50; i += 2) {
    console.log(i); // Print even number
}

// Using while loop
let i = 2;
while (i <= 50) {
    console.log(i); // Print even number
    i += 2;
}

// 2. Print even numbers between 1 and 50 twice using one for loop
for (let i = 2; i <= 50; i += 2) {
    console.log(i); // Print twice
    console.log(i);
}

// 3. Print even numbers in one loop and odd numbers in another
for (let i = 2; i <= 50; i += 2) {
    console.log("Even:", i);
}
for (let i = 1; i <= 50; i += 2) {
    console.log("Odd:", i);
}

// 4. FizzBuzz from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// 5. FizzBuzz with function calls
function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        console.log("FizzBuzz");
    } else if (n % 3 === 0) {
        console.log("Fizz");
    } else if (n % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(n);
    }
}

for (let i = 1; i <= 100; i++) {
    fizzBuzz(i); // Call the function for each number
}

// 6. Recursive FizzBuzz
function fizzBuzzRecursive(n) {
    if (n > 100) return; // Base case
    fizzBuzz(n);
    fizzBuzzRecursive(n + 1); // Recursive call
}
fizzBuzzRecursive(1); // Start recursion

// 7. Convert number to banknotes
let amount = 57;
let notes = [25, 10, 5, 1];
for (let note of notes) {
    while (amount >= note) {
        console.log(note);
        amount -= note;
    }
}

// 8. Count occurrences of a character in a string (case insensitive)
let str = "Coding Academy by Orange";
let target = 'o';
let count = 0;
for (let c of str.toLowerCase()) {
    if (c === target.toLowerCase()) {
        count++;
    }
}
console.log("Occurrences:", count);

// 9. Various for loops
// a. Print numbers 0 to 20
for (let i = 0; i <= 20; i++) {
    console.log(i);
}

// b. Print odd numbers from 3 to 29
for (let i = 3; i <= 29; i += 2) {
    console.log(i);
}

// c. Print even numbers from 12 down to -14
for (let i = 12; i >= -14; i -= 2) {
    console.log(i);
}

// d. Print numbers 50 to 20 divisible by 3
for (let i = 50; i >= 20; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// 10. Print array elements and reverse string
let codingAcademy = "CodingAcademy";
let array = [7, 500, "KH404", "black", 36];

for (let elem of array) {
    console.log(elem); // Print each element of the array
}

for (let i = codingAcademy.length - 1; i >= 0; i--) {
    console.log(codingAcademy[i]); // Print string in reverse
}

// 11. Sort into evens and odds
let numbers = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
let evens = [], odds = [];

for (let num of numbers) {
    if (num % 2 === 0) {
        evens.push(num); // Add to evens
    } else {
        odds.push(num); // Add to odds
    }
}

console.log("Evens:", evens);
console.log("Odds:", odds);

// 12. Create meals from arrays
let proteins = ['chicken', 'nodels', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetables = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

let numMeals = 5; // Example input for number of meals

for (let i = 0; i < numMeals; i++) {
    console.log(`${proteins[i % 6]}, ${grains[i % 6]}, ${vegetables[i % 6]}, ${beverages[i % 6]}, ${desserts[i % 6]}`);
}
