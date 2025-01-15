/**
 * * Promises in JavaScript :
 *  - A promise is an object representing the eventual completion or failure of an asynchronous operation.
 *  - Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.
 *  - Promise objects are immutable, meaning that once a promise is resolved or rejected, it cannot be resolved or rejected again.
 *
 *  - Promises have three states:
 *  	  	1) Pending : Initial state, neither fulfilled nor rejected.
 *  	 	2) Fulfilled : Meaning that the operation completed successfully and result is available.
 *  	  	3) Rejected : Meaning that the operation failed.
 *
 *  - A promise can be created in three ways:
 *  	  	1) Using the Promise constructor.
 *  	  	2) Using the async/await syntax.
 *  	  	3) Using the fetch API.
 *
 * - Using a Promise :
 *  - You interact with promises using the .then(), .catch(), and .finally() methods.
 * 			1) then() :
 * 					- The .then() method is used to define what happens when the promise is fulfilled. It takes two arguments :
 * 							a) A callback function that runs when the promise is fulfilled.
 * 							b) An optional callback function that runs when the promise is rejected.
 *
 * 			2) catch() : The .catch() method is used to define what happens when the promise is rejected.
 *
 * 			3) finally() : The .finally() method is called after the promise is settled, regardless of whether it was fulfilled or rejected. It is often used for cleanup tasks.
 *
 * - Promise Methods :
 *  	  	1) Promise.all() : 
 * 						- Takes an array of promises and resolves when all the promises in the array have resolved. 
 * 						- Success : Returns an array of the resolved values.
 * 						- Failure : Returns the error of the first rejected promise.
 * 
 *  	  	2) Promise.allSettled() : 
 * 						- Takes an array of promises and resolves after all the promises have either resolved or rejected. 
 * 						- Success : Returns an array of objects representing the status of each promise.
 * 						- Failure : Returns an array with all rejection reasons, marked with status: 'rejected'.
 * 
 * 	  		3) Promise.any() : 
 * 						- Takes an array of promises and resolves when any of the promises in the array have resolved. 
 * 						- Success : Returns the value of the first resolved promise.
 * 						- Failure : Returns an AggregateError object containing an array of errors.
 * 
 * 	  		4) Promise.race() : 
 * 						- Takes an array of promises and resolves or rejects as soon as one of the promises in the array resolves or rejects. 
 * 						- Success : Returns the value of the first resolved or rejected promise.
 * 						- Failure : Returns the error of the first rejected promise.
 *
 *  ? Promise Chaining :
 *  	  	- Promises can be chained using the then() method.
 *  	  	- The then() method returns a new promise, which resolves to the value returned by the callback function.
 *  	  	- The then() method can be chained multiple times.
 *  	  	- The catch() method is used to handle errors in the promise chain.
 *  	  	- The finally() method is used to execute code after the promise is settled.
 *
 * - Advantages of Promises :
 * 			1) Better readability : Promises reduce callback nesting, making code easier to read.
 * 			2) Error handling : Errors can be handled in on place with .catch().
 * 			3) Chaining : Promises enables chaining for sequential asynchronous operations.
 *
 *
 */

// 	Basic Promise Example
// 	const promiseFunction = new Promise((resolve, reject) => {
//	 let randomNumber = Math.floor(Math.random() * 10);

// console.log("Random Number is : ", randomNumber);

//   if (randomNumber < 5) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// promiseFunction
//   .then(() => {
//     console.log("TRUE...");
//   })
//   .catch(() => {
//     console.log("FALSE...");
//   });

// Display GitHub user profile and bio using fetch and promises.:

// const GITHUB_URL = "https://api.github.com/users/amol1629";

// const fetchUser = fetch(GITHUB_URL);

// fetchUser
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP status error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log("User Details : ", data);
//     const bioElement = document.getElementById("bio-content");
//     const avatarElement = document.getElementById("avatar-image");

//     if (data.bio) {
//       bioElement.textContent = data.bio;
//     } else {
//       bioElement.textContent = "No bio available for this user.";
//     }

//     if (data.avatar_url) {
//       avatarElement.src = data.avatar_url;
//       avatarElement.style.display = "block"; // Show the avatar image
//     }
//   })
//   .catch((error) => {
//     const bioElement = document.getElementById("bio-content");
//     bioElement.textContent = "Error while fetching user bio.";
//     console.error("Error while fetching user: ", error);
//   });

// const FAKE_API = "https://jsonplaceholder.typicode.com/posts";

// const fetchPost = fetch(FAKE_API);

// fetchPost
// 	.then((response) => {
// 		if (!response.ok) {
// 			throw new Error(`HTTP status error: ${response.status}`);
// 		}
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log("Post Details : ", data);
// 	})
// 	.catch((error) => {
// 		console.log("Error while fetching post details : ", error);
// 	});

// const functionA = () => {
// 	console.log("Hello");
// 	console.log("H");
// };


const myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise is resolved");
	}, 3000);


});

myPromise
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {
		console.log("Promise is settled");
	});