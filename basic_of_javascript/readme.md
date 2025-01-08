# JavaScript Array Methods

## `map()` Method

### Description

The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

### Syntax

```javascript
const newArray = arrayName.map(callback(currentValue, index, array));
```

* **callback** : The function that produces the new element.
* **currentValue** : The current element being processed.
* **index (optional)** : The index of the current element being processed.
* **array (optional)** : The array the `map()` method was called upon.

### Use Cases

1. **Transforming Data** : Converting data to a different format.
2. **Applying a Function to Each Element** : Useful for modifying or formatting array elements.

---

## `filter()` Method

### Description

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

### Syntax

```javascript
const newArray = arrayName.filter(callback(element, index, array));
```

* **callback** : The function that tests each element.
* **element** : The current element being processed.
* **index (optional)** : The index of the current element being processed.
* **array (optional)** : The array the `filter()` method was called upon.

### Use Cases

1. **Filtering Data** : Removing unwanted elements from an array.
2. **Creating a Subset of an Array** : Useful for creating a new array with only elements that meet a certain condition.
3. **Removing Duplicates** : Useful for removing duplicate elements from an array.

---

## `reduce()` Method

### Description

The `reduce()` method executes a reducer function on each element of the array, resulting in a single output value.

### Syntax

```javascript
const result = arrayName.reduce(callback(accumulator, currentValue, index, array), initialValue);
```

* **callback** : Function executed on each element.
* **accumulator** : Accumulates the return value of each execution of the callback function.
* **currentValue** : The current element being processed.
* **index (optional)** : The index of the current element.
* **array (optional)** : The array `reduce()` was called upon.
* **initialValue (optional)** : Initial value of the accumulator.

### Use Cases

1. **Summing Array Elements** : Finding the sum or total of array values.
2. **Finding the Maximum or Minimum Value** : Finding the maximum or minimum value in an array.
3. **Flattening Arrays** : Reducing nested arrays into a single-level array.
4. **Counting Occurrences** : Counting elements based on conditions.

### Return Value

The `reduce()` method returns a single value.

---



# First Class Functions in JavaScript

## Overview

First class functions are a core feature of JavaScript that enable functional programming by allowing functions to be treated as data. This capability makes JavaScript highly flexible, supporting constructs like higher-order functions, closures, and more.

## Characteristics of First Class Functions

In JavaScript, functions are first-class citizens, which means they can:

1. **Be assigned to variables or constants**
2. **Be passed as arguments to other functions** (callback functions)
3. **Be returned as values from other functions**
4. **Be stored in data structures** such as arrays or objects

## Advantages of First Class Functions

* Enhance flexibility in programming paradigms
* Facilitate the creation of reusable and composable code
* Enable powerful patterns like function chaining, currying, and memoization

First class functions are foundational to understanding modern JavaScript and functional programming concepts.

---
