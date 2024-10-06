// ["todo 1", "todo 2", "todo 3"];

// [
//   { text: 'todo 1', isComplete: false },
//   { text: 'todo 2', isComplete: false },
//   { text: 'todo 3', isComplete: true }
// ]

const LOCAL_STORAGE_KEY = "todos";

let arr = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
if (!arr) arr = [];
console.log(arr);

const addTodo = () => {
  const textInput = document.getElementById("todo-input");
  const { value } = textInput; // Object destructuring
  console.log(value);

  arr.push({ text: value, isComplete: false });

  updateLocalStorage(arr);
  textInput.value = "";

  const newLi = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = false;
  // checkbox.addEventListener("change", (e) => {
  //   arr[i].isComplete = checkbox.checked;
  //   updateLocalStorage(arr);
  // });

  newLi.innerText = value;
  newLi.appendChild(checkbox);
  const ul = document.getElementById("todos-list");
  ul.appendChild(newLi);
};

function showTodosOnUI(arr) {
  const ul = document.getElementById("todos-list");

  for (let i = 0; i < arr.length; i++) {
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = arr[i].isComplete;
    checkbox.addEventListener("change", (e) => {
      arr[i].isComplete = checkbox.checked;
      updateLocalStorage(arr);
    });

    newLi.innerText = arr[i].text;
    newLi.appendChild(checkbox);
    ul.appendChild(newLi);
  }
}

function updateLocalStorage(arr) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(arr));
}

function onLoad() {
  showTodosOnUI(arr);
}

onLoad();
