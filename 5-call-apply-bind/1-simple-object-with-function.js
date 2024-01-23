//Its all about working with THIS

const person = {
  name: "Hari",
  lname: "lastname",
  fullName: function () {
    // return this.name + " " + this.lname;
    return `${this.name} ${this.lname}`;
  },
};

console.log(person.fullName());

// below code is not a good practice to repeate the same code fullName

const person2 = {
  name: "Ram",
  lname: "XYZ",
  fullName: function () {
    return this.name + " " + this.lname;
  },
};

console.log(person2.fullName());


// Lets handle above with using call in the next file