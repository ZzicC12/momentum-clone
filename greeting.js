const form = document.querySelector(".greeting__form");
const input = form.querySelector(".greeting__input");
const greeting = document.querySelector(".greeting__text");

function loadName() {
  const USER_LS = localStorage.getItem("name");
  if (USER_LS == null) writeName();
  else showGreeting();
}

function writeName() {
  form.classList.toggle("show");
  form.addEventListener("submit", handleSubmit);
}

function showGreeting() {
  greeting.classList.toggle("show");
  const USERNAME = localStorage.getItem("name");
  greeting.innerHTML = `Welcome ${USERNAME}`;
}

function handleSubmit(event) {
  event.preventDefault();
  localStorage.setItem("name", input.value);
  form.classList.toggle("show");
  showGreeting();
}

function init() {
  loadName();
}

init();
