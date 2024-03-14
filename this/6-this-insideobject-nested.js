//NF-points to object
//arrow points to current execution context (means initially where it was defined--windows and not the object

// inside NF, inside arrow , after unpackig



//var name ="krishna2" when enabled can be seen at both
const nameobj = {
  name: "hari",

  fullname: function () {
    console.log(this.name);// hari
    function nested(){
      console.log("nested always points to global execution context-",this.name)//windows
    }
    nested()
  },

  arrowfullname: () => {
    console.log("arrow-",this.name); /// arrow always current execution that is windows
  },
};

// const arrowfunc = {
//   name: "hari",

//   fullname: () => {
//     console.log(this.name);
//   },
// };

nameobj.fullname();
nameobj.arrowfullname();


//unpacking function
const unpack =nameobj.fullname; // debug // points to this:windows
unpack()//points to global execution //example taking TV and not connection


//arrow is commited it naver changes the context
//arrow points to current execution context
