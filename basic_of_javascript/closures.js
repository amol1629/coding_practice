/******************************************************************************************************************************************
 * Closures in JavaScript :
 * - Closures in JavaScript allows functions to have access to variables from their outer(enclosing) scope even after the outer function has finished executing. This is possible because, when a function is created, it retains a reference to its lexical environment, which includes the scope in which the function was created. This reference is what allows the inner function to access the outer function's variables.
 * - Closures are useful for creating private variables and methods in JavaScript, as well as for creating functions that can be used to manage state such as counters or accumulators.
 * - A closure is created when a function accesses variables from its lexical environment, even after the outer function that created those variables has returned.
 * Closures are powerful and essential for writing clean, efficient, and maintainable JavaScript code.
 * - Closures are used in many real-world applications, such as in event listeners, timers, and other asynchronous operations.
 * - Closures are also used in functional programming, where they are used to create higher-order functions that can be composed together to create more complex functions.
 * - Closures are also used in object-oriented programming, where they are used to create private variables and methods.
 * - Closures are also used in reactive programming, where they are used to create observables and observers.
 * -
 ******************************************************************************************************************************************/

function outer() {
  let name = "closure";
  console.log("Outer Function STARTS");

  function inner() {
    console.log("Inner Function Calling : ", name);
  }

  console.log("Outer Function ENDS");
  return inner;
}

outer();

console.log("addition ; ", 2+2 + "3" );
// closureResult();
