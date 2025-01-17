/**
 *  * fetch() in JavaScript :
 *
 *  - The fetch() function in JavaScript is a modern and widely used way to make HTTP requests to servers for fetching resources, including APIs, data files, and more.
 *  - It is the part of the Fetch API, introduced to replace older  XMLHttpRequest (XHR) approach, providing a more powerful, flexible, and cleaner syntax using Promises.
 * 
 *  - Syntax of fetch() : 
 *              fetch(url, options)
 *                      .then(response =>{
 *                          Handle response here...
 *                       })
 *                      .catch(error =>{
 *                          Handle error here...
 *                      })
 * 
 *  - Option Object Properties in fetch() :
 *          1) method : The HTTP method to be used in the request. Default is GET.
 *          2) headers : The HTTP headers (an object) to be used in the request.
 *          3) body : The request body (a string, a Buffer, or a ReadableStream). 
 *          4) mode : The request mode. Default is cors. (e.g., cors, no-cors, same-origin, same-site)
 *          5) cache : The request cache. Default is default. (e.g., 'default', 'no-store').
 *          6) credentials : The request credentials. Default is omit. (e.g., 'omit', 'same-origin' , 'include').
 *          7) redirect : The request redirect. Default is follow. (e.g., 'follow', 'error', 'manual').
 *          8) referrer : The request referrer. Default is client. (e.g., 'client', 'no-referrer').
 *
 *  - Key Features of fetch():
 *          1) Promise-Based : It returns a Promise that resolves to the "Response" to the request, allowing you to handle the response data in a more elegant way.
 *          2) Support Async/Await
 *          3) Support for CORS (Cross-Origin Resource Sharing)
 *          4) Better Syntax
 *          5) Default to GET : If no method is specified, it defaults to a GET request.
 *          6) Automatic JSON Parsing : If the response is JSON, it automatically parses it into a JavaScript object.
 *
 *  - The fetch() only rejects a Promise for "network errors" (not for HTTP status errors like 404 or 500). You can check the status of the response using "response.ok" or "response.status" to handle these cases.
 *  - The fetch() supports options like custom headers, request methods, and body data for flexibility
 *
 *  - Common Fetch API Methods on Response Object :
 *          1) json() : Returns a Promise that resolves to the parsed JSON response body.
 *          2) text() : Returns a Promise that resolves to the response body as text.
 *          3) blob() : Returns a Promise that resolves to the response body as a blob (for binary data).
 *          4) arrayBuffer() : Returns a Promise that resolves to the response body as an array buffer.
 *          5) formData() : Returns a Promise that resolves to the response body as a FormData object.
 *
 *  - Limitations :
 *          1) No Automatic Request Cancellation : Unlike XMLHttpRequest, fetch() does not automatically cancel requests when the user navigates away from the page. You need to implement this manually. You can use the "AbortController API" to cancel requests.
 *          2) No Timeout Handling by Default
 */


