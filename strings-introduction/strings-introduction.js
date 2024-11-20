let singleQuoteString = 'Hello, world!';
let doubleQuoteString = "Hello, world!";
let templateLiteral = `Hello, world!`;

// concatention
// 2+2 = 4
// 2+2=22
// ram + shyam = ramshyam

let greetings = 'Hello';
let username = 'Alice';
let message = greetings + ',' + username + '!';
console.log(message);

let greetingswithtemplate = `${greetings}, ${username}!`;
console.log(greetingswithtemplate);

//length
console.log(greetings.length);
// let greetings = 'Hello';
//                  01234
console.log(greetings[4]);

//Uppercase 
console.log(greetings.toUpperCase());
//Lowercase
let greetingsLowerCase = 'HELLO';
console.log(greetingsLowerCase.toLowerCase());

//subString
let favLanguage = "Javascript";
console.log(favLanguage.substring(2, 5));

//Slice
console.log(favLanguage.slice(0,4));

//Split
let sentence = "Hello World!";
let words = sentence.split(' ');
console.log(words);

//indexOf and lastIndexOf
let text = "Hello World!";
console.log(text.indexOf("l"));
console.log(text.lastIndexOf("l"));

//includes
console.log(text.includes("World"));
console.log(text.includes("Javascript"));

//replace
let newText = text.replace("World", "Javascript");
console.log(newText);

//trim
let textWithWhiteSpace = "    Hello World!   ";
console.log(textWithWhiteSpace.trim());

//Concat
let firstName = "John";
let secondName = "Sahu";
let fullName = firstName.concat(' ', secondName);
console.log(fullName);

//charAt
console.log(text.charAt(6));