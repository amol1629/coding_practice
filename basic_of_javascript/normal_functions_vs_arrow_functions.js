/**
 *  * Normal Functions vs Arrow Functions
 * 
 *  ? Normal Functions :
 *          1) Normal functions are defined using the function keyword.
 *          2) They have their own this context.
 *          3) They are ideal for defining object methods.
 *          4) They are hoisted to the top of the scope.
 * 
 *  - Normal Functions are not suitable for : 
 *          1) Higher-order functions.
 *          2) Callback functions.
 *          3) Event listeners.
 *          4) Methods like map, filter, reduce, etc.
 *          5) Asynchronous tasks.
 *          6) Shorter syntax.
 *          7) Concise code.
 *          8) Functional programming.
 *          9) Default arguments.
 *          
 *  - Normal functions are best suited for :
 *          1) Defining object methods.
 *          2) Using this context.
 *          3) Hoisting.
 *          4) Argument object.
 * 
 *  ! Default arguments are not supported in normal functions, while arrow functions support default arguments.
 *  ! Arguments object is supported in normal functions, while arrow functions do not have an arguments object.
 * 
 *  ? Arrow Functions :
 *          1) Arrow functions are defined using the => syntax.
 *          2) They do not have their own this context.
 *          3) They are ideal for higher-order functions.
 *          4) They are not hoisted to the top of the scope.
 * 
 * - Arrow Functions are suitable for :
 *          1) Higher-order functions.
 *          2) Callback functions.
 *          3) Event listeners.
 *          4) Methods like map, filter, reduce, etc.
 *          5) Asynchronous tasks.
 *          6) Shorter syntax.
 *          7) Concise code.
 *          8) Functional programming.
 *          9) Default arguments.
 *          
 *  - Default arguments are supported in arrow functions, while they are not supported in normal functions.
 *  - Arguments object is not supported in arrow functions, while it is supported in normal functions.
 *         
 *          
 *  - Similarities :
 *          1) Both normal functions and arrow functions can take parameters.
 *          2) Both normal functions and arrow functions can return values.
 *          3) Both normal functions and arrow functions can be assigned to variables.
 *          4) Both normal functions and arrow functions can be passed as arguments to other functions.
 * 
 *  - Key Differences :
 *          1) Normal functions are defined using the function keyword, while arrow functions are defined using the => syntax.   
 *          2) Normal functions have their own this context, while arrow functions inherit the this value from the enclosing scope.
 *          3) Normal functions are hoisted to the top of the scope, while arrow functions are not hoisted.
 *          4) Normal functions are ideal for defining object methods, while arrow functions are ideal for higher-order functions.
 *          5) Normal functions are not suitable for higher-order functions, while arrow functions are suitable for higher-order functions.
 *          6) Normal functions are not suitable for callback functions, while arrow functions are suitable for callback functions.
 *          7) Default arguments are not supported in normal functions, while arrow functions support default arguments.
 *          8) Normal functions have an arguments object, while arrow functions do not have an arguments object. 
 * 
 *  - Best Practices :
 *          1) Use arrow functions for higher-order functions.
 *          2) Use arrow functions for callback functions.
 *          
 *  - Note :
 *          1)  Arrow functions do not have their own this context. They inherit the this value from the enclosing scope. This makes them unsuitable for defining object methods.
 *          2)  Normal functions have their own this context. They are ideal for defining object methods.
 *         
 */