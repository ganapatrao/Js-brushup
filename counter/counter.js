let timer = 0;
let interval;
var counter = document.getElementById("timer");

function onStart() {
  interval = setInterval(() => {
    timer++;

    counter.innerHTML = timer;
  }, 1000);
}

const onRestartStart = () => {
  timer = 0;
  counter.innerHTML = timer;
};

const stop = () => {
  clearInterval(interval);
};
