// Syntax Error

// let user = ;

// Reference error

// console.log(nonExistentVar);

// Type Error

// let num = 10;
// num();

// Range Errors

// let arr = new Array(1);

// Custom Errors


function checkAge (age) {
    if(age<18){
        throw new Error("Age must be atleast 18.");
    }
}

try{
    checkAge(16);
}   catch (error) {
    console.error(error.message);
}
