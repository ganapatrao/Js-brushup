/*Promise all take array of promise and executes in parallel and returns reult after a time*/

let car1 = new Promise((resolve, reject) => {
  setTimeout(() => {
   // resolve("car 1");
    reject("car 1 rejected");
  }, 1000);
});

let car2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("car 2");
  }, 2000);
});
//
let car3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("car 3");
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
  [ 'car 1', 'car 2', 'car 3' ]
  
  if error it will just  show rejected in the above example
  */

Promise.any([car1, car2, car3])
  .then((result) => console.log("any success:",result))
  .catch((error) => console.log("any error",error));


  Promise.race([car1, car2, car3])
  .then((result) => console.log("race success:",result))
  .catch((error) => console.log("race error",error));
