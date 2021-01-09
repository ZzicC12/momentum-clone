const time = document.querySelector(".time");

function printTime() {
  const clock = new Date();

  const hour = clock.getHours();
  const minute = clock.getMinutes();
  const second = clock.getSeconds();

  time.innerHTML = `${hour < 10 ? `0${hour}` : hour} : ${
    minute < 10 ? `0${minute}` : minute
  } : ${second < 10 ? `0${second}` : second}`;
}

function init() {
  printTime();
  setInterval(printTime, 1000);
}
init();
