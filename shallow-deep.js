const person ={
    name:"hk",
    state:"Goa",
    
}

const copyperson ={...person}

copyperson.name="rr"

console.log(person,copyperson)
//o/p=>{ name: 'hk', state: 'Goa' } { name: 'rr', state: 'Goa' }
// so shallow copy impacts nested once


let person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "USA"
    },
    // contact: {
    //   email: "john.doe@example.com",
    //   phone: "555-1234"
    // }
  };
//SHALLOW COPY
//two ways to creata object
//   let copyperson2= {...person2}
//let copyperson2 =Object.assign({},person2)
//let copyperson2 = new Object// but here we have to assign eack=h key
let copyperson2 = Object.assign(person2)

  copyperson2.address.street="vasco" //nested original and cloned got updated with the same value

  console.log(person2,copyperson2)



  //DEEP COPY
   let deepcopy = JSON.parse(JSON.stringify(person2))

   deepcopy.address.street="Vidyanagr"

   console.log(person2,deepcopy)

   return






  //with function create a object
  function getFullDetails(name, age) {
    this.name = name;
    this.age = age;
    // fullname= function(){
    //   console.log(`${this.name} is ${this.age} year old`)
    // }
  }
  
  const object1 = new getFullDetails("hari", 21);

  console.log(object1)

function personx(){
   return  personx ={
        name:"hk",
        state:"Goa",
        address: {
            street: "123 Main St"
        }
        
    }
}


let objectfuncx = new personx()
objectfuncx.address.street="vidyanager"
console.log(objectfuncx)



