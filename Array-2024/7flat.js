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