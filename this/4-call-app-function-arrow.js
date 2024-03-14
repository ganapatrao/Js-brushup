//arrow is commited it naver changes
// var one ="One"
// var two ="two"

function normal() {
  console.log("NF", this.one);
  console.log(this.two);
}

const arrowtest = () => {
  console.log(this.one);
  console.log(this.two);
};

normal.call({ one: "newOne", two: "newTwo" }); //newOne,newTwo
arrowtest.call({ one: "newOne", two: "newTwo" }); //undefined //undefined
//arrow is commited it naver changes the context
//arrow points to current execution context
