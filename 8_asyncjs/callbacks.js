// const add = (a, b) => a + b
// const subtract = (a, b) => a - b

// const calculator = (a, b , callback) => {
//    return callback(a, b)
// }

// console.log("First line of code. ")
// console.log("second  line of code. ")

// // code that wil take 2 sec, 0 billin counting, 

// console.log("third line of code. ")

// console.log(calculator(2,3, add))
// console.log(calculator(6,4, add))
// console.log(calculator(6,4, subtract))

// const limit = 2_000_000_000 


// const greeter = (u) => {
//     console.log("starting to say ---")
//     let counter  = 0
//     for (let i = 0; i < limit ; i++) {
//         counter++
//     }
//     console.log("Good morning! ", u)
// }

// const greet = (user, greetCB) => {
//     greetCB(user)
// }

// console.log(greet("Ali", greeter))




// sync callbacks, 

function heavyProces () {
    const limit = 3_000_000_000
     let counter = 0
    for (let i = 0; i< limit; i++){
        counter++
    }
    console.log("heavy Process done")
}


const syncOperation  = (cb) => {

    console.log("== Ftist Step, ===")
    
    cb() 

    console.log("== third. Step, ===")
}

// console.log(syncOperation(heavyProces))


// Asunc Operation 

const asynOperation = (cb) => {

    console.log("== Ftist Step, ===")
    
    setTimeout(() => cb() , 0)  // make it async , 

    console.log("== third. Step, ===")
}


// console.log(asynOperation(heavyProces))

const loginUser = () => {
    // data base call, and completing other things for authentication
    console.log("user Logged in successfully")
}


const asynLogin = (callLogin) => {
    console.log("Data validated")
    setTimeout(() => callLogin(), 2000)
    console.log("please wait ... ")
    console.log("Doing rest of main stack")
}

asynLogin(loginUser)






















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

// const simpleCallback = () => {
//     console.log("!! Hi, i am called back !!")
// }

// function asyncOperation (callback) {
//     console.log("Before Scheduling --- ")
    
//     setTimeout(callback, 1000)
    
//     console.log("After Scheduling --- ")
// }



// asyncOperation(simpleCallback)