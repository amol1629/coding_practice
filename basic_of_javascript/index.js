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

const clickMeButton = document.querySelector("#click-me-button");
const resetButton = document.querySelector("#reset-button");

const updateTextSize = (selector, sizeIncrement = 0, reset = false) => {
	const elements = document.querySelectorAll(selector);
	elements.forEach((element) => {
		if (reset) {
			element.style.fontSize = ""; // Reset to default font size
		} else {
			const currentSize = parseFloat(
				window.getComputedStyle(element).fontSize
			);
			element.style.fontSize = `${currentSize + sizeIncrement}px`;
		}
	});
};

resetButton.addEventListener("click", function () {
	updateTextSize("h1, h2, p, button", 0, true); // Adjust selector to match all elements
});

clickMeButton.addEventListener("click", function () {
	this.style.backgroundColor = "red";
	updateTextSize("h1, h2, p, button", 5); // Adjust selector and sizeIncrement as needed
});
