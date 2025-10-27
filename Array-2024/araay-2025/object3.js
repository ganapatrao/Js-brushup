let person = {
  name: "Alice",
  age: 25,
  isDeveloper: true
};


//accessing object properties
console.log(person.name); // Alice
console.log(person["name"]); // Alice /// for dynamic access
person.state = "California"; //adding new property
console.log(person.state);

//add edit delete properties
person.age = 21; // edit
person["country"] = "USA"; // add
console.log(person.age); // 21
delete person.name; // delete
console.log(person); // { age: 21, isDeveloper: true, state: "California" }


//Objecrt methods

console.log(Object.keys(person)); // [ 'age', 'isDeveloper', 'state', 'country' ]
console.log(Object.values(person)); // [ 21, true, 'California', 'USA' ]


//how to loop in objects
// for in loop
console.log("for in loop");
for (let key in person) {
  console.log(person[key]);
}

// using entries
Object.entries(person).forEach(([key, value]) => {
  console.log(key,value);
});


//nested object
let student = {
  name: "Bob",
  age: 22,
  marks: {
    math: 90,
    science: 85
  }
};  
console.log(student.marks.math); // 90


// shallow copy

let student2 = { ...student };
student2.name = "John";
student2.marks.math = 75;
console.log(student); // { name: 'Alice', age: 25, isDeveloper: true }
console.log(student2); // { name: 'John', age: 25, isDeveloper: true }

//deep copy
let studentdeepCopy = JSON.parse(JSON.stringify(student));
studentdeepCopy.marks.math = 80;
console.log(studentdeepCopy); // { name: 'Alice', age: 25, isDeveloper: true }
console.log(student); // { name: 'John', age: 25, isDeveloper: true }

// // deep copy modern way
let deepCopy = structuredClone(student);


// object desctrcturing
let personObj = { namex: "Alice", agex: 25, cityx: "Mumbai" ,address: { city: "Delhi", pin: 110001 }};

let { namex, cityx } = personObj;
console.log(namex, cityx); // Alice Mumbai

//nested destructuring
let { address: { city, pin } } = personObj;
console.log(city, pin); // Delhi 110001

let {address} = personObj;
console.log(address) //{ city: 'Delhi', pin: 110001 }

//spread
let personSpread = { name: "Alice", age: 25 ,city:"vasco-da-gama"};
let personresult ={...personSpread,name:"xyz"}
console.log("Spread............",personresult)

//not like array
let x =[1,2]
let z= [...x,2]
console.log(z)

// rest
let restpersonObj = { namez: "Alice", agez: 25, cityz: "Mumbai" };
let {namez, ...restx} = restpersonObj;
console.log("rest...",namez,restx)


//Object Inside Array

let arr = [
  {
    name: "Alice",
    age: 25
  },
  {
    name: "Bob",
    age: 30
  }
];
console.log(arr[0].name)


//Object Comparison (Reference Behavior)
let a = { x: 1 };
let b = { x: 1 };

console.log(a === b); // false ❌ different memory
let c = a;
console.log(a === c); // true ✅ same reference


//Convert Object to JSON and Back
let obj = { name: "Alice", age: 25 };
let jsonStr = JSON.stringify(obj); // Object → JSON string
console.log(jsonStr) // {"name":"Alice","age":25}

let backToObj = JSON.parse(jsonStr); // JSON string → Object
console.log(backToObj) // name: 'Alice', age: 25 }

console.log(backToObj.name)



