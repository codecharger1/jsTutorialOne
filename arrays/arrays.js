// let fruits = ["apple", "orange", "mango"];
// console.log(fruits);
// let numbers = new Array(1, 2 ,5,4 );
// console.log(numbers);

let fruits = ["apple", "orange", "mango"];
console.log(fruits[2]);
console.log(fruits[0]);

fruits[1] = "cherry";
console.log(fruits);

// Adding element
fruits.push("orange");
console.log(fruits);

fruits.unshift("grapes");
console.log(fruits);
// removing element
fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

//finding element
console.log(fruits.indexOf("mango"));
console.log(fruits.includes("orange"));

// other useful methods
// slice 1 3 1-3
// splice 1 1 kiwi
// join converts in string


let newFruits = ["apple", "orange", "mango", "grapes"];
console.log(newFruits.slice(0,3));

newFruits.splice(1, 1, "kiwi");
console.log(newFruits);

console.log(newFruits.join(", "));

// Array Iteration

//Foreach
newFruits.forEach((fruit) => {
    console.log(fruit);
});

//map
let upperCase = newFruits.map(fruit => fruit.toUpperCase());

console.log(upperCase);
console.log(newFruits);

//filter
let longFruits = newFruits.filter(fruit => fruit.length > 4);
console.log(longFruits);
console.log(newFruits);

//reduce
let totalLength = 
newFruits.reduce((total, fruit) => total + fruit.length, 0);
console.log(totalLength);