var one ="One"
var two ="two"

function normal(){
    console.log("NF",this.one)
    console.log(this.two)
}


const arrowtest =()=>{
    console.log(this.one)
    console.log(this.two) 
}



normal.call({one:"newOne",two:"newTwo"}) //newOne,newTwo
arrowtest.call({one:"newOne",two:"newTwo"})//One //two

//to change the context
//arrow is commited it never changes the context
//with arrow the context never change//points to current execution