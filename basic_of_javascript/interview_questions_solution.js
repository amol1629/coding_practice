/**
 * 	
 * * 1)	Reverse a string in JavaScript without using built-in functions.**
 * 	
 * * 2)	Write a function to check if a string is a palindrome.**
 * 	
 * * 3)	Implement a function to flatten a nested array.**
 * 	
 * * 4)	Write a debounce function from scratch.**
 * 	
 * * 5)	Write a function to find the first non-repeating character in a string.**
 * 	
 * * 6)	Implement a function to merge two sorted arrays.**
 * 	
 * * 7)	Write a function to check if two objects are deeply equal.**
 * 	
 * * 8)	Create a simple promise-based delay function.**
 * 	
 * * 9)	Implement a simple event emitter.**
 * 	
 * * 10)	Explain and write code for memoization in JavaScript.**
 * 	
 * * 11)	Write a function to find the maximum sum of a subarray using Kadane’s algorithm.**
 * 	
 * * 12)	Implement a function to check if a number is prime.**
 * 	
 * * 13)	Create a function that removes duplicates from an array.**
 * 	
 * * 14)	Write a function to find the intersection of two arrays.**
 * 	
 * * 15)	Implement a function to generate all permutations of a string.**
 * 	
 * * 16)	Write a function to convert a string to title case.**
 * 	
 * * 17)	Create a function to shuffle an array.**
 * 	
 * * 18)	Write a function to find the longest common prefix in an array of strings.**
 * 	
 * * 19)	Implement a function to group anagrams together.**
 * 	
 * * 20)	Write a function that returns the nth Fibonacci number using dynamic programming.**
 * 	
 * * 21)	Write a function to rotate an array by k steps to the right.**
 * 	
 * * 22)	Implement a function to find the missing number in an array of size n with numbers from 1 to n.**
 * 	
 * * 23)	Write a function to count the number of vowels in a string.**
 * 	
 * * 24)	Create a function to check if a given string is an anagram of another.**
 * 	
 * * 25)	Implement a function to find the longest palindrome substring in a string.**
 * 	
 * * 26)	Write a function to implement binary search on a sorted array.**
 * 	
 * * 27)	Create a function to find the maximum product of two integers in an array.**
 * 	
 * * 28)	Implement a function to validate if a string has balanced parentheses.**
 * 	
 * * 29)	Write a function to perform a deep clone of an object.**
 * 	
 * * 30)	Implement a function to compute the power of a number using recursion.**
 */

// 	! Q.1. Reverse a string in JavaScript without using built-in functions.

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

// ! Q. Difference between "map()" and "forEach()"
// const numbers = [2, 4, 5, 6, 10];

// numbers.forEach((num) => {
// 	console.log(num * 10);
// });

// console.log("Original array after forEach : ", numbers);

// const mapResult = numbers.map((num) => num * 2);

// console.log(mapResult);

// ------------------------------------------------

/**
 *  ! Q. Type Coercion Questions :
 */
// console.log(![] + []);
// console.log(typeof (![] + []));
// console.log([] == true);
// console.log("" == true);
// console.log("JavaScript" == true);

// ------------------------------------------------

/**
 * 	! Q. Object of Object in JavaScript :
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
 * ! Q. Fibonacci Series :
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
 * !. Find duplicate elements from array :
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
 *  ! Q. Infinite Currying :
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
 * ! Composition in JavaScript :
 */
// const compose =
// 	(...functions) =>
// 	(...args) =>
// 		functions.reduceRight(
// 			(acc, fn) => (Array.isArray(acc) ? fn(...acc) : fn(acc)),
// 			args
// 		);

// This is the understandable version of above compose function.
// const compose1 = (...functions) => {
// 	return (...args) => {
// 		return functions.reduceRight((acc, fn) => {
			// If acc is an array, spread it; otherwise, pass it directly
// 			return Array.isArray(acc) ? fn(...acc) : fn(acc);
// 		}, args);
// 	};
// };

 // Example functions
// const add = (x, y) => x + y; // Takes two arguments
// const multiply = (x) => x * 2; // Takes one argument
// const square = (x) => x * x; // Takes one argument

// Composing functions
// const result = compose1(square, multiply, add)(5, 3);
// Execution flow:
// 1. add(5, 3) => 8
// 2. multiply(8) => 16
// 3. square(16) => 256

// console.log(result); // Output: 256
// --------------------------------------------------------------------



// --------------------------------------------------------------------
/**
 *  ! Q. Merge Two String Alternatively :
 */

// let str1 = "Hello";
// let str2 = "JaaScript";

// const mergeTwoStrings = (str1, str2) => {
// 	let result = "";

// 	let len1 = str1.length;
// 	let len2 = str2.length;

// 	let maxLength = Math.max(len1, len2);

// 	for (let i = 0; i < maxLength; i++) {
// 		if (i < len1) result += str1[i];
// 		if (i < len2) result += str2[i];
// 	}

// 	return result;
// };

// console.log(mergeTwoStrings(str1, str2));

// --------------------------------------------------------------------
