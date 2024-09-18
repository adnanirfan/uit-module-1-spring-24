// let a = 15;

// if (a === 10) {
//     console.log("a equal to 10")
// }
// else if (a <= 15) {
//     console.log("a eqaul to 15")
// }
// else {
//     console.log("a not equal to 10")
// }
// ------------------------------------------
// let bool = true;

// if (bool !== true) {
//     console.log("a equal to 10")
// }
// else {
//     console.log("a not equal to 10")
// }
// ------------------------------------------

// let array = ["a", 3, true];
// console.log(array);

// // array.splice(1, 2,)

// let b = array.slice(0, 3)
// console.log("b  :" + b);
// ------------------------------------------

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// ------------------------------------------
// ------------------------------------------

// let module = prompt('Enter You Module');
// let room;

// if (module == 1) {
//     room = 'CL1'
//     alert('CL1')
// } else if(module == 2) {
//     room = 'CL3'
//     alert('CL3')
// } else {
//     alert('Call Sir Waseem or contact Admission Office')
// }
// ------------------------------------------
// ------------------------------------------

function categoriseNumbers(array) {
  const positive = [];
  const negative = [];
  const zero = [];

  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    if (value > 0) {
      positive.push(value);
    } else if (value < 0) {
      negative.push(value);
    } else {
      zero.push(value);
    }
  }
  console.log(positive);
  console.log(negative);
  console.log(zero);
}
const x1 = [1, -2, 0, 3, -4, 5];
const x2 = [-1, -6, 0, 3, 2, 0];

categoriseNumbers(x1);
categoriseNumbers(x2);

// 0 < 6
// 1 < 6
// 2 < 6
// 3 < 6
// 4 < 6
// 5 < 6
// 6 < 6 // false
