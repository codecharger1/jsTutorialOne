let person = {
    name : "John",
    age : 30,
    isStudent : false
};

// iteration using for in

// for (let key in person){
//     console.log(`${key}: ${person[key]}`);
// }


// iterate using Object.keys() with forEach

// Object.keys(person).forEach(key => {
//     console.log(`${key}: ${person[key]}`);
// });


// iterate using Object.entries() with forEach

Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});