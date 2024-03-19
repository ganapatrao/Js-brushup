let data = "aabbbccccd";
let arraydata = data.split(""); //[a,a,b,b,b,c,c,c,c,d]  //of not for object

// let resultobj = {};

// for (let item of arraydata) {
//   if (resultobj[item]) {
//     resultobj[item] = resultobj[item] + 1;
//   } else {
//     resultobj[item] = 1;
//   }
// }

// console.log(resultobj);

//reduce//map//filter

let result =arraydata.reduce((accu,current)=>{
 
  accu[current]= accu[current]?accu[current]+1:1
  return accu
},{})

console.log(result)