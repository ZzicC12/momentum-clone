const toDo_form = document.querySelector(".toDo__form");
const toDo_input = document.querySelector(".toDo__input");
const toDo_list = document.querySelector(".toDo__list");
let todos = [];
let idN = 1;
function loadList() {
  const LIST_LS = localStorage.getItem("TODOS");
  if (LIST_LS !== null) getList();
}

function getList() {
  const TODOS = localStorage.getItem("TODOS");
  const parsed = JSON.parse(TODOS);
  parsed.forEach((item) => makeList(item.text));
}

function handleSubmit(event) {
  event.preventDefault();
  const text = toDo_input.value;
  makeList(text);
}

function makeList(list) {
  const list_item = document.createElement("li");

  const span = document.createElement("span");
  const btn = document.createElement("button");

  btn.addEventListener("click", deleteToDo);
  span.innerHTML = list;
  btn.innerText = "✂";

  list_item.appendChild(span);
  list_item.appendChild(btn);
  toDo_list.appendChild(list_item);

  toDo_input.value = "";

  const newID = idN;
  list_item.id = newID;
  const todo_obj = {
    text: list,
    id: newID,
  };
  todos.push(todo_obj);
  idN += 1;
  savetodos();
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDo_list.removeChild(li);

  const cleanToDo = todos.filter((todo) => {
    return todo.id !== parseInt(li.id);
  });

  todos = cleanToDo;
  savetodos();
}

function savetodos() {
  localStorage.setItem("TODOS", JSON.stringify(todos));
}

function init() {
  loadList();
  toDo_form.addEventListener("submit", handleSubmit);
}
init();
