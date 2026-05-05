// // show simple if else statements

const isAdmin = false

// if (isAdmin) {
//     console.log("Welcom to admin dashboard")
// } else {
//     console.log("access denied")
// }


const input = "     "
const cartItems = 0
const data = { id: 123 }

// if (input.trim() === "") {
//     console.log("user has no input yet")
// } else {
//     console.log("user input: ", input)
// }

// if (cartItems !== 0) {
//     console.log("cart item number : ", cartItems)
// } else {
//     console.log("cart is empty")
// }

// if (data !== null) {
//     console.log("data: ", data)
// } else {
//     console.log("no data yet")
// }


// input validations: // how to properly handle false values

// user input, // test ""
// cart items, // 0
// user data. // null

// first  test with some working truthy data
// test these with empty values, then get wrong behaviour
// then handle false values

/// create a function , that return a string and tells if the provied number is even or not. 


// isEven()


// function isEven (num) {

//     // if it completely divid to 2 , then its even

//     if(num % 2 === 0) {
//         return `number ${num} is even`
//     } 

// }

function isEvenOrOdd(num) {

    let result = []

    if (num % 2 === 0) {
        result.push(`number ${num} is even`)
    } else {
        result.push(`number ${num} is Not even`)
    }

    return result

    if (num % 2 !== 0) {
        result.push(`number ${num} is Odd`)
    } else {
        result.push(`number ${num} is Not Odd`)
    }

    return result
}

console.log(isEvenOrOdd(12))
// 12 is evenm, 
// 12 is not odd

// assignemt : create isOdd function, because current will return undefined for odd number, then create idEvenOrOdd()


// check if the student passed or failed,. 
// create three var, name, total marks, obtained marks, passing critaria 33% 
// const name = "Asim"
// const totalMarks

// assignemt, calcualte discount , 15 % discount for members. 
// is member, purchase amount,
//  // if isMember, then apply 15% discout 
// // else tell the user to becoem a member. 

// if else ladder: 

// gradding 
// if marks are 90% - 100, A+ grade. 
// 80+ A
// 70+ B  
// 60+ C  
// 50+ C
// less then 50 , fail  

function getGradeLatter(marksPercentage) {
    if (marksPercentage >= 90) {
        return `A+ `
    } else if (marksPercentage >= 80) {
        return `A `
    }
    else if (marksPercentage >= 70) {
        return `B `
    }
    else if (marksPercentage >= 60) {
        return `C `
    }
    else if (marksPercentage >= 50) {
        return `D `
    } else {
        return `Fail`
    }

}

// console.log(getGradeLatter(99))
// console.log(getGradeLatter(62))
// console.log(getGradeLatter(70))
// console.log(getGradeLatter(51))
// console.log(getGradeLatter(34))

// console.log((getGradeLatter(84)))

/// similarly use if-else ladder to discribe temptrature. 

// less then 0 . tell to saty inside, 
// less 10, very cold, 
/// less then 20 cold
// less then 30,  prelsent 
// less then 40, warm stay hydrated. 
// else ; dangerous heat. 

// nested conditions: 
// ATM withdrawal 

// for a successful withdrawal . 
// has correct pin, then amount should be greater then 0, but les then account current balance.
// return tell remaing balance  , show message that amount has withdrown

// function atmWithDrawal(hasPin, withdrawalAmount, accountBalance) { // bad example , nested if else
//     if (hasPin) {
//         // procees next 
//         if (withdrawalAmount > 0) {
//             // proced next
//             if (withdrawalAmount <= accountBalance) {
//                 // proceed to last check , multipel of 10s
//                 if (withdrawalAmount % 10 === 0) {
//                     // process payment 
//                     const newBalance = accountBalance - withdrawalAmount
//                     return `You got ${withdrawalAmount} in cash, You have ${newBalance} ramining`


//                 } else {
//                     return `should be multiple of 10`
//                 }
//             } else {
//                 return `withdraw cannot be more then avaiable balance`
//             }
//         } else {
//             return `withdraw cannot be less then 0`
//         }
//     } else {
//         return `pin is required`
//     }
// }

function atmWithDrawal(hasPin, withdrawalAmount, accountBalance) { // good example

    // guard clause and early retrun 

    if (!hasPin) {
        return "Pin is required"
    } 

    if (withdrawalAmount < 0) {
        return `withdraw cannot be less then 0`
    }

    if (withdrawalAmount > accountBalance) {
        return `withdraw cannot be more then avaiable balance`
    }

    if (withdrawalAmount % 10 !== 0) {
        return `should be multiple of 10`
    }


    const newBalance = accountBalance - withdrawalAmount
    return `You got ${withdrawalAmount} in cash, You have ${newBalance} ramining`

}

console.log(atmWithDrawal(true, 672, 700))


// dummy login function, 

// this function get enail, and password,, and then comapre it if it matches the its own then it say welcome

//



// console.log(dummyLogin("admin@store.com", "admin123@Secure")) 



// good banking system  


// assignemt, validate registration, 
// validate email,
// password is required, must be more then 8 chars, 
// age must be >= 18
// agreettoTandC . 


// 

// function checkProfile(username, age, bio) {
//     // Hint: Use the "!" operator or check against null/undefined
//     // Example: if (!username) { return "Username missing" }
// }

// console.log(checkProfile("Asim", 25, "Hello!")); // "Profile Complete!"
// console.log(checkProfile("", 25, "Hello!"));    // "Username missing"
// console.log(checkProfile("Asim", 0, ""));        // "Bio missing"



// the 24-Hour Clock Converter
// The Challenge: Create a function that converts a 24-hour format hour (0 to 23) into 12-hour format with "AM" or "PM".

// 0 should return "12 AM".

// 12 should return "12 PM".

// 13 to 23 should return "1 PM" to "11 PM".