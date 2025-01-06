/**
 * * First Class Functions :
 *  - First class functions enables functional programming, where function can be treated as data.
 *  - They make JavaScript highly flexible, allowing constructs like higher-order functions, closures and more.
 *
 *  - In JavaScript, functions are first-class citizens, which means they can be:
 *              1) Assigned to variables.
 *              2) Passed as arguments to other functions.
 *              3) Returned as values from other functions.
 *              4) Stored in data structures like arrays or objects.
 *
 *  - Characteristics of First Class Functions :
 *              1) Can be assigned to variables or constants.
 *              2) Can be passed to other functions as arguments (callback)
 *              3) Can return other functions
 *              4) Can be part of arrays or objects
 */

// 1. Can be assigned to variables or constants
const sayHello = function () {
  console.log("Hello!");
};
sayHello(); // Hello!

// 2.  Can be passed to other functions as arguments (callback)
function greet(callback) {
  callback();
}

function sayHi() {
  console.log("Hi!");
}

greet(sayHi); // Hi!

// 3. Can return other functions
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10

// 4. Can be part of arrays or objects
const functions = [
  function () {
    console.log("First");
  },
  function () {
    console.log("Second");
  },
];

functions[0](); // First
