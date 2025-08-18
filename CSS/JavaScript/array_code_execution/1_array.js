console.log("JS class -2");


/*****
 * Arrays
 * array don't have a strict size
 * -->add, remove elements from it
 * 
 * 
 * *****/
let arr=[1,2,3,4]
// let arr2=[];

//print
// console.log("array",arr);
// console.log(arr2);

//iterate
// for (let i=0; i < arr.length; i++) {
//     console.log("index", i,"value", arr[i]);
// }


/*************
 * 1. add last --> push
 * 2. remove last --> pop
 * 3. add first --> unshift
 * 4. remove first --> shift
 * 
 * 
 * 
 * ************/ 
console.log(arr);
arr.push(50);
console.log("after push", arr);
arr.pop();
console.log("after pop",arr);
arr.unshift(7);
console.log("unshift",arr);
// arr.shift();
// console.log("shift",arr);
 

// arr.splice(1,2);
// console.log("after delete",arr);

// indexOf - find the index of the element in the array
console.log("index of 3", arr.indexOf(3));
console.log("index of 30",arr.indexOf(30));

//includes
console.log("is element present", arr.includes(1));
//join - join the array elements with the specific  

let fruits = ["apple", "oranges", "banana"];
let str = fruits.join("+");
console.log("string:" ,str);