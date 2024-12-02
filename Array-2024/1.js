// let numbers = [1, 2, 3, 4, 5]; //array.length =5

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]); // Output: 1, 2, 3, 4, 5
// }

//..........................................................................
//for...of
// This loop is designed for iterating over iterable objects like arrays, not plain objects.

// let numbers2 = [1, 2, 3, 4, 5];
// for (let number of numbers2) {   //of value //in index
//   console.log(number); // Output: 1, 2, 3, 4, 5
// }

//..........................................................................
//forEach() Method
//forEach() is an array method that takes a callback function and applies it to each element of the array.
// It’s easy to use but doesn’t support break or continue.
//Does not modify the original array unless you explicitly do so inside the callback.
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number) {
//  console.log(number*2); // Output: 1, 2, 3, 4, 5

// });

//incase you want to modify it
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number, index) {
//   numbers[index] = number * 2; // This will modify the original array
// });
// console.log(numbers); // Output: [2, 4, 6, 8, 10]



//Map //returns a new array
//is used to create a new array by applying a function to each element of the array.
// It’s not strictly a loop, but it’s useful for transforming data.
// let numbers = [1, 2, 3, 4, 5];
// let doubled = numbers.map(function(number) {
//   return number * 2; // Output: 2, 4, 6, 8, 10
// });
// console.log(doubled);



//filter() //returns array
// creates a new array with all elements that pass a test (provided by a callback function). 
//It's useful for filtering out unwanted elements.
// let numbers = [1, 2, 3, 4, 5];
// let evenNumbers = numbers.filter(function(number) {
//   return number % 2 === 0; // Output: 2, 4
// });
// console.log(evenNumbers);


//reduce //returns array
//reduce() is used to accumulate a single result (like summing or multiplying all elements).
// It’s useful when you need to transform an array into a single value.
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue; // Output: 15
// }, 0);
// console.log(sum);


//some
//checks if at least one element satisfies a condition.
// let numbers = [1, 2, 3, 4, 5];
// let hasEven = numbers.some(function(number) {
//   return number % 2 === 0; // Output: true
// });
// console.log(hasEven);



//every() checks if all elements satisfy a condition.
let numbers = [1, 2, 3, 4, 5];
let allEven = numbers.every(function(number) {
  return number % 2 === 0; // Output: false
});
console.log(allEven);

/*
Use for loop when you need full control over the iteration process (e.g., breaking out early).
Use for...of for clean and readable iteration over array elements.
Use forEach() for simple iteration, but be mindful that it doesn’t support break.
Use map() when you want to transform each element into a new array.
Use filter() to select elements that pass a test.
Use reduce() to accumulate a single value from the array.
*/