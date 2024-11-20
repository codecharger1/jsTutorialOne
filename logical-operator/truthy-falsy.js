// truthy
// "Anil" (non-empty string), arrays, objects,  other numbers

// let userName = "Anil";
// console.log(Boolean(userName));

let firstName = "";

if(!firstName) {
    console.log("No name provided");
}

let userName = "John";
if(userName){
    console.log("user exists");
}


// falsy
// 0, "" (empty string), null, undefined, NaN, false.

// let username = "";
// let age = 0;
// let bio = null;
// let email = undefined;
// let phone = NaN;
// let isActive = false;


// let displayUsername = username || "Guest";
// let displayAge = age || "Not Provided";
// let displayBio = bio || "No bio available";
// let displayEmail = email || "Email not provided";
// let displayPhone = phone || "Phone not provided";
// let displaystatus = isActive ? "Active" : "inActive";

// //printing the values
// console.log("Username: " + displayUsername);
// console.log("Age: " + displayAge);
// console.log("Bio: " + displayBio);
// console.log("Email: " + displayEmail);
// console.log("Phone: " + displayPhone);
// console.log("Status: " + displaystatus);


// console.log(Boolean(age));