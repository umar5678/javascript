# JavaScript — Student Notes
## Chapter 3: Scope, Truthy & Falsy, and Comparisons

---

## 3.1 What is Scope?

Scope is the rule that determines **where a variable is accessible** in your code. Not every variable can be seen and used from everywhere. Where you declare a variable decides where you can use it.

Think of scope like rooms in a house. If you put something in a bedroom, it is only available in that bedroom. People in the living room cannot access it. But something placed in the hallway is accessible from all rooms.

JavaScript has three types of scope:
1. Global scope
2. Function scope
3. Block scope

---

## 3.2 Global Scope

A variable declared at the **top level of your file** — not inside any function or block — is in the **global scope**. It can be accessed from anywhere in the file.

```js
// Global scope — declared at the top level
const appName = "My App";
let currentUser = "Ahmed";

function greetUser() {
    // This function can access global variables
    console.log("Welcome to", appName);
    console.log("Hello,", currentUser);
}

greetUser();
// Welcome to My App
// Hello, Ahmed

console.log(appName); // Also accessible here
```

Global variables are visible everywhere, which makes them convenient. But relying on too many global variables is considered bad practice in professional code, because:

- Any part of your program can accidentally change them
- In large programs, it becomes hard to track where a value came from
- They can clash with variable names in other files or libraries

Use global variables sparingly. Declare variables as close as possible to where they are used.

---

## 3.3 Function Scope

Variables declared **inside a function** are only accessible inside that function. They do not exist outside of it.

```js
function calculateTotal() {
    const price = 500;    // function-scoped
    const quantity = 3;   // function-scoped
    const total = price * quantity;
    console.log("Total:", total);
}

calculateTotal(); // Total: 1500

// Trying to access function variables from outside:
console.log(price);    // ❌ ReferenceError: price is not defined
console.log(quantity); // ❌ ReferenceError: quantity is not defined
```

This is actually a good thing. It means functions have their own private space. Variables inside one function cannot accidentally interfere with variables in another function, even if they have the same name.

```js
function functionA() {
    const result = 10;      // This 'result' belongs to functionA
    console.log(result);    // 10
}

function functionB() {
    const result = 99;      // This 'result' belongs to functionB — no conflict
    console.log(result);    // 99
}

functionA(); // 10
functionB(); // 99
```

Both functions have a variable called `result`, but they are completely separate. One does not affect the other.

---

## 3.4 Block Scope

A **block** is any code wrapped in curly braces `{ }`. This includes `if` statements, `for` loops, `while` loops, and even a standalone pair of curly braces.

Variables declared with `const` and `let` inside a block are **block-scoped** — they only exist within those curly braces.

```js
if (true) {
    const message = "You are inside the if block";
    let count = 5;
    console.log(message); // ✅ Works — we are still inside the block
}

// Outside the block:
console.log(message); // ❌ ReferenceError: message is not defined
console.log(count);   // ❌ ReferenceError: count is not defined
```

This is exactly why we avoid `var`. A variable declared with `var` ignores block scope and leaks out:

```js
if (true) {
    var leaked = "I escaped the block!";  // var ignores block scope
    let safe = "I stay inside";
}

console.log(leaked); // "I escaped the block!" — unexpected!
console.log(safe);   // ❌ ReferenceError — this is the correct, safe behavior
```

The same thing happens with loops:

```js
for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2 — works inside the loop
}
console.log(i); // ❌ ReferenceError — i does not exist outside

for (var j = 0; j < 3; j++) {
    // body
}
console.log(j); // 3 — leaked out! (var ignores the block)
```

---

## 3.5 Scope Chain — Inner Can See Outer, Not the Reverse

When JavaScript looks for a variable, it starts from the current scope and works **outward**. It goes from the innermost scope to the outermost (global) scope until it finds the variable. This is called the **scope chain**.

```js
const globalVar = "I am global";  // Global scope

function outer() {
    const outerVar = "I am outer"; // Function scope

    function inner() {
        const innerVar = "I am inner"; // Inner function scope

        // Inner can see everything above it
        console.log(innerVar);  // ✅ "I am inner"
        console.log(outerVar);  // ✅ "I am outer"
        console.log(globalVar); // ✅ "I am global"
    }

    inner();

    // Outer cannot see inner variables
    console.log(innerVar); // ❌ ReferenceError
}

outer();

// Global cannot see function variables
console.log(outerVar); // ❌ ReferenceError
```

The rule is: **inner scopes can see outer scopes. Outer scopes cannot see inner scopes.**

### Visual Map

```
Global Scope
│  globalVar ← accessible everywhere
│
└── Function Scope (outer)
    │  outerVar ← accessible here and in inner
    │
    └── Function Scope (inner)
           innerVar ← accessible only here
```

---

## 3.6 Truthy and Falsy Values

In JavaScript, every single value is either **truthy** or **falsy**. This is important because `if` statements, `while` loops, and logical operators do not require a strict `true` or `false` — they work with any value and treat it as either true or false.

### The 6 Falsy Values

Only **6 values** in JavaScript are falsy. Everything else is truthy.

```js
false        // the boolean false
0            // the number zero
""           // an empty string (no characters)
null         // intentional empty value
undefined    // not yet assigned
NaN          // Not a Number
```

You must memorize these six. If a value is not on this list, it is truthy.

### Demonstrating Falsy

```js
// All of these conditions are falsy — the if body does NOT run:

if (false)     { console.log("runs"); }  // does not run
if (0)         { console.log("runs"); }  // does not run
if ("")        { console.log("runs"); }  // does not run
if (null)      { console.log("runs"); }  // does not run
if (undefined) { console.log("runs"); }  // does not run
if (NaN)       { console.log("runs"); }  // does not run
```

### Everything Else is Truthy

```js
// All of these are truthy — the if body DOES run:

if (true)      { console.log("runs"); }  // runs
if (1)         { console.log("runs"); }  // runs — any non-zero number
if (-5)        { console.log("runs"); }  // runs — negative numbers too
if ("hello")   { console.log("runs"); }  // runs — any non-empty string
if ("0")       { console.log("runs"); }  // runs — "0" is NOT empty!
if ("false")   { console.log("runs"); }  // runs — "false" is a non-empty string!
if ([])        { console.log("runs"); }  // runs — empty array is TRUTHY!
if ({})        { console.log("runs"); }  // runs — empty object is TRUTHY!
```

### The Surprising Ones — Memorize These

These catch almost every beginner at least once:

```js
// "0" is truthy — it is a string with one character, not the number zero
if ("0") { console.log("truthy"); }  // "truthy" — runs!
if (0)   { console.log("truthy"); }  // does not run — only the NUMBER 0 is falsy

// "false" is truthy — it is a 5-character string
if ("false") { console.log("truthy"); }  // "truthy" — runs!

// Empty array is truthy
if ([]) { console.log("truthy"); }  // "truthy" — runs!

// Empty object is truthy
if ({}) { console.log("truthy"); }  // "truthy" — runs!
```

### Using Truthy/Falsy in Practice

This is useful when checking if a user has provided a value:

```js
let username = "";

if (username) {
    console.log("Welcome,", username);
} else {
    console.log("Please enter a username");
}
// "Please enter a username" — because "" is falsy
```

```js
let userInput = "Ahmed";

if (userInput) {
    console.log("Input received:", userInput);
} else {
    console.log("No input");
}
// "Input received: Ahmed" — because "Ahmed" is truthy
```

---

## 3.7 Comparisons — `==` vs `===`

JavaScript has two equality operators. This is one of the most important things to understand correctly.

### `===` — Strict Equality (always use this)

Strict equality checks **both the value AND the type**. No conversion happens. The two values must be identical in both what they are and what type they are.

```js
console.log(5 === 5);         // true  — same value, same type
console.log(5 === "5");       // false — same value, different type
console.log(true === true);   // true
console.log(true === 1);      // false — different types
console.log(null === null);   // true
console.log(null === undefined); // false — different types
```

### `==` — Loose Equality (avoid this)

Loose equality checks the value, but **converts types first** if they are different. This conversion (called type coercion) follows complex rules that are not intuitive. The results are often surprising.

```js
console.log(5 == "5");    // true  — "5" is converted to 5, then compared
console.log(0 == false);  // true  — false is converted to 0
console.log("" == false); // true  — both convert to 0
console.log(null == undefined); // true  — special exception in the spec
console.log("0" == false);    // true  — this one surprises most people
console.log([] == false);     // true  — even empty array equals false!
console.log([] == 0);         // true
```

These results follow rules, but the rules are complicated and counterintuitive. Even experienced JavaScript developers get confused by `==`. The simple solution: **never use `==`**. Always use `===`.

### `!==` — Strict Not-Equal (use this)

The counterpart of `===`. Returns true if the values are different in value OR type.

```js
console.log(5 !== 10);    // true
console.log(5 !== "5");   // true — different types
console.log(5 !== 5);     // false — same value and type
```

### `!=` — Loose Not-Equal (avoid)

Same problems as `==`, just reversed. Avoid it.

### Other Comparison Operators

These only make sense with numbers:

```js
console.log(10 > 5);   // true  — greater than
console.log(10 < 5);   // false — less than
console.log(10 >= 10); // true  — greater than or equal
console.log(10 <= 9);  // false — less than or equal
```

---

## 3.8 Special Comparison Cases to Know

### Comparing with null and undefined

```js
console.log(null === undefined);  // false — strict
console.log(null == undefined);   // true  — loose (one of the few accepted uses of ==)
console.log(null === null);       // true
console.log(undefined === undefined); // true
```

### NaN is never equal to anything — including itself

This is a unique property of `NaN`. It is the only value in JavaScript not equal to itself.

```js
console.log(NaN === NaN);  // false — !!!
console.log(NaN == NaN);   // false — still false
```

To check if a value is `NaN`, use `Number.isNaN()`:

```js
const result = "hello" * 2; // NaN

console.log(result === NaN);         // false — does not work
console.log(Number.isNaN(result));   // true  — correct way
```

Do not use the older `isNaN()` function — it has inconsistent behavior:

```js
isNaN("hello")        // true — converts string to number first
Number.isNaN("hello") // false — does not convert, only true for actual NaN
```

### Comparing objects and arrays

Objects and arrays are compared by **reference**, not by content. Two objects with identical content are still not equal if they are stored separately in memory.

```js
const obj1 = { name: "Ahmed" };
const obj2 = { name: "Ahmed" };

console.log(obj1 === obj2); // false — different objects in memory

const obj3 = obj1; // obj3 points to the same object as obj1
console.log(obj1 === obj3); // true — same reference
```

This concept is explained in full detail in Chapter 4.

---

## 3.9 Logical Operators

Logical operators combine boolean values (or truthy/falsy values).

### `&&` — AND

Returns true only if **both** sides are truthy. If either side is falsy, it returns falsy.

```js
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

// Practical example:
const isAdult = true;
const hasId = true;

if (isAdult && hasId) {
    console.log("Access granted");
}
```

### `||` — OR

Returns true if **at least one** side is truthy.

```js
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false
console.log(true || true);   // true

// Practical example:
const isAdmin = false;
const isModerator = true;

if (isAdmin || isModerator) {
    console.log("Can manage content"); // runs — isModerator is true
}
```

### `!` — NOT

Reverses the boolean value. `!true` is `false`. `!false` is `true`.

```js
console.log(!true);  // false
console.log(!false); // true
console.log(!0);     // true  — 0 is falsy, so !0 is true
console.log(!"");    // true  — "" is falsy, so !"" is true
console.log(!"Ali"); // false — "Ali" is truthy, so !"Ali" is false
```

### `??` — Nullish Coalescing (use this instead of `||` for defaults)

Returns the right-hand side only if the left-hand side is `null` or `undefined`. Unlike `||`, it does not trigger for `0`, `""`, or `false`.

```js
// Problem with || for defaults:
const score = 0;
const display = score || "No score yet";
console.log(display); // "No score yet" — WRONG! 0 is a valid score

// Correct with ??:
const display2 = score ?? "No score yet";
console.log(display2); // 0 — correct!
```

```js
// ?? only triggers for null or undefined:
console.log(null ?? "default");      // "default"
console.log(undefined ?? "default"); // "default"
console.log(0 ?? "default");         // 0 — does NOT trigger
console.log("" ?? "default");        // "" — does NOT trigger
console.log(false ?? "default");     // false — does NOT trigger
```

Use `??` when you want a fallback only for missing values, and `||` when you want a fallback for any falsy value.

---

## 3.10 The Ternary Operator — A Compact If-Else

The ternary operator lets you write a simple if-else on one line.

```
condition ? valueIfTrue : valueIfFalse
```

```js
const age = 20;

// Regular if-else:
let message;
if (age >= 18) {
    message = "Adult";
} else {
    message = "Minor";
}

// Same thing with ternary:
const message2 = age >= 18 ? "Adult" : "Minor";

console.log(message2); // "Adult"
```

```js
const score = 85;
const grade = score >= 90 ? "A" : score >= 70 ? "B" : score >= 50 ? "C" : "F";
console.log(grade); // "B"
```

Use the ternary operator for simple, short conditions. For complex logic with multiple steps, use a regular `if-else` — it is more readable.

---

## 3.11 Practice Exercises

**Exercise 1:** Predict the output of each line before running it.

```js
// Truthy and Falsy
console.log(Boolean(0));
console.log(Boolean("0"));
console.log(Boolean(""));
console.log(Boolean([]));
console.log(Boolean(null));
console.log(Boolean(-1));
console.log(Boolean("false"));
console.log(Boolean(undefined));
```

**Exercise 2:** Predict the output of each comparison.

```js
console.log(5 === 5);
console.log(5 === "5");
console.log(0 === false);
console.log("" === false);
console.log(null === undefined);
console.log(NaN === NaN);
```

**Exercise 3:** What is wrong with this code? Fix it.

```js
// Bug 1: This check does not work correctly
const userInput = 0; // User entered 0, which is a valid number
if (userInput || "nothing entered") {
    console.log("Got:", userInput);
} else {
    console.log("Nothing entered");
}

// Bug 2: This comparison has a problem
function checkAge(age) {
    if (age == 18) {
        console.log("Exactly 18");
    }
}
checkAge("18"); // Should this print "Exactly 18"?

// Bug 3:
const x = NaN;
if (x === NaN) {
    console.log("x is NaN");
} else {
    console.log("x is not NaN"); // This runs — why? How to fix?
}
```

**Exercise 4:** Rewrite this using the ternary operator.

```js
let status;
if (isLoggedIn) {
    status = "Welcome back!";
} else {
    status = "Please log in.";
}
```

---

## Key Takeaways from Chapter 3

- **Scope** controls where a variable is accessible
- Global scope is accessible everywhere. Function scope is private to the function. Block scope is private to the `{ }` block.
- `const` and `let` respect block scope. `var` does not — another reason to avoid it.
- **Only 6 values are falsy**: `false`, `0`, `""`, `null`, `undefined`, `NaN`. Everything else is truthy.
- Surprising truthy values: `"0"`, `"false"`, `[]`, `{}` — all truthy!
- Always use `===` (strict equality) — never `==` (loose equality)
- `NaN === NaN` is `false` — use `Number.isNaN()` to check for NaN
- Use `??` (nullish coalescing) for default values — safer than `||` because it only triggers for `null` and `undefined`