const form = document.querySelector(".greeting__form");
const input = form.querySelector(".greeting__input");
const greeting = document.querySelector(".greeting__text");
const todo = document.querySelector(".toDo__form");
const todo_list = document.querySelector(".toDo__list");

const loadName = () => {
  const USER_LS = localStorage.getItem("name");
  if (USER_LS == null) writeName();
  else showGreeting();
};

const writeName = () => {
  form.classList.toggle("show");
  form.addEventListener("submit", handleSubmit);
};
const showGreeting = () => {
  greeting.classList.toggle("show");
  todo.classList.toggle("show");
  todo_list.classList.toggle("show");
  const USERNAME = localStorage.getItem("name");
  greeting.innerHTML = `Welcome <br>${USERNAME}`;
};

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
