let str = "this is java"
let arraystr = str.split(' ')
// console.log(data)
// let result = arraystr.map(data=>)
let result =[]
for(let i=0;i<arraystr.length;i++){
    let x=  arraystr[i]
    result.push(x.slice(0,x.length-1) + x[x.length-1].toUpperCase()) 
  
    // console.log(x.slice(0,x.length-1) + x[x.length-1].toUpperCase())

    //logic for 1st later upper firt uper
    //x[0].toUpperCase() + x.slice(1).toLowerCase()


}
console.log(result.join(' '))
//str = "thiS iS javA"

// let name = "avirup"
// console.log(name[name.length-1].toUpperCase())

// console.log(name.slice(0,name.length-1)+name[name.length-1].toUpperCase())

let xarr = [1,2,[3],4,[5]]
console.log(xarr.flat())