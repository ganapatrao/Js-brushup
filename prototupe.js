//The JavaScript prototype property allows you to add new properties to object constructors:
//https://www.w3schools.com/js/js_object_prototypes.asp


// Define a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add a method to the prototype
Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

// Create an instance of the Person object
var person1 = new Person("John", 30);

// Call the method added through the prototype
person1.sayHello(); // Output: Hello, my name is John


//GT
let age ={}

function Student() {
    this.name = 'John';
    this.gender = 'M';
}

Student.prototype.age = 15;

var studObj1 = new Student();


console.log(studObj1)
// o/p Student { name: 'John', gender: 'M' } and not age
//by default it will not have we have to call it seperaterly, hence the advantage is it will notload the object



console.log(studObj1.age)

