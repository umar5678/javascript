// ┌─────────────────────────────────────────────────────────────────────────────┐
// │                 WHY ASYNCHRONOUS JAVASCRIPT MATTERS                         │
// ├─────────────────────────────────────────────────────────────────────────────┤
// │                                                                             │
// │   THE PROBLEM WITH SYNCHRONOUS CODE:                                        │
// │   ══════════════════════════════════════════════════════════════════════    │
// │                                                                             │
// │   Imagine a restaurant with ONE waiter who can only do ONE thing at a time: │
// │                                                                             │
// │   SYNCHRONOUS WAITER:                                                       │
// │   ┌─────────────────────────────────────────────────────────────────────┐   │
// │   │  1. Take order from Table 1                                         │   │
// │   │  2. Go to kitchen, WAIT for food (10 mins)  BLOCKED!                │   │
// │   │  3. Serve Table 1                                                   │   │
// │   │  4. Take order from Table 2 (they've been waiting 10 mins!)         │   │
// │   │  5. Go to kitchen, WAIT for food (10 mins)  BLOCKED!                │   │
// │   │  ... Tables 3, 4, 5 are furious!                                    │   │
// │   └─────────────────────────────────────────────────────────────────────┘   │
// │                                                                             │
// │   ASYNCHRONOUS WAITER:                                                      │
// │   ┌─────────────────────────────────────────────────────────────────────┐   │
// │   │  1. Take order from Table 1 → Send to kitchen                       │   │
// │   │  2. Take order from Table 2 → Send to kitchen                       │   │
// │   │  3. Take order from Table 3 → Send to kitchen                       │   │
// │   │  4. Kitchen calls: "Table 1 ready!" → Serve Table 1                 │   │
// │   │  5. Kitchen calls: "Table 3 ready!" → Serve Table 3                 │   │
// │   │  ... Everyone is happy!                                             │   │
// │   └─────────────────────────────────────────────────────────────────────┘   │
// │                                                                             │
// │   ══════════════════════════════════════════════════════════════════════    │
// │                                                                             │
// │   REAL-WORLD ASYNC OPERATIONS:                                              │
// │   • Fetching data from APIs (takes time - network delay)                    │
// │   • Reading/writing files (takes time - disk operations)                    │
// │   • Database queries (takes time - data retrieval)                          │
// │   • User interactions (unpredictable - waiting for clicks)                  │
// │   • Timers and animations (scheduled for later)                             │
// │                                                                             │
// │   JavaScript is SINGLE-THREADED but can handle async operations             │
// │   by delegating work and using CALLBACKS to handle results!                 │
// │                                                                             │
// └─────────────────────────────────────────────────────────────────────────────┘


// console.log(" Synchronous Example \n");


// Each line WAITS for the previous line to complete
// This is predictable but can be slow for time-consuming tasks
// performance is a built-in JavaScript object that provides high-precision timing. It's commonly used to measure how long code takes to execute.

const LIMIT = 5_000_000_000; // 2 billion
let counter = 0;

// console.log(`Starting loop up to ${LIMIT}...`);

const startTime = performance.now();


for (let i = 0; i < LIMIT; i++) {
    counter++;
}

// console.log("Loop finished!");

// const endTime = performance.now();



// console.log(`Time taken: ${(endTime - startTime).toFixed(2)} ms`);


// console.log("------------------------------------")

// console.log("Asynchronous Example \n");

// console.log("1. Start async example ");

// setTimeout is asynchronous - it schedules code for later
// setTimeout, setInterval, await, promis, , put into side stack, 
// setTimeout (() => {
//     console.log("2: i am inside settime out callback that run after defined duration ")
// } , 2000)

// setTimeout(() => {
//     console.log("I AM ANOHTER TIMEOUT ")
// }, 1000)

// console.log("3. End");


// console.log("-------------------------\n")

//  

console.log("user login start")

// simulate api call  for fetching,  user info , and post, 
// user info take 2 sec, and post take 1.5 sec

// and display user frinedl message while simulataion is fetching,

setTimeout (() => {
    const user = {name: "Ali", email: "user@gmail.com"}

    console.log(user)
}, 2000)

setTimeout(() => {
    const posts = [
        {id: 1, content: "post 1"},
        {id: 2, content: "post 2"},
        {id: 3, content: "post 3"},
    ]

    console.log(posts)
}, 1500)



console.log("please wait, fetching user data.")
console.log("please wait, fetching your posts")

// Imagine fetching user data from a database
// This takes time (network latency, database query, etc.)

// console.log("1. User visits profile page");

// when user visit, simulatet api call, 

// while api call is still going, display a skeleton, 

// then display user Profiler, 

// setTimeout(function() {
//     const user = {name: "Ali", email: "ali@gmail.com"}

//     console.log("got user data: ",user)
// }, 1500)

// also shoe user post fetching,

// console.log("skeleton, or show loading state, fetching user data")




// ┌─────────────────────────────────────────────────────────────────────────────┐
// │                    JAVASCRIPT RUNTIME ARCHITECTURE                          │
// ├─────────────────────────────────────────────────────────────────────────────┤
// │                                                                             │
// │  ┌─────────────────────────────────────────────────────────────────────┐    │
// │  │                        JAVASCRIPT ENGINE                            │    │
// │  │  ┌─────────────────────┐    ┌─────────────────────────────────┐     │    │
// │  │  │     CALL STACK      │    │           HEAP                   │    │    │
// │  │  │  ─────────────────  │    │   (Memory for objects)           │    │    │
// │  │  │  │ processData() │  │    │                                  │    │    │
// │  │  │  ├───────────────┤  │    │   { user: "Alice" }              │    │    │
// │  │  │  │ fetchUser()   │  │    │   { orders: [...] }              │    │    │
// │  │  │  ├───────────────┤  │    │   function() { ... }             │    │    │
// │  │  │  │ main()        │  │    │                                  │    │    │
// │  │  │  └───────────────┘  │    └──────────────────────────────────┘    │    │
// │  │  │                     │                                            │    │
// │  │  │  Functions execute  │                                            │    │
// │  │  │  one at a time!     │                                            │    │
// │  │  └─────────────────────┘                                            │    │
// │  └─────────────────────────────────────────────────────────────────────┘    │
// │                             │                                               │
// │                             ▼                                               │
// │  ┌─────────────────────────────────────────────────────────────────────┐    │
// │  │                      WEB APIs / NODE APIs                           │    │
// │  │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌───────────┐   │    │
// │  │  │ setTimeout() │ │   fetch()    │ │ DOM Events   │ │ File I/O  │   │    │
// │  │  │   Timer      │ │   Network    │ │   Click      │ │  (Node)   │   │    │
// │  │  └──────┬───────┘ └──────┬───────┘ └──────┬───────┘ └─────┬─────┘   │    │
// │  │         │                │                │               │         │    │
// │  │         └────────────────┴────────────────┴───────────────┘         │    │
// │  │                                   │                                 │    │
// │  │                    When complete, add callback to queue             │    │
// │  └───────────────────────────────────┼─────────────────────────────────┘    │
// │                                      ▼                                      │
// │  ┌─────────────────────────────────────────────────────────────────────┐    │
// │  │                       CALLBACK QUEUE                                │    │
// │  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐                │    │
// │  │  │callback1 │→│callback2 │→│callback3 │→│callback4 │→ ...           │    │
// │  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘                │    │
// │  │                                                                     │    │
// │  │  Callbacks wait here until Call Stack is empty                      │    │
// │  └─────────────────────────────────────────────────────────────────────┘    │
// │                                      │                                      │
// │                                      ▼                                      │
// │  ┌─────────────────────────────────────────────────────────────────────┐    │
// │  │                         EVENT LOOP                                  │    │
// │  │                                                                     │    │
// │  │     "Is the Call Stack empty?"                                      │    │
// │  │           │                                                         │    │
// │  │           ├── YES → Move next callback from Queue to Stack          │    │
// │  │           │                                                         │    │
// │  │           └── NO  → Keep waiting...                                 │    │
// │  │                                                                     │    │
// │  │     🔄 This loop runs continuously!                                 │    │
// │  └─────────────────────────────────────────────────────────────────────┘    │
// │                                                                             │
// └─────────────────────────────────────────────────────────────────────────────┘


// ┌─────────────────────────────────────────────────────────────────────────────┐
// │                    EVENT LOOP IN ACTION                                     │
// ├─────────────────────────────────────────────────────────────────────────────┤
// │                                                                             │
// │   CODE:                                                                     │
// │   ┌─────────────────────────────────────────────────────────────────────┐   │
// │   │  console.log("Start");                                              │   │
// │   │  setTimeout(() => console.log("Timer"), 0);                         │   │
// │   │  console.log("End");                                                │   │
// │   └─────────────────────────────────────────────────────────────────────┘   │
// │                                                                             │
// │   STEP-BY-STEP:                                                             │
// │   ═══════════════════════════════════════════════════════════════════════   │
// │                                                                             │
// │   STEP 1: console.log("Start")                                              │
// │   ┌────────────┐  ┌─────────────┐  ┌─────────────┐                          │
// │   │Call Stack  │  │  Web APIs   │  │   Queue     │  Output: "Start"         │
// │   │────────────│  │             │  │             │                          │
// │   │console.log │  │             │  │             │                          │
// │   └────────────┘  └─────────────┘  └─────────────┘                          │
// │                                                                             │
// │   STEP 2: setTimeout registered                                             │
// │   ┌────────────┐  ┌─────────────┐  ┌─────────────┐                          │
// │   │Call Stack  │  │  Web APIs   │  │   Queue     │                          │
// │   │────────────│  │─────────────│  │             │                          │
// │   │setTimeout  │  │ Timer (0ms) │  │             │                          │
// │   └────────────┘  └─────────────┘  └─────────────┘                          │
// │                                                                             │
// │   STEP 3: console.log("End"), Timer completes                               │
// │   ┌────────────┐  ┌─────────────┐  ┌─────────────┐                          │
// │   │Call Stack  │  │  Web APIs   │  │   Queue     │  Output: "End"           │
// │   │────────────│  │             │  │─────────────│                          │
// │   │console.log │  │             │  │   callback  │                          │
// │   └────────────┘  └─────────────┘  └─────────────┘                          │
// │                                                                             │
// │   STEP 4: Stack empty, Event Loop moves callback                            │
// │   ┌────────────┐  ┌─────────────┐  ┌─────────────┐                          │
// │   │Call Stack  │  │  Web APIs   │  │   Queue     │  Output: "Timer"         │
// │   │────────────│  │             │  │             │                          │
// │   │  callback  │  │             │  │             │                          │
// │   └────────────┘  └─────────────┘  └─────────────┘                          │
// │                                                                             │
// │   FINAL OUTPUT: "Start", "End", "Timer"                                     │
// │   (Even though timer is 0ms, it still waits for the queue!)                 │
// │                                                                             │
// └─────────────────────────────────────────────────────────────────────────────┘

// console.log("4: LAST PIECE OF CODE")