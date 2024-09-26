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




// Q3 for later

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
function up_case(in_string) {
    let array_to_up = in_string.split(" ");  // Split string into words
    for (let i = 0; i < array_to_up.length; i++) {
         let upp_er = array_to_up[i];  // Get the word
         upp_er = upp_er[0].toUpperCase() + upp_er.slice(1);  // Capitalize the first letter and add the rest of the word
         array_to_up[i] = upp_er;  // Update the word in the array
    }
    return array_to_up.join(" ");  // Join the words back with spaces
 }
 
 let strin_to_up = "coding academy by orange";
 console.log(up_case(strin_to_up), " , Q5");

//  Q6
function reverse_nums(nums) {
    let to_convert = nums.toString();  // Convert number to string
    let new_arr = [];  // Initialize an empty array

    to_convert = to_convert.split("");  // Split the string into an array of digits

    // Loop through the array backwards to reverse the digits
    for (let i = to_convert.length - 1; i >= 0; i--) {
        new_arr.push(to_convert[i]);  // Push each digit into the new array
    }

    // Join the array back into a string and convert it to a number
    return new_arr.join("");
}

console.log(reverse_nums(92485), ", Q6");

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

 
//Q8 
function remove_index(word, index_to_remove) {
    // Convert string to array to manipulate it
    let wordArray = word.split('');
    
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

console.log(merge_strings_remove_first("lora", "inge"), " , Q9");

// Q10
function ensure_char_in_first_or_last(char, string) {
    return string[0] === char || string[string.length - 1] === char;
}

console.log(ensure_char_in_first_or_last("o", "orange"), " , Q10");
console.log(ensure_char_in_first_or_last("z", "orange"), " , Q10");


// Q11
function words_to_array(sentence) {
    return sentence.split(" ");
}

console.log(words_to_array("Coding Academy by Orange"), " , Q11");

// Q12
function reorder_chars_alphabetically(string) {
    return string.split("").sort().join("");
}

console.log(reorder_chars_alphabetically("Orange"), " , Q12");

// Conditionals Q1
function check_eligibility(birth_year) {
    let current_year = new Date().getFullYear();
    let age = current_year - birth_year;

    if (age > 60) {
        console.log("You may join the seniors' program.");
    } else if (age > 30) {
        console.log("You are not eligible. You may join other programs.");
    } else if (age >= 18) {
        console.log("You are eligible. Start your application.");
    } else {
        console.log("You may join the kids' program.");
    }
}

check_eligibility(1990);  // Change year to test

// Conditionals Q2
function switch_case(string) {
    let switched = "";
    for (let char of string) {
        if (char === char.toUpperCase()) {
            switched += char.toLowerCase();
        } else {
            switched += char.toUpperCase();
        }
    }
    return switched;
}

console.log(switch_case("OrAnGe"), " , Q2");

// Conditionals Q3
function to_camel_case(sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join("");
}

console.log(to_camel_case("Coding Academy by Orange"), " , Q3");

// Conditionals Q4
function remove_element(array, element_to_remove) {
    return array.filter(item => item !== element_to_remove);
}

console.log(remove_element(["Coding", "Academy", "By", "Orange"], "By"), " , Q4");

// Conditionals Q5
function is_even_or_odd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

console.log(is_even_or_odd(5), " , Q5");

// Conditionals Q6
function is_number(value) {
    return typeof value === 'number';
}

console.log(is_number(123), " , Q6");
console.log(is_number("123"), " , Q6");

// Conditionals Q7
function largest_of_two(a, b) {
    return a > b ? a : b;
}

console.log(largest_of_two(5, 8), " , Q7");

// Conditionals Q8
function triangle_type(a, b, c) {
    if (a === b && b === c) {
        return "Equilateral";
    } else if (a === b || b === c || a === c) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}

console.log(triangle_type(3, 3, 3), " , Q8");
console.log(triangle_type(3, 3, 5), " , Q8");
console.log(triangle_type(3, 4, 5), " , Q8");

// Conditionals Q10
function is_leap_year(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    }
    return false;
}

console.log(is_leap_year(2024), " , Q10");





