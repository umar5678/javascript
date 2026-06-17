
// ============================================
// SECTION 2: HIGHER-ORDER FUNCTIONS
// ============================================

/*
    ┌─────────────────────────────────────────────────────────────────────────┐
    │                    WHAT ARE HIGHER-ORDER FUNCTIONS?                     │
    ├─────────────────────────────────────────────────────────────────────────┤
    │                                                                         │
    │  A HIGHER-ORDER FUNCTION is a function that:                            │
    │                                                                         │
    │  1. Takes one or more functions as ARGUMENTS                            │
    │     OR                                                                  │
    │  2. RETURNS a function as its result                                    │
    │                                                                         │
    │  This is possible because in JavaScript, functions are                  │
    │  "FIRST-CLASS CITIZENS" - they can be:                                  │
    │  • Assigned to variables                                                │
    │  • Passed as arguments                                                  │
    │  • Returned from functions                                              │
    │  • Stored in arrays/objects                                             │
    │                                                                         │
    │  WHY IMPORTANT?                                                         │
    │  • Array methods (map, filter, reduce) are higher-order functions       │
    │  • React patterns use them extensively                                  │
    │  • Enable powerful code reuse and composition                           │
    │                                                                         │
    └─────────────────────────────────────────────────────────────────────────┘
*/

// ─────────────────────────────────────────────────────────────────────────────
// 2.1 FUNCTIONS AS ARGUMENTS
// ─────────────────────────────────────────────────────────────────────────────

// console.log("\n 2.1: Functions as Arguments\n");

/*
    When a function is passed as an argument to another function,
    we call it a CALLBACK function.
    
    The receiving function can then "call back" (execute) that function.
*/


/// utility function, add = (a , b) => a + b, subtract, mutilpy, divide, 
// if we have to add tow number, we have to explicitly call that funciton, 
// . i want a reusable funciton, and pass, arg, and opratior utility  

const add = (a, b ) => a + b 
const subtract = (a, b ) => a - b 
const multiply = (a, b ) => a * b 
const divide = (a, b ) => a / b 

const executeOperation = (a, b, operator) => {
   const result = operator (a, b)
   return result
}

// console.log(executeOperation(2, 3, add))
// console.log(executeOperation(84, 4, divide))
// console.log(executeOperation(4, 9, multiply)) 



/// function as return from function
// factory function
// call a function with desired times multiplication,  

const generateMultiplier = (times) => {
    return (n) => {
        return n * times
    }
} 

const double = generateMultiplier(2)
console.log(double(9))

const times7 = generateMultiplier(7)
console.log(times7(22))

// greeting factory function, 

// 
const generateGreeting = (greetings) => {
    return (name) => {
        return `${greetings}, ${name} `
    }
}


const sayHi = generateGreeting("Hi")
console.log(sayHi("Arslan"))

const saySalam = generateGreeting("Assalam-o-Alikum")

console.log(saySalam("Umar"))

// taxGenerator, 
// generate US tax, 
// generatePakTax. 

const generateTax = (taxPercentage) => {
    return (amount) => {

        const taxAmount = amount * ( taxPercentage / 100 )
        const grandTotal  = amount + taxAmount

        return {taxAmount, grandTotal}
    }
}

const pakistanTax = generateTax(18)
const USTax = generateTax(10)
const germanyTax = generateTax(6)





console.log(pakistanTax(200)) // 200 , 18, 36. . {tax amount: 36, totalMount: 236} 
console.log(germanyTax(500))
console.log(pakistanTax(500))






















// const multiply = 

// console.log(executeOperation(27, 3, add))
// console.log(executeOperation(2, 3, add))

// console.log(executeOperation(27, 3, subtract))








/*
    VISUALIZATION:
    ─────────────────────────────────────────────────────────────────────────────
    
    executeOperation(10, 5, add)
           │    │    │
           │    │    └──→ This is a FUNCTION being passed
           │    └──────→ These are regular values
           │
           ▼
    ┌──────────────────────────────┐
    │ function executeOperation    │
    │   a = 10                     │
    │   b = 5                      │
    │   operation = add function   │
    │                              │
    │   result = operation(a, b)   │
    │          = add(10, 5)        │
    │          = 15                │
    └──────────────────────────────┘
*/




// ─────────────────────────────────────────────────────────────────────────────
// 2.2 FUNCTIONS RETURNING FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────


/*
    A function can CREATE and RETURN another function.
    This is powerful for:
    • Creating specialized functions
    • Maintaining state (closures)
    • Factory patterns
*/


// i want to create a multiplire funciton, and it returen a specialized multiplier function, 
//// 2, 
// doubles, 
/// tripples, 
/// times 7, 
// times10

// times10(num)


const createMultiplier = (multipierUnit) => {
    return (num) => {
       return num * multipierUnit
    }
}


// const double = createMultiplier(2)

// const times5 = createMultiplier(5)





// console.log(times5(4))
// console.log(double(3))


// 

// calback, 
// sync callbnack, 
// async callback, 
