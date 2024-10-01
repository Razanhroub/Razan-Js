"use strict"
// Question four the functions :

// Q1
function string_array (string_to_convert){
   return string_to_convert.split(" ");
}

let the_string  = "Orange Jordan";
console.log(string_array(the_string), " , Q1");



// Q2
function number_stars(phone_number){

// converting the number into array so i can accsess them by number 
    let number_array = phone_number.split("");
    
    for (let i = 0; i < 7; i++) { 
// replceing the first 7 indecies with *
        number_array[i] = "*";
    }
// returning the number into string 
    return number_array.join("");
}

console.log(number_stars( "0776807777"), " , Q2");


// Q3
function hide_email(email_address) {
    let email_parts = email_address.split("@");
    let name_part = email_parts[0];
    let domain_part = email_parts[1].split(".")[0];
    return name_part.slice(0, 6) + "..." + "@" + domain_part + ".com";
}
console.log(hide_email("orange_academy@orange.jo"), " , Q3");


 //Q4
function up_case_first_word(in_string) {
    let array_to_up = in_string.split(" ");  // Split string into words
    let up_er = array_to_up[0][0].toUpperCase() + array_to_up[0].slice(1);  // Capitalize the first letter of the first word
    array_to_up[0] = up_er;  // Update the first word in the array
    return array_to_up.join(" ");  // Join the words back into a string
}

let strn_to_up = "coding academy by orange";
console.log(up_case_first_word(strn_to_up), ", Q4");






// Q5
let string_to_convert = "coding academy by orange";

function convert_string(str) {
    let splitted_string = str.split(" ");
    
    for (let i = 0; i < splitted_string.length; i++) {
        // Capitalize the first letter and concatenate it with the rest of the word
        splitted_string[i] = splitted_string[i][0].toUpperCase() + splitted_string[i].slice(1);
    }
    
    // Join the words back into a single string, separated by spaces
    return splitted_string.join(" ");
}

console.log(convert_string(string_to_convert), ", Q5 ");

//  Q6
"use strict";
function flip(number) {
    // Declare the array_num variable
    let array_num = number.split("");
    // Correct typo: revert -> reverse
    array_num = array_num.reverse();
    // Join the reversed array back into a string
    return array_num.join("");
}

let num = "92485";

console.log(flip(num), ", Q6");

//Q7
function swapValues() {
    let a = 3;
    let b = 4;
    console.log(`Original values: a=${a}, b=${b}`);

    // Method 1: Using a Temporary Variable
    let temp = a;
    a = b;
    b = temp;
    console.log(`After swap using temporary variable: a=${a}, b=${b}`);

    // Method 2: Using Destructuring Assignment (ES6)
    [a, b] = [b, a];
    console.log(`After swap using destructuring: a=${a}, b=${b}`);

    // Method 3: Using Arithmetic Operations
    a = a + b;  // a becomes 7 (3 + 4)
    b = a - b;  // b becomes 3 (7 - 4)
    a = a - b;  // a becomes 4 (7 - 3)
    console.log(`After swap using arithmetic: a=${a}, b=${b}`);
}

swapValues();
console.log("Q 7");


 
//Q8 
function remove_index(word, index_to_remove) {
    // Convert string to array to manipulate it
    let wordArray = word.split(" ");
    
    // Remove the character at the specified index
    wordArray.splice(index_to_remove, 1);
    
    // Convert array back to string
    return wordArray.join('');
}

console.log(remove_index("orange", 3));  // Output: "orane"

// Q9
function merge_strings_remove_first(lora, inge) {
    let new_lora = lora.slice(1);
    let new_inge = inge.slice(1);
    return new_lora + new_inge;
}

console.log(merge_strings_remove_first("lora", "inge"), " , Q9 1 ");

//Q9
 
let string1 = "lora";

let string2= "inge"


function merging_two_strings ( str1, str2 ){ 
  let arr1= str1.split("");
    arr1.shift();
    let arr2 = str2.split("");
    arr2.shift();

    return arr1.concat(arr2).join("");
}

console.log(merging_two_strings(string1, string2), " Q 9 2");

// Q10
let st = "orange ";

function ensure_specific_char(str, char) {
    let string = str;
    let index_of_char = string.search(char);
    
    if (index_of_char === 0) {
        return true; // Character is at the start
    } else if (index_of_char === string.length - 1) {
        return false; // Character is at the end
    }
    
    return false; // if neither first or end 
}

console.log(ensure_specific_char(st, "z") , " q 10  z ");
console.log(ensure_specific_char(st, "o") , " q 10  o ");



// Q11
function words_to_array(sentence) {
    return sentence.split(" ");
}

console.log(words_to_array("Coding Academy by Orange"), " , Q11");

// Q12
function reorder_chars_alphabetically(string) {
   
    return  string.toLowerCase().split("").sort().join("");
}

console.log(reorder_chars_alphabetically("Orange"), " , Q12");






