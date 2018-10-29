/* 
OPERATORS
*/

/* Operators act on our data. They are used in comparison situation, 
*  assignment situations, and even arithmetic situations.
*  They are also classed by how many operands they require.
*
*  Operands are the values that the operator acts upon.
*
*  Unary operators = 1 Operand
*  Binary operators = 2 Operands
*  Ternary operators = 3 Operands
*/

/* Types of operators
*
*/
// Assignment operators assign the value of the RIGHT operand to the LEFT operand

 var x = 10;
 var y = 5;
 var z = '10'; 
 
 console.log(x = y);  // assignment5
 console.log(x += y); //x = x + y         addition assignment... prints 15
 console.log(x -= y); //x = x - y         subtraction assignment... prints 5    
 console.log(x *= y); //x = x * y         multiplication assignment... prints 50
 console.log(x /= y); //x = x / y         division assignment... prints 2
 
 
/* Comparions operators compare the operands and returns a logical value based on 
*  whether the comparion is true or false.
*  Javascript will usually convert operands to the same datatype to compare
*/

console.log(x > y); // true... 10 > 5
console.log(x < y); // false... 10 < 5
console.log(x >= y); // true... 10 >= 5
console.log(x <= y); // false... 10 <=5
console.log(x == z); // true... 10 == '10'       ***Double equals doesn't csre about datatypes***
console.log(x === z); // false... 10 === '10'     ***Triple euqals means EXACT SAME***
console.log(x != y); // true... 10 != 5
console.log(x != z); // false... 10 != '10'      ***One equals after ! doesn't care about datatypes***
console.log(x !== y); // true... 10 !== 5
console.log(x !== z); // true... 10 !== '10'      ***Two equals after ! means the EXACT SAME


/* Arithmethic operators are math calcutations
*/

console.log(x + y); // 10 + 5 = 15
console.log(x - y); // 10 - 5 = 5
console.log(x * y); // 10 * 5 = 50
console.log(x % y); // 10 / 5 = 2   


/* Increment operators add one to that value, but when written different have different effects
*/
console.log(x++); // 10
console.log(x); // 11
/*
* When coded ' x++ ' . It adds one to the original value and 
* returns the original value, but the new value is now assigned to that variable.
*/
console.log(++x);          // 11
console.log(x);            // 11
/*
* When coded ' ++x ' . It adds one to the original value and 
* that new value is return AND assigned to the variable. The original variable is erased.
*/

/* Logical operators are typically used with boolean values. 
*  They either return a boolean value or a given expression
*/


// && = AND     || = OR

var age = 22;
var diploma = 'yes';

if (age >= 18 && diploma == 'yes') { 
    console.log("good"); // true... both conditions have to be met
}
    
if (age >=25 || diploma == 'yes') { 
    console.log("good"); // true... one of the conditions are met
}

/* Conditional operators is the only ternary operator, requiring 3 operands. 
* This operator can have one of two values based on the condition
*
* (conditional ? value1 : value2);
*
* If the condition is TRUE, then value1 is returned, however 
* if the condition is FALSE, then value2 is returned.
*/

var patDownOne = false;
var patDownTwo = false;
var access = patDownOne ? "Wait right there" : patDownTwo ? "Wait right there" : "Go ahead and enjoy";

console.log(access); // "Go ahead and enjoy"

/*
* Typeof operator consoles the data type of the inputted value
*/

var str = "string";
var num = 5;
var bool = true;

console.log(str); // string
console.log(num); // number
console.log(bool); // boolean