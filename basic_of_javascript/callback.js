/**
 * * Callbacks in Javascript :
 *
 *  - Callbacks are the functions that are passed as arguments to other functions and are executed after the completion of those functions.
 *  - Callbacks are used to handle asynchronous operations , such as reading files, making network requests, or performing database operations and they enable non-blocking code execution by deferring tasks until a later time.
 *  - There are two ways in which the callback may be called:
 * 				1) Synchronous callbacks  : They are called immediately after the invocation of the outer function, with no intervening asynchronous tasks,
 * 				2) Asynchronous callbacks : They  are called at some point later, after an asynchronous operation has completed.
 *
 *  - Common Uses of Callback :
 *          1) Callbacks are also used to handle errors that occur during the execution of a function.
 *          2) Callbacks are used in event listeners, setTimeout, setInterval, array's method (map(), filter(), reduce()).
 *
 *  ? Callback Hell :
 *          "When multiple nested callbacks are used, the code becomes difficult to read and maintain. This situation is known as callback hell."
 *  - Callback hell leads to poor code readability. To solve this, "Promises and async/await" were introduced.
 *
 *  - Drawbacks of Callback :
 *          1) Callbacks can lead to callback hell.
 *          2) Callbacks can be difficult to debug.
 *          3) Callbacks can lead to memory leaks.
 *
 * -----------------------------------------------------------------------------------------------------
 */

// Basic example of a callback function
// const greetings = (name, callback) => {
//   console.log(`${name}, this is main function which executes first.`);

//   callback();
// };

// const sayGoodBye = () => {
//   console.log(
//     "This is callback function which executes after completion of main function"
//   );
// };

// greetings("John", sayGoodBye);

// Example of Callback Hell :

// setTimeout(() => {
// 	console.log("0s 1st Task");
// 	setTimeout(() => {
// 		console.log("7s 2nd Task");
// 		setTimeout(() => {
// 			console.log("5s 3rd Task");
// 			setTimeout(() => {
// 				console.log("1s 4th Task");
// 			}, 1000);
// 		}, 5000);
// 	}, 7000);
// }, 0);

// Syncronous Callbacks :
// const greet = (name, callback) => {
// 	console.log("Hello, ", name);

// 	callback();
// };

// const sayHowAreYou = () => {
// 	console.log("How are you dear ?")
// }

// greet("John", sayHowAreYou);

// Asynchronous Callbacks :
const asynchronousCallback = (callback) => {
	console.log("Fetching data.....");

	setTimeout(() => {
		setTimeout(() => {
			console.log("Inner Timeout");
		}, 4000);
		callback();
		console.log("Data Fetched!");
	}, 2000);
};

const displayData = () => {
	console.log("Processing data.....!");
};

asynchronousCallback(displayData);
