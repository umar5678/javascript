// ┌─────────────────────────────────────────────────────────────────────────────┐
// │                        WHY PROMISES?                                        │
// ├─────────────────────────────────────────────────────────────────────────────┤
// │                                                                             │
// │   CALLBACKS HAD PROBLEMS:                                                   │
// │   ══════════════════════════════════════════════════════════════════════    │
// │                                                                             │
// │   1. Callback Hell (Pyramid of Doom)                                        │
// │   2. Error handling at every level                                          │
// │   3. Hard to compose and combine                                            │
// │   4. Inversion of control (trusting external code)                          │
// │                                                                             │
// │   PROMISES SOLVE THESE:                                                     │
// │   ══════════════════════════════════════════════════════════════════════    │
// │                                                                             │
// │   ┌─────────────────────────────────────────────────────────────────────┐   │
// │   │                                                                     │   │
// │   │   CALLBACK HELL:                  PROMISE CHAIN:                    │   │
// │   │   ─────────────────               ──────────────────                │   │
// │   │   doA(function(a) {               doA()                             │   │
// │   │     d(a, function(b) {oB            .then(a => doB(a))              │   │
// │   │       doC(b, function(c) {          .then(b => doC(b))              │   │
// │   │         doD(c, function(d) {        .then(c => doD(c))              │   │
// │   │           // done                   .then(d => console.log(d))      │   │
// │   │         });                         .catch(err => handleError(err));│   │
// │   │       });                                                           │   │
// │   │     });                                                             │   │
// │   │   });                                                               │   │
// │   │                                                                     │   │
// │   │   Nested & Messy                  Flat & Clean!                     │   │
// │   │                                                                     │   │
// │   └─────────────────────────────────────────────────────────────────────┘   │
// │                                                                             │
// │   WHAT IS A PROMISE?                                                        │
// │   ══════════════════════════════════════════════════════════════════════    │
// │                                                                             │
// │   A Promise is an object representing the eventual completion               │
// │   (or failure) of an asynchronous operation.                                │
// │                                                                             │
// │   Think of it like a receipt from a restaurant:                             │
// │    "Your order is being prepared. We PROMISE to either:                     │
// │       ✓ Deliver your food (fulfilled), OR                                   │
// │       ✗ Tell you we're out of ingredients (rejected)"                       │
// │                                                                             │
// │   REAL-WORLD USAGE:                                                         │
// │   • fetch() for API calls - oreturns a Prmise                               │
// │   • Reading files in Node.js (fs.promises)                                  │
// │   • Database operations (MongoDB, PostgreSQL)                               │
// │   • Any async operation in modern JavaScript                                │
// │                                                                             │
// └─────────────────────────────────────────────────────────────────────────────┘

// Diagram

// ┌─────────────────────────────────────────────────────────────────────────────┐
// │                       PROMISE LIFECYCLE                                     │
// ├─────────────────────────────────────────────────────────────────────────────┤
// │                                                                             │
// │                         ┌─────────────┐                                     │
// │                         │   PENDING   │                                     │
// │                         │  (waiting)  │                                     │
// │                         └──────┬──────┘                                     │
// │                                │                                            │
// │              Async operation completes...                                   │
// │                                │                                            │
// │              ┌─────────────────┴─────────────────┐                          │
// │              │                                   │                          │
// │              ▼                                   ▼                          │
// │     ┌─────────────────┐                ┌─────────────────┐                  │
// │     │    FULFILLED    │                │    REJECTED     │                  │
// │     │   (succeeded)   │                │    (failed)     │                  │
// │     │                 │                │                 │                  │
// │     │  Has a VALUE    │                │  Has a REASON   │                  │
// │     │  (the result)   │                │  (the error)    │                  │
// │     └────────┬────────┘                └────────┬────────┘                  │
// │              │                                  │                           │
// │              ▼                                  ▼                           |
// │         .then(value)                      .catch(error)
//
//                 | ------      Satteled ----------|
// │                                                                             │
// │   ═══════════════════════════════════════════════════════════════════════   │
// │                                                                             │
// │   IMPORTANT RULES:                                                          │
// │   • A promise starts as PENDING                                             │
// │   • It can only transition ONCE (pending → fulfilled OR pending → rejected) │
// │   • Once settled (fulfilled/rejected), it CANNOT change                     │
// │   • The value/reason is immutable once set                                  │
// │                                                                             │
// │   ═══════════════════════════════════════════════════════════════════════   │
// │                                                                             │
// │   TERMINOLOGY:                                                              │
// │   • "Settled" = Either fulfilled OR rejected (not pending)                  │
// │   • "Resolved" = The promise's fate is determined                           │
// │   • "Thenable" = Any object with a .then() method                           │
// │                                                                             │
// └─────────────────────────────────────────────────────────────────────────────┘

// =========
//
// PROMISE STATES AND LIFECYCLE
//

// console.log("--- Promises -----")

// const myPromise = new Promise ((resolve, reject ) => {
//     // Sync code runs
//     console.log("--- 1: Promise Created, it runs immediely ---- ")

//     // Async code , side stack
//     setTimeout(() => {
//         const success = false
//         if(success) {
//             resolve("Porcess Completed. Successfully")
//         } else {
//             reject ("Unsuccess, Proces Failed.")
//         }
//     }, 1000)

// })

// console.log("2: Step 2. promise was created -----")
// console.log("Promise state: ", myPromise)

// myPromise.then((result) => {
//     console.log("promise resolved: ", result)
// } ).catch ((result) => {
//     console.log("Promise Failed: ", result)
// }).finally(() => {
//             reject ("Unsuccess, Proces Failed.")
//         }
//     }, 1000)

// })

// console.log("2: Step 2. promise was created -----")
// console.log("Promise state: ", myPromise)

//     console.log("Always runs, -")
// })

const fetchUser = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = {
        1: { id: 1, name: "Ali" },
        2: { id: 2, name: "Bilal" },
        4: { id: 4, name: "Bilal" },
      };

      const user = users[userId];

      if (user) {
        resolve(user);
      } else {
        reject(new Error(`User not found with user id: ${userId}`));
      }
    }, 1000);
  });
};

const fetchPost = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = [
        { postId: 1, userId: 1, postContent: "My first post" },
        { postId: 2, userId: 2, postContent: "Great ideas post" },
        { postId: 3, userId: 3, postContent: "My second post" },
        { postId: 4, userId: 2, postContent: "My projects first post" },
        { postId: 5, userId: 2, postContent: "My ideal first post" },
        {
          postId: 6,
          userId: 1,
          postContent: "My first something amazing post",
        },
        { postId: 7, userId: 1, postContent: "My first post anohter " },
      ];
      const usersPosts = posts.filter((post) => userId === post.userId);

      if (usersPosts.length !== 0) {
        resolve(usersPosts);
      } else {
        reject(new Error(`This user has no posts. `));
      }
    }, 500);
  });
};

// fetchUser(2)
//     .then((user) => {
//         console.log("User fetched: ", user)
//         return fetchPost(user.id)
//     })
//     .then((posts) => {
//         console.log("posts", posts)
//     })
//     .catch((err) => {
//         console.log("Failed to fetch user because ", err.message )
//     })
//     .finally(() => {
//         console.log("User fetch complete")
//     })

// fetchUser(99)
//     .then((user) => {
//         console.log("User fetched: ", user)
//     })
//     .catch((err) => {
//         console.log("Failed to fetch user because ", err.message )
//     })
//     .finally(() => {
//         console.log("User fetch complete")
//     })

const fetchAsync = async (userId) => {
  try {
    const user = await fetchUser(userId);
    const posts = await fetchPost(user.id);

    console.log("user: ", user);
    console.log("posts; ", posts);
  } catch (err) {
    console.log("Error: ", err.message);
  }
};

fetchAsync(1);
fetchAsync(4);









// fetchAsync(12)

// -----------------------------------------
// Creating a Basic Promise
// -----------------------------------------

// console.log("=== Creating Promises ===\n");

// A Promise takes an "executor" function with two parameters:
// - resolve: call when successful
// - reject: call when failed

// const myPromise = new Promise((resolve, reject) => {
//   // this code runs immediately
//   console.log("1: promise run start >> ");

//   // start an async process
//   setTimeout(() => {
//     const success = false;

//     if (success) {
//       resolve("operation successfull");
//     } else {
//       reject("Error");
//     }
//   }, 1000);

// });

// console.log("2: code after promise creation runs now. ");
// console.log("Current state of promise: ", myPromise);

// myPromise
//   .then((result) => {
//     console.log("4: promise fullfilled with : ", result);
//   })
//   .catch((result) => {
//     console.log("Promise rejected: ", result);
//   });

// const fetchUser = (userId) => {
//   return new Promise((resolve, reject) => {
//     console.log(" --- Fetching user --- ");

//     setTimeout(() => {
//       const users = { 1: { id: 1, name: "Ali" }, 2: { id: 2, name: "Bilal" } };

//       const user = users[userId];
//       if (user) {
//         resolve(user);
//       } else {
//         reject(new Error(`User not found with id: ${userId}`));
//       }
//     }, 1500);
//   });
// };

// console.log("see it", fetchUser(1))

// fetchUser(1)
//   .then((user) => {
//     console.log("user Fetched: ", user.name);
//   })
//   .catch((err) => {
//     console.log("Error", err.message);
//   });

// fetchUser(2)
//     .then((user) => {
//         console.log("user Fetched: ", user.name)
//     })
//     .catch((err) => {
//         console.log('Error', err.message)
//     })

// fetchUser(4)
//     .then((user) => {
//         console.log("user Fetched: ", user.name)
//     })
//     .catch((err) => {
//         console.log('Error', err.message)
//     })
//     .finally(() => {
//         console.log("promise settled, either user is fetched or not. but finally runs")
//     })

// ┌─────────────────────────────────────────────────────────────────────────────┐
// │                   CONSUMING PROMISES                                        │
// ├─────────────────────────────────────────────────────────────────────────────┤
// │                                                                             │
// │   .then(onFulfilled, onRejected)                                            │
// │   ═══════════════════════════════════════════════════════════════════════   │
// │   • Called when promise is FULFILLED                                        │
// │   • Receives the resolved VALUE                                             │
// │   • Returns a NEW promise (enables chaining!)                               │
// │                                                                             │
// │   promise.then(                                                             │
// │       value => { /* handle success */ },                                    │
// │       error => { /* handle error (optional) */ }                            │
// │   );                                                                        │
// │                                                                             │
// │   ───────────────────────────────────────────────────────────────────────   │
// │                                                                             │
// │   .catch(onRejected)                                                        │
// │   ═══════════════════════════════════════════════════════════════════════   │
// │   • Called when promise is REJECTED                                         │
// │   • Receives the rejection REASON (usually an Error)                        │
// │   • Equivalent to .then(null, onRejected)                                   │
// │   • Returns a NEW promise                                                   │
// │                                                                             │
// │   promise.catch(error => { /* handle error */ });                           │
// │                                                                             │
// │   ───────────────────────────────────────────────────────────────────────   │
// │                                                                             │
// │   .finally(onFinally)                                                       │
// │   ═══════════════════════════════════════════════════════════════════════   │
// │   • Called when promise SETTLES (fulfilled OR rejected)                     │
// │   • Does NOT receive any arguments                                          │
// │   • Good for cleanup (hide loading spinner, close connections)              │
// │   • Returns a NEW promise that preserves the original result                │
// │                                                                             │
// │   promise.finally(() => { /* cleanup code */ });                            │
// │                                                                             │
// │   ───────────────────────────────────────────────────────────────────────   │
// │                                                                             │
// │   COMMON PATTERN:                                                           │
// │                                                                             │
// │   fetchData()                                                               │
// │       .then(data => process(data))        // Handle success                 │
// │       .catch(error => handleError(error)) // Handle any error               │
// │       .finally(() => hideSpinner());      // Always runs                    │
// │                                                                             │
// └─────────────────────────────────────────────────────────────────────────────┘
