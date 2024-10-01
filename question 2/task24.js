// Question 1: Add a New Property to an Object
let person = { name: "Adam", age: 25 }; // Create an object

person["gender"] = "male"; // Add new property using bracket notation
console.log(person, "Question 1"); // Output the object


// Question 2: Get Object Values
let values = Object.values(person); // Use Object.values() to get values
console.log(values, "Question 2"); // Output the array of values


// Question 3: Get Object Entries
let entries = Object.entries(person); // Use Object.entries() to get key-value pairs
console.log(entries, "Question 3"); // Output the array of key-value pairs


// Question 4: Merge Two Objects
let additionalInfo = { gender: "male" }; // Another object
let mergedObject = Object.assign({}, person, additionalInfo); // Merge objects using Object.assign()
console.log(mergedObject, "Question 4"); // Output the merged object


// Question 5: Seal an Object
let sealedPerson = { name: "Adam", age: 25 }; // Create another object
Object.seal(sealedPerson); // Seal the object

sealedPerson.age = 30; // Change a property value
sealedPerson.gender = "male"; // Try to add a new property (won't work)

console.log(sealedPerson, "Question 5"); // Output the sealed object
