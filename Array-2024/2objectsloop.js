//XX The for...of loop should not be used for iterating over objects in JavaScript. XX
//we cannot use foreach for object as it is for array

//FOREIGN

//for...in: To iterate over the keys (property names) of an object.
//Object.keys()
//Object.values()


//for...in Loop
// let person = { name: "John", age: 30, job: "Developer" };

// for (let key in person) {
//   console.log(key, person[key]);
// }


//Object.keys()
// let person = { name: "John", age: 30, job: "Developer" };
// let keys = Object.keys(person);
// //console.log(keys) //[ 'name', 'age', 'job' ]
// keys.forEach(function(key) {
//   console.log(key, person[key]);
// });


//Object.values()
// let person = { name: "John", age: 30, job: "Developer" };
// let values = Object.values(person);

// values.forEach(function(value) {
//   console.log(value);
// });

