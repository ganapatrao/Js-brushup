// The spread operator (...) in JavaScript is a 
// powerful tool that is commonly used with objects and arrays. It allows you to create copies, merge, 
// and manipulate data in a concise and expressive way.

//clonning
//merging
//modify properties
////adding new property
//nested object
//combining spread with object destructuring
//

let x="*********************************************************************************"
// clonning
let object1 ={name:"xyz", age:25}
const clonedObj ={...object1}
console.log(1,clonedObj)




//merging
console.log(x)
let object12 ={name:"xyz1", age:25}
let object13 ={name:"xyz2", age:21}
const result ={...object12,...object13} // note { name: 'xyz2', age: 21 } // overrides the same property which is modifiying concept
console.log(2,result)

let object14 ={state:"Goa",city:"vasco"}
const mergedresult ={...object12,...object14} //example of merging here
console.log(3,mergedresult)

console.log(x)

//modify propertiesclear
let original ={name:"xyz1", age:25} 
let modified ={...original,age:15} 
console.log(4,modified)//

console.log(x)
////adding new property
const newObject = {...original,name:"ganesh"}
console.log(5,newObject)

console.log(x)
//nESTED OBJECT
const nestedObject ={...original,nested:{...original}}
console.log(nestedObject)

console.log(x)

//combining spread with object destructuring

const data = {name:"hari",country:"India",religion:"hindu"}
const {name,...rest}=data
console.log(name,rest)
// const numbers = [1, 2, 3];
// console.log(numbers)