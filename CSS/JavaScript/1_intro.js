/**
 * variable declaration
 * how js run the code -->dynamically typed language
*/
 console.log("Inside intro");

// //variable declaration
let varName;
// //default value of a variable is undefined
// console.log("7",varName);
varName="10";
// console.log("9",varName);
varname=10.1;
// console.log("10",varname);


// //String
// let newVar;
// console.log("15",newVar);

// newVar="I am devil";
// console.log("18",newVar);

// //boolean
// newVar=true;
// console.log("18",newVar);

// //null[user-defined], undefined(non-existence)[js]
// newVar=null;
// console.log(newVar);

/***
 * how to get the current type of a value that a 
   a variable is having

 ****/ 

varName=10;
varName="Hello";
varName=10.4;
varName=false;
console.log(5/2);

console.log(typeof varName);

let a;
console.log(a);

e=undefined;
e=e+5;
console.log(e);


// conditionals
let number=10;
if (number % 2 == 0){
    console.log("I am even");
}else{
    console.log("I am odd");
}
