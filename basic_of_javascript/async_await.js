/**
 * * Async-Await in JavaScript :
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
