const users = [
{ name: 'John', lastName: 'Cena', age: 40 },
  { name: 'shown', lastName: 'Doe', age: 28 },
  { name: 'Tom', lastName: 'Holland', age: 25 },
  { name: 'Sara', lastName: 'Lee', age: 32 },
  { name: 'Emma', lastName: 'Watson', age: 29 }
];


// find full name of each user
function fullname(){
    for(let i=0;i<users.length;i++){
    console.log(`fullname is : ${users[i].name}  ${users[i].lastName}`)
    
}

}

fullname()


// replacement of map- where we get result in an array with full name
let resultarray =[]
function getarryofFullname(userarray){
    for (let i=0;i<userarray.length;i++){
        resultarray.push(`${userarray[i].name} ${userarray[i].lastName}`);
    }       
}

getarryofFullname(users)

console.log("map-replacement-fullname",resultarray)


//--------------------------------------

function getresultabove30(userarray){
    let result =[]

    for( let i=0;i<userarray.length;i++){
    if (userarray[i].age>30){
        result.push(userarray[i])
    }
    }


    //console.log(result)
    return result
}

console.log("age above 30",getresultabove30(users))

//---------------------------------------------------

// total age
function totalAge(userdata){
  let sumofage = 0
  for (let i=0;i<userdata.length;i++){
    sumofage = sumofage + userdata[i].age

  }
return sumofage

}


console.log("total age",totalAge(users))

//  sort data baed on age--------------------------------------------------

//bubble sort
ages = [28, 25, 40,32, 29]
//25 28 32 29 40 //last highest 0 -----> loop j
//25 28 29 32 -40               1
// 23 28 29 -- 32 40            2
//23 28 -- 29 32 40             3


for(let i=0;i<ages.length-1;i++){ // //lentgh 5 -- 01234
 for(let j=0;j<ages.length-1-1;j++){ // //lentgh 5 -- 01234
if (ages[j]>ages[j+1]){
    let temp = ages[j]
    ages[j] = ages[j+1]
    ages[j+1] = temp
}
}   
}
console.log(ages)







function sortAge(userdataarray){
    for(let i=0;i<userdataarray.length-1;i++){
        for(let j=0;j<userdataarray.length-1-i;j++){
            if(userdataarray[j].age>userdataarray[j+1].age){
                let temp = userdataarray[j]
                userdataarray[j] = userdataarray[j+1]
                userdataarray[j+1] = temp
            }

        }
    }

    return userdataarray
  
}

console.log("sort age",sortAge(users))

// console.log("sort age",sortAge(users))

// counter
let top3 =[]
for (let i=0;i<3;i++){
    top3.push(users[i])   
}

console.log(top3)



