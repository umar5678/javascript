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

// Variation 2: Single expression - IMPLICIT RETURN (no return keyword!)
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;
const square = (x) => x * x;

// Variation 3: Single parameter - parentheses optional
const double = (x) => x * 2;
const negate = (x) => -x;
const isEven = (x) => x % 2 === 0;

// Variation 4: No parameters - parentheses REQUIRED
const sayHello = () => "Hello!";
const getTimestamp = () => Date.now();
const generateId = () => Math.random().toString(36).substr(2, 9);

// Variation 5: Returning object - WRAP IN PARENTHESES!
// This is a common problem !
const createUser = (name, age) => ({ name: name, age: age });
// Shorthand property syntax (ES6):
const createUserShort = (name, age) => ({ name, age });

/*
    CONVERSION STEPS:
    ─────────────────────────────────────────────────────────────────────────────
    
    1. Remove 'function' keyword
    2. Add '=>' after parameters
    3. Assign to a variable (const)
    4. Simplify if possible:
       - Single expression? Remove { } and 'return'
       - Single parameter? Remove ( )
*/

// BEFORE
function addNumbersOld(a, b) {
  return a + b;
}

// AFTER - Step by step

// BEFORE
function isAdultOld(age) {
  if (age >= 18) {
    return true;
  }
  return false;
}

// AFTER - Progressive simplification

// Example 3: Greeting with default parameter
// BEFORE
function greetOld(name, greeting) {
  if (!greeting) {
    greeting = "Hello";
  }
  return greeting + ", " + name + "!";
}

// AFTER - With default parameter and template literal

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

// this verification

// Difference 3: No 'arguments' object

function regularSum() {
  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

console.log(regularSum(1, 2, 3, 4));

// Arrow function - use rest parameter instead



const arrowRest = (...rest) => {
    let total = 1
    for (let i = 0; i < rest.length; i++){
        console.log(rest[i])
        total += rest[i]
    }
    return total
} 


console.log(arrowRest(2,4,5,6))