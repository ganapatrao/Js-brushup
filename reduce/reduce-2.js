let data = "aabbbccccd";
let arraydata = data.split(""); //[a,a,b,b,b,c,c,c,c,d]  //of not for object
console.log(arraydata);

// let objectdata = {a:2,b:3,c:4,d:1}
//objectdata[a]

let resultobj = {};



for (let item of arraydata) {
  if (resultobj[item]) {
    resultobj[item] = resultobj[item] + 1;
  } else {
    resultobj[item] = 1;
  }
}

console.log(resultobj);
