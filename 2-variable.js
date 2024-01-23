// let x = 100;
// x=200                             //works
// console.log(x)




const y = 100;
y=200                  //error
console.log(x)



// CONSTANTS

//JavaScript const variables must be assigned a value when they are declared

// Variables defined with const cannot be Redeclared

// Variables defined with const cannot be Reassigned

// Variables defined with const have Block Scope

/*
It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object


const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR



But you CAN:

Change the elements of constant array
Change the properties of constant object



// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

//####
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

*/


//Always declare a variable with const when you know that the value should not be changed.
// Use const when you declare:
// A new Array
// A new Object
// A new Function
// A new RegExp