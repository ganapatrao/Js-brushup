//CAll is a function/methode that helps to change the context of the invoking function.
//In simple words it helps to replace the value of "this" inside a function with what ever value we want

const person = {
  name: "Hari",
  lName: "lastName",
  fullname: function () {
    // return this.name + " " + this.lName;
    console.log(this.name + " " + this.lName);
  },
};

const person2 = {
  name: "Hari2",
  lName: "lastName2",
  //eliminate this and use call to handle same
  // fullname: function () {
  //   return this.name + " " + this.lName;
  // },
};

// the first argument sets this
// the subsequent arguments passed as an argument to the function
person.fullname.call(person2);

const person3 = {
  name: "Hari3",
  lName: "lastName3",
};


person.fullname.call(person3,"pune")