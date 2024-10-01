// Question 1: Concatenate Two Arrays
function concatenateArrays(arr1, arr2) {
    return arr1.concat(arr2); // Use concat() to join two arrays
}

console.log(concatenateArrays([1, 2, 3], [4, 5, 6]), "Question 1"); // Output: [1, 2, 3, 4, 5, 6]


// Question 2: Slice Array
function sliceArray(arr, start, end) {
    let newArray = arr.slice(start, end); // Use slice() to get part of the array
    newArray.splice(2, 0, arr[4]); // Add element from original array to new array
    return newArray; 
}

console.log(sliceArray([1, 2, 3, 4, 5, 6], 2, 4), "Question 2"); // Output: [1, 2, 5, 6]


// Question 3: Splice Array
function modifyArray(arr, index) {
    let removedElement = arr.splice(index, 1); // Remove element at given index
    return removedElement[0]; // Return the removed element
}

console.log(modifyArray([1, 2, 3, 4, 5], 2), "Question 3"); // Output: 3


// Question 4: Iterate Through Array with for...of
function iterateArray(arr) {
    for (let element of arr) {
        console.log(element); // Print each element
    }
}

console.log("Question 4: "); 
iterateArray([1, 2, 3, 4, 5]); // Output: 1, 2, 3, 4, 5


// Question 5: Print Each Element with forEach()
function printArrayElements(arr) {
    arr.forEach(element => console.log(element)); // Use forEach() to print each element
}

console.log("Question 5: "); 
printArrayElements([1, 2, 3, 4, 5]); // Output: 1, 2, 3, 4, 5
