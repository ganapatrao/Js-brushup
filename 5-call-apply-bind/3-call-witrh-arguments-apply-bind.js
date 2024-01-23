person = {
  name: "hari",
  lastName: "Last Name",
  fullName: function (state,country) { //state
    console.log(this.name + " " + this.lastName + " From "  + state+ "/"+ country);
  },
};


person2 ={
    name:"harish2",
    lastName: "LastName2",
   // lastName2:"Lastname2" //testing
}


person.fullName.call(person2,"Goa","India") // first argument for this and the 2nd argument as paramater as a paramater

//APPLY
// Now comes the Apply in picture
//we can pass the arguments as a array
person.fullName.apply(person2,["Goa2","IndiaAPply"])

//BIND
//BIND is like call but it returns a value
//console.log(person.fullName.bind(person2,"Goa","India"))// returns a function //result [Function: bound fullName]
let result = person.fullName.bind(person2,"Goa","IndiaBind")
//console.log("result",result); //result [Function: bound fullName]
result()

