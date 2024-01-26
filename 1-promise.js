const demo = new Promise((resolve, reject) => {
  let test = false;

  setTimeout(() => {
    if (test == true) {
      console.log("downloaded");
      resolve("promise resolve value");
    } else {
      reject("promise fail ho gaya");
    }
  }, 3000);
});

demo
  .then((result) => {
    console.log(" show downloaded notification");
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
