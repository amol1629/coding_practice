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
 *
 */

const inputField = document.getElementById("input-box");

const DUMMY_PRODUCT_API = `https://dummyjson.com/products`;

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

