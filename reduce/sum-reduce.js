let data = "123";
let arraydata = data.split(""); //[a,a,b,b,b,c,c,c,c,d]  //of not for object

// let result = 0;

// for (let item of arraydata) {
//   result = result + +item;
// }

// console.log(result);

// console.log(resultobj);

//reduce//map//filter

let result =arraydata.reduce((accu,current)=>{
accu =accu + +current
return accu
},0)

console.log(result)
