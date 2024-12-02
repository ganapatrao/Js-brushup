//note
/*
splice ==SPecial modifies existing array and not used in string*/

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZAB";
let length = text.length;
console.log(text[0])//A

console.log(text.charAt(0)); // "A"
console.log(text.charCodeAt(0)); // 72

let str2 = "World";
console.log(text.concat(", ", str2)); // "ABCDEFGHIJKLMNOPQRSTUVWXYZ, World"

console.log(text.includes("UV")); // true // return boolean

console.log(text.indexOf("DE"));//3 abcdx123ffdds   slice (xindex+1,length-1)



console.log(text.indexOf("AB"));//0
console.log(text.lastIndexOf("AB")); // 26

//slice n splice
console.log(text.slice(0, 3)); // 0 to index 3-1 ==>ABC
console.log(text)


console.log("slice with one value",text.slice(3));  // with one value it will slice out the rest of the string


let part = text.slice(-12);

let mask = "12345678"
let newmask =mask.replace(mask.slice(3,5),'**') //** return new string */
console.log(newmask)

// console.log(mask.slice(0,3) +mask.replace(mask.slice(3,5),'**') +mask.slice(-3)) // this doesnt work

console.log(text.toLowerCase()); // to lower case

console.log(text.toUpperCase()); // "HELLO, WORLD!"
//Splice is in array and not in string'

//trim
let strWithSpaces = "   Hello, world!   ";
console.log(strWithSpaces.trim()); // "Hello, world!"


let x ='asd fgv abc'
console.log(x.split())
console.log(x.split(''))
console.log(x.split(' '))

let y ='abc-def-ghi'
console.log(x.split('-'))

let strRepeat = "Hello, world! world!";
console.log(strRepeat.replace("world", "JavaScript")); // "Hello, JavaScript! world!!"
console.log(strRepeat.replaceAll("world", "JavaScript")); // "Hello, JavaScript! JavaScript!"

console.log(text.startsWith("ABC")); // true
console.log(text.endsWith("world!")); // true

//templae literal
let name = "world";
console.log(`Hello, ${name}!`); // "Hello, world!"


console.log(text.search("E"))

//revision

let text2 = 'ABCDEFGHI'
console.log(text2.slice(2)) ;//CDEFG...// slice from 2 onwards // from index
console.log(text2.slice(1,2)) ;//B // index yo index
console.log(text2.slice(-2)) ;//HI // 2 count