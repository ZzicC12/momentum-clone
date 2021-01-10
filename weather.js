const weather_text = document.querySelector(".weather");

function askWeather() {
  navigator.geolocation.getCurrentPosition(requestSuccess, requestFail);
}

function requestSuccess(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  requestWeather(lat, long);
}

function requestFail() {
  alert("fail");
}

function requestWeather(x, y) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${x}&lon=${y}&appid=6fb45b4b2427fec27c6f1bf78575cecf&units=metric`
  )
    .then((response) => response.json())
    .then((result) => localStorage.setItem("weather", JSON.stringify(result)))
    .catch((error) => console.log("error", error))
    .showWeather();
}

function showWeather() {
  const WEATHER = localStorage.getItem("weather");
  const parsed = JSON.parse(WEATHER);
  weather_text.textContent = parsed.main.temp;
}

function loadWeather() {
  if (localStorage.getItem("weather") == null) askWeather();
  else showWeather();
}

function init() {
  loadWeather();
}
init();
