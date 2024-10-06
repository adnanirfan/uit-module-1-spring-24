const LOCAL_STORAGE_KEY = "todos";

const arr = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

const addTodo = () => {
  const textInput = document.getElementById("todo-input");
  const { value } = textInput; // Object destructuring
  console.log(value);

  arr.push(value);

  const stringifiedArray = JSON.stringify(arr);
  localStorage.setItem(LOCAL_STORAGE_KEY, stringifiedArray);
  textInput.value = "";

  const newLi = document.createElement("li");
  newLi.innerText = value;
  const ul = document.getElementById("todos-list");
  ul.appendChild(newLi);
};

function showTodosOnUI(arr) {
  const ul = document.getElementById("todos-list");

  for (let i = 0; i < arr.length; i++) {
    const newLi = document.createElement("li");
    newLi.innerText = arr[i];
    ul.appendChild(newLi);
  }
}

function onLoad() {
  showTodosOnUI(arr);
}

onLoad();
