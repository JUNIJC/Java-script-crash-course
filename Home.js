console.log('hello');
//alert('Yooo Welcome! This is Juni...');
//This is a Comment line

//Variables
//This variable's name is b and when consol.log calls b it then reads smoothie 
var b = 'smoothie';
console.log('b');

//Another example
var someNumber = 45; 
console.log('someNumber');

//Storing a string to a var
var age = prompt('What is your age?');

document.getElementById('someText').innerHTML = age;

//Numbers in Javascript
var num1 = 10;

//Increment num1 by 1 
num1++;
console.log(num1);

// Decrement num1 by 1
num1--;
console.log(num1);

// Divide, multiply *, remainder %
console.log(num1 % 6);

// Increment/decrement by any number you want
num1 += 10;
console.log(num1);

/* Functions
1. Create a function
2. Call the function
*/

// Create

function fun() {
    console.log('this is a function');

}

// Call
fun();

/* Let's create a function that takes in a name and says hello followed by the name entered. 

*/

function greeting(yourName) {
    var result = 'Hello' + ' ' + yourName; // String Concatenation
    console.log(result);

}

var name = prompt('What is your name?');
greeting(name);

// How do arguments work in functions
// How do we add 2 numbers together in a function?
function sumNumbers(num1, num2) {
var result = num1 + num2;
console.log(result);
}

sumNumbers(10, 10); 

/* While loops

var num = 0;

while (num < 100) {
    num += 1;
    console.log(num);
}
*/
// for loop

for (let num = 0; num < 100; num++) {
    console.log(num);

}