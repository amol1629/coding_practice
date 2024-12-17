// ** Reverse a Number

// function reverseNumber(num) {
//   let reverseNumber = num.toString().split("").reverse().join("");

//   return reverseNumber;
// }

// // Example usage
// const originalNumber = 12345;
// const reversed = reverseNumber(originalNumber);

// console.log(typeof reversed); // Output: 54321

// ** Closure

// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log("Counter : ", counter);
//   }

//   return inner;
// }

// const fn = outer();
// fn();
// fn();

const varialbeTrue1 = "true";
const varialbeTrue2 = true;

const variableNumber1 = "21";
const variableNumber2 = 21;

console.log("Double Equals To For True: ", varialbeTrue1 == varialbeTrue2);
console.log("Triple Equals To For True: ", varialbeTrue1 === varialbeTrue2);

console.log(
  "Double Equals To For Number 21 : ",
  variableNumber1 == variableNumber2
);
console.log(
  "Triple Equals To For Number 21 : ",
  variableNumber1 === variableNumber2
);
