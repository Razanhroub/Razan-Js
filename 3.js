"use strict "


let string_q = "Welcome to Orange";

console.log(string_q.toUpperCase() , "string 1");
let slice_of_string = string_q.slice(8,11);

console.log(slice_of_string.toUpperCase(), "string 2")
console.log(string_q.split(" ")[1] , "string 2 other way ")
console.log(string_q.replace("Welcome to", "Hello from"), "string 3");
console.log(string_q.toLowerCase(), "string 4");
console.log(string_q.length , " string 5 ");
console.log(string_q.replace("Orange",'"Orange"'), "string 6");
console.log(string_q.concat("Jordan"), "string 7");



// question two  string
function replace_occurrences(str) {
    let first_letter = str[0];
    str = first_letter + str.slice(1).replace(new RegExp(first_letter, 'g'), '*');
    return str;
}

 let test = "catcus";
 console.log( replace_occurrences(test) , "question 2 of string the first way ");


 function replace_occurrences_two(str){
    let first_letter = str[0];
    let rest = str.slice(1);
    str = first_letter + rest.replace (first_letter , '*')
    return str ;
 }

console.log(replace_occurrences_two(test) , "question two  of string way 2 ") ;





