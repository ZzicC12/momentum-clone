const form = document.querySelector("form");
const input = form.querySelector("input");
const greeting = document.querySelector(".greeting");

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
