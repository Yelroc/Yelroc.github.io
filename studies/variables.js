/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
* HOISTING
*
/* Hoisting = Variable declaration and Function declaration taken to the top of their scope. 
*
* Variables hoisted by name only
* Functions hoisted by the name AND body
*
* This means variables can be declared anywhere, available anywhere, but NO VALUE UNTIL ASSIGNED
*/
console.log(name);   // prints undefined. once the variable name is hoisted, it has no value until the code is ran gain
var name = 'chris'

/*
* This means functions can be declared anywhere, available anywhere, and HAS THAT VALUE AT ALL TIMES
*/
console.log(print);         //prints value. once the fucntion is hoisted the value is taken with it
function print(value) {
    console.log(value)
};

if (name === undefined) {
    name = 'chris';
}   else {
    name = 'corley';
}

console.log(name);          // prints chris.... on the first run, var name is hoiseted to the hop with NO VALUE aka undefined.
                            //                  on the second run, since var name is undefined, it runs the if statement and 
                            //                                     prints chris
                           
                           
                            
/* ---Variable Declaration Scopes
*
* Var ===== Reassignable, Global and Local scope 
*/
var name = 'chris';
name = 'corley';                // will reassign name anywhere

/* Let ===== Reassignable, Block scope
*/


/* Const === NOT reassignable, Block scope
*/