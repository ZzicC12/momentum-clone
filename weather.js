const weather_text = document.querySelector(".weather");

function askCoord() {
  navigator.geolocation.getCurrentPosition(requestSuccess, requestFail);
}

function requestSuccess(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;

  const coord = { lat, long };
  localStorage.setItem("coord", JSON.stringify(coord));
  requestWeather(lat, long);
}

function requestFail() {
  console.log("can't access");
}

function requestWeather(x, y) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${x}&lon=${y}&appid=6fb45b4b2427fec27c6f1bf78575cecf&units=metric`
  )
    .then((response) => response.json())
    .then((result) => {
      weather_text.innerHTML = `location : ${result.name} <br><br> temperature : ${result.main.temp}°C `;
    });
}

function loadWeather() {
  const COORD = localStorage.getItem("coord");
  if (COORD === null) askCoord();
  else {
    const lat = JSON.parse(COORD).lat;
    const long = JSON.parse(COORD).long;
    requestWeather(lat, long);
  }
}

function init() {
  loadWeather();
}
init();
