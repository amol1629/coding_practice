/**
 * **Reverse a string in JavaScript without using built-in functions.**
 * **Write a function to check if a string is a palindrome.**
 * **Implement a function to flatten a nested array.**
 * **Write a debounce function from scratch.**
 * **Write a function to find the first non-repeating character in a string.**
 * **Implement a function to merge two sorted arrays.**
 * **Write a function to check if two objects are deeply equal.**
 * **Create a simple promise-based delay function.**
 * **Implement a simple event emitter.**
 * **Explain and write code for memoization in JavaScript.**
 * **Write a function to find the maximum sum of a subarray using Kadane’s algorithm.**
 * **Implement a function to check if a number is prime.**
 * **Create a function that removes duplicates from an array.**
 * **Write a function to find the intersection of two arrays.**
 * **Implement a function to generate all permutations of a string.**
 * **Write a function to convert a string to title case.**
 * **Create a function to shuffle an array.**
 * **Write a function to find the longest common prefix in an array of strings.**
 * **Implement a function to group anagrams together.**
 * **Write a function that returns the nth Fibonacci number using dynamic programming.**
 * **Write a function to rotate an array by k steps to the right.**
 * **Implement a function to find the missing number in an array of size n with numbers from 1 to n.**
 * **Write a function to count the number of vowels in a string.**
 * **Create a function to check if a given string is an anagram of another.**
 * **Implement a function to find the longest palindrome substring in a string.**
 * **Write a function to implement binary search on a sorted array.**
 * **Create a function to find the maximum product of two integers in an array.**
 * **Implement a function to validate if a string has balanced parentheses.**
 * **Write a function to perform a deep clone of an object.**
 * **Implement a function to compute the power of a number using recursion.**
 */

// Q.1. Reverse a string in JavaScript without using built-in functions.

// Solution 1 : Reversing each character of the string

// const reverseString = (str) => {
// 	let reversedString = "";
// 	for (let i = str.length - 1; i >= 0; i--) {
// 		reversedString += str[i];
// 	}

// 	return reversedString;
// };

// let stringToBeReversed = "Hello, World!";
// const result = reverseString(stringToBeReversed);
// console.log(`Reversed String: ${result}`);

// Solution 2 : Reversing each word of the string
// const reverseWordsOptimized = (str) => {
// 	const wordArray = str.split(" ");

// 	let reversedStringArray = [];

// 	for (let i = wordArray.length - 1; i >= 0; i--) {
// 		reversedStringArray.push(wordArray[i]);
// 	}

// 	return reversedStringArray.join(" ");
// };

// let stringToBeReversed = "Hello, World Man!";
// const result = reverseWordsOptimized(stringToBeReversed);
// console.log(`Reversed String: ${result}`);

/**
 *
 *  - JavaScript compares strings lexicographically (dictionary order) based on their Unicode code points.
 *
 *  - The comparison is done character by character, starting from the first character of each string.
 */
// console.log("Greater" > "elephant")

// ------------------------------------------------

// Q. Difference between "map()" and "forEach()"
// const numbers = [2, 4, 5, 6, 10];

// numbers.forEach((num) => {
// 	console.log(num * 10);
// });

// console.log("Original array after forEach : ", numbers);

// const mapResult = numbers.map((num) => num * 2);

// console.log(mapResult);

// ------------------------------------------------

/**
 *  Q. Type Coercion Questions :
 */
// console.log(![] + []);
// console.log(typeof (![] + []));
// console.log([] == true);
// console.log("" == true);
// console.log("JavaScript" == true);

// ------------------------------------------------

/**
 * Q. Object of Object in JavaScript :
 *
 *  - Objects used as keys in JavaScript objects are converted to strings.
 *  - By default, the string representation of a plain object is "[object Object]".
 *  - If multiple objects are used as keys, they can overwrite each other if they have the same string representation.
 */

// let a = {};
// let b = { key: "a" };
// let c = { key: "b" };

// a[b] = 100; // a ["object object"] = 100
// a[c] = 200; // a ["object object"] = 200

// console.log(a[b]); // console.log(a ["object object]") => 200
// console.log(a);
// console.log(b);
// console.log(c);

// ------------------------------------------------

/**
 * Q. Fibonacci Series :
 */

// function fibonacciIterative(n) {
// 	let fib = [0, 1]; // Initialize the first two numbers of the Fibonacci series

// 	if (n <= 1) return fib.slice(0, n); // Handle edge cases for n = 0 or n = 1

// 	for (let i = 2; i < n; i++) {
// 		fib.push(fib[i - 1] + fib[i - 2]); // Add the sum of the last two numbers
// 	}

// 	return fib;
// }

// // Example usage
// console.log(fibonacciIterative(10));

// ------------------------------------------------

/**
 * Q. Find duplicate elements from array :
 */

// const numbers = [1, 2, 3, 4, 5, 2, 4];

// const findDuplicates = (arr) => {
// 	let seen = [];
// 	return arr.filter((num) => {
// 		if (seen.includes(num)) {
// 			return true; // It's a duplicate
// 		}
// 		seen.push(num); // Add to the seen array
// 		return false; // Not a duplicate
// 	});
// };

// console.log(findDuplicates(numbers)); // Output: [2, 4]

// ------------------------------------------------

/**
 *  Q. Infinite Currying :
 */

// const infiniteCurrying = (sum = 0) => {
// 	return (num) => {
// 		if (sum == undefined) return sum;
// 		if (num) return infiniteCurrying(sum + num);

// 		return sum;
// 	};
// };

// console.log(infiniteCurrying(4)(40)());

/**
 * * Composition in JavaScript :
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
