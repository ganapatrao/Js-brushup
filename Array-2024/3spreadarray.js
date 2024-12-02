// At the basic level, the spread operator is used to make a shallow copy of an array.
//  It can be used to duplicate the elements of an array into a new array:
//shallow copy or duplicate array
//spread for preading the functionaly like adding editing modifying the array 
//sperads the array

//------------------------------------
//1   copy
// let originalArray = [1, 2, 3];
// let copiedArray = [...originalArray];
// originalArray[2]=100

// console.log(copiedArray); // Output: [1, 2, 3]
// console.log(originalArray); // Output: [1, 2, 3]
// console.log(originalArray === copiedArray); // Output: false (they are different arrays)


//issue nested strusture
// nested still points to reference in shallow copy
// let originalArray = [1, 2, [3, 4]];
// let copiedArray = [...originalArray];

// console.log(copiedArray,originalArray); // Output: [1, 2, [3, 4]]

// // Modifying the nested array in the copied array
// copiedArray[2][0] = 99;

// console.log(originalArray); // Output: [1, 2, [99, 4]]
// console.log(copiedArray);   // Output: [1, 2, [99, 4]]


// let originalArray = [1, 2, [3, 4]];
// console.log(JSON.stringify(originalArray))
// let deepCopiedArray = JSON.parse(JSON.stringify(originalArray));

// console.log(deepCopiedArray); // Output: [1, 2, [3, 4]]

// // Modifying the nested array in the deep copied array
// deepCopiedArray[2][0] = 99;

// console.log(originalArray);   // Output: [1, 2, [3, 4]] (unchanged)
// console.log(deepCopiedArray); // Output: [1, 2, [99, 4]] (changed)


// let person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
  
//   let jsonString = JSON.stringify(person);// to convert into json data
//   console.log("string",jsonString);
//   console.log("parsed",JSON.parse(jsonString));

  //json is stored in localstorage
//   let personx = { name: "John", age: 30 };
// let jsonStringx = JSON.stringify(person);  // Convert object to string
// localStorage.setItem("user", jsonString); // Store the JSON string in localStorage

//---------------------------------
//2 adding
// let numbers = [1, 2, 3];
// let newArray = [...numbers, 4, 5];

// console.log(newArray); // Output: [1, 2, 3, 4, 5]

// // in array The spread operator won’t prevent duplicate values from being added.
// let numbers2 = [1, 2, 3];
// let newArray2 = [...numbers, 2, 3];

// console.log(newArray2); // Output: [1, 2, 3, 2, 3]


// //.... in case of object it over writes
// let person = { name: "John", age: 30 };

// // Spread operator to copy the object and add a new value for the same key
// let updatedPerson = { ...person, name: "Alice" }; // 'name' is overwritten
// console.log(updatedPerson); // Output: { name: "Alice", age: 30 }

//---------------------------------------

//combining Arrays and Adding New Elements
// let array1 = [1, 2];
// let array2 = [3, 4];
// let newArray = [...array1, 'a', ...array2, 'b'];

// console.log(newArray); // Output: [1, 2, 'a', 3, 4, 'b']


// rest operator
let numbers = [1, 2, 3, 4, 5];
let [first, second, ...rest] = numbers;

console.log(first);   // Output: 1
console.log(second);  // Output: 2
console.log(rest);    // Output: [3, 4, 5]
