//inner function can access value from outer funtion
function parent() {
  let x = 100;

  function child() {
    console.log(x);
  }

  return child;
}

let result = parent();
result();






//Chat gpt solution for the question why cant we reutn child() at line number 9
// If you return innerFunction() directly,
//  you would be returning the result of invoking innerFunction
/*
function parent() {
    let x = 100;

    function child() {
        console.log(x);
    }

    // Returning the result of invoking innerFunction immediately
    return child();
}

// The returned value will be the result of invoking innerFunction, not the function itself
const result = parent(); // This will log 100 immediately

// 'result' will now be undefined, because 'child' returned undefined
console.log(result); 
*/