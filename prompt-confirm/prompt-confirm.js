// Prompt

// let userInput = prompt("Enter Your Name:", "Type here");

// let userName = prompt("what is your name?");
// if(userName != null){
//     console.log(`Hello, ${userName}!`);
// }
// else{
//     console.log("No name entered");
// }

// Confirm
// let userResponse = confirm("Are you sure you want to delete this?");


let isConfirmed = confirm("Do you want to proceed this?");

if(isConfirmed){
    console.log("user chose to proceed");
}
else{
    console.log("user cancelled the action.");
}