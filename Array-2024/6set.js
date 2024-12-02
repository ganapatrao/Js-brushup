/**
  Unique Values: A Set automatically removes duplicates.
Order Preservation: It maintains the order of insertion.
Iterable: You can loop through a Set using methods like forEach() or for...of.
 */


const mySet = new Set();
mySet.add(1);
mySet.add(5);
console.log(mySet)
mySet.add(5)
console.log(mySet)


const numberSet = new Set([1, 2, 3, 4, 4, 5]);
console.log(numberSet);


//Check for Existence:
console.log(mySet.has(1));  // Output: true
console.log(mySet.has(3));  // Output: false

//to delete
mySet.delete(5);

//loop
const colors = new Set(['red', 'green', 'blue']);
colors.forEach(color => console.log(color));


for (let color of colors) {
    console.log(color);
}

//Converting a Set to an Array:

const mySet2 = new Set([1, 2, 3, 4]); //==>{1,2,3,4}
const myArray = [...mySet2];  // Using spread operator
console.log(myArray);  // Output: [1, 2, 3, 4]

//or
const anotherArray = Array.from(mySet);  // Using Array.from()
console.log(anotherArray);  // Output: [1, 2, 3, 4]



//
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);  // Output: [1, 2, 3, 4, 5]
