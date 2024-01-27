The JavaScript prototype property allows you to add new properties to object constructors:

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
