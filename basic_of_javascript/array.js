/**
 * Mutator Methods in Array : These method modifies the origin array.
 *      1) push() ==> Add one or more elements to the end of an array and returns the new length of the array.
 *
 *      2) pop() ==> Removes the last element from an array and returns that removed element.
 *
 *      3) shift() ==> Removes the first element from an array and returns that removed element.
 *
 *      4) unshift() ==> Adds one or more elements to the beginning of an array and returns the new length of the array.
 *
 *      5) splice() ==> Adds and/or removes elements from an array.
 *
 *      6) sort() ==> Sorts the elements from an array in place and returns the array.
 *
 *      7) reverse() ==> Reverse the order of the elements in array in place.
 *
 *      8) fill() ==> Fills all the elements of an array from a start index to an end index with a static value.
 *
 *      9) copyWithin() ==> Copies a sequence of array element withing the array to the position starting at target.
 */

/**
 * Accessor Methods in Array : These method do not modifies the origin array instead return a new value of representation.
 *      1) concat() ==> merge two or more arrays and returns new array.
 *
 *      2) slice() ==> Returns a "shallow copy" of a portion of an array into a new array object.
 *
 *      3) join() ==> Joins all elements of an array into a string.
 *
 *      4) indexOf() ==> Returns the first index at which a given element can be found in the array.
 *
 *      5) lastIndexOf() ==> Returns the last index at which a given element can be found in the array.
 *
 *      6) includes() ==> Determines whether an array includes a certain value among its entries.
 *
 *      7) toString() => Returns a string representing the array and its elements.
 *
 *      8) toLocalString() ==> Returns a localized string representing the array and its elements
 *
 *      9) find() ==> Returns the value of the first element in the array that satisfy the provided testing function.
 *
 *      10) findIndexOf() ==> Returns the value of the first element in the array that satisfy the provided testing function.
 *
 *      11) filter() ==> Creates the new array with all elements that pass the test implemented by the provided function.
 *
 *      12) map() ==> Creates a new array with the results of calling a provided function on every element in the calling array.
 *
 *      13) reduce() ==> Applies a function against the accumulator and each element in the array to reduce it to a single value.
 *
 *      14) reduceRight() ==> Applies a function against the accumulator and each element in the array from right-to-left to reduce it to a single value.
 *
 *      15) some() ==> Tests whether at least one element in the array passes the test implemented by the provided function.
 *
 *      16) every() ==> Tests whether all the elements in the array pass the test implemented by the provided function.
 *
 *      17) flat() ==> Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 *
 *      18) flatMap() ==> First map each element using mapping function, then flattens the result into a new array.
 */

/********************************************************************************
 *
 * push() Method :
 * -  The push() method in JavaScript is used to add one or more elements to the end of an array.
 * - The push() method modifies the original array (it's a mutator method)
 * - It returns the new length of the array after the elements are added.
 *
 *******************************************************************************/

// const pushArray = [10, 20, 30, 40];
// const returnValue = pushArray.push(50, 60, 70);

// console.log("Original Array:", pushArray);
// console.log("Push Method Return : ", returnValue);

/********************************************************************************
 *
 * pop() Method :
 * - The pop() method in JavaScript is used to remove the last element from an array.
 * - The pop() method modifies the original array (it's a mutator method)
 * - It returns the removed element. If the array is empty, it returns undefined.
 *
 *******************************************************************************/

// const popArray = [10, 20, 30, 40];
// const returnValue = popArray.pop();
// console.log("Original Array:", popArray);
// console.log("Push Method Return : ", returnValue);

/********************************************************************************
 *
 * toString() Method :
 * - The toString() method converts an array into a comma-separated string of its element.
 * - It always uses comma (,) as a separator.
 * - It does not allow customization of the operator.
 * - It is less flexible.
 * - It is an "accessor method" of array.
 * - If we use empty array, then it will return an empty string ("")
 * - Use Case => Quick conversion to comma separated.
 *
 *******************************************************************************/

// const toStringArray = [10, 20, true];
// const returnValue = toStringArray.toString();
// console.log("Original Array:", toStringArray);
// console.log("toString() Method Return : ", returnValue);

/********************************************************************************
 *
 * join() Method :
 * - The toString() method also converts an array into a string, but it allows you to specify a "custom separator" between elements.
 * - If no separator provided, it defaults to a comma (,) -- just like toString().
 * - It is more flexible that toString() method.
 * - It is an "accessor method" of array.
 * - If we use empty array, then it will return an empty string ("")
 * - Use Case => Fine-grained control over formatting.
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
 * shift() Method :
 * - The shift() method removes the first element from an array and returns that removed element.
 * - This operation modifies the original array by shifting all subsequent elements one position to the left, thereby decreasing the array's length by one.
 * - If the array is empty, undefined is returned and the array is not modified.
 * - It is mutator method.
 * - Since it involves the re-indexing of the elements, it can be less efficient for large arrays compared to methods that operate on the end of the array, such as push() and pop().
 *
 *******************************************************************************/

// const shiftArray = [10, 20, 30, 40];
// const removedElement = shiftArray.shift();
// console.log("Original Array : ", shiftArray);
// console.log("Shift Method Return : ", removedElement);

/********************************************************************************
 *
 * unshift() Method :
 * - The unshift() method adds the element to the beginning of the array and returns the new length of the array.
 * - This operation modifies the original array by shifting existing element to the right to accommodate the new element at the start.
 * - It is mutator method.
 * - Since it involves the reindexing of the elements, it can be less efficient for large arrays compared to methods that operate on the end of the array, such as push() and pop().
 *
 *******************************************************************************/

// const unshiftArray = [10, 20, 30, 40];
// const removedElement = unshiftArray.unshift("tony");
// console.log("Original Array : ", unshiftArray);
// console.log("Shift Method Return : ", removedElement);

/********************************************************************************
 *
 * concat() Method :
 * - The concat() method used to merge two or more arrays into a new array.
 * - It does not modifies the original array but returns the new array containing the combined elements.
 * - It is accessor method.
 * - You can pass multiple arrays or values to concat(),and it will merge them in the order they provided.
 * - The concat() can also merge the individual values along with the arrays.
 * - If an array to be concatenated contains nested arrays, concat() does not flatten them, the nested array remains as is.
 * - In JavaScript, the concat() method merges arrays but does not flatten nested arrays. To achieve a flattened array when concatenating nested arrays, you can use the flat() method or the spread operator (...).
 * -  The concat() method can also be used to create a shallow copy by concatenating the array with an empty array. 

 *
 *******************************************************************************/

// const array1 = [10, 20, 30];
// const array2 = [99, 88, 77];

// const concatenatedArray = array1.concat(array2, 44);
// console.log("Concatenated Array : ", concatenatedArray);

// If an array to be concatenated contains nested arrays, concat() does not flatten them, the nested array remains as is.

// const nestedArray = [["tony", "hulk", "thor"]];
// const concatenatedNestedArray = array1.concat(nestedArray);
// console.log("Concatenated Nested Array : ", concatenatedNestedArray);

/********************************************************************************
 *
 * slice() Method :
 * - The slice() method creates a shallow copy of a portion of an array into a new array object without modifying the original array.
 * - It takes two optional parameters :
 *      1) the start index ==> The index at which to begin the extraction. If omitted, it defaults to 0 and wil return the exact original array (sometimes used for copying the array).
 *      2) end index ==> The index at which to end extraction (exclusive). If omitted, it defaults to the array's length.
 * - It is accessor method.
 * - It does not modify the original array.
 * - It returns a new array containing the selected elements.
 * - The negative indices can be used to count from the end of the array.
 *  - Slice method return an empty array only when :
 *      1) start index is greater than or equal to end index after normalization or
 *      2) Both the indices are out of bounds for the array.
 *
 *******************************************************************************/

// const sliceArray = [10, 20, 30, 40, 50, 60];
// const newSlicedArray = sliceArray.slice(1, -3);

// console.log("Original Array : ", sliceArray);
// console.log("Sliced Array : ", newSlicedArray);

/********************************************************************************
 *
 * splice() Method :
 * - The splice() method changes the contents of an array by removing, replacing, or adding elements in place.
 * - It modifies the original array and returns an array containing the removed elements.
 * - It is mutator method.
 * - Structure ==> array.splice(startIndex, deleteCount, item1, item2, ..., itemN);
 * - It takes at least two parameters : 1) startIndex 2) deleteCount 3) additional elements can be added after these parameters :
 *     1) startIndex ==> The start index is the position at which to start changing the array. If it is greater than the length of the array, the method will simply append the new elements to the end of the array.
 *    2) deleteCount ==> The number of elements to remove. If omitted, all elements from the startIndex to the end of the array are removed.
 *    3) items to add (optional) ==> The elements to add the array, starting at startIndex.
 * - You can add new elements by specifying them after the deleteCount.
 * - For splice() :
 *      1) If start is beyond the array length :
 *              ==> No elements are removed or added
 *              ==> The method still work without error.
 *      2) If deleteCount is 0 :
 *              ==> No elements are removed, but elements can still be added.
 *      3) If deleteCount is greater than the number of elements remaining in the array :
 *              ==> Only available elements from start onward are removed.
 *  - If deleteCount is negative, it is treated as 0, and no elements are removed. You can still add elements.
 *
 *******************************************************************************/

//  const spliceArray = [10, 20, 30, 40, 50, 60];

//  const returnSplicedArray = spliceArray.splice(1, 1);

// console.log("Original Array : ", spliceArray);
// console.log("Spliced Array : ", returnSplicedArray);

/********************************************************************************
 *
 * find() Method :
 *  - The find() method in JavaScript is a powerful and frequently used method that helps retrieve the first element in an array that satisfies the provided condition (or testing function).
 *  - It is a accessor method.
 *  - Syntax : array.find(callback(element, index, array), thisArg)
 *            ==> callback : A function that is called for each element in the array. It takes three arguments : element, index, and array.
 *                          i) element : The current element being processed in the array.
 *                          ii) index (optional) : The index of the current element being processed in the array.
 *                          iii) array (optional) : the entire array find() was called on.
 *          ==> thisArg (optional) : A value to use as this when executing callback.
 *  - The find() method stops iterating once it finds a match, making it more efficient than methods like filter() if only one result is needed.
 *  - It returns "undefined" if no element satisfies the condition.
 *
 *******************************************************************************/
// const findArray = [10, 20, 30, 40, 50];
// const findResult = findArray.find((num) => num > 40);

// console.log("Original Array : ", findArray);
// console.log("Find Result : ", findResult);

