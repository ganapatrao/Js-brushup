var x=100;
function parent(){

    var x =10;

    function child(){
        console.log(x)// lexical scope
    }

    child()
}

parent()

//read this 
/*Lexical scope works for variables like x and allows the
 inner function (child()) to access variables in the scope where it was defined. 
 in object lexical will not come in picture */

 console.log("--------------------------EOD of lexical")

var name ="Global name"

 const person = {
    name: 'Alice',
    greet: function() {
      console.log(this.name); // 'Alice' - 'this' refers to 'person'
  
      function innerFunction() { /// nested so global
        console.log(this.name); // 'this' refers to the global object which is window or undefined in strict mode
      }
  
      innerFunction();
    }
,
    greet2: function () {
        console.log("arrow unction==>",this.name); // object
    
        function innerFunctionNormal() {
          console.log(this.name); // 'this' refers to the global object which is window or undefined in strict mode
        }

        const innerFunctionArrow =() => {
          console.log(this.name); // 'this' refers to the global object which is window or undefined in strict mode
        }
    
        innerFunctionNormal();
        innerFunctionArrow();
      }
  };
  
  person.greet();

  console.log("-----------------------------------------------------")
  person.greet2();


