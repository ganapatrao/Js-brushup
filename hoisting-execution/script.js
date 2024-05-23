
//script//global/stack
var a = 10;
let c = 20;
const d = {};

function getGreetings(uName) {
  return `Welcome ${uName}`;
}

for (var i = 0; i < 10; i++) {
  console.log("I: ", i);
}

//inspec-source-check var will be in global abd let in block scope will be shown

// for (let i = 0; i < 10; i++) {
//   console.log("I: ", i);
// }

console.log("Code is running");

let uName = "Sagar";
console.log("Your name is : ", uName);