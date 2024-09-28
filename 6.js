
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