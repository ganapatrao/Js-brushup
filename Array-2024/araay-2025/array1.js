//* MUTATE
let arr = [10, 20, 30, 40];
// let fruits = ["apple", "banana", "cherry"];
// let mixed = [1, "hello", true, { key: "value" }];

console.log("Array of numbers:", arr);
arr.push(50); 
console.log("After push:", arr); //out puts is [10,20,30,40,50]
arr.pop();
console.log("After pop:", arr); // out puts is [10,20,30,40]
arr.shift();
console.log("After shift:", arr); //out puts is [20,30,40,50]
arr.unshift(5);//adds element at the beginning
console.log("After unshift:", arr); //out puts is [5,20,30,40,50]

//** SPLICE **/
//splice index, index - count // original array is modified
// index, delete count, additional elements to add
let arr3 = [10, 20, 30, 40, 50];
arr3.splice(1, 2); // start at index 1, remove 2 elements+
console.log(arr3); // Output: [10, 40, 50]

arr3.splice(1, 0, 25, 27); // start at index 1, remove 0 elements, add 25 and 27
console.log(arr3); // Output: [10, 25, 27, 40, 50]

arr3.splice(1, 2, 6,7,8); 
console.log(arr3); // Output: [10, 6, 7, 8, 40, 50]

let x = arr3.splice(1);
console.log(x); // Output: [6, 7, 8, 40, 50]
console.log(arr3); // Output: [10]

//**SORT** works for strings but not numbers directly
arr3.push(3,1,4,2);
console.log("Before sort arr3:", arr3); // Output: [10,3,1,4,2]
//arr3.sort(); // sorts the original array this doesnt work well with numbers
arr3.sort((a, b) => a - b);
console.log("Sorted arr3:", arr3); // Output: [1, 2, 3, 4, 10]


//reverse   works for array
arr3.reverse();
console.log("Reversed arr3:", arr3); // Output: [10, 4, 3, 2, 1]

//reverse works for array but not strings directly



//**Non mutate */


//**SLICE */
// push pop  unshift  shift modifies the original array

//slice index - index-1 // creates new array from original array
let arr2 = [1, 2, 3, 4, 5];
let sliced = arr2.slice(1, 4); // start with index 1 up to but not including index 4
console.log("Sliced array:", sliced); //out puts is [2,3,4]
console.log("Original array after slice:", arr2); //out puts is [1,2,3,4,5]
let sliced2 = arr2.slice(1); // start from index 2 to the end
console.log("Slice from index 1 to end:", sliced2); //out puts is [2,3,4,5]




//contact
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combined = array1.concat(array2);
console.log("Combined array:", combined); // Output: [1, 2, 3, 4, 5, 6]

let combined2 = array1.concat([7, 8], [9, 10]);
console.log("Combined with multiple arrays:", combined2); // Output: [1, 2, 3, 7, 8, 9, 10] 


//split // split() method is used on strings to divide them into an array of substrings

let str1 = "hello";
let strarray = str1.split(''); // splits into array of characters // ['h', 'e', 'l', 'l', 'o']
console.log("String to array:", strarray); // Output: ['h', 'e', 'l', 'l', 'o']


let str2 = "apple-banana-cherry";
console.log(str2.split("-")); // Output: ['apple', 'banana', 'cherry']


// **join // join() method is used on arrays to combine all elements into a single string
let arrjoin = ['h', 'e', 'l', 'l', 'o'];
let joinedstr = arrjoin.join('');
console.log("Array to string:", joinedstr); // Output: "hello"

let fruits = ['apple', 'banana', 'cherry'];
let fruitstr = fruits.join(', ');
console.log("Fruits string:", fruitstr); // Output: "apple, banana, cherry"

let arr6 = [1,2,3]
let joined = arr6.join('-')
console.log(joined) // 1-2-3

// we cannot reverse a string it is used for arrays only
// to rever a string we split, into array, we reverse a array and we join (join- back to string)

/// Reverse a string
let str3 = "hello";
let strarry = str3.split(''); // ['h', 'e', 'l', 'l', 'o']
// strarry.reverse(); // ['o', 'l', 'l', 'e', 'h']
// let reversedstr = strarry.join(''); // "olleh"
// console.log("Reversed string:", reversedstr); // Output: "olleh"
let reversed = str3.split('').reverse().join('');
console.log("Reversed string:", reversed); // Output: "olleh"
//let reversed = Array.from(str).reverse().join('');

// to do simple for loop and reverse without array methods
let str4 = "JavaScript is fun";
let reversed2 = str4.split('').reverse().join(' '); // splits the whoe string into characters
//.reverse().join(' ');
console.log("Reversed words string:", reversed2); // Output: n u f   s i   t p i r c S a v a J
// reverse the words in a sentence

let sentence = "hello world";
let reversedWords = sentence.split(' ').reverse().join(' '); // splits words onlyand not character based on "  "
console.log("Reversed words string:", reversedWords); // Output: "world hello"

//flat // non mutable
let arrflat = [1, [2, 3], [4, [5, 6]]];
let flattened = arrflat.flat(); // Flatten the array up to depth 2 
console.log("Flattened array:", flattened); // outputs is [ 1, 2, 3, 4, [ 5, 6 ] ]
flattened = arrflat.flat(2); // Flatten the array up to depth 2
console.log("Flattened array with depth 2:", flattened); // outputs is [ 1, 2, 3, 4, 5, 6 ]

//flatMap // non mutable
let arrflatmap = [1, 2, 3];

let mappedAndFlattened1 = arrflatmap.map(x => [x, x * 2]);
let flattened1 = mappedAndFlattened1.flat();
console.log("Flattened mapped array:", flattened1); // Output: [1, 2, 2, 4, 3, 6]



let mappedAndFlattened2 = arrflatmap.flatMap(x => [x, x * 2]);
console.log("Mapped and Flattened array:", mappedAndFlattened2); // Output: [1, 2, 2, 4, 3, 6]


//** Array find methods

//**Find */ returns only only the first matching element ==> element / undefined

let arrfind = [1, 2, 3, 4,3,3, 5]; //value //
let found = arrfind.find(x => x > 3);
console.log("Found element:", found); // Output: 4


// Index results
//** FindIndex */ returns the index of the first matching element // ==> index / -1
// Finds the index of the first element that satisfies a condition.
// Works for complex conditions or objects.
let foundIndex = arrfind.findIndex(x => x === 3);
console.log("Found index:", foundIndex); // Output: 2


// indexOf / lastIndexOf  ==> index / -1
//Works only with exact values (strict equality ===).
let index = arrfind.indexOf(3);
console.log("Index of 3:", index); // Output: 2

let lastIndex = arrfind.lastIndexOf(3); 
console.log("Last index of 3:", lastIndex); // Output: 5

// EOC INDEX


 

/**** important find     */// ==> gives array
//filter ==> returns all matching elements ==> array (can be empty)
// Returns all elements that satisfy a condition.
// Works for complex conditions or objects.
let filtered = arrfind.filter(x => x > 3);
console.log("Filtered elements:", filtered); // Output: [4, 5]


//** returns boolean */
//includes ==> boolean value
let data = arrfind.includes(4);
console.log("Includes 4:", data); // Output: true  

//some ==> Returns a boolean value. 
// Checks if at least one element satisfies a condition.
let hasGreaterThanThree = arrfind.some(x => x > 3);
console.log("Some greater than 3:", hasGreaterThanThree); // Output: true


//every ==> Returns a boolean value. 
// Checks if all elements satisfy a condition.
let allGreaterThanZero = arrfind.every(x => x > 3);
console.log("Every greater than 0:", allGreaterThanZero); // Output: false

// loops

//for loop
let arraydata = [10, 20, 30, 40, 50];
console.log(arraydata.length); // counts the number of elements in the array //5
for (let i = 0; i < arraydata.length; i++) {
    console.log("For loop element:", arraydata[i]);
}


//forEach  ==> does not return anything // cannot use brak
let arrayfind2 = [10, 20, 30, 40, 50];
 arrayfind2.forEach(element => {
    if (element === 30) {
        return; // skips to the next iteration
    }
    console.log(element);
}); 


//for...of // can use break
let arrayfind3 = [10, 20, 30, 40, 50];  
for (let element of arrayfind3) {
    console.log("For...of element:", element);
    if (element === 30) {
        break;
    }
}
//map they return array unlike foreach forof which do not return anything
//The map() method in JavaScript is used to transform an array into a new array by applying a function to each element.
let arraymap = [1, 2, 3, 4, 5];
let mappedArray = arraymap.map(x => x * 2);
console.log("Mapped array:", mappedArray); // Output: [2, 4, 6, 8, 10]

//reduce
//The reduce() method in JavaScript executes a reducer function (that you provide) on each element of the array,
// accumulating the resulting in a single output value.
let arrayreduce = [1, 2, 3, 4, 5];
let reducedValue = arrayreduce.reduce((accumulator, current) => accumulator + current, 0);
console.log("Reduced value:", reducedValue); // Output: 15

arrayreduce.reduce((acu,cur)=> acu+cur,0);

// spread destructuring rest
//spread operator  ...  to expand elements of an array or object
// 1 copying
let originalArray = [1, 2];
let copiedArray = [...originalArray]; // shallow copy
copiedArray[0] = 99;
console.log(copiedArray,originalArray); // Output: [1, 2]

//2 to duplicate the elements of an array into a new array:
//in array The spread operator won’t prevent duplicate values from being added.
let numbers = [1, 2, 3];
let duplicatedArray = [...numbers, ...numbers];
console.log(duplicatedArray); // Output: [1, 2, 3, 1, 2, 3]

/**
 * // // in array The spread operator won’t prevent duplicate values from being added.
// let numbers2 = [1, 2, 3];
// let newArray2 = [...numbers, 2, 3];

// console.log(newArray2); // Output: [1, 2, 3, 2, 3]


// //.... in case of object it over writes
// let person = { name: "John", age: 30 };

// // Spread operator to copy the object and add a new value for the same key
// let updatedPerson = { ...person, name: "Alice" }; // 'name' is overwritten
// console.log(updatedPerson); // Output: { name: "Alice", age: 30 }
 */

//edit
 let originalArray2 = [11, 12, 13, 14];
 let copiedArray2 = [...originalArray2,5]; // shallow copy
 console.log(copiedArray2); // Output: [1, 2, 3, 4,5]




 // destructuring / rest operator
 let arraydestruct = [100, 200, 300, 400];
 let [first, second, ...rest] = arraydestruct;
 console.log("First:", first);
 console.log("Second:", second);
 console.log("Rest:", rest);



// dsa 
let a =10;
let b = 20;
// let temp =a
// a =b
// b =temp
// console.log(a,b)

[a,b] = [b,a]
console.log(a,b)






// max salary
/*palindrome
Fibonacci
anagram
missing number
duplicate number
sort array
reverse array   
masking
*/

//traversing array -- nested array + objects- change fieleds and extract modify
// flatten array
// merge arrays
// common elements
// remove duplicates
// rotate array





