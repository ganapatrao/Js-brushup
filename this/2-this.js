// "use strict" with strict it will not work inside the function it will break the chain of this
var one ="One"
var two ="two"

function normal(){
    console.log(this.one)
    console.log(this.two)
}


const arrowtest =()=>{
    console.log(this.one)
    console.log(this.two) 
}

normal()
// arrowtest()

// run this in browser only // above shows value for both
//lets see how it behaves when influenced with call apply bind

// this refers to the global object, and one and two can be accessed. However, when run in Node.js,
//  this still refers to the module scope, where one and two are undefined.