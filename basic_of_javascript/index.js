// ** Reverse a Number

// function reverseNumber(num) {
//   let reverseNumber = num.toString().split("").reverse().join("");

//   return reverseNumber;
// }

// // Example usage
// const originalNumber = 12345;
// const reversed = reverseNumber(originalNumber);

// console.log(typeof reversed); // Output: 54321

// ** Closure

// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log("Counter : ", counter);
//   }

//   return inner;
// }

// const fn = outer();
// fn();
// fn();

// Data types comparison
// const varialbeTrue1 = "true";
// const varialbeTrue2 = true;

// const variableNumber1 = "21";
// const variableNumber2 = 21;

// console.log("Double Equals To For True: ", varialbeTrue1 == varialbeTrue2);
// console.log("Triple Equals To For True: ", varialbeTrue1 === varialbeTrue2);

// console.log(
//   "Double Equals To For Number 21 : ",
//   variableNumber1 == variableNumber2
// );
// console.log(
//   "Triple Equals To For Number 21 : ",
//   variableNumber1 === variableNumber2
// );

// Object Comparison
// const person1 = {
//   name: "Tony",
//   age: 23,
// };

// const person2 = {
//   name: "Tony",
//   age: 23,
// };

// console.log("Person1 == person2 : ", person1.name == person2.name);
// console.log("Person1 === person2 : ", person1.name === person2.name);

// Difference between * (Multiplication) and ** (Exponentiation)
// let a = 3;

// Multiplication (*): Performs straightforward multiplication of two numbers.
// console.log("a * 12 : ", a * 3);

// Exponentiation (**): Raises a number (base) to the power of another number (exponent).
// console.log("a ** 12 : ", a ** 3);

// var a = {};
// var b = { key: "b" };
// var c = { key: "c" };

// a[b] = 600;
// b[c] = 700;

// console.log(a[c]);
// console.log(a[b]);
// console.log(b[b]);
// console.log(b[c]);

// ? DOM Manipulation :

// const clickMeButton = document.querySelector("#click-me-button");
// const resetButton = document.querySelector("#reset-button");

// const updateTextSize = (selector, sizeIncrement = 0, reset = false) => {
// 	const elements = document.querySelectorAll(selector);
// 	elements.forEach((element) => {
// 		if (reset) {
// 			element.style.fontSize = ""; // Reset to default font size
// 		} else {
// 			const currentSize = parseFloat(
// 				window.getComputedStyle(element).fontSize
// 			);
// 			element.style.fontSize = `${currentSize + sizeIncrement}px`;
// 		}
// 	});
// };

// resetButton.addEventListener("click", function () {
// 	updateTextSize("h1, h2, p, button", 0, true); // Adjust selector to match all elements
// });

// clickMeButton.addEventListener("click", function () {
// 	this.style.backgroundColor = "red";
// 	updateTextSize("h1, h2, p, button", 5); // Adjust selector and sizeIncrement as needed
// });

// console.log("START");

// setTimeout(() => {
// 	console.log("Set Timeout Callback");
// }, 3000);

// fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
// 	console.log("Fetch Callback");
// 	return response.json();
// });

// console.log("END");

// console.log(false == []);
// console.log(false == ![]);

// console.log("" == []);

// let name = "johnny";
// name[2] = "o";
// console.log(name);

// const numbers = [2, 3, 4, 5];

// const result = numbers.map((num) => num > 2);

// console.log("Result : ", result);
// console.log("Original : ", numbers);

// for (let i = 0; i < 5; i++) {
// 	setTimeout(() => {
// 		console.log("Inside timeout (using let) : ", i);
// 	}, 2000);
// }

//  Using IIFE (Immediately Invoked Function Expression) or setTimeout with an addition parameter to capture the current value of i, we can fix for "var" to mimic "let" behavior.
// for (var i = 0; i < 5; i++) {
// 	setTimeout(() => {
// 		console.log("Inside timeout (using var) : ", i);
// 	}, 2000);
// }

// for (var i = 0; i < 5; i++) {
// 	let j = i;

// 	setTimeout(() => {
// 		console.log(j);
// 	}, 1000);
// }

// *** map(), filter(), reduce() Interview Questions ***

//  ** Symbol in JavaScript
// const sym1 = Symbol("a");
// const sym2 = Symbol("b");
// const obj = {
// 	[sym1]: "value1",
// 	age: 30,
// 	[sym2]: "value2",
// 	name: "King",
// };

// Event Bubbling and Even Capturing

// const topDiv = document.getElementById("top-div");
// const midDiv = document.getElementById("mid-div");
// const bottomDiv = document.getElementById("bottom-div");

// topDiv.addEventListener(
// 	"click",
// 	(e) => {
// 		alert("TOP DIV clicked");
// 		e.stopPropagation();
// 	}
// 	// { capture: true }
// );

// midDiv.addEventListener(
// 	"click",
// 	(e) => {
// 		alert("MID DIV clicked");
// 		e.stopPropagation();
// 	}
// 	// { capture: true }
// );

// bottomDiv.addEventListener(
// 	"click",
// 	(e) => {
// 		alert("BOTTOM DIV clicked");
// 		e.stopPropagation();
// 	}
// 	// { capture: true }
// );

// console.log("Greater" > "elephant")

// console.log("Type of undefined : ", typeof undefined);
// console.log("Type of null : ", typeof null);
// console.log("Type of NaN : ", typeof Nan);
