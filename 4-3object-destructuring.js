const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    city: 'New York',
    phno:1122334455
  };
  

//   const {firstnamex,lastnamex} = person
//   console.log(firstnamex,lastnamex) //undefined undefined //it hould MATCH THE ACUALT OBJECT VALUE
  const {firstName,lastName} = person
  console.log(firstName,lastName) //
  const { firstName: fName, lastName: lName, age: personAge } = person;
  console.log(fName,lName) //




  //
  function getFullname({firstName,lastName}){
    console.log(`Full name is ${firstName} ${lastName}`)

  }

  getFullname(person)



 // You can also provide default values during object destructuring:
//  const { firstName, lastName, age, gender = 'male' } = person;