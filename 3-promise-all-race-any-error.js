/*Promise all take array of promise and executes in parallel and returns reult after a time*/

let car1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("car 1");
    reject("car 1 rejected");
  }, 1000);
});

let car2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("car 2");
  }, 2000);
});
//
let car3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("car 3");
  }, 3000);
});

// let car3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("rejected");
//   }, 3000);
// });

//

Promise.all([car1, car2, car3])
  .then((result) => console.log("all success:",result))
  .catch((error) => console.log("all error:",error));

/*out put
//result is shown when all successful=>  [ 'car 1', 'car 2', 'car 3' ]
  
//  if all rejected or 1 rejected it will just  show top ejected error
//all error: car 1 rejected
//same for race
  */

Promise.any([car1, car2, car3])
  .then((result) => console.log("any success:",result))
  .catch((error) => console.log("any error",error));
//o/p=> if all rejected =>  [errors]: [ 'car 1 rejected', 'car 2', 'car 3' ]
//if any one is successful it will give success result only

  Promise.race([car1, car2, car3])
  .then((result) => console.log("race success:",result))
  .catch((error) => console.log("race error",error));
