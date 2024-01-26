//fetch is a promise

// fetch("https://type.fit/api/quotes")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });

function fethTheQuotes() {
  const quotes = fetch("https://type.fit/api/quotes")
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      let randomQuote = data[Math.floor(Math.random() * data.length)].text;
      //return randomQuote;
      document.getElementById('quotes').innerText=randomQuote
    });
  console.log(quotes);
}

// fethTheQuotes()

// let data =[1,2,3,4,5,6,7,8,9]
// // console.log(Math.random(Math.random() *5))
// let random = Math.random()*22 //*5
// console.log(random)
// console.log(0.8287561115865697*10)
// console.log(Math.floor(0.8287561115865697*10))
// // console.log(Math.floor(0.11145522133257924))

// // console.log("HI",Math.floor(0.5996600219*5))
