/**
 *  * Factory Functions in JavaScript :
 *
 *  - A factory function is a regular JavaScript function that creates and returns a new object.
 *  - It provides a way to create multiple objects with similar structures or behaviors without explicitly using a class or the "new" keyword.
 *  - Factory functions are often used when you need more flexibility than classes can provide.
 *
 *  - Key Features of Factory Functions :
 *          1) Encapsulation : You can hide internal details, exposing only the properties and methods you want.
 *          2) Reusability : Creates multiple objects with similar properties and behaviors.
 *          3) No "new" Keyword : Unlike classes, factory functions do not require "new" keyword to create instance.
 *          4) No Prototype Issues : Each object gets its own copy of methods, making it more straightforward in some scenarios.
 *
 *  - Disadvantages of Factory Method :
 *          1) Higher Memory Usage : If methods are created for each object, memory usage may increase compared to using prototypes in classes.
 *          2) No Native Inheritance : Inheritance requires manual implementation, unlike classes.
 *
 *  - Using closures, you can create "private variables" inside a factory function.
 *  -
 */

// Basic Example of Factory Function :
const createPerson = (name, age) => {
	return {
		name,
		age,
		greet() {
			console.log(`My name is ${name}. I am ${age} years old now.`);
		},
	};
};

const agastha = createPerson("Agastha", 30);
agastha.greet();

// Creation of private variable inside factory function using closures :
// const createCounter = () => {
// 	let count = 0;

// 	return {
// 		increment() {
// 			count++;
// 			console.log("Incremented count : ", count);
// 		},

// 		decrement() {
// 			count--;
// 			console.log("Decremented count : ", count);
// 		},

// 		getCount() {
// 			return count;
// 		},
// 	};
// };

// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.decrement();
// console.log(counter.getCount());
