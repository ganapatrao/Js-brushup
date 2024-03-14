//NF-points to object -nf normal function
//arrow points to current execution context (means initially where it was defined--windows

// inside NF, inside arrow , after unpackig
// var one ="One"
// var two ="two"

const name = {
  name: "hari",

  fullname: function () {
    console.log(this.name);//hari
  },

  arrowfullname: () => {
    console.log("arrow",this);//window
  },
};

// const arrowfunc = {
//   name: "hari",

//   fullname: () => {
//     console.log(this.name);
//   },
// };

name.fullname();
name.arrowfullname();

//arrow is commited it naver changes the context
//arrow points to current execution context
