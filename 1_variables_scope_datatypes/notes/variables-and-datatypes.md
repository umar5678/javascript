# JavaScript — Student Notes
## Chapter 2: Variables & Data Types

---

## 2.1 What is a Variable?

A variable is a named container that holds a value. Think of it like a labeled box. You put something inside the box, give the box a label, and whenever you need that value, you refer to it by the label.

```js
let age = 25;
```

Here, `age` is the label. `25` is the value stored inside. Whenever you write `age` in your code, JavaScript goes and retrieves the value `25`.

Variables let you:
- Store data so you can use it later
- Give meaningful names to values (so your code reads like English)
- Update values as your program runs

---

## 2.2 Declaring Variables — The Three Keywords

JavaScript has three ways to declare a variable: `const`, `let`, and `var`.

### const — use this by default

`const` declares a variable whose **value cannot be reassigned**. Once you set it, it stays.

```js
const country = "Pakistan";
const birthYear = 1998;
const PI = 3.14159;
const MAX_STUDENTS = 30;
```

If you try to change a `const`, JavaScript will throw an error and stop.

```js
const country = "Pakistan";
country = "India"; // ❌ TypeError: Assignment to constant variable
```

**Use `const` as your first choice.** If you do not know whether the value will change, start with `const`. The computer will tell you if you need to switch to `let`.

### let — use this when the value will change

`let` declares a variable that **can be reassigned** later in your program.

```js
let score = 0;
score = 10;      // ✅ Allowed
score = score + 5; // ✅ Allowed
console.log(score); // 15

let isLoggedIn = false;
isLoggedIn = true; // ✅ Allowed
```

Good examples for `let`:
- A score in a game (it keeps changing)
- Whether a user is logged in or not
- A counter in a loop
- The current temperature

### var — do not use this

`var` is the old way of declaring variables, from before 2015. It has confusing behavior around scope (you will learn about scope soon) and hoisting, which causes subtle bugs that are hard to track down.

Modern JavaScript uses `const` and `let`. You will still see `var` in old code and tutorials, so you should recognize it, but never write it in your own code.

```js
// ❌ Old way — avoid
var name = "Ahmed";

// ✅ Modern way
const name = "Ahmed";
```

Why is `var` problematic? Three reasons:

**1. It ignores block scope (leaks out of if-blocks and loops):**
```js
if (true) {
    var leaked = "I escaped!";
    let safe = "I stay here.";
}
console.log(leaked); // "I escaped!" — This is bad!
console.log(safe);   // ❌ ReferenceError — This is correct behavior
```

**2. It is hoisted in a confusing way:**
```js
console.log(x); // undefined — no error, but no value either
var x = 5;
console.log(x); // 5
```
With `let` or `const`, the first line would give a clear `ReferenceError` instead of silently printing `undefined`.

**3. It can be re-declared without error:**
```js
var username = "Ali";
var username = "Ahmed"; // No error — silently overwrites
```
This can cause very confusing bugs in large programs.

### The Simple Rule

```
const  →  default choice
let    →  only when you need to reassign
var    →  never
```

---

## 2.3 Valid and Invalid Variable Names

JavaScript has strict rules about what you can name a variable.

### ✅ Valid names

```js
let name = "Ali";
let firstName = "Ahmed";
let user1 = "Bilal";
let _privateValue = 42;
let $price = 100;
let numberOfStudents = 30;
let isActive = true;
```

### ❌ Invalid names

```js
let 1name = "Ali";       // ❌ Cannot start with a number
let first-name = "Ali";  // ❌ Hyphens are not allowed in variable names
let first name = "Ali";  // ❌ Spaces are not allowed
let class = "A";         // ❌ 'class' is a reserved keyword
let return = 5;          // ❌ 'return' is a reserved keyword
```

### Reserved words you cannot use as variable names

These words have special meaning in JavaScript. You cannot use them as variable names.

```
let, const, var, if, else, for, while, function, return,
class, new, this, true, false, null, undefined, import, export
```

### camelCase is the convention

In JavaScript, the standard convention for variable names is **camelCase**: the first word is all lowercase, and every following word starts with a capital letter.

```js
// ✅ camelCase — correct convention
let firstName = "Ahmed";
let totalPrice = 500;
let isUserLoggedIn = false;
let numberOfAttempts = 0;
let userEmailAddress = "ahmed@email.com";

// ❌ Other styles — avoid for regular variables
let first_name = "Ahmed";   // snake_case — used in Python, not JS
let FirstName = "Ahmed";    // PascalCase — reserved for class names
let firstname = "Ahmed";    // all lowercase — hard to read
```

---

## 2.4 Data Types — What Kind of Value Is This?

Every value in JavaScript has a **type**. The type tells JavaScript what kind of data it is and what operations you can perform on it.

JavaScript has two broad categories of types:
- **Primitive types** — simple, single values
- **Reference types** — complex values that can contain multiple pieces of data

We will cover reference types deeply in Chapter 4 (Pass by Value vs Pass by Reference). For now, let us understand all the types.

---

## 2.5 Primitive Types

### 1. String — text

A string is any sequence of characters — letters, numbers, symbols, spaces — wrapped in quotes.

```js
const name = "Ahmed";            // double quotes
const city = 'Karachi';          // single quotes — same thing
const greeting = `Hello there`;  // backticks — called a template literal

const message = "Hello, my name is Ahmed and I am 25 years old.";
const empty = "";                // valid — an empty string
```

All three quote styles work. This course uses double quotes and backticks.

**Common operations on strings:**

```js
const name = "Ahmed";

console.log(name.length);        // 5 — number of characters
console.log(name.toUpperCase()); // "AHMED"
console.log(name.toLowerCase()); // "ahmed"

// Joining strings — called concatenation
const age = 25;
const info = "My name is " + name + " and I am " + age + " years old.";
console.log(info); // My name is Ahmed and I am 25 years old.

// Template literals — cleaner way to join strings
const infoClean = `My name is ${name} and I am ${age} years old.`;
console.log(infoClean); // My name is Ahmed and I am 25 years old.
```

Template literals use backticks (`` ` ``) and allow you to embed any JavaScript expression inside `${}`. This is much cleaner than concatenation with `+`.

---

### 2. Number — numeric values

JavaScript has only one type for all numbers — both whole numbers and decimals.

```js
const age = 25;           // whole number (integer)
const price = 99.99;      // decimal number (float)
const temperature = -5;   // negative number
const big = 1000000;      // one million
```

**Special number values:**

```js
console.log(1 / 0);        // Infinity — dividing by zero gives Infinity
console.log(-1 / 0);       // -Infinity
console.log("hello" * 2);  // NaN — "Not a Number" — result of invalid math
```

`NaN` is worth remembering. It appears when you try to do math with something that is not a number. Despite the name, `typeof NaN` returns `"number"` — this is one of JavaScript's known quirks.

---

### 3. Boolean — true or false

A boolean has only two possible values: `true` or `false`. No quotes. No capital letters.

```js
const isLoggedIn = true;
const hasPermission = false;
const isAdult = true;
const hasPaid = false;
```

Booleans come from comparisons:

```js
console.log(10 > 5);           // true
console.log(10 < 5);           // false
console.log("Ali" === "Ali");  // true
console.log(5 === "5");        // false
```

Booleans are the foundation of all decision-making in code. Every `if` statement uses a boolean to decide which path to take.

---

### 4. undefined — declared but not assigned

When you declare a variable but do not give it a value, JavaScript automatically assigns `undefined` to it.

```js
let score;
console.log(score); // undefined

let username;
console.log(username); // undefined
username = "Ali";
console.log(username); // "Ali"
```

`undefined` means: "this variable exists, but no value has been put into it yet."

---

### 5. null — intentionally empty

`null` is a value you assign deliberately to say "this has no value on purpose."

```js
let selectedUser = null;   // no user selected yet
let currentOrder = null;   // no order placed yet
```

**The difference between `null` and `undefined`:**

| | null | undefined |
|---|---|---|
| Who sets it? | You, the programmer, deliberately | JavaScript sets it automatically |
| What it means | "Intentionally no value" | "Not assigned yet" |
| When to use | When you want to clear a value or signal emptiness | Rarely set deliberately |

```js
let a;           // undefined — you never gave it a value
let b = null;    // null — you intentionally said "empty"
```

**A famous JavaScript quirk:**

```js
console.log(typeof null); // "object" — this is a bug from 1995
```

`null` is not an object. But `typeof null` returns `"object"` because of an old mistake in the original JavaScript engine that was never fixed (fixing it would break too many existing websites). To check if something is null, always use `=== null`, not `typeof`.

```js
let value = null;
console.log(value === null); // true — correct way to check
```

---

### 6. Symbol — unique identifier (for later)

Symbols are unique identifiers. Every symbol you create is guaranteed to be different from every other symbol, even if they look the same. This is an advanced concept you will use later when you study objects more deeply.

```js
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2); // false — they are always unique
```

---

### 7. BigInt — very large numbers (for reference)

JavaScript's regular `Number` type can only safely handle integers up to about 9 quadrillion. For larger numbers, you use `BigInt` by adding `n` at the end.

```js
const bigNumber = 9007199254740991n;
console.log(typeof bigNumber); // "bigint"
```

You will rarely need this in everyday programming.

---

## 2.6 Reference Types

Reference types are more complex. They can hold **multiple values** grouped together.

### Array — an ordered list

An array holds multiple values in a specific order. Each value is accessed by its **index** (position number). Indexes start at `0`, not `1`.

```js
const fruits = ["Apple", "Banana", "Mango"];
//               index 0   index 1   index 2

console.log(fruits[0]); // "Apple"
console.log(fruits[1]); // "Banana"
console.log(fruits[2]); // "Mango"
console.log(fruits.length); // 3
```

Arrays can hold any type of value, even mixed types:

```js
const mixed = [1, "hello", true, null, 42.5];
```

### Object — a collection of key-value pairs

An object holds multiple values, each with a **name** (called a key). You access values by their key name.

```js
const person = {
    name: "Ahmed",
    age: 25,
    city: "Karachi",
    isStudent: true
};

console.log(person.name);  // "Ahmed" — dot notation
console.log(person.age);   // 25
console.log(person["city"]); // "Karachi" — bracket notation
```

Objects are how you group related data together. Instead of writing:

```js
let userName = "Ahmed";
let userAge = 25;
let userCity = "Karachi";
```

You write:

```js
const user = {
    name: "Ahmed",
    age: 25,
    city: "Karachi"
};
```

Much more organized and readable.

---

## 2.7 Checking the Type — `typeof`

The `typeof` operator tells you the type of any value.

```js
console.log(typeof "hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" ← known JavaScript bug
console.log(typeof [1, 2, 3]);   // "object" ← arrays are also objects
console.log(typeof { a: 1 });    // "object"
console.log(typeof function(){}); // "function"
console.log(typeof NaN);         // "number" ← NaN is technically a number type
```

**Important quirks to remember:**
- `typeof null` returns `"object"` — but null is NOT an object. This is a historical bug.
- `typeof []` returns `"object"` — arrays are a special kind of object in JavaScript.
- To properly check if something is an array, use `Array.isArray()`:

```js
const fruits = ["Apple", "Banana"];
console.log(typeof fruits);       // "object" — not useful
console.log(Array.isArray(fruits)); // true — correct check
```

---

## 2.8 Summary Table — All Data Types

| Type | Category | Example | typeof result |
|---|---|---|---|
| String | Primitive | `"Hello"` | `"string"` |
| Number | Primitive | `42`, `3.14`, `NaN` | `"number"` |
| Boolean | Primitive | `true`, `false` | `"boolean"` |
| undefined | Primitive | `undefined` | `"undefined"` |
| null | Primitive | `null` | `"object"` (quirk!) |
| Symbol | Primitive | `Symbol("id")` | `"symbol"` |
| BigInt | Primitive | `9007n` | `"bigint"` |
| Object | Reference | `{ name: "Ali" }` | `"object"` |
| Array | Reference | `[1, 2, 3]` | `"object"` (quirk!) |
| Function | Reference | `function() {}` | `"function"` |

---

## 2.9 Practice Exercises

**Exercise 1:** Declare variables for a student profile. Use `const` and `let` appropriately.

```js
// A student has:
// - a name (will not change)
// - an age (might change)
// - a GPA (might change)
// - a city (might change)
// - a student ID number (will not change)
// - whether they are currently enrolled (might change)

// Write your declarations here:
```

**Exercise 2:** Predict what `typeof` will return for each of these, then verify by running the code.

```js
console.log(typeof 100);
console.log(typeof "100");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof [1, 2, 3]);
console.log(typeof NaN);
console.log(typeof { name: "Ali" });
```

**Exercise 3:** Find and fix the bugs.

```js
// Bug 1:
var studentName = "Ahmed";

// Bug 2:
let 1stPlace = "Ali";

// Bug 3:
const score = 0;
score = 100;

// Bug 4:
let first name = "Bilal";
```

---

## Key Takeaways from Chapter 2

- A variable is a named container for a value
- Use `const` by default — only use `let` when you know the value will change — never use `var`
- Variable names use camelCase: `firstName`, `totalPrice`, `isLoggedIn`
- JavaScript has 7 primitive types: string, number, boolean, undefined, null, symbol, bigint
- Reference types (arrays, objects) hold multiple values grouped together
- `typeof null` returns `"object"` — a known bug, use `=== null` to check for null
- `typeof []` returns `"object"` — use `Array.isArray()` to check for arrays
- `NaN` stands for Not a Number, but `typeof NaN` returns `"number"`