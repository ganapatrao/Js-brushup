let str = "abbccddd";

let data = str.split("")// converted to array
let result = {}
data.forEach(element => {

if (result[element])   {
    result[element] += 1

} else{
    result[element] = 1
}
    
});



console.log(result)

// let result = {}
// result["a"]=1
// console.log(result)
// if (result["a"]){
//     console.log("hi")
//     result["a"] = result["a"] + 1
//     console.log(result)
// }

let data2 = str.split("")// converted to array

let result2 = data2.reduce((acc,cur)=>{ 
    acc[cur] = acc[cur] ? acc[cur]+1 : 1 
    return acc 
},{})
console.log("data2",result2)


