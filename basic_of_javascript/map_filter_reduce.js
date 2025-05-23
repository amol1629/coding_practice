/**
 * * map() Method :
 *  - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
 *
 *  - Syntax :
 *          const newArray = arrayName.map(callback(currentValue, index, array));
 *
 *                      ==> callback : The function that produces the new element.
 *                                  => currentValue : The current element being processed
 *                                  => index (optional) : The index of the current element being processed
 *                                  => array (optional) : The array the map() method was called upon
 *
 *  - The map() is "Higher Order Function" in JavaScript.
 *  -  The map() method handles passing of  arguments automatically, you do not need to manually pass parameters when calling the function within map().
 *
 *  - What happens behind the seen when using filter() method:
 *          1) The map() runs the function on every element.
 *          2) It returns whatever the function returns.
 *          3) The function can return anything (not just booleans).
 *          4) The resulting array contains the return values of the function.
 *          5) So, .map() creates a new array of the same length, with those boolean values.
 *
 *  - Use Cases :
 *          1) Transforming Data : Converting data to a different format.
 *          2) Applying a Function to Each Element : Useful for modifying or formatting array elements.
 *
 */

// const numbers = [40, 65, 99, 35];

// Method for converting decimal number to Binary number
// const conversionToBinary = (num) => {
//   return num.toString(2);
// };

// const result = numbers.map(conversionToBinary);

// console.log("Binary Number Array : ", result);

/**
 * * filter() Method :
 *  - The filter() method creates a new array with all elements that pass the test implemented by the provided function.
 *
 *  - Syntax :
 *          const newArray = arrayName.filter(callback(element, index, array))
 *
 *                      ==> callback : The function that produces the new element.
 *                                 => currentValue : The current element being processed
 *                                 => index (optional) : The index of the current element being processed
 *                                 => array (optional) : The array the filter() method was called upon
 *
 *  - The filter()  is "Higher Order Function" in JavaScript.
 *  - The filter() method  works with a single function. You can filter separately or combine conditions within one callback.
 *
 *  - What happens behind the seen when using filter() method:
 *          1) The filter() runs the function on every element.
 *          2) The function must return a boolean value (true or false).
 *          3) If the function returns true, the element is added to the new array.
 *          4) If the function returns false, the element is not added to the new array.
 *          5) The resulting array contains only the items that passed the test — i.e., the original numbers, not booleans.
 *          6) The filter() method returns a new array containing all the elements that passed the test.
 *
 *  - Use Cases :
 *          1) Filtering Data : Removing unwanted elements from an array.
 *          2) Creating a Subset of an Array : Useful for creating a new array with only the elements that meet a certain condition.
 *          3) Removing Duplicates : Useful for removing duplicate elements from an array.
 *
 */

// const numbers = [40, 65, 99, 35];

// const isEven = (num) => {
//   return num % 2 == 0;
// };

// const isOdd = (num) => {
//   return num % 2 != 0;
// };

// const result = numbers.filter((num) => isEven(num));

// console.log(result);

/**
 * * reduce() Method :
 *  - The reduce() method executes a reducer function on each element of the array, resulting in a single output value.
 *
 * - Syntax :
 *          const result = arrayName.reduce(callback(accumulator, currentValue, index, array), initialValue)
 *
 *                      ==> callback : Function executed on each element
 *                                  => accumulator : Accumulates the return value of each execution of the callback function
 *                                  => currentValue : The current element being processed.
 *                                  => index (optional) : The index of the current element
 *                                  => array (optional) : The array reduce() was called upon.
 *                          => initialValue (optional) : Initial value of the accumulator.
 *
 *  - In reduce() method, when an initial value isn't provided, reduce takes the first element of the array as the initial accumulator value and starts the iteration from the second element.
 *
 *  - Use Cases :
 *          1) Summing Array Elements : Finding the sum or total of array values
 *          2) Finding the Maximum or Minimum Value : Finding the maximum or minimum value in an array.
 *          3) Flattering Arrays : Reducing nested arrays into a single-level array
 *          4) Counting Occurrences : Counting elements based on conditions.
 *
 *  - The reduce() method return a single value.
 *  - The reduce()  is "Higher Order Function" in JavaScript.
 */

// const numbers = [10, 20, 30, 100, 40, 50, 60];

// const reducedResult = numbers.reduce((acc, curr) => {
//   return curr > acc ? curr : acc;
// }, 0);

// console.log("Max is:", reducedResult);

// Question : Find the firstName of those people whose age is less than 30
const users = [
	{ firstName: 'John', lastName: 'Doe', age: 23 },
	{ firstName: 'Agastha', lastName: 'Pandey', age: 28 },
	{ firstName: 'Elia', lastName: 'Watson', age: 40 },
	{ firstName: 'Mathew', lastName: 'Wade', age: 60 },
	{ firstName: 'Harry', lastName: 'Potter', age: 23 },
]

// const result = users
//   .filter((user) => user.age < 30)
//   .map((userName) => userName.firstName);

// console.log("Users less than age 30 : ", result);

// Using Reduce Method
const resultUsingReduce = users.reduce((acc, curr) => {
	if (curr.age < 30) {
		acc.push(curr.firstName)
	}
	return acc
}, [])
console.log('Users less than age 30 : ', resultUsingReduce)
