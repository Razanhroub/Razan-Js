// Question 1: Find the Smallest Value in an Array
function findSmallest(arr) {
    let smallest = arr[0]; // Start with the first element
    for (let i = 1; i < arr.length; i++) { // Loop through the array
        if (arr[i] < smallest) { // Check if current element is smaller
            smallest = arr[i]; // Update smallest
        }
    }
    return smallest; // Return the smallest value
}
console.log(findSmallest([30, 45, 60, 7]), "Question 1"); // Output smallest value


// Question 2: Sort String in Alphabetical Order
function AlphabeticalOrder(str) {
    return str.split("").sort().join(""); // Split, sort, and join the string
}
console.log(AlphabeticalOrder('hello'), "Question 2"); // Output sorted string


// Question 3: Count Number of Words
function countWords(sentence) {
    return sentence.split(" ").length; // Split sentence by spaces and count words
}
console.log(countWords('hello from CodingAcademy!'), "Question 3"); // Output word count


// Question 4: Multiply All Elements by Length
function MultiplyByLength(arr) {
    let length = arr.length; // Get length of the array
    return arr.map(num => num * length); // Multiply each element by the length
}
console.log(MultiplyByLength([4, 2, 5]), "Question 4"); // Output modified array


// Question 5: Repeat Each Character Twice
function doubleChar(str) {
    let result = ""; // Initialize result string
    for (let char of str) { // Loop through each character
        result += char.repeat(2); // Repeat character twice and add to result
    }
    return result; // Return the final result
}
console.log(doubleChar('Coding'), "Question 5"); // Output string with doubled characters
