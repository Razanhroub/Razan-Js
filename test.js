let arr =  [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];

let even_arr = [];
let odd_arr = [];
for (let i = 0; i < arr.length ; i ++){
    if(arr[i] % 2 ==0){
        even_arr.push( arr[i]);
    }else{
        odd_arr.push(arr[i]);
    }

}
console.log(even_arr , odd_arr);
