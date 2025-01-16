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
 *                => The "await" is only valid inside an "async" functions and the top level bodies of the modules. If you use it outside an async function, it will throw a syntax error.
 *
 *  - The "async" function return a promise automatically. You can use ".then()" to handle it but using "await" is more preferable.
 *  - The "async function" always returns a promise, even if you return a non-promise value from it. It will be automatically wrapped in a resolved promise. If return values is already a promise, it will just return that promise without wrapping it inside another promise.
 *  - The "await" will throw an error if the promise is rejected. You can use try-catch block to handle the error.
 *  - The await can be used multiple times, but it may cause "sequential blocking" of the code. To avoid this, you can use Promise.all() to run multiple promises concurrently.
 *  - Using "await" in loops can cause the promises to run sequentially. To run them concurrently, you can use Promise.all() with the map() method.
 *
 *  - Key Benefits of Async-Await :
 *                1)  Cleaner code : Async-Await makes the code cleaner and easier to read.
 *                2) Error handling : Errors can be handled using try-catch blocks.
 *                3) Better performance : Async-Await can improve the performance of the code by avoiding the need to create multiple callbacks.
 *                4) Reduced Nesting : Eliminates the "callback hell" problem seen with nested callbacks and .then() calls.
 *
 *  ? Sequential vs Parallel Execution :
 *  - Sequential Execution :
 *                => In sequential execution, each task is executed one after the other.
 *                => Each task must complete before the next one starts.
 *                => Using async-await, tasks are executed sequentially by default.
 *                => Using "await" inside a loop without parallelization leads to sequential execution, which may cause performance bottleneck if tasks are independent and can run concurrently.
 *                => In sequential execution, each "await" pauses execution until the previous fetch completes, resulting in "longer total execution time".
 *                => Use Case : When tasks are dependent on each other and need to be executed in a specific order.
 *
 *  - Parallel Execution :
 *                => In parallel execution, multiple tasks are executed simultaneously, allowing them to run concurrently without waiting for each other to complete.
 *                => This approach can significantly reduce the total execution time and improve performance when task are independent.
 *                => Parallel execution can be achieved using Promise.all() with an array of promises or using the map() method with async-await.
 *                => Use Case : When tasks are independent and can be executed concurrently to improve performance.
 *  -
 */

// Sequential  Execution Example :
// async function fetchSequentially() {
// 	console.time("Sequential Fetch");

// 	const data1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
// 	const json1 = await data1.json();
// 	console.log("Data 1:", json1);

// 	const data2 = await fetch("https://jsonplaceholder.typicode.com/posts/2");
// 	const json2 = await data2.json();
// 	console.log("Data 2:", json2);

// 	console.timeEnd("Sequential Fetch");
// }

// fetchSequentially();

// Parallel Execution Example
// async function fetchInParallel() {
// 	console.time("Parallel Fetch");

// 	const promise1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
// 	const promise2 = fetch("https://jsonplaceholder.typicode.com/posts/2");

// 	const [data1, data2] = await Promise.all([promise1, promise2]);

// 	const json1 = await data1.json();
// 	const json2 = await data2.json();

// 	console.log("Data 1:", json1);
// 	console.log("Data 2:", json2);

// 	console.timeEnd("Parallel Fetch");
// }

// fetchInParallel();

// const myPromiseForThenMethod = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("Promise for .then() method is resolved");
// 	}, 10000);
// });

// function getDataWithThenMethod() {
// 	myPromiseForThenMethod.then((data) => {
// 		console.log(data);
// 	});

// 	console.log("Inside getData with .then method");
// }
// getDataWithThenMethod();

const myPromiseForAwaitMethod = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise for await method is resolved");
	}, 10000);
});

const myPromiseForAwaitMethod2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise for await method is resolved2");
	}, 2000);
});
const getDataWithAwaitMethod = async () => {
	console.time("Time Started");
	const data = await myPromiseForAwaitMethod;
	console.log(data);
	console.log("Inside getData with await method");

	const data2 = await myPromiseForAwaitMethod2;
	console.log(data2);
	console.log("Inside getData with await method2");
	console.timeEnd("Time Started");
};
getDataWithAwaitMethod();
