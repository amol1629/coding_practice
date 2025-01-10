/**
 * * Promises in JavaScript :
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

// Fetch Example :

const GITHUB_URL = "https://api.github.com/users/amol1629";

const fetchUser = fetch(GITHUB_URL);

fetchUser
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    
    console.log("User Data : ", data);
    console.log("User Name : ", data.name);
  })
  .catch((error) => {
    console.log("Error fetching user data : ", error);
  });
