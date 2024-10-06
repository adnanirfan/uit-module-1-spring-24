// function fun(a, b) {
//     // let c  = a + b;
//     console.log(a + b);
// }

// fun(5, 15)

// ------------------------------------------
// ------------------------------------------

// function categoriseNumbers(array) {
//   const positive = [];
//   const negative = [];
//   const zero = [];

//   for (let i = 0; i < array.length; i++) {
//     const value = array[i];

//     if (value > 0) {
//       positive.push(value);
//     } else if (value < 0) {
//       negative.push(value);
//     } else {
//       zero.push(value);
//     }
//   }
//   console.log("Positive:" + positive);
//   console.log("Negative:" + negative);
//   console.log("Zero:" + zero);
// }

// categoriseNumbers([1, -2, 0, 3, -4, 5])

// const x1 = [1, -2, 0, 3, -4, 5]
// const x2 = [-1,-6, 0, 3, 2, 0]

// categoriseNumbers(x1)
// categoriseNumbers(x2)

// ------------------------------------------
// ------------------------------------------

// let val1 = +prompt("Enter Value 1")
// let operator = prompt("Enter Operator")
// let val2 = +prompt("Enter Value 2")

// if (operator === "+") {
//     alert(val1 + val2)
// }
// else if (operator === "-") {
//     alert(val1 - val2)
// }
// else if (operator === "/") {
//     alert(val1 / val2)
// }
// else if (operator === "x" || operator === "X") {
//     alert(val1 * val2)
// }
// else {
//     alert("Something went wrong")
// }

// ------------------------------------------
// ------------------------------------------

// function categorizeStrings(array) {
//     const lessThan5 = []
//     const equalTo5 = []
//     const greatorThan5 = []

//     // Your Code
// }

// ------------------------------------------
// ------------------------------------------

function calculateResults(array) {
  let percentage = 0;
  let totalObtainedMarks = 0;
  const totalMarks = array.length * 100; // 400

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    totalObtainedMarks = totalObtainedMarks + value;
  }
  percentage = (totalObtainedMarks / totalMarks) * 100;

  console.log(percentage);
  return percentage;
}

calculateResults([70, 80, 63, 90]);
