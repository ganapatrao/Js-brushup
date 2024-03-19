let x = [1, 2, 3, 4];

// let z = 0;
// for (let i = 0; i <= x.length-1; i++) {
//   z = z + x[i];

// }

// console.log(z);

function sum(numbers) {
    return numbers.reduce((accu, current) => accu = accu + current, 0);
  }


  console.log(sum(x))

// function test(...data){
//     console.log(data)
// }

// test(1,2,3,4)
// //[1,2,3,4]

// let x= [1,2,3,4,5]
