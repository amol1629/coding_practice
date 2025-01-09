/**
 * * Promises in JavaScript :
 *  - 
 */

const promiseFunction = new Promise((resolve, reject) => {
  let randomNumber = Math.floor(Math.random() * 10);

  console.log("Random Number is : ", randomNumber);

  if (randomNumber < 5) {
    resolve();
  } else {
    reject();
  }
});

promiseFunction
  .then(() => {
    console.log("TRUE...");
  })
  .catch(() => {
    console.log("FALSE...");
  });
