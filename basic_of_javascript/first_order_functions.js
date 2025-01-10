/**
 * * First Order Functions :
 *  - First order functions is a function that does not take other functions as arguments or return functions as it result.
 *  - It works with primitive or other non-function data types directly.
 *
 *  - Characteristic of First Order Functions :
 *          1) Operates on basic values (number, strings, objects, etc)
 *          2) Does not involve higher-order behavior like accepting or returning other functions.
 *
 *  - the opposite of a first-order function is a higher-order function, which accepts other functions as arguments or returns a function.
 */

// First-order function
function add(a, b) {
  return a + b;
}
console.log(add(3, 4)); // Output: 7
