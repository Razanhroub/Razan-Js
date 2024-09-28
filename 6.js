
// Conditionals Q1

function check_eligibility (year_birth){
    let current_year = new Date().getFullYear();
    let age = current_year - year_birth;

    if (age > 60) {
        console.log("You may join the seniors’ program.");
    } else if (age >30){
        console.log("You are not eligible. You may join other programs.");
    } else if (18 <= age && age <= 30){
        console.log("You are eligible. Start your application.");
    }else if (age < 18){
        console.log("You may join the kids' program.");        
    }

}

let year = 2001 ;
check_eligibility(year);
console.log( "Q 1");


// Conditionals Q2
function switch_case (str){
    str_arr = str.split("");
    for (let i= 0; i < str_arr.length; i++) {
        if (str_arr [i] == str_arr[i].toUpperCase()) {
            str_arr[i] == str_arr[i].toLowerCase()  
        }else {
            str_arr[i] == str_arr[i].toUpperCase()
        }
        
    }
    return str_arr.join("");
}

let string_word = "OrAnGe";
console.log(switch_case(string_word), "Q");





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
function remove_elemnt(arr, element_r) {
    let index_r = arr.indexOf(element_r); // Use indexOf to find the index
    if (index_r !== -1) { // Check if the element exists in the array
        arr.splice(index_r, 1); // Remove the element at the found index
    }
    return arr.join(" "); // Return the modified array
}

let arr = ["Coding", "Academy", "By", "Orange"];
console.log(remove_elemnt(arr, "By") , "Q4"); // Outputs: [ "Coding", "Academy", "Orange" ]

// Conditionals Q5

function even_odd ( num){ 
    if (num %2 == 1){
        console.log("odd");
        
    }else{
        console.log("even ");
        
    }
}

even_odd(3);
console.log("Q5");


// Conditionals Q6
function type_of(input) {
    if (typeof input === 'number') {
        console.log("is number");
    } else {
        console.log(typeof input);
    }
}
type_of(5);
console.log("Q 6");




// Conditionals Q7
function largest_of_two (num1 , num2){
    if (num1 > num2) {
        return num1;
        
    }else{
        return num2;
    }
}
console.log(largest_of_two( 5 , 6 ), "Q 7");

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

//Q9


function number_range_check (start,end , num){
    if (num >= start && num <= end){
        return true;
    }else{
        return false;
    }
}

console.log(number_range_check( 1,8,7) , "Q 9");

// Conditionals Q10
function is_leap_year(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    }
    return false;
}

console.log(is_leap_year(2024), " , Q10");