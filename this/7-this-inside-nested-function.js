//NF-points to object
//arrow points to current execution context (means initially where it was defined--windows and not the object

// inside NF, inside arrow , after unpackig

var name = "hari";

function testnested() {
  function fullname() {
    console.log("NF-", this);
    console.log("NF", this.name); // hari //for nested there is no change for normal function //golabl for nested
  }

  arrowfullname = () => {
    console.log("arrow-", this);
    console.log("arrow->", this.name); //krishna // current execution context
  };

  fullname();
  arrowfullname();
}

testnested.call({ name: "krishna1" });

// const arrowfunc = {
//   name: "hari",

//   fullname: () => {
//     console.log(this.name);
//   },
// };

// nameobj.fullname();
// nameobj.arrowfullname();

//unpacking function
// const unpack = nameobj.fullname; // debug // points to this:windows
// unpack(); //points to global execution //example taking TV and not connection

//arrow is commited it naver changes the context
//arrow points to current execution context
