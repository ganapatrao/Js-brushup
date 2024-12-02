// const person = {
//     name: 'John',
//     age: 30,
//     greet: function() {
//       console.log('Hello!');
//     }
//   };

let x = {
    name: "avi",
    age: 22
  };
  
  x.__proto__.country = "India";

  console.log(x)

  let dat = new Date()
  console.log(dat)

// let x ="avirup"
// console.log(x)

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
//   Person.prototype.greet = function() {
//     console.log('Hello!');
//   };
  
//   Person.prototype.sayGoodbye = function() {
//     console.log('Goodbye!');
//   };
  
//   const john = new Person('John', 30);

//   console.log(john)

// let now = new Date()
// console.log(now);
// console.log(now.prototype);
// // Check the prototype chain
// console.log(now.__proto__); // Date.prototype
// console.log(now.__proto__.__proto__); // Object.prototype