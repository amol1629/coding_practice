/******************************************************************************************************************************************
 * Closures in JavaScript :
 *  - Closures are the combination of functions bundled together with reference to its surrounding.
 *  - In other words closures give access to the outer function's scope from an inner function.
 *  - Closures in JavaScript allows functions to have access to variables from their outer(enclosing) scope even after the outer function has finished executing. This is possible because, when a function is created, it retains a reference to its lexical environment, which includes the scope in which the function was created. This reference is what allows the inner function to access the outer function's variables.
 *  - Closures are useful for creating private variables and methods in JavaScript, as well as for creating functions that can be used to manage state such as counters or accumulators.
 *  - A closure is created when a function accesses variables from its lexical environment, even after the outer function that created those variables has returned.
 *
 *
 *  ? Lexical Scope :
 * 			=> The lexical scope refers to the location where a variable is declared in the source code, determining its availability.
 * 			=> Functions defined inside another function have access to their own scope as well as the scope of their parent function(s)
 *
 *
 *  - Practical Applications of Closures  :
 * 			1) Data Hiding (Emulating Private Variables)
 * 					=> Closures are commonly used to create "private variables" in JavaScript, which are otherwise not natively supported.
 * 			2) Function Factories :
 * 					=> You can use closures to create "function factories" that generate specialized functions.
 * 			3) Partial Application :
 * 					=> Closures can be used in "currying and partial application" to create specialized versions of functions.
 * 			4) Closures are useful in real-world applications, such as in event listeners, timers, and other asynchronous operations.
 * 			5) Maintaining state across function calls.
 *  		6) Used in functional programming, where they are used to create higher-order functions that can be composed together to create more complex functions.
 *  		7) Used in reactive programming, where they are used to create observables and observers.
 *
 *  - In simpler term, a closure allows a function to "remember" variables from its outer function even after the outer function finished executing.
 *
 *
 ******************************************************************************************************************************************/

// function outer() {
// 	let name = "closure";
// 	console.log("Outer Function STARTS");

// 	function inner() {
// 		console.log("Inner Function Calling : ", name);
// 	}

// 	console.log("Outer Function ENDS");
// 	return inner;
// }

// outer();

// closureResult();
