// function myFunc(){
//     console.log("This is my function.");
//     console.log("This is my function.");
// }
// myFunc();

// function expressions

// const myFunc = function (){
//     console.log("This is a function expression.");
// }
// myFunc();

// parameters

// function greet(name){
//     console.log(`Hello, ${name}!`);
// }
// greet("ramesh");

// Return Values

// function multiply(a, b){
//     return a * b;
// }
// let result = multiply(2, 3);
// console.log(result);

// Arrow Functions 

// const add = (a, b) => a + b;
// console.log(add(4,5));

// Local Scope in function

// function myFunc() {
//     let localVar = "I'm local!";
//     console.log(localVar);

// }

// myFunc();
// console.log(localVar); this will give undefined error

// Global Scope in function
let globalVar = "I'm global!";
function myFunc() {
    
    console.log(globalVar);

}

myFunc();
console.log(globalVar);