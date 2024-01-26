const demo = new Promise((resolve, reject) => {
    let test = true;
  
    setTimeout(() => {
      if (test == true) {
        console.log("downloaded");
        resolve("promise resolve value");
      } else {
        reject("promise fail ho gaya");
      }
    }, 3000);
  });
  
//   demo
//     .then((result) => {
//       console.log(" show downloaded notification");
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
  



// how to use async await

async function getResult(){
async function getResult(){
   try{
    let result = await demo // await infront promise
    console.log(result)

    console.log("hi")
   } 
   catch(error){
    console.log(error);
   }
}
}


getResult()
