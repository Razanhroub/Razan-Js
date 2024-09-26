"use strict "

console.log("WELCOME TO ORANGE" , ", string q 1");
console.log("TO" , ", string q 2");
console.log("welcome to orange" , ", string q 3");
console.log("17" , ", string q 4");
console.log('welcome to "orange"' , ", string q 5");
console.log("Welcome to Orange Jordan" , ", string q 6");



function replaceFirstLetter(str) {
    // Get the first letter
    const firstLetter = str[0];
    // Replace all occurrences of the first letter with '*' except for the first occurrence
    const result = firstLetter + str.slice(1).replace(new RegExp(firstLetter, 'g'), '*');
    return result;
}

// Sample Input
const inputString = "cactus";
// Sample Output
const outputString = replaceFirstLetter(inputString);
console.log(outputString);
