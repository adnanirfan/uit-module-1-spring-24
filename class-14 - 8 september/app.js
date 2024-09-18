// let d = new Date();
// console.log(d);
// let day = d.getDay();
// console.log(day);

// ---------------------

// let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// let d = new Date();
// let todayName = dayNames[d.getDay()];
// console.log(todayName);

// --------------------------------------------

// let date = new Date();
// console.log(date)

// console.log("Day :", date.getDay());
// console.log("Date :", date.getDate());
// console.log("Year :", date.getFullYear());
// console.log("Hours :", date.getHours());
// console.log("Mins :", date.getMinutes());
// console.log("MilliSeconds :", date.getMilliseconds());
// console.log("Seconds :", date.getSeconds());

// ---------------------------------------------

// let h1 = document.getElementsByTagName("h1");
// console.log(h1);

// let inputs = document.getElementsByTagName("input");
// console.log(inputs);

// ---------------------------------------------

function onInputChange(event) {
  console.log("onChange:", event.target.value);
}

function getValues(event) {
  var inputs = document.getElementsByTagName("input");
  console.log(inputs);

  for (let i = 0; i < inputs.length; i++) {
    var text = inputs[i];
    console.log(text.value);
  }
}
