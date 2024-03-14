// At the basic level, the spread operator is used to make a shallow 
// copy of an array. It can be used to duplicate the elements of an array into a new array:
//shallow copy or duplicate array
//spread for preading the functionaly like adding editing modifying the array 
//sperads the array

const primary =[1,2,3,4,5]
const result =[...primary]

////
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]


///

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  
  const result2 = sum(1, 2, 3, 4, 5);
  console.log(result); // Output: 15