/**
 * * Event Loop in JavaScript :
 *
 *  - The Event Loop is a mechanism that makes JavaScript a non-blocking, asynchronous language.
 *
 *  - Components of Event Loop :
 *          1) Call Stack
 *          2) Web APIs / Browser APIs
 *          3) Callback Queue (Task Queue)
 *          4) Microtask Queue (Job Queue)
 *          5) Event Loop
 *
 *          1) Call Stack :
 *                      - The call stack is a data structure that keeps track of function calls.
 *                      - Whenever a function is invoked, it is added to the top of the call stack.
 *                      - When the function completes, it is removed from the call stack.
 *
 *          2) Web APIs / Browser APIs :
 *                      - When asynchronous functions like setTimeout() or an HTTP request is called, it is handed over to the browser's API or Node.js APIs.
 *                      - These APIs handles the task in background, allowing the main thread to continue running other code.
 *                      - These APIs handle the request and return a callback function.
 *                      - These APIs are not part of the JavaScript engine but are provided by the browser or Node.js environment.
 *                      - Examples of Web APIs include setTimeout(), setInterval(), fetch(), XMLHttpRequest(), DOM events, localStorage, console, location etc.
 *
 *          3) Callback Queue (Task Queue) :
 *                      - The callback queue is a data structure that holds callback functions.
 *                      - When the browser's APIs finish the task, the callback function is pushed to the callback queue.
 *                      - The callback queue is also known as the task queue.
 *                      - Examples of callback queue include setTimeout(), setInterval(), fetch(), XMLHttpRequest(), DOM events, etc.
 *
 *          4) Microtask Queue (Job Queue) :
 *                      - The microtask queue is a data structure that holds microtasks.
 *                      - Microtasks have a higher priority than the callback queue.
 *                      - When the call stack is empty, the microtask queue is processed.
 *                      - The microtask queue is also known as the job queue.
 *                      - Examples of microtasks include Promises, MutationObserver, Object.observe, etc.
 *
 *          5) Event Loop :
 *                      - The event loop is a mechanism that processes and handles callbacks.
 *                      - The event loop continuously monitors the call stack and the callback queue. Its primary job is :
 *                                  1) Checks if the call stack is empty.
 *                                  2) If the call stack is empty, it dequeues the first task from microtask queue (if available) and pushes it onto the call stack for execution.
 *                                  3) If the microtask queue is empty, it dequeues the first task from the callback queue and pushes it onto the call stack for execution.
 *
 *
 *  - Why is the event loop Important?
 *          1) Non-blocking Asynchronous Behavior : JavaScript is a single-threaded language, meaning it can execute only one task at a time. The event loop allows JavaScript to handle multiple tasks asynchronously.
 *          2) Concurrency Management
 *          3) Avoids Blocking code.
 */

/**
 *  * Mutation Observer :
 *          - The MutationObserver is the build-in object that allows you to watch for the changes being made to the DOM tree.
 *          - It is useful for observing modification like additions or removal of nodes, changes to attributes, or changes to the text content within the DOM elements.
 *          - It detects DOM structure changes without polling the DOM tree.
 *          - The MutationObserver does not detects style changes that do not affect attributes directly.
 *
 *  - Syntax :
 *              const observer = new MutationObserver(callback);
 *              observer.observe(targetNode, config);
 *
 *  - Parameters :
 *              1) callback : The function to be executed when a mutation occurs.
 *              2) targetNode : The DOM element to observe.
 *              3) config : An object that specifies what DOM mutations should be reported.
 *
 * - Common Use Cases :
 *              1) Auto-saving form data.
 *              2) Lazy-loading images.
 *              3) Infinite scrolling.
 *              4) Real-time content updates.
 *              5) Animations.
 */

/**
 *  ? Callback Starvation :
 *
 *  - In JavaScript, starvation of the callback queue i.e "callback starvation" refers to a situation where the event loop keeps processing tasks from the microtask queue continuously, without giving  time for tasks in the callback queue to execute. This leads to starvation of the callback queue, meaning those callbacks do not get a chance to run.
 */
