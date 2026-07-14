/*
    Syntax: Function Declaration
    function functionName(Parameter1, Parameter2, ...ParameterN) {
        // Code to be executed
    }
        functionName(argument1, argument2, ...argumentN); // Calling the function
*/

function dance() {
    console.log("💃 Let's dance!");
}

dance(); // Calling the function to execute it

//Playing with Arguments and Parameters
function perform(v1) {
    console.log(`Person is ${v1}`)
}

perform("dance");
perform("singing");

//Anonymous Function
let anonFnc = function () {
    console.log("This is Anonymous Function.");
}

anonFnc();

let sayHi = function (name) {
    console.log("Hello " + name);
}

sayHi("Ishaan"); // Calling the function expression


function add(a, b) {
    return a + b;
}

let ans = add(12, 2);
console.log(ans);

//Fat arrow Function
/* Syntax :
() => { }
*/

//1
let fnc = () => {
    console.log("Hello! This is a Arrow Function");
};

fnc();

//2
let sum = (a, b) => {
    return a + b;
}

let result = sum(12, 5);
console.log(result);


//Rest - The rest parameter allows a function to accept any number of arguments and collects them into a single array.
function add(...numbers) {
    console.log(numbers);
}

add(10, 20, 30, 40, 50);

function add(...numbers) {
    console.log(numbers);
}

add(10, 20, 30, 40, 50);

function addition(a, b, c, ...items) {
    console.log(a, b, c, items);
}

addition(10, 20, 30, 40, 50, 60, 70);

// Callback Functions or Higher ORder Function
function greet(name) {
    console.log("Hello " + name);
}

function processUser(val) {
    val("Ishaan");
}

processUser(greet);

//Lexical Scope
let university = "RBU";

function student() {

    let name = "Ishaan";

    function details() {
        console.log(name);
        console.log(university);
    }

    details();
}

student();

//Closures - A closure is created when an inner function remembers and can access variables from its outer function even after the outer function has finished executing
function outer() {

    let message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;

}

const myFunction = outer();

myFunction();

// IIFE - Immediately Invoked Function Expression

(function () {

    console.log("Hello!");

})();


// Function Hoisting
speak();

function speak() {
    console.log("Hello");
}