const p = () => {
    return new Promise((reply, reject) => {
      setTimeout(() => {
        reply("First");
      }, 3000);
    });
  };
  
  const q = () => {
    return new Promise((reply, reject) => {
      setTimeout(() => {
        reply("Second");
      }, 3000);
    });
  };
  
  const r = () => {
    return new Promise((reply, reject) => {
      setTimeout(() => {
        reply("Third");
      }, 3000);
    });
  };
  
  // Case 1 - Via .then & .catch
  
  p()
    .then((pData) => {
      console.log("pData: ", pData);
      q()
        .then((qData) => {
          console.log("qData: ", qData);
          r()
            .then((rData) => {
              console.log("rData: ", rData);
            })
            .catch((rErr) => {
              console.log("rErr: ", rErr);
            });
        })
        .catch((pErr) => {
          console.log("pErr: ", pErr);
        });
    })
    .catch((err) => {
      console.log("Err: ", err);
    });
  