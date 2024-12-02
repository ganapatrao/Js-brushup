let str = "abbccddd";

//Iterating Over Strings: You can use for...of to loop through each character in a string.
// we can directly use ==?for (let char of str)
// let data = str.split("");
// let result = {};
// for (let char of data) {
//   if (result[char]) {
//     result[char] += 1;
//   } else {
//     result[char] = 1;
//   }
// }

let result = str.split('').reduce((accu,current)=>{
    accu[current]= accu[current]? accu[current]+1: 1
    return accu
},{})

console.log(result);
