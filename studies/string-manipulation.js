/*
* STRING MANIPULATION
*/

/* String manipulation is when we are tryign to either change a strings data or
*  access a particular part of a string.
*/

/* Properties
*/ 

var string = 'christopher';
var str = 'CORLEY';

// String.length - finds the length of the string given

console.log(string.length); // 11

/* Methods
*/

// String.charAt() - finds character at index given 

console.log(string.charAt(3)); // 'i'

// String.concat() - combines strings given and returns it as ONE string

console.log(string.concat(' ', str)); // 'christopher corley'

// String.endsWith() - determines if string ends with given value. return boolean

console.log(string.endsWith('r')); // true

// String.slice() - extracts a part of the string and returns new string, without 
//                  without changing the original string

console.log(string.slice(5)); // topher
console.log(string.slice(-6)); // chris

// String.split() - splits string into an array

console.log(str.split('')); // ['C', 'R', 'R', 'L', 'E', 'Y'];

// String.startsWith() - determines if string starts woth a given value. return boolean

console.log(string.startsWith('c')); // true

// String.toLowerCase() - returns string as all lower case

console.log(str.toLowerCase()); // 'corley'

// String.toUpperCase() - returns string as all upeer case

console.log(string.toUpperCase()); // 'CHRISTOPHER'