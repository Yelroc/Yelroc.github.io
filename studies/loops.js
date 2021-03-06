/* 
*LOOPS
*
* Loops repeat a code for a set amount of times. There are various 
* types of loops for various situations.
*
* 1) For Loops
*
* For loops run until a specific condition evaluates to be false.
* ex) for (start condition; stop condition; increment){
            console.log(var)};
*/

var letters = ['a', 'b', 'c', 'd'];

for (var i = 0; i < letters.length; i++) {
    console.log(letters[i]); // 'a', 'b', 'c', 'd'
}

var letters = ['a', 'b', 'c', 'd'];

for (var i = letters.length - 1; i >= 0; i--) {
   console.log(letters[i]); //'d', 'c', 'b', 'a'
}



for (var i = 0; i <= 10; i++) {
    console.log(i); // 0,1,2,3,4,5,6,7,8,9,10
}

for (var i = 10; i >= 0; i--) {
    console.log(i); // 10,9,8,7,6,5,4,3,2,1,0
}

/* The for loop above starts at 0. will stop once i is less than 
*  or equal to 10. and will increment by 1.
*
*
* 2) While loops
*
* While loops run until the specified condition evaluates to be false.
* ex) while(condition) {
    increment
    console.log(var)
}
*/
var age = 22;
while (age < 30) {
    age++;
    console.log(age); // 23,24,25,26,27,28,29
}    
    
var randomStuff = ["apple", 3.14, true, false, "chis"];
var x = 0;

while (x < randomStuff.length) {
    console.log(randomStuff[x]); // apple, 3.14, true, false, chris
    x++;
}


    
    
/*
*
*
* 3) For-In loops
*
* For in loops, loop over objects. Allows us to use the keys to extract the 
* values out of the object.
*
* ex) for (var param IN object) {
    console.log(var)
}
*/

var data = {
    name:'tia',
    race: 'black',
    female: true
};
 
for (var elem in data) {
    console.log(elem); // name, race, female
}

for (var elem in data) {
    console.log(data[elem]); // tia, black, true......... 
}