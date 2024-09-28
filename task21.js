// Question 1: Factorial of a Number
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i; // Multiply by each number
    }
    return result; 
}

console.log(factorial(5), "Question 1"); // Output: 120


// Question 2: Fibonacci Sequence
function fibonacci(n) {
    let fib = [];
    let a = 0, b = 1;
    while (a <= n) {
        fib.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }
    return fib; 
}

console.log(fibonacci(10).join(" "), "Question 2"); // Output: 0 1 1 2 3 5 8


// Question 3: Prime Numbers
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true; 
}

function primeNumbers(n) {
    let primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i); 
        }
    }
    return primes; 
}

console.log(primeNumbers(20).join(" "), "Question 3"); // Output: 2 3 5 7 11 13 17 19


// Question 4: Print Elements of a 2D Array
function print2DArray(arr) {
    let output = ""; // Create a string to hold the output
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            output += arr[i][j] + " "; // Concatenate each element to the output
        }
    }
    console.log(output.trim()); // Print the output as a single line
}

print2DArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]); // Output: 1 2 3 4 5 6 7 8 9
console.log("Question 4"); 


// Question 5: Print Elements in Reverse Order
function printReverse(arr) {
    let output = ""; // Create a string to hold the output
    for (let i = arr.length - 1; i >= 0; i--) {
        output += arr[i] + " "; // Concatenate each element to the output
    }
    console.log(output.trim()); // Print the output as a single line
}

printReverse([1, 2, 3, 4, 5]); // Output: 5 4 3 2 1
console.log("Question 5"); 
