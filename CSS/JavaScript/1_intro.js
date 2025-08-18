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


/*******
 * 
 * conditional -->if else and switch cases
 * ******/ 
let number=10;
if (number % 2 == 0){
    console.log("I am even");
}else{
    console.log("I am odd");
}


//if there are lot of if elses --> switch case
// let day = "monday"
// if (day == "monday"){
//     console.log("working");
// }else if(day == "tuesday" || day == "wednesday"
//     || day == "thursday" || day == "friday"
// ) {
//     console.log("Holiday");
// }
// else{
//     console.log("Rest day");
// }


// let day = "tuesday"
// switch(day){
//     case "tuesday":
//         console.log("holiday");
//         break;
//     case "monday":
//     case "wednesday":
//     case "thursday":
//     case "friday":
//         console.log("Working");
//     case "saturday":
//     case "sunday":
//         console.log("weekend");
//         break;
//     default:
//         console.log("invalid day");

// }

/**********
 * loops : -->while ,for loop,do while, for each
 * 
 * *******/ 

// for(let n=1;n<=10;n++){
//     console.log("number is",n);
// }


/****
 * function --> reusable block of code create
 * 
 * ***/ 

// function fn() {
//     console.log("I am a function");
// }
// fn();

// function fn(a,b){
//     console.log("a",a);
//     console.log("b",b);
// }
// fn("hello","World");
// fn(10,20);

// function fn(a, b){
//     let d = a+b;
//     return d;
// }
// let result = fn(10, 20);
// console.log("result",result);

/***
 * strings : how strings work in js
 * concatenation : appending a value to  string
 * ***/ 

let string1="I am string";
let string2='I am string';
let templateString=`I am also string 
but can be multiple line`

// console.log(string1);
// console.log(string2);
// console.log(templateString);

function greet(firstNameVar) {
console.log('Hi ' + firstNameVar +'!');
console.log(`Hi ${firstNameVar}!`)


}
let firstName = "Jasbir";
greet(firstName)