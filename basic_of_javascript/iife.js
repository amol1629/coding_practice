/**
 *  * IIFE: Immediately Invoked Function Expression : 
 * 
 *  - An IIFE (Immediately Invoked Function Expression) is a self-executing function that runs immediately after being defined. 
 *  - It helps create a private scope and avoids polluting the global namespace.
 *  - IIFE is a function that is executed right after it is created.
 *  - It is used to create a scope for the variables and functions inside it.
 *  
 *  - An IIFE is a function that is wrapped in parentheses and executed immediately using ().
 * 
 *  - Syntax :
 *          (function() {
 *              // code here
 *          } )();
 * 
 *  ? Types of IIFE :
 *          * 1) Anonymous IIFE :
 *                (function() { 
 *                      // code here
 *                  })();
 * 
 *         * 2) Named IIFE :
 *                  (function functionName() {
 *                      // code here
 *                  })();
 * 
 *          * 3) Arrow Function IIFE :    
 *                  (() => {
 *                      // code here
 *                  })();
 * 
 *          * 4) IIFE with Parameters :
 *                  (function(a, b) {
 *                      // code here
 *                  })(10, 20);
 * 
 *          * 5) IIFE with Return Value :
 *                  (function() {
 *                      return "Hello";
 *                  })();
 *  
 *  ? Use Cases :
 *          - To create a private scope for variables and functions.
 *          - Encapsulate code that should not be accessed from outside.
 *          - Avoid Hoisting Issues which means that  it ensures that the function runs before any other code can interfere.
 *          - To avoid naming conflicts.
 *          - To create a closure.
 *          - To prevent global namespace pollution.
 *          - To create a module.
 *          
 */

const counter = (function() {
    let count = 0; // Private variable

    return {
        increment: function() {
            count++;
            console.log(count);
        },
        decrement: function() {
            count--;
            console.log(count);
        }
    };
})();

counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.decrement(); // Output: 1
