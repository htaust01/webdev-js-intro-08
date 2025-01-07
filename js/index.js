// Prevent us from attempting to use variables
// that are not declared
"use strict"

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i = 0; i < arr.length; i++) console.log("For: " + arr[i]);

for(const item of arr) console.log("For-Of: " + item);

arr.forEach(el => {console.log("ForEach: " + el);});
