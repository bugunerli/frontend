
const firstName = "Barbara";
const lastName = "K";
const age = 18;

// print out first name is firstName

console.log("firstName is " + firstName);// firstName is Barbara 

// ` backtick symbol for template string

console.log( `firstName is ${firstName} `);// firstName is Barbara 

// print out full name is firstName lastName and she is age years old
console.log(`full name is ${firstName} ${lastName} and she is ${age} years old`);
// full name is Barbara K and she is 18 years old

const multiline = 
`this is line 1
this is line 2
this is line 3 `;

// console.log(multiline);

console.log(`uppercase version is : ${multiline.toUpperCase()}`);
/**
uppercase version is : THIS IS LINE 1
THIS IS LINE 2
THIS IS LINE 3
 */


const num1 = 10;
const num2 = 20;

console.log(`The result of adding ${num1} to ${num2} is ${num1+num2}`);
// The result of adding 10 to 20 is 30
