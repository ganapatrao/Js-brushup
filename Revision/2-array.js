

// //program to replace starting and end of passwor with *


// let arr = [1, 2, 3, 4, 5];
// let arrstr = ['a','b','c','d'];
// console.log(arr[0])
// arr.push(6)

// arr.unshift(0)
// console.log(arr)

// arr.shift()
// console.log("new array",arr)


const array2=[1,2,3,4,5,6,7]
//slice index to index
// console.log(array2.slice(2))// 3, 4, 5, 6, 7 
// console.log(array2.slice(2,4))//3,4 start index, to index-1
// console.log(array2)

//splice index to cout

//console.log(array2.splice(2))//[ 3, 4, 5, 6, 7 ]

// console.log(array2.splice(2,4))// from index ,total count of element to delete 3456
// console.log(array2)//1,2,7

const array4=[1,2,3,4,5,6,7]
//  console.log(array4.splice(2,4,11,12))// from index 2,total count of element to delete i.e 4,items to add at index 2 i.e. 1,2 // 3,4,5,6
// console.log(array4)// 1,2,11,12,7

console.log(array4.splice(2,0,11,12))// from index 2,total count of element to delete i.e 4,items to add at index 2 i.e. 1,2 // 3,4,5,6
console.log(array4)// 1,2,11,12,3,4,5,6,7
