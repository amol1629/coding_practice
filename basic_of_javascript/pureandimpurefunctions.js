/**
 * * Side Effect In JavaScript :
 *  - A side effect occurs when a function :
 *          1) Modifies a global variable
 *          2) Changes the value of an argument (mutation)
 *          3) Performs I/O operations like logging, writing files, or network requests.
 *          4) Interacts with the DOM.
 */

/**
 * * Pure Functions :
 *  - A pure function is function that :
 *          1) Returns the same output for the same input every time it is called.
 *          2) Has no side effects, such as modifying external state or performing I/O operations.
 *          3) Does not rely on mutable external state.
 *
 *  - Prefer Pure Functions whenever possible to improve testability, maintainability, and predictability.
 *  - Pure functions are the foundation of functional programming, providing reliability and predictability, while impure functions handle necessary real-world interactions. Striking the right balance between them leads to clean, maintainable code.
 */

const cube = (num) => {
  return Math.pow(num, 3);
};

console.log("Cube of 9 : ", cube(9));

/**
 * * Impure Functions :
 *  - An impure function is a function that :
 *          1) May return different output for the same input every time it is called.
 *          2) Has side effects, such as modifying external state or performing I/O operations.
 *          3) Rely on mutable external state.
 *
 *  - While pure functions are ideal, impure functions are necessary for real-world applications where interaction with external systems (APIs, databases, user interfaces) is required. However, managing impure functions carefully by isolating them can improve code maintainability.
 *
 *  ? Avoid Mutating Data: Use methods that return new copies instead of mutating original data (e.g., map(), filter(), reduce()).
 */

const arr = [1, 2, 3];
function pushElement(array, element) {
  array.push(element); // Mutates the original array
}
pushElement(arr, 4);
console.log(arr); // Output: [1, 2, 3, 4]
