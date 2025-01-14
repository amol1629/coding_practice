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
