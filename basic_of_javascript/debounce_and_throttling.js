/**
 *  * Debouncing In JavaScript :
 *
 *  - Debouncing in JavaScript is a technique used to limit the rate at which a function is executed, especially in response to events that occur frequently. It ensures that a function a function is only called after a certain period of inactivity, even if the event continues to fire multiple times within that period.
 *
 *  - Many events, such as scroll, resize, and input, can trigger repeatedly in a short span. If a function is executed for each event occurrence, it may lead to performance issues. Debouncing helps manage this by delaying the function call until after a specified period of time.
 *
 *  - How Debouncing Works :
 *          1) Delay Timer : A time used to delay the execution of the function. Each time the event fires, the timer is reset.
 *          2) Function Execution : The function executes only when the timer completes the delay without being reset again by subsequent events.
 *
 *  - When to use Debouncing :
 *          1) Search Input Fields : Reducing API calls as users type.
 *          2) Resize Events : Limiting layout recalculations when resizing the browser window.
 *          3) Scroll Events : Preventing excessive API calls when scrolling through a long list.
 *          4) Button Clicks : Avoiding multiple form submissions when clicking a button rapidly.
 *
 *  - Advantages of Debouncing :
 *          1) Performance Improvement
 *          2) Resource Efficiency
 *          3) Improves User Experience
 *
 *  - Disadvantages of Debouncing :
 *          1) May cause delays in function execution.
 *          2) Can be complex to implement.
 *
 */

/**
 * * Throttling in JavaScript :
 *  - Throttling is a technique in JavaScript used to control how often a particular function can be executed over a specified period.
 *  - It is particularly useful in the scenario where a function is triggered frequently, such as during scrolling, resizing or keypress event.
 *  - By throttling, you can limit the execution of the function to a specific rate, improving performance and preventing unnecessary computations.
 *
 *  - How Throttling Works :
 *          => When you throttle a function, you ensure that it executed at most once every specified interval, even if it is triggered multiple times within that interval. This can be achieved by controlling when the function can run using timers and timestamps.
 *
 *  - When to use Throttling :
 *          1) Scroll Event
 *          2) Resize Event
 *          3) API Calls
 *          4) DOM Events
 *
 *  - Performance Benefits :
 *          1) Reduces load
 *          2) Optimizes UI
 *          3) Improves Responsiveness.
 *
 */

// const inputField = document.getElementById("input-box");

// const DUMMY_PRODUCT_API = `https://dummyjson.com/products`;

// Debouncing Function :
// const debounce = (fnc, delay = 500) => {
// 	let timer;

// 	return (...args) => {
// 		clearTimeout(timer);

// 		timer = setTimeout(() => {
// 			fnc.apply(this, args);
// 		}, delay);
// 	};
// };

// const handleInputChange = async (e) => {
// 	try {
// 		const value = e.target.value;
// 		console.log("Input : ", value);
// 		const response = await fetch(
// 			`https://dummyjson.com/products/search?q=${value}`
// 		);

// 		const result = await response.json();

// 		console.log("Search Result : ", result);
// 	} catch (error) {
// 		console.error("Error while fetching products : ", error);
// 	}
// };

// const debounced = debounce(handleInputChange, 500);

// inputField.addEventListener("input", debounced);

// Implementation of Throttling  Using setTimeout
const clickMeButton = document.getElementById("click-me-button");
// function throttle(func, interval) {
// 	let allowExecution = true;

// 	return function (...args) {
// 		if (!allowExecution) return;

// 		allowExecution = false;
// 		setTimeout(() => {
// 			func.apply(this, args);
// 			allowExecution = true;
// 		}, interval);
// 	};
// }

// // Example Usage
// const log = () =>
// 	console.log("Throttled Event", new Date().toLocaleTimeString());
// clickMeButton.addEventListener("click", throttle(log, 500));

// Implementation of Throttling  Using timestamps
// function throttle(func, interval) {
// 	let lastExecutionTime = 0;

// 	return function (...args) {
// 		const now = Date.now();

// 		if (now - lastExecutionTime >= interval) {
// 			func.apply(this, args);
// 			lastExecutionTime = now;
// 		}
// 	};
// }

// const printMessage = () =>
// 	console.log("Throttled Event", new Date().toLocaleTimeString());
// clickMeButton.addEventListener("click", throttle(printMessage, 2000));
