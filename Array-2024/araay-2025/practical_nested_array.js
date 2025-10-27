const employees = [
  {
    id: 101,
    personal: {
      name: "Alice Johnson",
      age: 28,
      gender: "Female",
      contact: {
        email: "alice.j@example.com",
        phone: "1234567890",
        address: {
          street: "123 Main St",
          city: "Mumbai",
          zip: "400001",
          country: "India"
        }
      }
    },
    role: "Developer",
    skills: ["JavaScript", "React", "Node.js"],
    projects: [
      { name: "Website Revamp", durationMonths: 6, techStack: ["React", "Node.js"] },
      { name: "API Development", durationMonths: 3, techStack: ["Node.js"] }
    ],
    salary: 75000,
    isActive: true
  },
  {
    id: 102,
    personal: {
      name: "Bob Smith",
      age: 32,
      gender: "Male",
      contact: {
        email: "bob.smith@example.com",
        phone: "9876543210",
        address: {
          street: "456 Market Rd",
          city: "Delhi",
          zip: "110001",
          country: "India"
        }
      }
    },
    role: "Tester",
    skills: ["Selenium", "Cypress", "Java"],
    projects: [
      { name: "Automation Suite", durationMonths: 4, techStack: ["Selenium", "Java"] }
    ],
    salary: 60000,
    isActive: true
  },
  {
    id: 103,
    personal: {
      name: "Carol White",
      age: 25,
      gender: "Female",
      contact: {
        email: "carol.w@example.com",
        phone: "1122334455",
        address: {
          street: "789 Lake View",
          city: "Bangalore",
          zip: "560001",
          country: "India"
        }
      }
    },
    role: "Developer",
    skills: ["Angular", "TypeScript", "Node.js"],
    projects: [
      { name: "CRM App", durationMonths: 5, techStack: ["Angular", "Node.js"] }
    ],
    salary: 70000,
    isActive: false
  }
];

// find alice email
let alicename = employees[0].personal.contact.email
console.log(alicename)


// find city based on first name
// function(name){
//     employees.find(data=>data.)

// }