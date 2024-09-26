// Initial array
let arr = ["Coding", "Academy", "By", "Orange"];

// Output 1: Add "Jordan"
let output1 = [...arr, "Jordan"];
console.log("Output 1:", output1);  // ["Coding", "Academy", "By", "Orange", "Jordan"]

// Output 2: Keep first two elements
let output2 = arr.slice(0, 2);
console.log("Output 2:", output2);  // ["Coding", "Academy"]

// Output 3: Add ["Welcome", "To"] at the beginning
let output3 = ["Welcome", "To", ...arr];
console.log("Output 3:", output3);  // ["Welcome", "To", "Coding", "Academy", "By", "Orange"]

// Output 4: Keep last three elements
let output4 = arr.slice(1);  // or arr.slice(1, 4)
console.log("Output 4:", output4);  // ["Academy", "By", "Orange"]

// Output 5: Join all elements into a string
let output5 = arr.join(" ");
console.log("Output 5:", output5);  // "Coding Academy By Orange"

// Output 6: Original array (no changes)
console.log("Output 6:", arr);  // ["Coding", "Academy", "By", "Orange"]

// Output 7: Keep only "Coding" and "Orange"
let output7 = [arr[0], arr[3]];
console.log("Output 7:", output7);  // ["Coding", "Orange"]


