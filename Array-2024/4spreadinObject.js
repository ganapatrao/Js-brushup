// Shallow Copy of an Object
// let person = { name: 'John', age: 30 };
// let copy = { ...person };  // Output: { name: 'John', age: 30 }

// console.log(copy)
//Adding New Properties.........................................
// let person = { name: 'John' };
// let updatedPerson = { ...person, age: 30 };  // Output: { name: 'John', age: 30 }
// console.log(updatedPerson)

//Overwriting Properties.........................................THIS DOESNOT WORK IN ARRAY
// let person = { name: 'John', age: 30 };
// let updatedPerson = { ...person, age: 35 };  // Output: { name: 'John', age: 35 }

// console.log(updatedPerson)
// Merging Objects.........................................
// let person = { name: 'John' };
// let address = { city: 'New York' };
// let merged = { ...person, ...address };  // Output: { name: 'John', city: 'New York' }

// console.log(merged)
//Combining Arrays of Objects.........................................
// let arr1 = [{ name: 'John' }];
// let arr2 = [{ age: '23' }];
// let combined = [...arr1, ...arr2 ];  // Output: [{ name: 'John' }, { name: 'Jane' }]
// console.log('combined',combined)
// let result = { ...arr1[0], ...arr2[0] } //{ name: 'John', age: '23' } //**
// console.log(result)
// [1,2,3,4]
// [{},{},{}]

// let arr11 = [{ name: 'John',age:10,ph:77777 },{ name2: 'John',age2:10,ph2:77777 }];
// let arr12 = [{ name2: 'John',age2:10,ph2:77777 }];

//6. Shallow Copy of Nested Objects (Caveat).........................................
// let person = { name: 'John', address: { city: 'New York' } };
// let copiedPerson = { ...person };
// copiedPerson.address.city = 'Los Angeles';  // Output: { name: 'John', address: { city: 'Los Angeles' } }
// console.log(person.address.city);  // Output: 'Los Angeles' (Original is also affected)

// Using Spread in Function Arguments.........................................
// let person = { name: 'Alice', age: 25 };

// function greet({ name, age = 30, city = 'Unknown' }) {
//   console.log(`Hello, ${name}. You are ${age} years old and live in ${city}.`);
// }

// // Using spread operator and passing an incomplete object
// greet({ ...person });  
// // Output: Hello, Alice. You are 25 years old and live in Unknown.

//Avoiding Mutation with Spread Operator .........................................
// let person = { name: 'John', age: 30 };
// let updatedPerson = { ...person, age: 35 };  // person remains unchanged
// console.log(person.age);  // Output: 30
// console.log(updatedPerson.age);  // Output: 35




//Renaming Properties Using Spread .........................................
let person = { name: 'John', age: 30 };
let { name: fullName, ...rest } = person;  // Output: fullName = 'John', rest = { age: 30 }
