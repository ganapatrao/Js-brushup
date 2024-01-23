function example() {
    var x = 1;
    let y = 2;
    const z = 3;
    // var x=100; //allowed

    //var is function scope
  
    if (true) {
      var x = 4;
      let y = 5;
      const z = 6;
      console.log(x); // 4
      console.log(y); // 5
      console.log(z); // 6
      console.log("1111111111111111111111111111111111"); // 6
    }
  
    console.log(x); // 4 // since x is not block scope and it is function scope
    console.log(y); // 2
    console.log(z); // 3
    console.log("22222222222222222222222222"); // 6
    x = 7;
    y = 8;
    // z = 9; // TypeError: Assignment to constant variable.
  
    console.log(x); // 7
    console.log(y); // 8
    console.log(z); // 3
  }
  
  example();




//   1. Always declare variables

// 2. Always use const if the value should not be changed

// 3. Always use const if the type should not be changed (Arrays and Objects)

// 4. Only use let if you can't use const

// 5. Only use var if you MUST support old browsers.