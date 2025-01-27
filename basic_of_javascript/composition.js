/**
 *  * Composition in JavaScript :
 *
 *  - In JavaScript, composition is a design principle used to build complex functionality by combining smaller, reusable functions or objects.
 *  - It is an alternative to inheritance and often preferred because it promotes flexibility, modularity, and a clearer separation of concerns.
 *
 *  - Composition is the process of combining multiple independent and reusable units of behavior (functions or objects) to build more complex functionality.
 *  - It is often expressed as "has-a" or "uses" relationships, rather than the "is-a" relationship seen in inheritance.
 *
 *  - Why Use Composition :
 *          1) Avoids the Pitfalls of Inheritance
 *          2) Promotes Reusability
 *          3) Enhances Modularity
 *          4) Enables Greater Flexibility
 *
 *  - Key Principles of Composition :
 *          1) Single Responsibility Principle (SRP): Each unit should do one thing well.
 *          2) Separation of Concerns: Each function or object should address a specific concern or behavior.
 *          3) Immutability: Avoid mutating the original objects or functions where possible.
 *          4) Loose Coupling: Components should be loosely coupled to make them easier to test and maintain.
 *
 */

// const compose =
// 	(...functions) =>
// 	(...args) =>
// 		functions.reduceRight(
// 			(acc, fn) => (Array.isArray(acc) ? fn(...acc) : fn(acc)),
// 			args
// 		);

// // This is the understandable version of above compose function.
// const compose1 = (...functions) => {
// 	return (...args) => {
// 		return functions.reduceRight((acc, fn) => {
// 			// If acc is an array, spread it; otherwise, pass it directly
// 			return fn(...(Array.isArray(acc) ? acc : [acc]));
// 		}, args);
// 	};
// };

// // Example functions
// const add = (x, y) => x + y; // Takes two arguments
// const multiply = (x) => x * 2; // Takes one argument
// const square = (x) => x * x; // Takes one argument

// // Composing functions
// const result = compose(square, multiply, add)(5, 3);
// // Execution flow:
// // 1. add(5, 3) => 8
// // 2. multiply(8) => 16
// // 3. square(16) => 256

// console.log(result); // Output: 256

// Currying :

