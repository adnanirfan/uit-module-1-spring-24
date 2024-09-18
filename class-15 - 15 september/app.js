// onClick -----------------------------------------

function btnClick() {
  alert("Hello User");
}

let originalText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consectetur nobis labore numquam repudiandae enim fugit, eaque cupiditate tempora quis dolor dignissimos eum saepe facere eligendi possimus modi quo et?";

function expand() {
  let text = document.getElementById("text");
  text.innerText = originalText;
  document.getElementById("read-more").className = "hide";
  document.getElementById("read-less").className = "show";
}

function collapse() {
  let text = document.getElementById("text");
  text.innerText = originalText.substring(0, 60) + "...";
  document.getElementById("read-more").className = "show";
  document.getElementById("read-less").className = "hide";
}

function onLoad() {
  let text = document.getElementById("text");
  text.innerText = originalText.substring(0, 60) + "...";
}

onLoad();
// Getting Values --------------------------------------

function getName() {
  let name = document.getElementById("name");
  console.log(name.value);
}

// Set Values ----------------------------------------

let age = document.getElementById("age");
age.value = 20;

function setValue() {
  age.value = 30;
}

// ------------------------------------------

let milliSeconds = 0;
let seconds = 0;
let minutes = 0;

let minHeading = document.getElementById("minutes");
let secHeading = document.getElementById("seconds");
let mSecHeading = document.getElementById("milliSeconds");

let interval;

function timer() {
  milliSeconds++;
  mSecHeading.innerText = milliSeconds;

  if (milliSeconds >= 99) {
    milliSeconds = 0;
    seconds++;
    secHeading.innerText = seconds;
  } else if (seconds >= 59) {
    seconds = 0;
    minutes++;
    minHeading.innerText = minutes;
  }
}

function start() {
  clearInterval(interval);
  interval = setInterval(timer, 10);
}

function stop() {
  clearInterval(interval);
}

function reset() {
  minutes = 0;
  seconds = 0;
  milliSeconds = 0;

  minHeading.innerText = minutes;
  secHeading.innerText = seconds;
  mSecHeading.innerText = milliSeconds;

  clearInterval(interval);
}
