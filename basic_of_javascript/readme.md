# Loops in JavaScript

## forEach Loop in JavaScript

### Overview

The `forEach()` method in JavaScript is a built-in function for iterating over arrays and objects. Unlike `for` loops or `for...of` loops, it provides a cleaner, more readable way to perform an action on each item in an array or object without explicitly managing loop counters.

### Syntax

```javascript
arrayName.forEach(callback(currentValue, index, array), thisArg)
```

* **callback** : Function that will be called for each element in the array.
* **currentValue** : The current element being processed in the array.
* **index** (optional): The index of the current element being processed in the array.
* **array** (optional): The array that `forEach` was called on.
* **thisArg** (optional): Value to use as `this` when executing the callback.

### Use Cases

1. **Performing Side Effects** : Useful for logging, updating the DOM, or making API calls for each item in an array, but not for creating new arrays (use `map()` for that).
2. **Mutating Objects or Arrays** .

### Key Notes

1. **Callback Execution** : The callback function is called for each element in the array but not for sparse arrays (arrays with gaps in the index sequence).
2. **No Return Value** : Unlike `map()`, `forEach()` does not return a new array.
3. **No Support for Break or Continue** : Unlike `for` loops, you cannot use `break` or `continue` statements in a `forEach()` loop.
4. **Index Usage** : If you need the index of the current element, you must pass it as an argument to the callback function.
5. **Mutability** : Direct mutation of objects inside `forEach()` will persist.

### Limitations

1. No Support for Break or Continue
2. No Support for Index (without explicit argument)
3. No Return Value
4. No Support for Sparse Arrays

### Example

```javascript
// Basic Usage
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
  console.log(num * 2);
});

// Mutating objects or arrays using forEach()
const users = [
  { name: "Alice", active: false },
  { name: "Bob", active: false },
];
users.forEach((user) => (user.active = true));
console.log(users);
```

### Output

```
2
4
6
8
10
[
  { name: 'Alice', active: true },
  { name: 'Bob', active: true }
]
```

---

---

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

---

# Functions in JavaScript

## First Class Functions

### Overview

First class functions are a core feature of JavaScript that enable functional programming by allowing functions to be treated as data. This capability makes JavaScript highly flexible, supporting constructs like higher-order functions, closures, and more.

### Characteristics of First Class Functions

In JavaScript, functions are first-class citizens, which means they can:

1. **Be assigned to variables or constants**
2. **Be passed as arguments to other functions** (callback functions)
3. **Be returned as values from other functions**
4. **Be stored in data structures** such as arrays or objects

### Advantages of First Class Functions

* Enhance flexibility in programming paradigms
* Facilitate the creation of reusable and composable code
* Enable powerful patterns like function chaining, currying, and memoization

First class functions are foundational to understanding modern JavaScript and functional programming concepts.

---

## First Order Functions

A **First Order Function** is a function that does not take other functions as arguments or return functions as its result. It works directly with primitive or other non-function data types.

### Characteristics of First Order Functions

1. Operates on basic values (numbers, strings, objects, etc.).
2. Does not involve higher-order behavior, such as accepting or returning other functions.

The opposite of a first-order function is a  **higher-order function** , which either accepts other functions as arguments or returns a function.

### Example of a First Order Function

```javascript
// First-order function
function add(a, b) {
  return a + b;
}

console.log(add(3, 4)); // Output: 7
```

---

## Higher Order Functions

### Overview

In JavaScript, higher-order functions are functions that either:

* Take other functions as arguments, or
* Return a function as their result.

Higher-order functions are a cornerstone of functional programming, enabling powerful abstractions, code reusability, and composability.

### Key Characteristics

1. **Functions as First-Class Citizens** :

* In JavaScript, functions are treated as first-class citizens, meaning:
  * They can be assigned to variables.
  * They can be passed as arguments to other functions.
  * They can be returned from other functions.

1. **Abstraction** :

* Higher-order functions allow abstracting operations, reducing code duplication.

### Common Higher-Order Functions in JavaScript

* `map`
* `filter`
* `reduce`
* `forEach`
* `find`
* `some`
* `every`
* `sort`
* Closures
* Function factories

### Benefits of Higher-Order Functions

1. Code Reusability
2. Abstraction
3. Readability
4. Composability

### Example

```javascript
const numbers = [2, 5, 9, 11];
const square = (num) => num * num;

const squaredNumbers = numbers.map(square);

console.log("Squared Numbers:", squaredNumbers);
```

### Output

```
Squared Numbers: [ 4, 25, 81, 121 ]
```

---

## Constructor Functions in JavaScript

### Overview

Constructor functions in JavaScript are used to create and initialize objects. By convention, the names of constructor functions start with an uppercase letter.

### Characteristics of Constructor Functions

1. **Used with the `new` keyword** :

* When called with `new`, a constructor function creates a new object, assigns it to `this`, and implicitly returns it unless a different object is explicitly returned.
* When called without `new`, a constructor function behaves like a regular function.

1. **Defines Properties and Methods** :

* You can define properties and methods on the `this` object within the constructor function.

1. **Prototypes** :

* Methods can be added to the prototype of the constructor function to share them across instances, which helps save memory.

> **Note** : If you forget to use `new`, the function will behave like a regular function, and `this` may point to the global object or `undefined` in strict mode.

> **Tip** : ES6 introduced `class` syntax as a more intuitive way to create objects and manage prototypes, but it is syntactic sugar over constructor functions.

### Example

### Creation of Constructor Function with Instance Properties

```javascript
function ConstructorFunction(name, age) {
  this.name = name;
  this.age = age;
}
```

### Adding a Method to the Prototype

```javascript
ConstructorFunction.prototype.greet = function () {
  console.log(`Hello, dear ${this.name}`);
};
```

### Creation of Object Using Constructor Function

```javascript
let john = new ConstructorFunction("john", 12);

john.greet(); // Outputs: Hello, dear john
```

---

## Callbacks in JavaScript

### What are Callbacks?

Callbacks are functions that are passed as arguments to other functions and are executed after the completion of those functions. They are primarily used to handle asynchronous operations, such as reading files, making network requests, or performing database operations. Callbacks enable non-blocking code execution by deferring tasks until a later time.

### Common Uses of Callbacks

1. **Error Handling** : Callbacks are often used to handle errors that occur during the execution of a function.
2. **Event Listeners** : Callbacks are used in event-driven programming.
3. **Timer Functions** : Functions like `setTimeout` and `setInterval`.
4. **Array Methods** : Callbacks are used with methods like `map()`, `filter()`, and `reduce()`.

### Callback Hell

**Callback Hell** refers to a situation where multiple nested callbacks are used, making the code difficult to read and maintain.

### Example:

```javascript
setTimeout(() => {
  console.log("Task 1");
  setTimeout(() => {
    console.log("Task 2");
    setTimeout(() => {
      console.log("Task 3");
    }, 1000);
  }, 1000);
}, 1000);
```

To improve readability and maintainability, **Promises** and **async/await** are recommended as alternatives.

### Drawbacks of Callbacks

1. Callbacks can lead to  **callback hell** .
2. Callbacks can be  **difficult to debug** .
3. Improper usage of callbacks can lead to  **memory leaks** .

### Example: Basic Callback Function

```javascript
const greetings = (name, callback) => {
  console.log(`${name}, this is the main function which executes first.`);
  callback();
};

const sayGoodBye = () => {
  console.log("This is the callback function which executes after the main function.");
};

// Execute the callback

greetings("John", sayGoodBye);
```

---

## Closures in JavaScript

### Overview

Closures in JavaScript allow functions to have access to variables from their outer (enclosing) scope even after the outer function has finished executing. This is possible because a function retains a reference to its lexical environment, which includes the scope where it was created. This reference allows the inner function to access the outer function's variables.

### Characteristics and Benefits

* **Access to Outer Variables** : Closures enable functions to access variables from their enclosing scope.
* **Private Variables and Methods** : Useful for creating private variables and methods in JavaScript.
* **State Management** : Can be used to manage state, such as counters or accumulators.
* **Lexical Environment** : A closure is created when a function accesses variables from its lexical environment, even after the outer function has returned.

Closures are powerful and essential for writing clean, efficient, and maintainable JavaScript code.

### Applications

1. **Event Listeners and Timers** : Commonly used in asynchronous operations.
2. **Functional Programming** : Used to create higher-order functions that can be composed to build complex functionality.
3. **Object-Oriented Programming** : Enable private variables and methods.
4. **Reactive Programming** : Utilized to create observables and observers.

### Example

### Closure Example

```javascript
function outer() {
  let name = "closure";
  console.log("Outer Function STARTS");

  function inner() {
    console.log("Inner Function Calling: ", name);
  }

  console.log("Outer Function ENDS");
  return inner;
}

const closureResult = outer(); // Executes outer function
closureResult(); // Calls the inner function, outputting: Inner Function Calling: closure
```

### Additional Code Example

```javascript
console.log("Addition: ", 2 + 2 + "3");
// Outputs: Addition: 43
```

> **Note** : In JavaScript, adding a number to a string concatenates the values. Here, `2 + 2` evaluates to `4`, and `4 + "3"` results in the string "43".

---

---

# JavaScript `call()`, `apply()`, and `bind()` Methods

## **Call() Method**

The `call()` method calls a function with a specified `this` value and arguments provided one by one.

### Syntax

```javascript
functionName.call(thisArg, arg1, arg2, ...)
```

- **thisArg**: The value to be used as `this` when the function is called.
- **arg1, arg2, ...**: The arguments to be passed to the function.

### Key Points

- The `call()` method immediately invokes the function by passing individual arguments.
- Unlike `bind()`, it does not return a new function.
- `call()` can borrow a method from one object and use it with another.

### Example

```javascript
function describeRoleForCallMethod(role) {
  console.log(`${this.name} works as a ${role}`);
}

const employee = { name: "Tony" };

describeRoleForCallMethod.call(employee, "Front End Developer");
```

---

## **Apply() Method**

The `apply()` method is similar to the `call()` method, but it takes an array (or array-like object) of arguments instead of listing them individually.

### Syntax

```javascript
functionName.apply(thisArg, [arg1, arg2, ...])
```

- **thisArg**: The value to be used as `this` when the function is called.
- **[arg1, arg2, ...]**: An array of arguments to be passed to the function.

### Key Points

- The `apply()` method immediately invokes the function.
- Use `apply()` when arguments are already in an array or an array-like object.
- Unlike `bind()`, it does not return a new function.

### Example

```javascript
function describeRoleForApplyMethod(role, organization) {
  console.log(`${this.name} works as a ${role} in ${organization}.`);
}

const employee = { name: "Tony" };

describeRoleForApplyMethod.apply(employee, ["Front End Developer", "Google"]);
```

---

## **Bind() Method**

The `bind()` method returns a new function with a specific `this` context and optional arguments pre-applied, without immediately calling the function.

### Syntax

```javascript
const boundFunction = functionName.bind(thisArg, arg1, arg2, ...)
```

- **thisArg**: The value of `this` to be used inside the new function.
- **arg1, arg2, ...**: The arguments to be pre-applied to the new function.

### Key Points

- The `bind()` method does not immediately call the function.
- It returns a new function with a fixed `this` context and pre-applied arguments.
- Useful for event handling or partial function application.

### Example

```javascript
function describeRoleForBindMethod(role, organization) {
  console.log(`${this.name} works as a ${role} in ${organization}.`);
}

const employee = { name: "Tony" };

const boundFunction = describeRoleForBindMethod.bind(
  employee,
  "Front End Developer",
  "Google"
);

boundFunction();
```

---

---

# Side Effects and Pure vs Impure Functions in JavaScript

## Side Effects in JavaScript

A **side effect** occurs when a function:

1. Modifies a global variable.
2. Changes the value of an argument (mutation).
3. Performs I/O operations like logging, writing files, or making network requests.
4. Interacts with the DOM.

## Pure Functions

A **pure function** is a function that:

1. Returns the same output for the same input every time it is called.
2. Has no side effects, such as modifying external state or performing I/O operations.
3. Does not rely on mutable external state.

### Benefits of Pure Functions

* Improved testability, maintainability, and predictability.
* Foundation of functional programming, providing reliability and predictability.

**Tip:** Prefer pure functions whenever possible. While impure functions handle necessary real-world interactions, striking the right balance between them leads to clean, maintainable code.

### Example of a Pure Function

```javascript
const cube = (num) => {
  return Math.pow(num, 3);
};

console.log("Cube of 9:", cube(9)); // Output: Cube of 9 : 729
```

## Impure Functions

An **impure function** is a function that:

1. May return different output for the same input every time it is called.
2. Has side effects, such as modifying external state or performing I/O operations.
3. Relies on mutable external state.

### Managing Impure Functions

While pure functions are ideal, impure functions are necessary for real-world applications involving APIs, databases, or user interfaces. To improve code maintainability:

* Avoid mutating data by using methods that return new copies (e.g., `map()`, `filter()`, `reduce()`).
* Isolate impure functions to minimize side effects.

### Example of an Impure Function

```javascript
const arr = [1, 2, 3];
function pushElement(array, element) {
  array.push(element); // Mutates the original array
}

pushElement(arr, 4);
console.log(arr); // Output: [1, 2, 3, 4]
```

---

---

# Date in JavaScript

The `Date` object in JavaScript is used to work with dates and times. It provides a rich set of methods for creating, manipulating, and formatting dates.

## Creating a Date Object

### 1. Without Arguments (Current Date and Time)

```javascript
let currentDate = new Date();
console.log(currentDate); // Outputs the current date and time
```

### 2. Using a Date String

```javascript
let specificDate = new Date("2025-01-01T12:00:00");
console.log(specificDate); // Outputs Wed Jan 01 2025 12:00:00 GMT+0000
```

### 3. Using Year, Month, Day, etc.

```javascript
let anotherDate = new Date(2025, 0, 1, 12, 30, 45); // Month is 0-indexed (0 = January)
console.log(anotherDate); // Outputs the specified date
```

### 4. Using Milliseconds Since Unix Epoch (January 1, 1970)

```javascript
let epochDate = new Date(0); // Jan 1, 1970
console.log(epochDate);
```

### Other Examples

```javascript
// Creating a Date Object
const today = new Date(); // Current date and time

// Get Methods
console.log("Today's Date:", today);
console.log("Year:", today.getFullYear()); // Get the full year (e.g., 2024)
console.log("Month (0-indexed):", today.getMonth()); // 0 (January) to 11 (December)
console.log(
  "Month (Human-readable):",
  today.toLocaleString("en-US", { month: "long" })
);
console.log("Day of the Month:", today.getDate());
console.log("Day of the Week (0-Sunday):", today.getDay());
console.log("Hours (24-hour clock):", today.getHours());
console.log("Minutes:", today.getMinutes());
console.log("Seconds:", today.getSeconds());
console.log("Milliseconds:", today.getMilliseconds());
console.log("Time Zone Offset:", today.getTimezoneOffset());

// Set Methods
today.setFullYear(2025); // Set the year
today.setMonth(6); // Set the month (July)
today.setDate(15); // Set the day of the month
today.setHours(10); // Set the hours
today.setMinutes(30); // Set the minutes
today.setSeconds(0); // Set the seconds
console.log("Updated Date:", today);

// Other Useful Methods
console.log("Time in milliseconds since 1970-01-01:", today.getTime()); // Milliseconds since the Unix epoch
console.log("Date in ISO 8601 format:", today.toISOString());
console.log("Date as a string:", today.toString());
console.log("Formatted date:", today.toLocaleDateString());
console.log("Formatted date and time:", today.toLocaleString());
```

## Common Methods

### 1. Get Date and Time Information

* `getFullYear()`: Returns the year
* `getMonth()`: Returns the month (0-11, where 0 is January)
* `getDate()`: Returns the day of the month (1-31)
* `getDay()`: Returns the day of the week (0-6, where 0 is Sunday)
* `getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()`: Returns corresponding time components

Example:

```javascript
let now = new Date();
console.log(now.getFullYear()); // 2025
console.log(now.getMonth());    // 0 (January)
console.log(now.getDate());     // Day of the month
```

### 2. Set Date and Time

* `setFullYear(year)`, `setMonth(month)`, `setDate(day)`, etc.

Example:

```javascript
let date = new Date();
date.setFullYear(2030);
console.log(date);
```

### 3. Formatting a Date

* `toDateString()`: Returns a human-readable date string.
* `toISOString()`: Returns the date in ISO 8601 format.

Example:

```javascript
let date = new Date();
console.log(date.toDateString());  // Example: "Thu Jan 09 2025"
console.log(date.toISOString());   // Example: "2025-01-09T12:00:00.000Z"
```

### 4. Comparing Dates

```javascript
let date1 = new Date("2025-01-01");
let date2 = new Date("2025-02-01");

console.log(date1 > date2);  // false
console.log(date1.getTime() === date2.getTime());  // false
```

## Example: Formatting with `Intl.DateTimeFormat`

```javascript
let date = new Date();
let formattedDate = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}).format(date);
console.log(formattedDate);  // Example: "January 9, 2025"
```

## Notes

* JavaScript dates are based on **milliseconds since January 1, 1970** (Unix Epoch).
* Months are  **0-indexed** , so January is `0` and December is `11`.
* The `Date` object is  **mutable** , meaning modifying one instance directly changes its value.

## Summary

The `Date` object is powerful for date and time handling, but it can be complex due to timezone and indexing issues. For advanced date operations, consider libraries like **date-fns** or  **luxon** .

---

---

---

---
