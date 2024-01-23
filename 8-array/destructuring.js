//assign values from an array to individual variables:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const [a, b, c] = numbers;


console.log(a, b, c)


//rray destructuring with the rest operator (...) to capture remaining elements in a new array:
const numbers2 = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers2;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

//nested
const nestedArray = [1, [2, 3], 4];
const [x, [y, z], d] = nestedArray;

console.log(x); // Output: 1
console.log(y); // Output: 2
console.log(z); // Output: 3
console.log(d); // Output: 4