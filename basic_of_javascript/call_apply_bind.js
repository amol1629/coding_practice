/**
 * * Call() Method :
 *  - The call() method calls a function with specified "this" value and arguments provided one by one.
 *
 *  - Syntax :
 *              functionName.call(thisArg, arg1, arg2, ....)
 *
 *                      thisArg => The value to be used as this when the function is called.
 *                      arg1, arg2, .... => The arguments to be passed to the function.
 *
 *  - We can invoke the call() method immediately by passing individual arguments and it does not returns a new function like bind();
 *  - The call() borrow a method from one object to another.
 *
 *
 *  * Apply() Method :
 *  - The apply() method is similar to call() method, but it takes an array (array-like object) of arguments instead of listing them individually.
 *
 *  - Syntax :
 *              functionName.apply(thisArg, [arg1, arg2, ....]);
 *
 *                      thisArg => The value to be used as this when the function is called.
 *                      [arg1, arg2, ....] => An array of  arguments to be passed to the function.
 *
 *  - We can invoke the apply() method immediately by passing  arguments in array and it does not returns a new function like bind();
 *  - Use apply() method when arguments are already in an array or array-like object.
 *
 *
 *
 * * Bind() Method :
 *  - The bind() method returns a new function with a specific this context and optional arguments pre-applied, without immediately calling the function.
 *
 *  - Syntax :
 *              const boundFunction = functionName.bind(thisArg, arg1, arg2, ....);
 *
 *                  thisArg => The value of "this" to be used inside the new function.
 *                  arg1, arg2, .... => The arguments to be pre-applied to the new function.
 *
 *  - In bind() method, we can not call it immediately, we pass arguments to it individually and it returns a new bound function.
 *  - The bind() method creates a function with a fixed "this" context, useful for event handling or partial application.
 *
 *  ? Function Borrowing :
 * 			=> Function borrowing allows an object to use the method belonging to another object.
 * 			=> Function borrowing is commonly  done using call(), apply(), or bind(), which explicitly set the "this" context of a function to another object.
 *
 *  - The bind() method is most commonly used for currying since it creates a partially applied function. The call() and apply() methods are less frequently applied in this context but can still illustrate partial application.
 *
 *  -
 */

// call() method example :
// const person = {
// 	name: "John",
// 	age: 30,
// 	introduce: function (organization, role) {
// 		console.log(
// 			`My name is ${this.name} and I am ${this.age} years old. I work in ${organization}, as a ${role}.`
// 		);
// 	},
// };

// const person1 = {
// 	name: "Johnny",
// 	age: 25,
// };

// person.introduce.call(person1, "Meta", "Software Engineer");

// apply() method example :
// const person = {
// 	name: "John",

// 	introduce: function (organization, role, age) {
// 		console.log(
// 			`My name is "${this.name}" and I am "${age}" years old. I work in "${organization}", as a "${role}".`
// 		);
// 	},
// };

// const person1 = {
// 	name: "Mike",
// 	age: 25,
// };

// person.introduce.apply(person1, ["Google", "Data Analyst", 25]);

// bind() method example :

function multiply(a, b) {
	return a * b;
}

const multiplyByTwo = multiply.bind(null, 2); // Pre-set `a` to 2
console.log(multiplyByTwo(5)); // Output: 10
