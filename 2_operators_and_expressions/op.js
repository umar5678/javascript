// arithmetic operators. 

// let a = 10
// let b = 3

// console.log( a ** b )

// division gotcha


// console.log ( Math.round( a / b ))

// let num = 15
// let num1 = 32
// let num2 = 84

// console.log(num, "is even? " , num % 2 === 0)
// console.log(num1, "is even? " , num1 % 2 === 0)
// console.log(num2, "is even? " , num2 % 2 === 0)

// console.log(num, "is odd? " , num % 2 !== 0)
// console.log(num1, "is odd? " , num1 % 2 !== 0)
// console.log(num2, "is odd? " , num2 % 2 !== 0)


// console.log( Number((0.1 + 0.2).toFixed(2)) === 0.3 ) 
// console.log( Number((0.1 + 0.2).toFixed(2)) === 0.3 ) 


// assignment operators: 
// let x = 10

// // x = x + 5
// // x += 5
// console.log(x)

// // x = x - 5
// x -= 5
// console.log(x)

// x *= 5 // x = x * 5
// console.log(x)
// x /= 5 // x = x / 5
// console.log(x)
// x **= 5 // x = x ** 5
// console.log(x)
// x %= 5 // x = x % 5
// console.log(x)

// increment , and decrement

 
let num = 10
let num2 = 5

// console.log("num = ", num)
// console.log("num++ = ", num++) 
// // num = num + 1, but its a post increment. it uses the vaiable first hten apply the increment ooperation
// console.log("num after= ", num)



// console.log("num2 = ", num2)
// console.log("++num2 = ", ++num2)  // it apply the operation first then use the varialbe

// console.log("num2 after= ", num2)


// logical operators: 

/// and operator, && .. if all condition are truie then the whoel condition is trie, if one of he condition is flase thenwhole condition si false
// console.log("true and true" , true && true) //  true
// console.log("false and true" , false && true) // false
// console.log("true and false" , true && false) //  false
// console.log("false and false" , false && false) // false

// OR operator || , if 

// console.log("true OR true" , true || true) //  true
// console.log("false OR true" , false || true) // true
// console.log("true OR false" , true || false) //  true
// console.log("false OR false" , false || false) // false

let isAdmin = false

// NOT operator:  ! 

// console.log(" NOT true: ", !true) // true
// console.log(" NOT false: ", !false) // true

// console.log(" NOT 0: ", !0) // true
// console.log(" NOT Admin: ", !isAdmin) // true

// if(!isAdmin) {
//     console.log("you cannot accss the dashboard")
// }


// let age = 29
// let hasIDcard = true
// let haslicense = true


// let hasDegree = true
// let hasRealExperience = true


// // can vote. // age is greater then 18, has id , valid or expire, does not matter
// const canVote = age >= 18 && hasIDcard 
// // console.log(canVote)

// const canDrive = age >= 18 && hasIDcard && haslicense
// // console.log(canDrive)

// // can apply for job // age > 18 , id, degree or real experice
// const canApplyForJob = age >= 18 && hasIDcard && (hasDegree || hasRealExperience)

// console.log(canApplyForJob)



// ternary operators: 
 
// let age = 12

// // if qty is less the 50 , show low quantity

// const message = age >= 18 ? "Adult" : "Minor"

// console.log(message)

// let isLoggedin = false
// // is user is logged in show logout text, if not show login 
// let ButtonText = isLoggedin ? "Logout" : "Login"

// console.log(ButtonText)



// nullish coalescing 
// || , ??

// ||, return the right only if the left is null or undefined
// ?? , return the right side if any FALSY value

// let data = "some data is here"

// let displayData = data || "No Data yet"

// console.log(displayData)


// let count = 0
// let displaycount = count || "No count"

// console.log(displaycount)

// nullish ?? 

// let count = []
// let displayCount = count ?? "No Count"

// console.log(displayCount)


// optional chaining  : ?.

const computer = {
    name : "dell", 
    ram: "16GB",
    storage: "256GB",
    gpu: "intel graphic 620",
    cpu: {
        series: "i5", 
        gen: "7th"
    }
}

// console.log(computer.gpu)
// console.log(computer.name)
// console.log(computer.storage)
// console.log(computer.cpu)
// console.log(computer.cpu.gen)
// console.log(computer.cpu.series)












const computer2 = {
    name : "Mac", 
    ram: "16GB",
    storage: "256GB",
  
}

console.log(computer2.name)
console.log(computer2.cpu?.gen) 


// But what if user doesn't have address?
let user2 = {
    name: "Sara"
    // no address property!
};

// This throws an error!
// console.log(user2.address.city); // ❌ TypeError: Cannot read property 'city' of undefined