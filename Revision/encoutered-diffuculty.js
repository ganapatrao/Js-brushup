
// let text2 = 'ABCDEFGHI'
// console.log(text2.slice(2)) ;//CDEFG...// slice from 2 onwards // from index
// console.log(text2.slice(1,2)) ;//B // index yo index
// console.log(text2.slice(-2)) ;//HI // 2 count


//------------------------------------------------------------------------
// splice Method:
// The splice method is used to remove elements from an array and optionally add new elements in their place. 
// The syntax is array.splice(start, deleteCount, ...items), where:
// start is the index at which to start changing the array.
// deleteCount is the number of elements to remove.
// ...items are the elements to add to the array.

// const array2=[1,2,3,4,5,6,7]
//slice index to index
// console.log(array2.slice(2))// 3, 4, 5, 6, 7 
// console.log(array2.slice(2,4))//3,4 start index, to index-1
// console.log(array2)

//splice index to cout

// let x = array2.splice(2)
// console.log(x) //3 4 5 6 7
// console.log(array2)// 12

// const array3=[1,2,3,4,5,6,7]
//  console.log(array3.splice(2,4))// from index ,total count of element to delete // 3456
// console.log(array3)// 127

const array4=[1,2,3,4,5,6,7]
//  console.log(array4.splice(2,4,11,12))// from index 2,total count of element to delete i.e 4,items to add at index 2 i.e. 1,2 // 3,4,5,6
// console.log(array4)// 1,2,11,12,7

console.log(array4.splice(2,0,11,12))// from index 2,total count of element to delete i.e 4,items to add at index 2 i.e. 1,2 // 3,4,5,6
console.log(array4)// 1,2,11,12,3,4,5,6,7
