//Array inside an Object
/*
let company = {
    name: 'TechCorp',
    employees: ['Alice', 'Bob', 'Charlie']
  };
  

  //for,of
  //we cannot use foreach for object as it is for array
  let employees= company.employees
  for (let index = 0; index < company.employees.length; index++) {
    const element = company.employees[index];
    console.log(element)
    
  }

  for (const element of employees) {
    console.log(element)
  }

  */
//-----------------------------------------------------------------------------------

//Object inside an Array:
// let employees = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 25 }
//   ];

//   for (const element of employees) {
//     console.log(element.name)

//   }

//   employees.forEach((data)=>{
//    console.log(data.name)
//   })

//The for...of loop is designed to work with iterable objects, such as:Arrays,Strings,Maps and Sets
//   for (const element of employees[0]) {
//     console.log(element)

//   }

//Nested Objects and Arrays (Mixed Structures)-----------------------------------------------------------------------------------
let company = {
  departments: [
    {
      hrname: "HR",
      employees: [
        { name: "Alice", salary: 5000 },
        { name: "Bob", salary: 6000 },
      ],
    },
    {
      hrname: "IT",
      employees: [
        { name: "Charlie", salary: 7000 },
        { name: "David", salary: 8000 },
      ],
    },
  ],
};

// for (details of company.departments) {
//   console.log(details.hrname);
//   for (empname of details.employees) {
//     console.log(empname.name);
//   }
// }

// company.departments.forEach(result=>{
//     console.log(result.hrname)
//     result.employees.forEach(emp=>{
//         console.log(emp.name)
//     })

// })

//Deeply Nested Structure Example-----------------------------------------------------------------------------------
// let data = [
//   {
//     region: "North",
//     teams: [
//       {
//         name: "Team A",
//         members: [
//           { name: "Alice", salary: 5000 },
//           { name: "John", salary: 4000 },
//         ],
//       },
//       { name: "Team B", members: [{ name: "Sam", salary: 4500 }] },
//     ],
//   },
//   {
//     region: "South",
//     teams: [
//       {
//         name: "Team C",
//         members: [
//           { name: "Mark", salary: 6000 },
//           { name: "Lisa", salary: 5500 },
//         ],
//       },
//     ],
//   },
// ];

// data.forEach(result=>{
// console.log(`region name is ${result.region}`)
//    result.teams.forEach(team=>{
//     console.log(`team: ${team.name}`)
//     team.members.forEach(member=>{
//         console.log(member.name)
//     })

//    })
//    console.log('***************************')
// })

//Alice from Team A earns 5000
// data.forEach((result) => {
//   console.log(`region name is ${result.region}`);
//   result.teams.forEach((team) => {
//     team.members.forEach((member) => {
//       console.log(`${member.name} from ${team.name} earns ${member.salary}`);
//     });
//   });
//   console.log("***************************");
// });

//total salary
// let totalsalary =0

// data.forEach((result) => {

//   result.teams.forEach((team) => {
//     team.members.forEach((member) => {
//         totalsalary = totalsalary+ member.salary

//     });
//   });

// });

// console.log(`total salary is ${totalsalary}`);

//Find an Employee by Name in Nested Data:
// let searchName = "Lisa";
// let foundemplyee = null;

// data.forEach((result) => {
//   result.teams.forEach((team) => {
//     team.members.forEach((member) => {
//       if (member.name === searchName) {
//         console.log(`${member.name} earns ${member.salary}`);
//       }
//     });
//   });
// });

//filter to fin salary greater than 400

// data.forEach((result) => {
//   result.teams.forEach((team) => {
//     console.log(team.members.filter((data) => data.salary > 4000));
//   });
// });

//-----------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------

const data = {
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

//using set

// const uniqueAuthorizations = new Set();

// data.employees.forEach((result) => {
//     result.authorizations.forEach(auth=>{
//         uniqueAuthorizations.add(auth)
//     })
  

// });


// console.log([...uniqueAuthorizations])

// const uniqueAuthorizations = [
//     ...new Set(data.employees.flatMap(emp => emp.authorizations))
//   ];
  
//   console.log(uniqueAuthorizations);

//using flatmap


let x= data.employees.flatMap(emp => emp.authorizations)
let uniqueset = new Set(x)
console.log([...uniqueset])


// let auth =new Set(data.employees.flatMap(emp => emp.authorizations))
