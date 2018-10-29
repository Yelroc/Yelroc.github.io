/*
* CONTROL FLOW
*/

/* A set of statements, specifically control flow, that lets you test mutiple
* conditions
*/

// Block code - used in 'if', 'for', and 'while' loops. Encased inside { }

/* Condition Statements - directing your code based on conditions. 
*                         Each condition is an expression.
*
* condition 1 --- if true --- action 
*             --- if false
* condition 2 --- if true --- action
*             --- if false
*             default action

/* If-Else Statments
*
* If- Else statements test a set of conditions and if they are false then the else
* condition is executed
*
* Else if statements are used to perform different actions based on the different conditions
*/

if (6===7) {
    console.log("No");
} else if (2===2) {
    console.log("Good"); // Stops here and prints "Good" condition is true
} else if ('2' == 2) {
    console.log("Good aswell");
} else {
    console.log("Not working");
}
    