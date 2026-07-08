






























// callbacks , user greet, and calculator, 

// const LIMIT = 2_000_000_000
// let counter = 0

// const greet = (user) => {

//     for (let i = 0; i < LIMIT; i++) {
//     counter++;
//      }

//     console.log("Hello," , user)
// }

// // const greetUser = (user, callback) => {
// //     callback(user)
// // }

// // greetUser("Ali", greet)

// // sync Operration, 


// const greetUser = (user, callback) => {
//     console.log("before callback, ")
//     callback(user)
//     console.log("after callback, ")
// }

// greetUser("Ali", greet)

// this is blocking operation, 


// ASYNCHRONOUS callback - executes later

const simpleCallback = () => {
    console.log("!! Hi, i am called back !!")
}

function asyncOperation (callback) {
    console.log("Before Scheduling --- ")
    
    setTimeout(callback, 1000)
    
    console.log("After Scheduling --- ")
}



asyncOperation(simpleCallback)