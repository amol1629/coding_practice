/**
 *  * Currying in JavaScript :
 *
 *  - Currying a concept from functional programming, where it transforms a function with multiple arguments into a sequence of functions, each taking a single argument.
 *  - For example, a function f(x,y,z) can be converted to a series of nested functions f(x)(y)(z) using currying.
 *  - Currying works by returning a series of closures (the function that remember the environment in which they were created). Each nested function captures the previous arguments and returns another function, eventually producing the final result when all arguments are provided.
 *  -
 *
 *  ! Function Arity :
 *          => Function arity is the number of arguments a function can take.
 *          => The number of arguments a function can take is determined by the number of parameters in its function definition.
 *          => Curring reduces a function's arity to 1 by transforming it into nested unary functions (functions that take one argument at a time).
 *          => This is useful for creating higher-order functions that can be composed together.
 *
 *  ? Partial Application vs Currying :
 *          => Currying always transforms a function so that it takes one argument at a time.
 *          => Partial application fixes some arguments of a function, creating a new function with a reduced number of arguments.
 *          => Partial application means that you can call a function with fewer arguments than it expects.
 *
 *  - Practical Applications of Currying :
 *          1) Event handling with currying.
 *          2) Functional composition with currying.
 *
 *  - While currying improves readability and modularity, it can introduce slight performance overhead due to nested closures and multiple function calls. However, for most practical use cases, this overhead is negligible.
 *
 */

// How to make a normal function a curried function :
// const curry = (func) => {
// 	return function curried(...args) {
// 		if (args.length >= func.length) {
// 			return func(...args); // If enough arguments are provided, execute the function
// 		} else {
// 			return (...next) => curried(...args, ...next); // Otherwise, return a new curried function
// 		}
// 	};
// };

// const sum = (a, b, c) => {
// 	return a + b + c;
// };

// const curriedSum = curry(sum);

// console.log(curriedSum(1)(3)(4));

// Example: Generalized Curry Function
// function curry(func) {
// 	return function curried(...args) {
// 		// Check if the number of provided arguments is enough
// 		if (args.length >= func.length) {
// 			return func(...args); // Apply the function when all arguments are provided
// 		} else {
// 			return function (...nextArgs) {
// 				return curried(...args.concat(nextArgs)); // Keep collecting arguments
// 			};
// 		}
// 	};
// }

// function multiply(a, b, c) {
// 	return a * b * c;
// }

// const curriedMultiply = curry(multiply);

// console.log(curriedMultiply(2)(3)(4)); // Output: 24
// console.log(curriedMultiply(2, 3)(4)); // Output: 24
// console.log(curriedMultiply(2)(3, 4)); // Output: 24

// const sum = (a) => {
// 	return (b) => {
// 		return (c) => {
// 			return a + b + c;
// 		};
// 	};
// };

// console.log(sum(1)(4)(7));

// Infinite Currying Example :
// const infiniteCurrying = (a) => {
// 	return (b) => {
// 		if (b) return infiniteCurrying(a + b);
// 		return a;
// 	};
// };

// console.log(infiniteCurrying(2)(3)());

// Use of Currying in DOM Manipulation :
// const eventHandler = (eventType) => {
// 	return (elementId) => {
// 		return (callback) => {
// 			const element = document.getElementById(elementId);

// 			element.addEventListener(eventType, callback);
// 		};
// 	};
// };

// const clickHandler = eventHandler("click");

// clickHandler("click-me-button")(() => {
// 	alert("Button clicked successfully");
// });
