
// we use callback for MAP/FILTER/REDUCE
//MAP 
//creates new array , applies function to each element

const data =[1,2,3,4,5,6]


const newData =data.map((element)=>{
    return element*2
})


console.log(newData)



//FILTER
//creates new array 
const records = [1,2,3,4,5,6,7,8,9,10]
const evenNumber = records.filter((result)=>{return result%2===0})
console.log("FILTER==>",evenNumber)


//Reduce
// reduces the array to single element

const sum = evenNumber.reduce((previous,current)=>{
    return previous + current
})


console.log("Reduce ==>",sum)