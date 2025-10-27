const users = [
{ name: 'John', lastName: 'Cena', age: 40 },
  { name: 'shown', lastName: 'Doe', age: 28 },
  { name: 'Tom', lastName: 'Holland', age: 25 },
  { name: 'Sara', lastName: 'Lee', age: 32 },
  { name: 'Emma', lastName: 'Watson', age: 29 }
];


//Print the  full name

function getfullname(userarray){
    userarray.forEach(element => {
        console.log(`Fullname is :${element.name} ${element.lastName}`);
        
    });
}

getfullname(users);


// get an array which contains only full name
// getarryofFullname(userarray){
//    return  userarray.map((data) =>   {data.name +" " + data.lastName});

// }



//map
// map returns an array
//tips 
//: If you are inside a function and want your function to give back the 
// new array created by map(), you need to return it

//Arrow function with {} behaves like a function body, not an expression
// hence for } inside => should have a return inside { return } when {} is sued

function getarryofFullname(userarray){
    return userarray.map(data => {return data.name +" " + data.lastName});
}

console.log(getarryofFullname(users))

// note for arrow functio => 
   // when =>{} it should have a return => {return }


/*
Array methods that RETURN a NEW ARRAY
Method	Description / Notes
map()	Transforms each element, returns a new array of same length.
filter()	Returns a new array containing elements that pass the test.
slice()	Returns a shallow copy of a portion of the array.
concat()	Combines arrays or values and returns a new array.
flat()	Flattens nested arrays to a specified depth.
flatMap()	Map + flatten by 1 level; returns a new array.
from()	Creates a new array from an iterable or array-like object.
filter().map() combination	Chaining returns a new array each step.
*/


//filter age >30


function getresultabove30(userarray){
    return userarray.filter(data=> data.age>30)//.map(result => result.name)
    
}

console.log("age above 30",getresultabove30(users))



//find age above 30
//find returns first occurance
function findageabove30(userarray){
    return userarray.find(data=>data.age>30)

}

console.log("find age aove 30",findageabove30(users))




// reduce to calculate total age
function totalAge(userdata){
    return userdata.reduce((acc,cur)=>{ return acc+cur.age},0)


}


console.log("total age",totalAge(users))


// sort data absed on age
function sortAge(userdataarray){
    return [...userdataarray].sort((a,b)=> a.age- b.age) // i just cloned to avoid mutation
}

console.log("sort age",sortAge(users))



// find 3 youngest peopl its take just top 3 not sorted
function findYoungettop3(userdata){

    console.log(userdata)
   return userdata.slice(0,3)

}

console.log("find 3 youngest",findYoungettop3(users))

// to sort and find top 3
function sortandSlicetop3(arraydata){
    return [...arraydata].sort((a,b)=>a.age-b.age).slice(0,3)
}


console.log("sort the new array without altering the original",sortandSlicetop3(users))

// concat //includes
function concatUsers(userdata, newUserData){
    return userdata.concat(newUserData)
}

const newUsers = { name: 'Robert', lastName: 'Downey', age: 50 };

console.log("concat users",concatUsers(users,newUsers))


//merge with spread operator
function mergewithspread(userdata){
    const newUsers2 = { name: 'Robert2', lastName: 'town-hall', age: 50 };
    return [...userdata,newUsers2]

}

console.log("merge with spread",mergewithspread(users))

// const newUsers2 = { name: 'Robert2', lastName: 'town-hall', age: 50 };
// let combinedresult = [...users,newUsers2]
// console.log("combinedresult",combinedresult)
