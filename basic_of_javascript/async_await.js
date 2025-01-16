/**
 * * Async-Await in JavaScript :
 * 
 *  - Async-Await is a syntax sugar over promises.
 *  - The "async" and "await" are keywords introduced in ES8 (ECMAScript 2017) which allows you to write asynchronous code that looks synchronous, reducing the complexity of promises and callbacks.
 * 
 *  - The "async" keyword : 
 *                => The async keyword is used before a function declaration to indicate that the function will return a promise implicitly.
 *                => If a value is returned from an async function, it is automatically wrapped in a resolved promise i.e using Promise.resolve().
 *                => The async keyword can be used with function declarations, function expressions, and arrow functions.
 *                => The async keyword can be used with the class methods.
 * 
 *  - The "await" keyword : 
 *                => The await keyword is used to pause the execution of the async function until the promise is settled. It can only be used inside an async function.
 *                => The await keyword can be used with any promise-like object (objects with a then() method).
 *                => The await keyword can be used with Promise objects, async functions, and thenable objects.
 * 
 *  - The "async" function return a promise automatically. You can use ".then()" to handle it but using "await" is more preferable.
 *  - The "await" will throw an error if the promise is rejected. You can use try-catch block to handle the error.
 *  - The await can be used multiple times, but it may cause "sequential blocking" of the code. To avoid this, you can use Promise.all() to run multiple promises concurrently.
 * 
 *  - Key Benefits of Async-Await :
 *                1)  Cleaner code : Async-Await makes the code cleaner and easier to read.
 *                2) Error handling : Errors can be handled using try-catch blocks.
 *                3) Better performance : Async-Await can improve the performance of the code by avoiding the need to create multiple callbacks.
 *                4) Reduced Nesting : Eliminates the "callback hell" problem seen with nested callbacks and .then() calls.
 *  
 *  ? Sequential vs Parallel Execution :
 *  - Sequential Execution : The code is executed in a sequence, one after the other.
 *  - Parallel Execution : The code is executed simultaneously.
 *  - 
 */

const workingOfAsyncAwait = () => {
  setTimeout(() => {
    console.log("Line 0");
  }, 0);
  console.log("Line 1");
  console.log("Line 2");
  setTimeout(() => {
    console.log("Line 3");
  }, 0);
  console.log("Line 4");
  setTimeout(() => {
    console.log("Line 5");
  }, 0);
};

workingOfAsyncAwait();
