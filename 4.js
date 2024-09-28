"use strict "


let array_q4_first = ["Coding", "Academy", "By",  "Orange"] ;


array_q4_first.push("Jordan")
console.log( array_q4_first , "q1") ;



//q2
let array_q4 = ["Coding", "Academy", "By",  "Orange"] ;
console.log(array_q4.slice(0,2) , ", q2");


//q3 
let array_q4_3 = ["Coding", "Academy", "By",  "Orange"] ;
array_q4_3.unshift("To");
array_q4_3.unshift("Welcome")
console.log(array_q4_3 , ", q3 first way ");





let array_q4_3_2 = ["Welcome " , "To ", ...array_q4]
console.log(array_q4_3_2 , "q3 second way ");


//q4

let array_q4_4 = ["Coding", "Academy", "By",  "Orange"] ;
console.log(array_q4_4.slice(1), "q4")


//q5
let array_q4_5 = ["Coding", "Academy", "By",  "Orange"] ;
console.log(array_q4_5.join(" "), ", q5 ");

//q6
let array_q4_6 = ["Coding", "Academy", "By",  "Orange"] ;
console.log(array_q4_6 , ",q6")


//q7
let array_q4_7 = ["Coding", "Academy", "By",  "Orange"] ;
console.log(array_q4_7[0], array_q4_7[3], ",q7")



// Question 2 

var fruit = ["banana", "apple", "orange", "watermelon"]; 
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  
// 2 a
fruit.pop()
console.log( fruit , "question 2  a ")
//2 b
fruit.shift();
console.log(fruit, "Question 2 b");
//2c
console.log(fruit.indexOf("orange"), "Question 2 c ");
// 2 d 
fruit.push(fruit.indexOf("orange") )
console.log(fruit , "Q 2 d");

//2 e 
console.log(vegetables.length, "Q 2 e ");

//2 f 
vegetables.push(vegetables.length)
console.log( vegetables, "Q2f");

//2 g 

let food = fruit.concat(vegetables);

console.log( food , " ,Q 2 g");

//2 h 
food.splice(4,2 )
console.log( food, " Q 2 h");

// 2  i 
console.log( food.reverse() , " Q 2 i")

console.log ( food.join (" "), ", 'Q 2 j' ")












