// Example 1: Variable Hoisting
console.log(hoistedVar); // undefined due to hoisting
var hoistedVar = "I am hoisted!";
console.log(hoistedVar); // "I am hoisted!"

// Example 2: Function Hoisting
hoistedFunction(); // Works because of function hoisting
function hoistedFunction() {
    console.log("I am a hoisted function!");
}

// Example 3: Execution Context & Call Stack
function first() {
    console.log("First function is called");
    second(); // Calls second function
}

function second() {
    console.log("Second function is called");
    third();  // Calls third function
}

function third() {
    console.log("Third function is called");
}

first(); // Start of the execution

// Example 4: Lexical Scoping and Closures
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable:', outerVariable);
        console.log('Inner Variable:', innerVariable);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');
