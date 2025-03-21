/**
 * *Higher Order Functions :
 *  - In JavaScript, higher-order functions are functions that either :
 *              i) Take other functions as arguments or
 *              ii) Return a function as their result.
 * 
 *  - Higher order functions is a cornerstone of functional programming, enabling powerful abstractions, code reusability, and composability.
 *  - Higher-order functions are functions that operate on other functions, either by taking them as arguments or by returning them.
 * 
 *  - Key Characteristics :
 *              1) Functions as First-Class Citizen :
 *                      ==> In JavaScript, functions are treated as first-class citizens, meaning :
 *                              - They can be assigned to variables.
 *                              - They can be passed as arguments to other functions.
 *                              - They can be returned from other functions.
 *              2) Abstraction :
 *                      ==> Higher-order functions allows abstracting operations, reducing code duplication.
 *
 *  - Common Higher-Order Functions in JavaScript : map, filter, reduce, forEach, find, some, every, sort, closures, function factory, etc.
 *
 *  - Benefits of Higher-Order Functions :
 *              1) Code Reusability
 *              2) Abstraction
 *              3) Readability
 *              4) Composability
 *
 *  - Drawbacks of Higher-Order Functions :
 *           1) Can be difficult to understand for beginners.
 *           2) Can be difficult to debug, maintain, test and optimize.
 *
 *
 */

const numbers = [2, 5, 9, 11];
const square = (num) => num * num;

const squaredNumbers = numbers.map(square);

console.log("Squared Numbers : ", squaredNumbers);
