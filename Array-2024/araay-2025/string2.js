
let str1 = "Hello";
let str2 = "World";

// template literal
console.log(`${str1} GT , welcome to the  programming ${str2}!`); // Hello GT , welcome to the World programming!


// accessing characters
console.log(str1[0])
console.log(str1.charAt(0))

// length
console.log(str1.length)

//loops
// for of
console.log("for of loop")
let x = ""
for (let char of str1) {
    console.log(char);
     x = char + x
    // console.log(x)
}
//reverses olleh
console.log(x)

//for loop 
//access like array with index
console.log("for loop")
for (let i = 0; i < str1.length; i++) {
    console.log(str1[i]);
}


// foreach with array from ==>String → Array

let str3 = "Hello";
let arr = Array.from(str3);// it works like split
console.log(arr); // ["H", "e", "l", "l", "o"]

console.log("foreach loop")
Array.from(str3).forEach(char => console.log(char));



// common string methods
//concat
let str11 = "Hello";
let str12 = "World";

let result = str11.concat(" ", str12);
console.log(result); // "Hello World"

console.log(str11.includes("lo")); // true
console.log(str1.startsWith("He")); // true
console.log(str1.endsWith("lo")); // true
console.log(str11.indexOf("l")); // 2
console.log(str11.lastIndexOf("l")); // 3   
//slice
console.log(str11.slice(1, 4)); // "ell"
//toLowerCase
console.log(str11.toLowerCase()); // "hello"
//toUpperCase
console.log(str11.toUpperCase()); // "HELLO"
//trim  
let strWithSpaces1 = "   Hello, world!   ";
console.log(strWithSpaces1.trim()); // "Hello, world!"

//substring
console.log(str11.substring(1, 4)); // "ell"
console.log(str11.substring(0)); // "Hello"
//split
let strSplit = "Hello, world!";
let arrSplit = strSplit.split(", ");
console.log(arrSplit); // ["Hello", "world!"]   

//replace  // only 1st occurance
let strReplace = "Hello, world world!";
let newstr =strReplace.replace("world", "JavaScript");
console.log(newstr);

//replaceall -- replaces all occurances

let strReplaceAll = "Hello, world world!";
let newstrAll = strReplace.replaceAll("world", "JavaScript");
console.log(newstrAll); // "Hello, JavaScript JavaScript!"


//repeat
let strrepeat ="hello "
let newstrrepeat = strrepeat.repeat(3);
console.log(newstrrepeat); // "hello hello hello "










return
let str = "Hello, world!";
console.log(str.charAt(0)); // "H"
console.log(str.charCodeAt(0)); // 72   
console.log(str.concat(" How are you?")); // "Hello, world! How are you?"
console.log(str.includes("world")); // true
console.log(str.indexOf("o")); // 4
console.log(str.lastIndexOf("o")); // 8
console.log(str.slice(0, 5)); // "Hello"
console.log(str.toLowerCase()); // "hello, world!"
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.trim()); // "Hello, world!"
console.log(str.split(", "));   // ["Hello", "world!"]
console.log(str.replace("world", "JavaScript")); // "Hello, JavaScript!"
console.log(str.replaceAll("o", "0"));          
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("!")); // true

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZAB";

let x1 = text.slice(2);
console.log(x1); // "CDEFGHIJKLMNOPQRSTUVWXYZAB"


console.log(text.indexOf("AB"));
console.log(text.lastIndexOf("AB"));

console.log(text.slice(0, 3));
console.log(text.slice(3));

let part = text.slice(-12);
console.log(part); // "QRSTUVWXYZAB"    
let mask = "12345678"
let newmask =mask.replace(mask.slice(3,5),'**') //** return new string */
console.log(newmask)
console.log(text.toLowerCase()); // to lower case
console.log(text.toUpperCase()); // "HELLO, WORLD!"         
//Splice is in array and not in string'

//trim
let strWithSpaces = "   Hello, world!   ";
console.log(strWithSpaces.trim()); // "Hello, world!"
let x2 ='asd fgv abc'
console.log(x2.split())
console.log(x2.split(''))
console.log(x2.split(' '))   
