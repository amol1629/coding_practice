/**
 *  * "this" in JavaScript :
 *
 *  - In JavaScript, "this" is a special keyword that refers to the object that is executing the current function.
 *
 *  - The value of "this" depends on "how and where" the function is called.
 *  - Its behavior can vary depending on the context in which it is used.
 *
 * - Here's a breakdown of "this" in different contexts :
 *
 *      1) Global Context :
 *              => In global execution context (outside of any function) :
 *                      i) In browsers, "this" refers to the "window" object.
 *                      ii) In Node.js, "this" refers to the global object (global).
 *
 *      2) Inside a Function :
 *              => The value of "this" depends of how the function is called :
 *                      a) In a Regular Function :
 *                              - In a non-strict mode function, "this" refers to the global object (window in browser).
 *                              - In strict mode (use strict), "this" is "undefined" inside a regular function.
 *
 *                      b) As a Method of an Object :
 *                              - When a function is called as a method of an object, "this" refers to the object that owns the method.
 *
 *                      c) Inside Nested Functions :
 *                              - In nested functions, "this" can behave unexpectedly because it depends on the function's calling context.
 *                              - To resolve this issue, you can :
 *                                      i) Use an arrow function (inherits this from the enclosing scope).
 *                                      ii) Store "this" in a variable (e.g., const self = this).
 *
 *                      d) Inside Arrow Functions :
 *                              - Arrow functions do not have their own "this". Instead they inherit "this" from their enclosing lexical scope.
 *
 *      3) Inside a Constructor Function or Class :
 *              => When a function is used as a constructor (via the new keyword), "this" refers to the newly created object.
 *
 *      4) In class Syntax :
 *              => In JavaScript classes, "this" behaves similarly to "this" in constructor functions. If refers to the instance of the class.
 *
 *      5) "this" in Event Handlers :
 *              => When a event handler is attached directly to an element, "this" refers to the element that triggered the event.
 *              => If you use an arrow function, "this" inherits its value from enclosing scope.
 *
 *      6) Explicit Binding :
 *              => You can explicitly set the value of "this" to a specific value using call(), apply(), and bind() method.
 *
 *      7) Inside "setTimeout" and "setInterval"
 *              => By default, "this" inside setTimeout and setInterval refers to the global object (window in browser).
 *
 *      8) In "new Function"
 *              => Functions created using the Function constructor have their "this" set to global object, even in strict mode.
 *
 *  - Common Pitfalls and Notes :
 *          =>  Losing "this" :
 *                  - When passing objects methods as callbacks, "this" can lose it binding.
 *                  - Solution : Use "bind()" or arrow function to fix the binding.
 *          => Global vs Local Scope : Always check where the function is invoked to understand "this".
 *
 *
 *  Here’s a concise list where this refers to the global object:
 *      1) In the global execution context (outside any function).
 *      2) Inside a regular function (non-strict mode).
 *      3) Inside a nested function (non-strict mode).
 *      4) In setTimeout or setInterval callbacks (non-strict mode).
 *      5) Using new Function.
 *      6) When a function is called without an explicit context.
 *      7) When a method is extracted from an object and called standalone (non-strict mode).
 *      8) In non-strict mode with implicitly declared variables (e.g., undeclaredVar = 42).
 *      9) Inside a function passed as a callback (non-strict mode).
 *      10) With call, apply, or bind when thisArg is null or undefined.
 *
 *
 */

// Global Context
// In the global execution context, 'this' refers to the global object.
// In browsers: `this` points to `window`, while in Node.js, it points to the `global` object.
console.log(this); // In browsers: Window, in Node.js: {}

console.log(window === this); // true (only in browsers)

// -----------------------------------------------------------------------------

// Regular Function (Non-Strict Mode)
// In non-strict mode, 'this' inside a regular function refers to the global object.
function regularFunction() {
	console.log(this); // Global object (Window in browsers)
}
regularFunction();

// -----------------------------------------------------------------------------

// Regular Function (Strict Mode)
// In strict mode, 'this' inside a regular function is `undefined`.
("use strict");
function strictFunction() {
	console.log(this); // undefined
}
strictFunction();

// -----------------------------------------------------------------------------

// Object Method
// When a function is called as a method of an object, 'this' refers to the object.
const obj = {
	name: "JavaScript",
	getName: function () {
		console.log(this.name); // "JavaScript"
	},
};
obj.getName();

// -----------------------------------------------------------------------------

// Nested Function
// Inside a nested function, 'this' depends on how the function is called.
const nestedObj = {
	name: "Nested Example",
	outerFunction: function () {
		console.log(this.name); // "Nested Example"

		function innerFunction() {
			console.log(this); // Global object (or undefined in strict mode)
		}
		innerFunction();
	},
};
nestedObj.outerFunction();

// -----------------------------------------------------------------------------

// Arrow Function
// Arrow functions do not have their own 'this'; they inherit it from their enclosing scope.
const arrowExample = {
	name: "Arrow Example",
	arrowFunction: () => {
		console.log(this.name); // Undefined (or inherited from the global scope)
	},
};
arrowExample.arrowFunction();

const arrowWithMethod = {
	name: "Arrow with Method",
	method: function () {
		const arrow = () => {
			console.log(this.name); // "Arrow with Method"
		};
		arrow();
	},
};
arrowWithMethod.method();

// -----------------------------------------------------------------------------

// Constructor Function
// 'this' in a constructor refers to the new object being created.
function Person(name) {
	this.name = name;
}
const person1 = new Person("John");
console.log(person1.name); // "John"

// -----------------------------------------------------------------------------

// Class
// In a class, 'this' refers to the instance of the class.
class Animal {
	constructor(name) {
		this.name = name;
	}
	sayName() {
		console.log(this.name);
	}
}
const dog = new Animal("Dog");
dog.sayName(); // "Dog"

// -----------------------------------------------------------------------------

// Event Handlers
// When an event handler is attached to an element, 'this' refers to the element.
document.querySelector("button").addEventListener("click", function () {
	console.log(this); // The button element
});

// With an arrow function, 'this' inherits from the outer scope (e.g., the global context or enclosing function).
document.querySelector("button").addEventListener("click", () => {
	console.log(this); // Global object or Window
});

// -----------------------------------------------------------------------------

// Explicit Binding: call, apply, bind
// Using `call`, `apply`, or `bind` allows explicitly setting the value of 'this'.

// Using `call`
function greet(greeting) {
	console.log(`${greeting}, ${this.name}`);
}
const user = { name: "Alice" };
greet.call(user, "Hello"); // "Hello, Alice"

// Using `apply`
greet.apply(user, ["Hi"]); // "Hi, Alice"

// Using `bind`
const boundGreet = greet.bind(user);
boundGreet("Hey"); // "Hey, Alice"

// -----------------------------------------------------------------------------

// setTimeout and setInterval
// In a setTimeout or setInterval, 'this' refers to the global object (or undefined in strict mode).
setTimeout(function () {
	console.log(this); // Global object (Window in browsers)
}, 1000);

// Using an arrow function preserves the 'this' value from the enclosing scope.
setTimeout(() => {
	console.log(this); // Inherits 'this' from the surrounding context
}, 1000);

// -----------------------------------------------------------------------------

// new Function
// Functions created with `new Function` always have 'this' set to the global object.
const dynamicFunc = new Function("return this");
console.log(dynamicFunc()); // Global object (Window in browsers)
