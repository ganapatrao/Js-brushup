//CAll is a function/methode that helps to change the context(this value) of the invoking function.
//In simple words it helps to replace the value of "this" inside a function with what ever value we want

const person = {
  name: "Hari",
  lName: "lastName",
  fullname: function () {
    // return this.name + " " + this.lName;
    console.log(this.name + " " + this.lName);
  },
};

const person2 = {
  name: "Hari2",
  lName: "lastName2",
  //eliminate this and use call to handle same
  // fullname: function () {
  //   return this.name + " " + this.lName;
  // },
};

// the first argument sets this
// the subsequent arguments passed as an argument to the function
person.fullname.call(person2);

const person3 = {
  name: "Hari3",
  lName: "lastName3",
};


person.fullname.call(person3,"pune")

//CGPT exampleIn JavaScript, call, apply, and bind are methods that can be used to manipulate the context (this value) of a function. Here are examples of each

//CALL
function greet(name) {
  console.log(`Hello, ${name}! My name is ${this.name}.`);
}

const personx = {
  name: 'John'
};

// Using call to invoke the function with a specific 'this' value
greet.call(personx, 'Alice');
// Output: Hello, Alice! My name is John.
