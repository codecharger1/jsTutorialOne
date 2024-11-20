// common object methods

let person = {
    name : "John",
    age : 30,
    isStudent : false
};

// to access keys and values

console.log(Object.keys(person));
console.log(Object.values(person));

// to get key value pairs in arrays
console.log(Object.entries(person));

// deleting properties
delete person.isStudent;    
console.log(person);

// cloning objects
let clonedPerson = { ...person}; // Using Spread Operator
let anotherClonedPerson = Object.assign({}, person); //using assing method