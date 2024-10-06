// const newDiv = document.createElement('div');

// newDiv.innerText = 'Hello World';

// document.body.appendChild(newDiv);

const newLi1 = document.createElement("li");
const newLi2 = document.createElement("li");
newLi1.innerText = "li 1";
newLi2.innerText = "li 2";

const ul = document.getElementById("ul");

ul.appendChild(newLi1);
ul.appendChild(newLi2);
ul.appendChild(newLi1);
ul.appendChild(newLi2);
ul.appendChild(newLi1);
ul.appendChild(newLi2);
