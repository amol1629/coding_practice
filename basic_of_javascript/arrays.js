/**
 * Mutator Methods in Array : These method modifies the origin array.
 *      ? 1) push() ==> Add one or more elements to the end of an array and returns the new length of the array.
 *
 *      ? 2) pop() ==> Removes the last element from an array and returns that removed element.
 *
 *      ? 3) shift() ==> Removes the first element from an array and returns that removed element.
 *
 *      ? 4) unshift() ==> Adds one or more elements to the beginning of an array and returns the new length of the array.
 *
 *      ? 5) splice() ==> Adds and/or removes elements from an array.
 *
 *      ? 6) sort() ==> Sorts the elements from an array in place and returns the array.
 *
 *      ? 7) reverse() ==> Reverse the order of the elements in array in place.
 *
 *      ? 8) fill() ==> Fills all the elements of an array from a start index to an end index with a static value.
 *
 *      9) copyWithin() ==> Copies a sequence of array element withing the array to the position starting at target.
 */

/**
 * Accessor Methods in Array : These method do not modifies the origin array instead return a new value of representation.
 *      ? 1) concat() ==> merge two or more arrays and returns new array.
 *
 *      ? 2) slice() ==> Returns a "shallow copy" of a portion of an array into a new array object.
 *
 *      ? 3) join() ==> Joins all elements of an array into a string.
 *
 *      ? 4) indexOf() ==> Returns the first index at which a given element can be found in the array.
 *
 *      ? 5) lastIndexOf() ==> Returns the last index at which a given element can be found in the array.
 *
 *      ? 6) includes() ==> Determines whether an array includes a certain value among its entries.
 *
 *      ? 7) toString() => Returns a string representing the array and its elements.
 *
 *      8) toLocalString() ==> Returns a localized string representing the array and its elements
 *
 *      ? 9) find() ==> Returns the value of the first element in the array that satisfy the provided testing function.
 *
 *      ? 10) findIndex() ==> Returns the value of the first element in the array that satisfy the provided testing function.
 *
 *      ? 11) filter() ==> Creates the new array with all elements that pass the test implemented by the provided function.
 *
 *      ? 12) map() ==> Creates a new array with the results of calling a provided function on every element in the calling array.
 *
 *      ? 13) reduce() ==> Applies a function against the accumulator and each element in the array to reduce it to a single value.
 *
 *      14) reduceRight() ==> Applies a function against the accumulator and each element in the array from right-to-left to reduce it to a single value.
 *
 *      ?? 15) some() ==> Tests whether at least one element in the array passes the test implemented by the provided function.
 *
 *      ? 16) every() ==> Tests whether all the elements in the array pass the test implemented by the provided function.
 *
 *      17) flat() ==> Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 *
 *      18) flatMap() ==> First map each element using mapping function, then flattens the result into a new array.
 * 
 *      ? 19) toSorted() ==> Returns a new array with the elements of the array in sorted order.
 * 
 *      ? 20) toReversed() ==> Returns a new array with the elements of the array in reversed order.
 */

/********************************************************************************
 *
 *  ! push() Method :
 *  -  The push() method in JavaScript is used to add one or more elements to the end of an array.
 *  - The push() method modifies the original array (it's a mutator method)
 *  - It returns the new length of the array after the elements are added.
 *
 *******************************************************************************/

// const pushArray = [10, 20, 30, 40];
// const returnValue = pushArray.push(50, 60, 70);

// console.log("Original Array:", pushArray);
// console.log("Push Method Return : ", returnValue);

/********************************************************************************
 *
 *   ! pop() Method :
 *  - The pop() method in JavaScript is used to remove the last element from an array.
 *  - The pop() method modifies the original array (it's a mutator method)
 *  - It returns the removed element. If the array is empty, it returns undefined.
 *
 *******************************************************************************/

// const popArray = [10, 20, 30, 40];
// const returnValue = popArray.pop();
// console.log("Original Array:", popArray);
// console.log("Push Method Return : ", returnValue);

/********************************************************************************
 *
 *  ! toString() Method :
 *  - The toString() method converts an array into a comma-separated string of its element.
 *  - It always uses comma (,) as a separator.
 *  - It does not allow customization of the operator.
 *  - It is less flexible.
 *  - It is an "accessor method" of array.
 *  - If we use empty array, then it will return an empty string ("")
 *  - Use Case => Quick conversion to comma separated.
 *
 *******************************************************************************/

// const toStringArray = [10, 20, true];
// const returnValue = toStringArray.toString();
// console.log("Original Array:", toStringArray);
// console.log("toString() Method Return : ", returnValue);

/********************************************************************************
 *
 *  ! join() Method :
 *  - The toString() method also converts an array into a string, but it allows you to specify a "custom separator" between elements.
 *  - If no separator provided, it defaults to a comma (,) -- just like toString().
 *  - It is more flexible that toString() method.
 *  - It is an "accessor method" of array.
 *  - If we use empty array, then it will return an empty string ("")
 *  - Use Case => Fine-grained control over formatting.
 *
 *******************************************************************************/

// const joinArray = [10, 20, 30, 40];
// const defaultJoin = joinArray.join();
// const joinWithSeparator = joinArray.join(" - ");
// console.log("Original Array : ", joinArray);
// console.log("Default Join : ", defaultJoin);
// console.log("Join With Separator : ", joinWithSeparator);

/********************************************************************************
 *
 *  ! shift() Method :
 *  - The shift() method removes the first element from an array and returns that removed element.
 *  - This operation modifies the original array by shifting all subsequent elements one position to the left, thereby decreasing the array's length by one.
 *  - If the array is empty, undefined is returned and the array is not modified.
 *  - It is mutator method.
 *  - Since it involves the re-indexing of the elements, it can be less efficient for large arrays compared to methods that operate on the end of the array, such as push() and pop().
 *
 *******************************************************************************/

// const shiftArray = [10, 20, 30, 40];
// const removedElement = shiftArray.shift();
// console.log("Original Array : ", shiftArray);
// console.log("Shift Method Return : ", removedElement);

/********************************************************************************
 *
 *  ! unshift() Method :
 *  - The unshift() method adds the element to the beginning of the array and returns the new length of the array.
 *  - This operation modifies the original array by shifting existing element to the right to accommodate the new element at the start.
 *  - It is mutator method.
 *  - Since it involves the re-indexing of the elements, it can be less efficient for large arrays compared to methods that operate on the end of the array, such as push() and pop().
 *  - Returns the new length of the array after adding the elements.
 *
 *******************************************************************************/

// const unshiftArray = [10, 20, 30, 40];
// const removedElement = unshiftArray.unshift("tony");
// console.log("Original Array : ", unshiftArray);
// console.log("Shift Method Return : ", removedElement);

/********************************************************************************
 *
 *  ! concat() Method :
 *  - The concat() method used to merge two or more arrays into a new array.
 *  - It does not modifies the original array but returns the new array containing the combined elements.
 *  - It is accessor method.
 *  - You can pass multiple arrays or values to concat(),and it will merge them in the order they provided.
 *  - The concat() can also merge the individual values along with the arrays.
 * - If an array to be concatenated contains nested arrays, concat() does not flatten them, the nested array remains as is.
 *  - In JavaScript, the concat() method merges arrays but does not flatten nested arrays. To achieve a flattened array when concatenating nested arrays, you can use the flat() method or the spread operator (...).
 *  -  The concat() method can also be used to create a shallow copy by concatenating the array with an empty array. 

 *
 *******************************************************************************/

// const array1 = [10, 20, 30];
// const array2 = [99, 88, 77];

// const concatenatedArray = array1.concat(array2, 44);
// console.log("Concatenated Array : ", concatenatedArray);

//  *  If an array to be concatenated contains nested arrays, concat() does not flatten them, the nested array remains as is.

// const nestedArray = [["tony", "hulk", "thor"]];
// const concatenatedNestedArray = array1.concat(nestedArray);
// console.log("Concatenated Nested Array : ", concatenatedNestedArray);

/********************************************************************************
 *
 *  ! slice() Method :
 *  - The slice() method creates a shallow copy of a portion of an array into a new array object without modifying the original array.
 *
 *  - It takes two optional parameters :
 *      1) the start index ==> The index at which to begin the extraction. If omitted, it defaults to 0 and wil return the exact original array (sometimes used for copying the array).
 *      2) end index ==> The index at which to end extraction (exclusive). If omitted, it defaults to the array's length.
 *
 *  - It is accessor method.
 *  - It does not modify the original array.
 *  - It returns a new array containing the selected elements.
 *  - The negative indices can be used to count from the end of the array.
 *  - Slice method return an empty array only when :
 *          1) start index is greater than or equal to end index after normalization or
 *          2) Both the indices are out of bounds for the array.
 *
 *******************************************************************************/

// const sliceArray = [10, 20, 30, 40, 50, 60];
// const newSlicedArray = sliceArray.slice(1, -3);

// console.log("Original Array : ", sliceArray);
// console.log("Sliced Array : ", newSlicedArray);

/********************************************************************************
 *
 *  ! splice() Method :
 *  - The splice() method changes the contents of an array by removing, replacing, or adding elements in place.
 *  - It modifies the original array and returns an array containing the removed elements.
 *  - It is mutator method.
 *
 *  - Syntax  ==> array.splice(startIndex, deleteCount, item1, item2, ..., itemN);
 *
 *  - It takes at least two parameters : 1) startIndex 2) deleteCount 3) additional elements can be added after these parameters :
 *              1) startIndex ==> The start index is the position at which to start changing the array. If it is greater than the length of the array, the method will simply append the new elements to the end of the array.
 *              2) deleteCount ==> The number of elements to remove. If omitted, all elements from the startIndex to the end of the array are removed.
 *              3) items to add (optional) ==> The elements to add the array, starting at startIndex.
 *
 *  - You can add new elements by specifying them after the deleteCount.
 *
 *  - For splice() :
 *              1) If start is beyond the array length :
 *                      ==> No elements are removed or added
 *                      ==> The method still work without error.
 *              2) If deleteCount is 0 :
 *                      ==> No elements are removed, but elements can still be added.
 *              3) If deleteCount is greater than the number of elements remaining in the array :
 *                      ==> Only available elements from start onward are removed.
 *
 *  - If deleteCount is negative, it is treated as 0, and no elements are removed. You can still add elements.
 *
 *******************************************************************************/

//  const spliceArray = [10, 20, 30, 40, 50, 60];

//  const returnSplicedArray = spliceArray.splice(1, 1);

// console.log("Original Array : ", spliceArray);
// console.log("Spliced Array : ", returnSplicedArray);

/********************************************************************************
 *
 *  ! find() Method :
 *  - The find() method in JavaScript is a powerful and frequently used method that helps retrieve the first element in an array that satisfies the provided condition (or testing function).
 *  - It is a accessor method.
 *
 *  - Syntax : array.find(callback(element, index, array), thisArg)
 *            ==> callback : A function that is called for each element in the array. It takes three arguments : element, index, and array.
 *                          i) element : The current element being processed in the array.
 *                          ii) index (optional) : The index of the current element being processed in the array.
 *                          iii) array (optional) : the entire array find() was called on.
 *          ==> thisArg (optional) : A value to use as this when executing callback.
 *
 *  - The find() method stops iterating once it finds a match, making it more efficient than methods like filter() if only one result is needed.
 *  - It returns "undefined" if no element satisfies the condition.
 *
 *******************************************************************************/
// const findArray = [10, 20, 30, 40, 50];
// const findResult = findArray.find((num) => num > 40);

// console.log("Original Array : ", findArray);
// console.log("Find Result : ", findResult);

/********************************************************************************
 *
 *  ! findIndex() Method :
 *  - The findIndex() method in JavaScript is used to find the index of the first element in an array that satisfies the provided condition (or testing function).
 *  - It is a accessor method.
 *
 *  - Syntax : array.find(callback(element, index, array), thisArg)
 *            ==> callback : A function that is called for each element in the array. It takes three arguments : element, index, and array.
 *                          i) element : The current element being processed in the array.
 *                          ii) index (optional) : The index of the current element being processed in the array.
 *                          iii) array (optional) : the entire array findIndex() was called on.
 *          ==> thisArg (optional) : A value to use as this when executing callback.
 *
 *  - Return Value :
 *          ==> The index of the first element in the array that satisfies the provided testing function.
 *          ==> -1 if no element satisfies the testing function.
 *
 *******************************************************************************/

// const numbers = [10, 20, 30, 40];

// const index = numbers.findIndex(num => num > 25);
// console.log(index); // 2 (30 is the first match)

// const notFoundIndex = numbers.findIndex(num => num > 50);
// console.log(notFoundIndex); // -1 (no match)

/********************************************************************************
 *
 *  ! indexOf() Method :
 *  - The indexOf() method in JavaScript is used to find the first occurrence of a specified element in an array or substring in a string.
 *  - It is an accessor method.
 *  - If the element or substring is not found, the method returns -1.
 *  - The indexOf() method is case-sensitive when used on strings.
 *
 *  - Syntax :
 *          1) For String : string.indexOf(searchValue, fromIndex)
 *                  => searchValue : The value to search for in the string.
 *                  => fromIndex (optional) : The index at which to start the search.
 *
 *          2) For Array : array.indexOf(searchElement, fromIndex)
 *                  => searchElement : The element to locate in the array.
 *                  => fromIndex (optional) : The index at which to start the search.
 *
 *         3) For TypedArray : typedArray.indexOf(searchElement, fromIndex)
 *                  => searchElement : The element to locate in the typedArray.
 *                  => fromIndex (optional) : The index at which to start the search.
 *
 *  - If the index is greater than or equal to the array's length, -1 is returned, and the array is not searched.
 *  -  If the provided index value is negative, it is used as the offset from the end of the array.
 *  - If the calculated index is less than 0, the entire array will be searched.
 *  - If the index is omitted, the search starts at index 0.
 *
 *  - Return Value :
 *          ==> Return -1 if the element is not found.
 *
 *******************************************************************************/

// For String :
// let str = "Hello, world!";
// console.log(str.lastIndexOf("o")); // Output: 8 (last 'o' in "world")
// console.log(str.lastIndexOf("world")); // Output: 7
// console.log(str.lastIndexOf("z")); // Output: -1

// For Array :
// let arr = [1, 2, 3, 4, 2, 5];
// console.log(arr.lastIndexOf(2));   // Output: 4 (last occurrence of 2)
// console.log(arr.lastIndexOf(10));  // Output: -1 (not found)

/********************************************************************************
 *
 *  ! lastIndexOf() Method :
 *  - The lastIndexOf() method in JavaScript is used to find the last occurrence of a specified element in an array or substring in a string.
 *  - It is an accessor method.
 *  - If the element or substring is not found, the method returns -1.
 *  - The indexOf() method is case-sensitive when used on strings.
 *
 *  - Syntax :
 *          1) For String : string.lastIndexOf(searchValue, fromIndex)
 *                  => searchValue : The value to search for in the string.
 *                  => fromIndex (optional) : The index at which to start the search.
 *
 *          2) For Array : array.lastIndexOf(searchElement, fromIndex)
 *                  => searchElement : The element to locate in the array.
 *                  => fromIndex (optional) : The index at which to start the search.
 *
 *         3) For TypedArray : typedArray.lastIndexOf(searchElement, fromIndex)
 *                  => searchElement : The element to locate in the typedArray.
 *                  => fromIndex (optional) : The index at which to start the search.
 *
 *  - If the index is greater than or equal to the array's length, -1 is returned, and the array is not searched.
 *  - If the provided index value is negative, it is used as the offset from the end of the array.
 *  - If the calculated index is less than 0, the entire array will be searched.
 *  - If the index is omitted, the search starts at the last index.
 *
 *  - Return Value :
 *          ==> Return -1 if the element is not found.
 *
 *******************************************************************************/

// For String :
// let str = "Hello, world!";
// console.log(str.lastIndexOf("o"));      // Output: 8 (last 'o' in "world")
// console.log(str.lastIndexOf("world"));  // Output: 7
// console.log(str.lastIndexOf("z"));      // Output: -1

// For Array :
// let arr = [1, 2, 3, 4, 2, 5];
// console.log(arr.lastIndexOf(2));   // Output: 4 (last occurrence of 2)
// console.log(arr.lastIndexOf(10));  // Output: -1 (not found)

/********************************************************************************
 *
 *  ! every() Method :
 * - The every() method checks if all elements in an array pass a test (provided as a function). If the test returns true for all elements, every() returns true. Otherwise, it returns false.
 *  - It is accessor method.
 *
 *  - Syntax : array.every(callback(element, index, array), thisArg)
 *          ==> callback : A function that is called for each element in the array. It takes three arguments : element, index, and array.
 *                  i) element : The current element being processed in the array.
 *                  ii) index (optional) : The index of the current element being processed in the array.
 *                  iii) array (optional) : the entire array every() was called on.
 *          ==> thisArg (optional) : A value to use as this when executing callback.
 *
 *  - Return Value :
 *          ==> true = If all elements in the array pass the test.
 *          ==> false = If at least one element in the array fails the test.
 *
 *******************************************************************************/

// const numbers = [10, 20, 30, 40];

// const allGreaterThanFive = numbers.every(num => num > 5);
// console.log(allGreaterThanFive); // true

// const allGreaterThanTwenty = numbers.every(num => num > 20);
// console.log(allGreaterThanTwenty); // false (10 and 20 fail)

/********************************************************************************
 *
 *  ! some() Method :
 *  - The some() method checks if at least one element in an array passes a test (provided as a function). If the test returns true for at least one element, some() returns true. Otherwise, it returns false.
 *  - It is accessor method.
 *
 *  - Syntax : array.some(callback(element, index, array), thisArg)
 *          ==> callback : A function that is called for each element in the array. It takes three arguments : element, index, and array.
 *                  i) element : The current element being processed in the array.
 *                  ii) index (optional) :  index of the current element being processed in the array.
 *                  iii) array (optional) : the entire array some() was called on.
 *          ==> thisArg (optional) : A value to use as this when executing callback.
 *
 *  - Return Value :
 *          ==> true = If at least one element in the array pass the test.
 *          ==> false = If no element in the array pass the test.
 *
 *  - It is opposite of every() method.
 *
 *******************************************************************************/

// const numbers = [10, 20, 30, 40];

// const hasGreaterThanThirty = numbers.some(num => num > 30);
// console.log(hasGreaterThanThirty); // true (40 passes)

// const hasLessThanZero = numbers.some(num => num < 0);
// console.log(hasLessThanZero); // false (none pass)

/********************************************************************************
 *
 *  ! includes() Method :
 *  - The includes() method in JavaScript is used to check if an array includes a certain element.
 *  - It is an accessor method.
 *  - It returns true if the array contains the element, and false otherwise.
 *  - The includes() method is case-sensitive when used on strings.
 *  - The includes() method is similar to the indexOf() method, but it returns a boolean value instead of the element's index.
 *  - The includes() method is more readable and concise than indexOf() for checking the presence of an element in an array.
 *
 *
 *   - Syntax : array.includes(searchElement, fromIndex)
 *              ==> searchElement : The element to search for in the array.
 *              ==> fromIndex (optional) : The index at which to start searching for the element.
 *
 *  - If the index is negative, it is taken as the offset from the end of the array.
 *  - If the calculated index is less than 0, the entire array will be searched.
 *  - It works with strings, numbers, and booleans and does not work with objects.
 *
 *  - Return Value :
 *          ==> true = If the element is found in the array.
 *          ==> false = If the element is not found in the array.
 *
 *******************************************************************************/
// let numbers = [10, 20, 30, 40];

// console.log(numbers.includes(20)); // Output: true
// console.log(numbers.includes(50)); // Output: false
// console.log(numbers.includes(10, 1)); // Output: false (starts searching from index 1)
// console.log(numbers.includes(30, -1)); // Output: true (starts searching from the last index)

/********************************************************************************
 *
 *  ! sort() Method :
 *  - The sort() method in JavaScript is used to sort the elements in an array in place and returns the sorted array not the new array.
 *  - For strings, the sort() method sorts the elements based on the Unicode code points of the characters.
 *  - For arrays, it is mutator method, meaning it changes the original array.
 *  - By default, calling sort() without a compare function on an array of objects does not sort objects properly. You need to provide a custom sorting function.
 *
 *  - Sorting Arrays :
 *          ==> If the array contains numbers, the sort() method sorts the elements based on their numeric value.
 *          ==> If the array contains strings, the sort() method sorts the elements based on their Unicode code points.
 *          ==> If the array contains objects, the sort() method sorts the elements based on the object's reference.
 *          ==> If the array contains mixed data types, the sort() method converts the elements to strings and then sorts them based on their Unicode code points.
 *          ==> If the array contains undefined values, they are sorted to the end of the array.
 *          ==> If the array contains null values, they are treated as undefined values.
 *          ==> If the array contains NaN values, they are sorted to the end of the array.
 *          ==> The sort() method modifies the original array and returns the sorted array.
 *  -
 *  - Sorting Strings:
 *          ==> In JavaScript, strings themselves do not have a sort() method. However, you can convert string into an array of characters using the split() method, sort the array, and then join the characters back together using the join() method.
 *          ==> By default, uppercase letters are sorted before lowercase letters, so you may need to convert the string to lowercase using the toLowerCase() method before sorting.
 *          ==> To sort strings in a case-insensitive manner, you can use the localeCompare() method with the "en" option.
 *
 *  - By default, the sort() method sorts the elements in ascending order.
 *
 *  - Syntax : array.sort(compareFunction)
 *           ==> compareFunction (optional) : A function that defines the sort order. If omitted, the array is sorted based on the Unicode code points of the elements.
 *                  i) If compareFunction(a, b) returns less than 0, sort a to an index lower than b (i.e., a comes first).
 *                  ii) If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other.
 *                  iii) If compareFunction(a, b) returns greater than 0, sort b to an index lower than a (i.e., b comes first).
 *
 *  - If compareFunction is not provided, the array elements are converted to strings and sorted based on their UTF-16 code units values.
 *
 *  - For mixed data types, the sort() method converts the elements to strings and then sorts them based on their UTF-16 code units values.
 *
 *  - Sorting happens lexically, not numerically. This means that the sort() method treats the elements as strings and sorts them based on their Unicode code points.
 *  - In lexical sorting, digits come before letters, and uppercase letters come before lowercase letters.
 *  - For objects, the sort() method sorts the elements based on the object's reference.
 *
 *
 *  - Return Value :
 *          ==> The sorted array.
 *
 *******************************************************************************/

// let numbers = [100, 25, 5, 9, 50];
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// let words = ["Banana", "apple", "Orange", "mango"];
// words.sort();
// console.log(words);

// // To make sorting case-insensitive, use localeCompare():
// words.sort((a, b) => a.localeCompare(b));
// console.log(words);

// let str = "javascript";
// let sortedStr = str.split("").sort().join("");
// console.log(sortedStr);


/********************************************************************************
 *
 *  ! toSorted() Method :
 *  - The toSorted() method in JavaScript is a new method introduced in ECMAScript 2023 (ES23) that sorts an array without modifying the origin array.
 *  - It returns a new sorted array.
 *  - For arrays, it is accessor method that returns a new array with the elements sorted in ascending order.
 *  - 
 *  - Syntax :  const newArray = array.toSorted(compareFunction);
 *          ==> compareFunction (optional) : A function that defines the sort order. If omitted, the array is sorted based on the Unicode code points of the elements.
 * 
 *  - The toSorted() method is similar to the sort() method, but it does not modify the original array.
 *  - It returns the new sorted array keeping the original array intact.
 * 
 *  - The toSorted() works like sort() and converts numbers to strings before sorting.
 *  - It also works with mixed data types and sorts them based on their Unicode code points.
 *  - It also works with objects and sorts them based on their reference.
 *
 *  - Return Value :
 *          ==> A new sorted array.
 *
 *******************************************************************************/

// const arr = [30, 5, 20, 100, 50];

// const sortedArr = arr.toSorted((a, b) => a - b);

// console.log(sortedArr); // Output: [5, 20, 30, 50, 100]
// console.log(arr);       // Output: [30, 5, 20, 100, 50] (unchanged)


// const names = ["Banana", "apple", "Mango", "cherry"];

// const sortedNames = names.toSorted();

// console.log(sortedNames); // Output: ["Banana", "Mango", "apple", "cherry"]
// console.log(names);       // Output: ["Banana", "apple", "Mango", "cherry"] (unchanged)


// const users = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 35 }
// ];

// const sortedUsers = users.toSorted((a, b) => a.age - b.age);

// console.log(sortedUsers);
// /*
// [
//   { name: "Bob", age: 25 },
//   { name: "Alice", age: 30 },
//   { name: "Charlie", age: 35 }
// ]
// */

// console.log(users); // Original array remains unchanged


/********************************************************************************
 *
 *  ! reverse() Method :
 *  - The reverse() method is used to reverse the elements of an array in place, meaning it mutates the original array.
 *  - It is a mutator method.
 * 
 *  - The reverse() method changes the order of the elements in the array so that the first element becomes the last, the second element becomes the second to last, and so on.
 *  - The reverse() method is useful when you need to reverse the order of elements in an array.
 * 
 *  - The reverse() method is an in-place algorithm, meaning it changes the original array and does not create a new array.
 *  
 *  - The reverse() method modifies the original array and returns the reversed array.
 * 
 *  - The reverse() method is faster since it does not create a new array and does not require additional memory.
 *
 *  - Return Value :
 *          ==> The reversed array.
 *
 *******************************************************************************/

// let arr = [1, 2, 3, 4, 5];
// let reversedArr = arr.reverse();

// console.log(reversedArr); // Output: [5, 4, 3, 2, 1]
// console.log(arr); // Output: [5, 4, 3, 2, 1] (original array is modified)


/********************************************************************************
 *
 *  ! toReversed() Method :
 *  - The toReversed() method is a new method introduced in ECMAScript 2023 (ES23) that reverses the elements of an array without modifying the original array.
 *  - It is an accessor method.
 * 
 *  - It returns a new array with the elements reversed.
 * 
 *  - The toReversed() method is similar to the reverse() method, but it does not modify the original array. 
 *  - It returns a new array with the elements reversed.
 *  - The toReversed() method is useful when you need to reverse the order of elements in an array without changing the original array.
 * 
 *  - The toReversed() method is an out-of-place algorithm, meaning it does not change the original array and creates a new array.
 * 
 *  - The toReversed() method creates copies of the original array and reverses the order of elements in the new array, making it slightly slower than the reverse() method but safer.
 *
 *  - Return Value :
 *          ==> A new array with the elements reversed.
 *
 *******************************************************************************/

// let arr = [1, 2, 3, 4, 5];
// let reversedArr = arr.toReversed();

// console.log(reversedArr); // Output: [5, 4, 3, 2, 1]
// console.log(arr); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)


/********************************************************************************
 *
 *  ! fill() Method :
 *  - The fill() method in JavaScript is used to fill all the elements of an array from a start index to an end index with a static value.
 *  - It is a mutator method.
 * 
 *  - The fill() method modifies the original array and returns the modified array.
 * 
 *  - The fill() method is useful when you need to fill an array with a specific value.
 *  - The fill() method is an in-place algorithm, meaning it changes the original array and does not create a new array.
 *  - The fill() method is faster since it does not create a new array and does not require additional memory.
 *  - The fill() method is useful when you need to initialize an array with a specific value or reset the values of an array.
 * 
 *  - If you don't specify the value to fill the array with, the fill() method fills the array with undefined.
 *  - If you don't specify the start and end indices, the fill() method fills the entire array with the specified value.
 * 
 *  - Syntax : array.fill(value, start, end)
 *               ==> value : The value to fill the array with.
 *               ==> start (optional) : The index at which to start filling the array (default is 0).
 *              ==> end (optional) : The index at which to stop filling the array (default is array.length). The end index is not included.
 * 
 *  - If the start index is greater than the end index, the array is not modified.
 *  - If the start index is equal to the end index, the array is not modified.
 *  - If the start index is negative, it is treated as array.length + start.
 *  - If the end index is negative, it is treated as array.length + end.
 *  - If the start index is greater than the array length, the array is not modified.
 *  - If the end index is greater than the array length, the array is not modified.
 *  - If the start index is negative or greater than the array length, the array is not modified.
 *  - If the end index is negative or greater than the array length, the array is not modified.
 *  - If the end index is less than the start index, the array is not modified.
 * 
 *  - The fill() method fills the array with references to the same object. This means that all elements in the array point to the same object in memory.
 * 
 *  - Use Cases : 
 *          ==> Initialize an array with a specific value.
 *          ==> Reset the values of an array.
 *          ==> Fill a portion of an array with a specific value.
 *  
 *  - Return Value :
 *          ==> The modified array with the elements filled with the specified value.
 * 
 *
 *******************************************************************************/

// let arr = new Array(5).fill(0);
// console.log(arr); // Output: [0, 0, 0, 0, 0]

// let arr1 = [1, 2, 3, 4, 5];
// arr1.fill(9, 1, 4);
// console.log(arr1); // Output: [1, 9, 9, 9, 5]

// let arr2 = [1, 2, 3, 4, 5];
// arr2.fill(9, 1, 4);
// console.log(arr2); // Output: [1, 9, 9, 9, 5]

// let arr3 = [1, 2, 3, 4, 5];
// arr3.fill(8, -3, -1);
// console.log(arr3); // Output: [1, 2, 8, 8, 5]

// let arr4 = new Array(3).fill({ a: 1 });
// arr4[0].a = 99;
// console.log(arr4); // Output: [{ a: 99 }, { a: 99 }, { a: 99 }]
