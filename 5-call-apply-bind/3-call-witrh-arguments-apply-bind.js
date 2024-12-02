//The apply method is similar to call, but it takes an array of arguments.
  
person = {
  name: "hari",
  lastName: "Last Name",
  fullName: function (state,country) { //state
    console.log(this.name + " " + this.lastName + " From "  + state+ "/"+ country);
  },
};


person2 ={
    name:"harish2",
    lastName: "LastName2",
   // lastName2:"Lastname2" //testing
}


person.fullName.call(person2,"Goa","India") // first argument for this and the 2nd argument as paramater as a paramater

//APPLY
// Now comes the Apply in picture
//we can pass the arguments as a array
person.fullName.apply(person2,["Goa2","IndiaAPply"])

//BIND
//BIND is like call but it returns a function// in other words pass a value for this and call later like callback function 
//console.log(person.fullName.bind(person2,"Goa","India"))// returns a function //result [Function: bound fullName]
let result = person.fullName.bind(person2,"Goa","IndiaBind")
//console.log("result",result); //result [Function: bound fullName]
result()




//gpt examples
//apply
function greet(name, age) {
  console.log(`Hello, ${name}! My name is ${this.name} and I am ${age} years old.`);
}

const person = {
  name: 'John'
};

// Using apply to invoke the function with a specific 'this' value and an array of arguments
greet.apply(person, ['Alice', 30]);
// Output: Hello, Alice! My name is John and I am 30 years old.

//bind
unction greet(name) {
  console.log(`Hello, ${name}! My name is ${this.name}.`);
}

const person = {
  name: 'John'
};

// Using bind to create a new function with a specific 'this' value
const greetPerson = greet.bind(person);

// Invoking the new function
greetPerson('Alice');
// Output: Hello, Alice! My name is John.

