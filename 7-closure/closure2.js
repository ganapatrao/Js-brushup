var x = 100;  // Global variable

function outerFunc() {
  var x = 50;  // Local variable inside outer function

  function normalFunc() {
    console.log("Normal Function:", this.x);  // 'this' refers to global object or caller context
    console.log(x)
  }

  const arrowFunc = () => {
    console.log("Arrow Function:", this.x);  // 'this' refers to the enclosing scope
    console.log(x)
  };

  normalFunc();   // Output: 100 (in normal function, 'this' refers to global)
  arrowFunc();    // Output: 100 (in arrow function, 'this' is lexically bound to the global scope)
}

outerFunc();