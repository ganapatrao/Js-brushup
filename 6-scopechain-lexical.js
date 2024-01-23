
//inner function checks inside its local scope, 
//if not foud checks in the outer scope, if not found checks in the global scope

//outer function value
/*function abc() {
  var a = 10;

  function xyz() {
    console.log(a);
  }

  xyz();
}

abc();
//==>10
*/


//access global scope
function abc() {

  
    function xyz() {
      console.log(a);
    }
  
    xyz();
  }

  var a = 100;
  
  abc();

//==>10


  // if defifed inside a child function it cannot be accessed by outer function

