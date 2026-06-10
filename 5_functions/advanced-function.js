/*
    ┌─────────────────────────────────────────────────────────────────────────┐
    │                    WHY ARROW FUNCTIONS?                                 │
    ├─────────────────────────────────────────────────────────────────────────┤
    │                                                                         │
    │  Arrow functions were introduced in ES6 (2015) and are now the          │
    │  PREFERRED way to write functions in modern JavaScript, especially      │
    │  in React and other frameworks.                                         │
    │                                                                         │
    │  BENEFITS:                                                              │
    │  Shorter, cleaner syntax                                                │
    │  Implicit return for one-liners                                         │
    │  Lexical 'this' binding (important for React!)                          │
    │  Great for callbacks and array methods                                  │
    │                                                                         │
    │  YOU WILL USE THESE EVERYWHERE:                                         │
    │  • React components and event handlers                                  │
    │  • Array methods (map, filter, reduce)                                  │
    │  • Callbacks and promises                                               │
    │  • Express.js routes                                                    │
    │                                                                         │
    └─────────────────────────────────────────────────────────────────────────┘
*/

/*
    SYNTAX COMPARISON:
    ─────────────────────────────────────────────────────────────────────────────
    
    Regular Function:
    function name(parameters) {
        return value;
    }
    


    Arrow Function:
    const name = (parameters) => {
        return value;
    };
    
    Notice:
    • No 'function' keyword
    • Arrow '=>' (called "fat arrow")
    • Usually assigned to a variable (const)
    • Semicolon at the end (it's a statement)
*/

// give arrow function example, with regular add function and arrow add function

// function sayHello ( user ) {
//   return `hello, ${user}`
// }

// const sayHello = (user) => {
//   return `hello, ${user}`;
// };

// console.log(sayHello("Abid"));

/*
    ┌─────────────────────────────────────────────────────────────────────────┐
    │              ARROW FUNCTION SYNTAX VARIATIONS                           │
    ├─────────────────────────────────────────────────────────────────────────┤
    │                                                                         │
    │  1. FULL SYNTAX (multiple statements):                                  │
    │     const fn = (a, b) => {                                              │
    │         const result = a + b;                                           │
    │         return result;                                                  │
    │     };                                                                  │
    │                                                                         │
    │  2. SINGLE EXPRESSION (implicit return):                                │
    │     const fn = (a, b) => a + b;                                         │
    │                                                                         │
    │  3. SINGLE PARAMETER (no parentheses needed):                           │
    │     const fn = x => x * 2;                                              │
    │                                                                         │
    │  4. NO PARAMETERS (empty parentheses required):                         │
    │     const fn = () => "Hello";                                           │
    │                                                                         │
    │  5. RETURNING OBJECT (wrap in parentheses):                             │
    │     const fn = (name) => ({ name: name, active: true });                │
    │                                                                         │                     
    └─────────────────────────────────────────────────────────────────────────┘
*/

// create calculate total arrow function, take price, quantity and tax. return total price.

// Variation 1: Full syntax with multiple statements/
// will get price and quantity, frst , calculate sub total, , then get tax amout , by multiplying sub with teax percentage, then create total and return

const calculateTotal = (price, quantity) => {
  const subTotal = price * quantity;
  const taxAmount = subTotal * 0.17;
  const total = subTotal + taxAmount;

  return total;
};

// console.log(calculateTotal(400, 5))

// // console.log(calculateTotal(250, 3))

// Variation 2: Single expression - IMPLICIT RETURN (no return keyword!)
// const multiply = (a, b) => a * b;
// const subtract = (a, b) => a - b;
// const square = (x) => x * x;

const multiply = (a, b) => a * b;

// console.log(multiply(10, 3));

const square = (n) => n * n;

const cube = (n) => n * n * n;

console.log(square(4));
console.log(cube(4));

// const power = (num, exponent) => {

//   if (exponent === 0 ) return 1
//   if( exponent < 0 ) return "Power should be more then one"

//   // 2^4 mean: 2 x 2 x 2 x 2
//   // we will get two param: num, sec is exponent.
//   // we have to multiple the unmber by itself. exponene times,
//   // we will crate a result varialbe, iniital value is the number itself
//   // during each iteration, multiple the res with number param
//   // return the result.

//   let result = num
//   for (let i = 0; i < exponent - 1 ; i++){
//     result = result * num
//     console.log(`${i} , ${result}`)
//   }
//   return result
// }

// const power = (num, exponent) => {

//   if (exponent === 0 ) return 1
//   if( exponent < 0 ) return "Power should be more then one"
//   return num**exponent
// }

const power = (num, exponent) => {
  if (!num || !exponent) return "Both number and expo are required";
  if (exponent === 0) return 1;
  if (exponent < 0) return "Power should be more then one";
  return num ** exponent;
};

// console.log(power(2, -1))

// console.log(multiply(10, 3));

function goodMorning() {
  return `Good Morning`;
}

console.log(goodMorning());

// Variation 3: Single parameter - parentheses optional
// const double = (x) => x * 2;
// const negate = (x) => -x;
// // const isEven = (x) => x % 2 === 0;
// const isEven = (x) => ( x % 2 === 0 );

// const isOdd = x => x % 2 !== 0
// // console.log(isOdd(2))

// Variation 4: No parameters - parentheses REQUIRED
const sayHello = () => "Hello!";

console.log(sayHello());

const getTimestamp = () => Date.now();
const generateId = () => Math.random().toString(36).substr(2, 9);

// Variation 5: Returning object - WRAP IN PARENTHESES!
// This is a common problem !

const userObj = () => ({ name: "Ali", age: 12 });

// console.log(userObj())

// const createUser = (name, age) => ({ name: name, age: age });
// create student enrollment function, assign rol num, and subjects.

const enrollStudent = (name, age, gender, group) => {
  const subjects = [];

  
  if (group === "FSc") subjects.push("Bio", "phy", "chem");
  

  if (group === "ICs")   subjects.push("Math", "phy", "Computer");
  

  let section = gender === "male" ? "A" : "B"

  return {
    id: "123dfjhasdf",
    name,
    age,
    section,
    subjects,
  };
};

// console.log(enrollStudent("Umar", "27", "male", "FSc"));

// Shorthand property syntax (ES6):
// const createUserShort = (name, age) => ({ name, age });

/*
    CONVERSION STEPS:
    ─────────────────────────────────────────────────────────────────────────────
    
    1. Remove 'function' keyword
    2. Add =>'' after parameters
    3. Assign to a variable (const)
    4. Simplify if possible:
       - Single expression? Remove { } and 'return'
       - Single parameter? Remove ( )
*/

// BEFORE
// function addNumbersOld(a, b) {
  // return a + b;
// }


const addNumbersOld = (a , b) => a + b
console.log(addNumbersOld(3, 5));


// AFTER - Step by step

// BEFORE


const isAdult = (age) => {
  if (age >= 18) {
    return true;
  }
  return false;
}
// AFTER - Progressive simplification

// Example 3: Greeting with default parameter
// BEFORE
const greetOld = (name, greeting) => {
  if (!greeting) { 
    greeting = "Hello";
  }
  return greeting + ", " + name + "!";
}

// AFTER - With default parameter and template literal



// Example 4: Multiple statements (cannot simplify to one line)
// BEFORE
 const analyzeNumberOld = (num) => {
  const isPositive = num > 0;
  const isWhole = Number.isInteger(num);
  const squared = num * num;
  return {
    original: num,
    isPositive,
    isWhole,
    squared,
  };
}

console.log(analyzeNumberOld(15));


/*
    ┌─────────────────────────────────────────────────────────────────────────┐
    │                    IMPLICIT VS EXPLICIT RETURN                          │
    ├─────────────────────────────────────────────────────────────────────────┤
    │                                                                         │
    │  EXPLICIT RETURN:                                                       │
    │  • Uses 'return' keyword                                                │
    │  • Must have curly braces { }                                           │
    │  • Required for multiple statements                                     │
    │                                                                         │
    │  const fn = (x) => {                                                    │
    │      return x * 2;    // explicit return                                │
    │  };                                                                     │
    │                                                                         │
    │  ─────────────────────────────────────────────────────────────────────  │
    │                                                                         │
    │  IMPLICIT RETURN:                                                       │
    │  • NO 'return' keyword                                                  │
    │  • NO curly braces                                                      │
    │  • Only works for single expressions                                    │
    │  • Expression result is automatically returned                          │
    │                                                                         │
    │  const fn = (x) => x * 2;   // implicit return                          │
    │                                                                         │
    └─────────────────────────────────────────────────────────────────────────┘
*/

/*
    ┌─────────────────────────────────────────────────────────────────────────┐
    │               ARROW vs REGULAR FUNCTIONS - KEY DIFFERENCES              │
    ├─────────────────────────────────────────────────────────────────────────┤
    │                                                                         │
    │  FEATURE              REGULAR FUNCTION        ARROW FUNCTION            │
    │  ─────────────────────────────────────────────────────────────────────  │
    │  'this' binding       Dynamic (caller)        Lexical (parent scope)    │
    │  'arguments' object   Has it                  No 'arguments'            │
    │  Constructor (new)    Can use 'new'           Cannot use 'new'          │
    │  Hoisting             Hoisted                 Not hoisted               │
    │  Method in object     Preferred               Avoid (this issues)       │
    │  Callbacks            Works                   Preferred                 │
    │                                                                         │
    └─────────────────────────────────────────────────────────────────────────┘
*/

// check hoisting


// ask to check the hoisting

// this verification


const userInfo = {
  name : "Ahmad", 
  age : 34,


  greeting : function () {
    return `Hi, my name is ${this.name}`
  }



}

console.log(userInfo.greeting())









// Difference 3: No 'arguments' object
// regular function had argument object

function regularSum() {
  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

// // console.log(regularSum(1, 2, 3, 4));

// Arrow function - use rest parameter instead

const arrowRest = (...rest) => {
  let total = 1;
  for (let i = 0; i < rest.length; i++) {
    // console.log(rest[i]);
    total += rest[i];
  }
  return total;
};

// // console.log(arrowRest(2,4,5,6))

// ─────────────────────────────────────────────────────────────────────────────
// 2.1 FUNCTIONS AS ARGUMENTS
// ─────────────────────────────────────────────────────────────────────────────

/*
    When a function is passed as an argument to another function,
    we call it a CALLBACK function.
    
    The receiving function can then "call back" (execute) that function.
*/

// declare some operation function,
// create a executeOperation function,
// pass tow numbers and operation funciton executeFn,

// add, multiple, divide, subtract

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiple = (a, b) => a * b;

const executeOperation = (a, b, operation) => {
  const res = operation(a, b);
  return res;
};

// // console.log("add 2, 3 : ", executeOperation (2, 3 , add) ) // 5
// // console.log("subtract 5, 3: ", executeOperation (5, 3 , subtract) ) // 2
// // console.log("multiply : ", executeOperation (2, 3 , multiple) ) // 6
// // console.log("divide : ", executeOperation (21, 3 , divide) ) // 7

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

/*
    A function can CREATE and RETURN another function.
    This is powerful for:
    • Creating specialized functions
    • Maintaining state (closures)
    • Factory patterns
*/

// create multiplire function,
// // i want a function process. where i can create multiplier fnction just by telling how it should multiply,
// const double = createMultiplire (2)

// double(4) // 8
// const times3 = createMultiplier(3)
// times3(5) // 15

// function createMultiplier (multiplier) {
//   return function (num) {
//     return num * multiplier
//   }
// }

// const createMultiplier = (multiplier) => {
//   return (num) => num * multiplier
// }

// const createMultiplier = (multiplier) =>  (num) => num * multiplier
// const createMultiplier = (multiplier) =>  num => num * multiplier
const createMultiplier = (multiplier) => (num) => num * multiplier;

const double = createMultiplier(2);
// function double (num) {
// retun num * 2}

// console.log(double(20))
const tripple = createMultiplier(3);

const times10 = createMultiplier(10);
// console.log("tripple of 4 =",tripple(4))

// function times10 (num)

/*
    VISUALIZATION:
    ─────────────────────────────────────────────────────────────────────────────
    
    createMultiplier(2)                    Returns → function(number) { 
         │                                            return number * 2;
         │                                          }
         ▼
    ┌──────────────────────────┐
    │ multiplier = 2           │
    │                          │
    │ return function(number)  │──────→  const double = this function
    │   return number * 2;     │
    │ }                        │
    └──────────────────────────┘
    
    Then: double(5)
    
    ┌──────────────────────────┐
    │ number = 5               │
    │ multiplier = 2 (remembered from creation!)
    │                          │
    │ return 5 * 2 = 10        │
    └──────────────────────────┘
*/

// const createGreeter = (greeting) => (name) => `${greeting}, ${name}`

// const sayGoodMorning = createGreeter("Good Morning")
// const saySalam = createGreeter("Assalam-o-Alikum,")
// const sayHello = createGreeter("Hello")

// console.log(sayGoodMorning("Ali"))
// console.log(saySalam("Osman"))
// console.log(sayHello("Ahmad"))
