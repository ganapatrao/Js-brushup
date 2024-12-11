/*
Use flat(): When you need to flatten nested arrays of any depth.
Use flatMap(): When you need to transform each element and flatten the result by one level.*/

const nestedArray = [1, [2, 3], [4, [5, 6]]]; //
console.log(nestedArray.flat()); //[ 1, 2, 3, 4, [ 5, 6 ] ]

//flat
const roles = [["admin", "editor"], ["viewer"]];

// Flatten the array one level deep
const flattenedRoles = roles.flat();

console.log(flattenedRoles);
// Output: ['admin', 'editor', 'viewer']



return

// Using flatMap()

const users = [
    { name: "Alice", roles: ["admin", "editor"] },
    { name: "Bob", roles: ["viewer"] }
  ];
  

  //
const nested = [[1], [2, 3], [4]];
const result = nested.flatMap(arr => arr);
console.log(result); // [1, 2, 3, 4]

/*
//noraml way using loop
let roledata =[]
users.forEach(data=>{
    data.roles.forEach(result=>{
        roledata.push(result)

    })
})

console.log(roledata)
*/

//Extract and flatten roles
const allRoles = users.flatMap(user => user.roles);
console.log(allRoles)



//
const data2 = {
    employees: [
      {
        name: "xyz",
        email: "xyz@gmail.com",
        authorizations: ["L1", "L2", "L3"],
      },
      {
        name: "abc",
        email: "abc@gmail.com",
        authorizations: ["L1", "L2", "L4"],
      },
    ],
  };


let x2=data2.employees.flatMap(res=> res.authorizations

)
let x3 = new Set(x2) //Set(4) { 'L1', 'L2', 'L3', 'L4' }
console.log([...x3]) //[ 'L1', 'L2', 'L3', 'L4' ]