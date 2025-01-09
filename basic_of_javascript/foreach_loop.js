/**
 * * forEach Loop :
 * - The forEach() method in JavaScript is a built-in function for iterating over arrays and objects. Unlike "for" loops or "for...of" loops, it provides a cleaner, more readable way to perform an action on each item in an array or object without explicitly managing loop counters.
 *
 *  - Syntax :
 *          arrayName.forEach(callback(currentValue, index , array), thisArg)
 *
 *                  ==> callback : function that will be called for each element in the array.
 *                              => currentValue : The current element being processed in the array
 *                              => index (optional) : The index of the current element being processed in the array.
 *                              => array (optional) : The array that forEach was called on.
 *                  ==> thisArg (optional) : Value to use as "this" when executing the callback.
 *
 * - Use Cases :
 *          1) Performing Side Effects : The forEach() method is useful when you need to perform side effects, such as logging, updating the DOM, or making API calls, for each item in an array but not for creating new arrays (use map() for that).
 *          2) Mutating Objects or Arrays
 *
 *  - Key Notes :
 *          1) The callback function is called for each element in the array, but it is not called for sparse arrays (arrays with gaps in the index sequence).
 *          2) No Return Value : Unlike map(), forEach() does not return a new array.
 *          3) No Support for Break or Continue : Unlike "for" loops, you cannot use break or continue statements in a forEach() loop.
 *          4) No Support for Index : If you need to use the index of the current element, you must pass it as an argument to the callback function.
 *          5) Mutability : Direct mutation on objects inside forEach() will persist.
 *
 *  - Limitations :
 *          1) No Support for Break or Continue : Unlike "for" loops, you cannot use break or continue statements in a forEach() loop.
 *          2) No Support for Index
 *          3) No Return Value
 *          4) No Support for Sparse Arrays
 *
 */

// Basic Usage
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
  console.log(num * 2);
});

// Using forEach() loop, we can mutate the objects or arrays
const users = [
  { name: "Alice", active: false },
  { name: "Bob", active: false },
];
users.forEach((user) => (user.active = true));
console.log(users);
