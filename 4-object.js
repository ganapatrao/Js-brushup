//object literal
// const person = {
//   name: "hare krishna",
//   age: "21",
//   fullname: function () {
//     console.log(`${this.name} is ${age} old`);
//   },
// };

//#########################################################################################
// constructor funtion

function getFullDetails(name, age) {
  this.name = name;
  this.age = age;
  // fullname= function(){
  //   console.log(`${this.name} is ${this.age} year old`)
  // }
}

const object1 = new getFullDetails("hari", 21);
console.log(object1);
// console.log(object1.fullname) // this is unknown ignore
console.log(
  "constructor funtion ##############################################"
);

//#########################################################################################

//factory function
//A factory function is a function that returns an object. It's a way to encapsulate object creation.

function personfun() {
  return { name: "hare2", gae: 21 };
}

let person2 = new personfun();
console.log(person2);
console.log(person2.name);
console.log("factory funtion ##############################################");
//#########################################################################################
//Object.create:
let x = new Object();
x.name = "Hare";
console.log(x);

//using exissting object
let myObject = Object.create(x);
console.log(x);

//#########################################################################################
//class

class Personclass {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  getdetails() {
    return this.name, this.age;
  }
}

const personcls = new Personclass("john", 21);
console.log(personcls);

//
//object.assign // to create a an object that needs to haeve a property from more than one object
const namexobj = { name: "vst" };
const name2xobj = { state: "goa" };
const resultx = Object.assign({}, namexobj, name2xobj);
console.log(resultx);

///Object destructuring
// to extract properties from an object and assign to a variable
const personx2 = {
  name: "hari om",
  age: 21,
};

const { name11, age12 } = personx2;
console.log(name11, age12);

// spread operator
const person3 = {
  region: "desh",
  ...personx2,
};

console.log(person3);
