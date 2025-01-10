/**
 * * Promises in JavaScript :
 *  - A promise is an object representing the eventual completion or failure of an asynchronous operation.
 *
 *  - Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.
 *
 *  -
 */

// Basic Promise Example
// const promiseFunction = new Promise((resolve, reject) => {
//   let randomNumber = Math.floor(Math.random() * 10);

//   console.log("Random Number is : ", randomNumber);

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

const FAKE_API = "https://jsonplaceholder.typicode.com/posts";

const fetchPost = fetch(FAKE_API);

fetchPost
	.then((response) => {
		if (!response.ok) {
			throw new Error(`HTTP status error: ${response.status}`);
		}
		return response.json();
	})
	.then((data) => {
		console.log("Post Details : ", data);
	})
	.catch((error) => {
		console.log("Error while fetching post details : ", error);
	});

const functionA = () => {
	console.log("Hello");
	console.log("H");
};
