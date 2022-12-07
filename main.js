let interval = null;
let date = new Date(0, 0, 0);

function start() {
  if (interval) return;
  interval = setInterval(timer, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  date = new Date(0, 0, 0);

  fill();
  stop();
}

function timer() {
  date.setSeconds(date.getSeconds() + 1);
  fill();
}

function fill() {
  hours.innerHTML = date.getHours();
  minutes.innerHTML = date.getMinutes();
  seconds.innerHTML = date.getSeconds();
}
