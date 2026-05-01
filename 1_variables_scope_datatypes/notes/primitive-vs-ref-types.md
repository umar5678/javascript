# JavaScript — Student Notes
## Chapter 4: Primitives, Reference Types & How Data is Passed

---

## 4.1 Two Categories of Types

In Chapter 2, you learned about JavaScript's data types. Now we go deeper into how they actually work in memory, because this difference explains many bugs that confuse beginners.

Every value in JavaScript belongs to one of two categories:

| Category | Types Included | Stored As |
|---|---|---|
| **Primitive** | string, number, boolean, null, undefined, symbol, bigint | Actual value |
| **Reference** | object, array, function | Reference (address in memory) |

This is not just theory. It directly affects how your code behaves when you copy variables or pass them into functions.

---

## 4.2 Primitive Types — Stored by Value

When you assign a primitive value to a variable, the **actual value** is stored directly inside that variable.

When you copy a primitive variable into another variable, JavaScript creates a **completely independent copy** of the value. The two variables have nothing to do with each other after that.

```js
let a = 10;
let b = a;  // b gets a COPY of the value 10

console.log(a); // 10
console.log(b); // 10

a = 99;  // changing a does NOT affect b

console.log(a); // 99
console.log(b); // 10 — unchanged, because b has its own independent copy
```

This behavior applies to all primitive types:

```js
let name1 = "Ahmed";
let name2 = name1;  // independent copy

name1 = "Ali";

console.log(name1); // "Ali"
console.log(name2); // "Ahmed" — unchanged
```

```js
let x = true;
let y = x;  // independent copy

x = false;

console.log(x); // false
console.log(y); // true — unchanged
```

### Why does this happen?

Primitives are small, simple values. Storing a copy is cheap and makes the most sense. Numbers, strings, booleans — each one is self-contained.

---

## 4.3 Reference Types — Stored by Reference

When you create an object or an array, JavaScript does not store the actual data inside the variable. Instead, it:

1. Creates the object/array somewhere in memory
2. Stores the **memory address** (a reference) inside the variable

Think of it like this: the variable does not hold the furniture — it holds a piece of paper with the address of the house where the furniture is.

When you copy a reference type variable into another variable, you are **copying the address** — not the data. Both variables now point to the exact same object in memory.

```js
const arr1 = [1, 2, 3];
const arr2 = arr1;  // arr2 gets the SAME address — not a copy of the array

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3]

arr1.push(4);  // modifying through arr1

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4] — also changed! They point to the same array
```

```js
const obj1 = { name: "Ahmed", age: 25 };
const obj2 = obj1;  // same reference

obj1.name = "Ali";  // modifying through obj1

console.log(obj1.name); // "Ali"
console.log(obj2.name); // "Ali" — same object!
```

This surprises almost every beginner the first time they encounter it.

### The Memory Diagram

```
PRIMITIVE (each variable holds its own value):

  let a = 10;     [a] → 10
  let b = a;      [b] → 10   (independent copy)

  a = 99;         [a] → 99
                  [b] → 10   (unaffected)


REFERENCE (each variable holds an address):

  const arr1 = [1, 2, 3];   [arr1] → address 0x001 → [1, 2, 3]

  const arr2 = arr1;         [arr2] → address 0x001 → [1, 2, 3]
                              (pointing to the same place!)

  arr1.push(4);              [arr1] → address 0x001 → [1, 2, 3, 4]
                             [arr2] → address 0x001 → [1, 2, 3, 4]
                              (both see the change)
```

---

## 4.4 const Does Not Mean Immutable for Reference Types

This is a very common point of confusion.

`const` means you cannot **reassign** the variable — you cannot point it to a completely new object. But it does NOT prevent you from **modifying the contents** of the object or array it points to.

```js
const person = { name: "Ahmed", age: 25 };

// ✅ You CAN modify properties:
person.name = "Ali";
person.age = 30;
person.city = "Karachi"; // Can even add new properties

console.log(person); // { name: "Ali", age: 30, city: "Karachi" }

// ❌ You CANNOT reassign the variable:
person = { name: "Bilal" }; // TypeError: Assignment to constant variable
```

```js
const colors = ["red", "green"];

// ✅ You CAN modify the array:
colors.push("blue");
colors[0] = "crimson";

console.log(colors); // ["crimson", "green", "blue"]

// ❌ You CANNOT reassign the variable:
colors = ["yellow", "purple"]; // TypeError
```

`const` locks the **reference** (the address), not the contents of what that address points to.

---

## 4.5 Checking Equality — Why Two "Identical" Objects Are Not Equal

Because objects and arrays store references, two objects with identical content are **not** equal — they are different objects at different memory addresses.

```js
const obj1 = { name: "Ahmed" };
const obj2 = { name: "Ahmed" };

console.log(obj1 === obj2); // false — different objects in memory

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(arr1 === arr2); // false — different arrays in memory
```

The only time `===` returns `true` for reference types is when both variables point to the **same object**:

```js
const obj1 = { name: "Ahmed" };
const obj2 = obj1; // same reference

console.log(obj1 === obj2); // true — same object in memory
```

### How to compare object/array contents

If you need to check whether two objects have the same data, you have to compare their contents explicitly.

```js
// Method 1: JSON.stringify — works for simple objects without functions
const obj1 = { name: "Ahmed", age: 25 };
const obj2 = { name: "Ahmed", age: 25 };

console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true
```

Note: `JSON.stringify` has limitations. It does not work with functions, `undefined` values, or circular references. For production code, you would use a utility library. But for learning purposes, `JSON.stringify` is fine.

---

## 4.6 Pass by Value — Primitives in Functions

When you pass a **primitive** value into a function, JavaScript passes a **copy** of the value. The function gets its own copy, completely separate from the original. Whatever the function does to that copy does not affect the original variable.

```js
function addTen(number) {
    number = number + 10;  // modifying the local copy
    console.log("Inside function:", number);
}

let score = 50;
addTen(score);

console.log("Outside function:", score); // still 50 — the original is unchanged
```

Output:
```
Inside function: 60
Outside function: 50
```

The variable `score` outside the function is completely unaffected because the function only worked on a copy.

Another example:

```js
function makeUppercase(text) {
    text = text.toUpperCase(); // modifying the local copy
    console.log("Inside:", text);
}

let name = "ahmed";
makeUppercase(name);

console.log("Outside:", name); // "ahmed" — unchanged
```

---

## 4.7 Pass by Reference — Objects and Arrays in Functions

When you pass an **object or array** into a function, JavaScript passes the **reference** (the memory address). The function receives the same reference, meaning it is working on the same object — not a copy.

Any changes the function makes to the object will be visible outside the function.

```js
function addProperty(obj) {
    obj.city = "Karachi";  // modifying the actual object
}

const person = { name: "Ahmed", age: 25 };
console.log("Before:", person); // { name: 'Ahmed', age: 25 }

addProperty(person);

console.log("After:", person);  // { name: 'Ahmed', age: 25, city: 'Karachi' }
```

The original `person` object was modified, even though we were inside a function.

```js
function addItem(arr, item) {
    arr.push(item);  // modifying the actual array
}

const fruits = ["Apple", "Banana"];
console.log("Before:", fruits); // ['Apple', 'Banana']

addItem(fruits, "Mango");

console.log("After:", fruits);  // ['Apple', 'Banana', 'Mango']
```

---

## 4.8 The Reassignment Exception

There is an important distinction: if a function **reassigns** the parameter to a new object (rather than modifying the existing one), the original variable outside the function is NOT affected.

```js
function replaceObject(obj) {
    obj = { name: "Bilal" }; // reassigning the local parameter
    console.log("Inside:", obj);
}

const person = { name: "Ahmed" };
console.log("Before:", person); // { name: 'Ahmed' }

replaceObject(person);

console.log("After:", person);  // { name: 'Ahmed' } — unchanged!
```

Why? When you reassign `obj` inside the function, you are changing what the local parameter `obj` points to. But the original variable `person` outside still points to the same object it always did. The reassignment only affects the local copy of the reference.

Diagram:

```
Before function call:
  person → 0x001 → { name: "Ahmed" }
  obj (param) → 0x001 → { name: "Ahmed" }  (same reference)

After obj = { name: "Bilal" } inside function:
  person → 0x001 → { name: "Ahmed" }  (unchanged)
  obj (param) → 0x002 → { name: "Bilal" }  (now points elsewhere)
```

The local parameter changed, but the original `person` still points to the same object.

---

## 4.9 How to Avoid Accidentally Mutating Objects

In professional code, it is considered bad practice to mutate (modify) an object that was passed into a function. The function should create and return a new object instead.

```js
// ❌ Bad practice — mutates the original object
function addCityBad(person, city) {
    person.city = city;  // modifies the original
    return person;
}

// ✅ Good practice — creates a new object, leaves original unchanged
function addCityGood(person, city) {
    return { ...person, city: city }; // spread operator creates a shallow copy
}

const original = { name: "Ahmed", age: 25 };

const modified = addCityGood(original, "Karachi");

console.log(original);  // { name: 'Ahmed', age: 25 } — untouched
console.log(modified);  // { name: 'Ahmed', age: 25, city: 'Karachi' }
```

The `...person` syntax is the **spread operator**. It copies all the properties of `person` into a new object. We then add `city` to that new object. The original is untouched.

For arrays:

```js
// ❌ Bad — mutates original
function addItemBad(arr, item) {
    arr.push(item);
    return arr;
}

// ✅ Good — returns a new array
function addItemGood(arr, item) {
    return [...arr, item]; // creates a new array with all old items + new item
}

const fruits = ["Apple", "Banana"];
const newFruits = addItemGood(fruits, "Mango");

console.log(fruits);    // ["Apple", "Banana"] — untouched
console.log(newFruits); // ["Apple", "Banana", "Mango"]
```

You do not need to fully understand the spread operator now — just know it exists and what it does. You will use it constantly as you progress.

---

## 4.10 Shallow Copy vs Deep Copy (Be Aware)

The spread operator creates a **shallow copy**. This means it copies the top level of the object, but if there are nested objects inside, those are still shared by reference.

```js
const user = {
    name: "Ahmed",
    address: {         // nested object
        city: "Karachi",
        country: "Pakistan"
    }
};

const copy = { ...user }; // shallow copy

copy.name = "Ali";                  // ✅ Does not affect original
copy.address.city = "Lahore";       // ❌ Affects original — nested object is shared!

console.log(user.name);         // "Ahmed" — unchanged
console.log(user.address.city); // "Lahore" — changed! (nested object is shared)
```

For a **deep copy** that also copies nested objects, you can use:

```js
const deepCopy = JSON.parse(JSON.stringify(user));
```

This converts the object to a string and back — which creates entirely new objects at every level. Like the `JSON.stringify` comparison earlier, this has limitations (no functions, no `undefined`), but works well for data objects.

You will learn more robust approaches as you advance. For now, understanding that shallow copy exists is enough.

---

## 4.11 Full Summary — Value vs Reference

```js
// ============================================================
// PRIMITIVES — Pass by VALUE
// ============================================================

let a = 5;
let b = a;       // b is a COPY

b = 100;
console.log(a);  // 5 — unchanged
console.log(b);  // 100

function changeNum(n) {
    n = 999;     // modifies local copy only
}
changeNum(a);
console.log(a);  // 5 — unchanged

// ============================================================
// REFERENCE TYPES — Pass by REFERENCE
// ============================================================

const obj1 = { x: 1 };
const obj2 = obj1; // same reference — NOT a copy

obj2.x = 100;
console.log(obj1.x); // 100 — same object!
console.log(obj2.x); // 100

function changeObj(o) {
    o.x = 999;   // modifies the ACTUAL object
}
changeObj(obj1);
console.log(obj1.x); // 999 — changed!

// BUT — reassigning the parameter does NOT affect the original:
function reassignObj(o) {
    o = { x: 0 }; // only changes the local parameter
}
reassignObj(obj1);
console.log(obj1.x); // 999 — unchanged
```

---

## 4.12 Practice Exercises

**Exercise 1:** Predict the output before running.

```js
let x = 10;
let y = x;
x = 50;
console.log(x);
console.log(y);
```

**Exercise 2:** Predict the output before running.

```js
const arr = [1, 2, 3];
const arr2 = arr;
arr2.push(4);
console.log(arr);
console.log(arr2);
```

**Exercise 3:** What does this function do to the original variable? Why?

```js
function doubleScore(score) {
    score = score * 2;
    console.log("Inside function:", score);
}

let playerScore = 100;
doubleScore(playerScore);
console.log("Outside function:", playerScore);
```

**Exercise 4:** What does this function do to the original object? Why?

```js
function levelUp(player) {
    player.level = player.level + 1;
    player.xp = 0;
}

const hero = { name: "Ali", level: 5, xp: 200 };
levelUp(hero);
console.log(hero);
```

**Exercise 5:** Fix this function so it does NOT modify the original array.

```js
function addZero(arr) {
    arr.push(0); // currently mutates original
    return arr;
}

const numbers = [1, 2, 3];
const result = addZero(numbers);
// numbers should still be [1, 2, 3] after this
console.log(numbers);
console.log(result);
```

---

## Key Takeaways from Chapter 4

- **Primitives** (string, number, boolean, null, undefined, symbol, bigint) are stored and copied by **value** — each variable has its own independent copy
- **Reference types** (object, array, function) are stored by **reference** — variables hold a memory address pointing to the data, not the data itself
- Copying a reference type variable gives you another pointer to the **same** object — not a duplicate
- `const` with objects: you cannot reassign the variable, but you CAN modify the object's contents
- Two objects with identical content are **not equal** (`===` compares references, not content)
- When you pass a primitive to a function, the function gets a **copy** — the original is safe
- When you pass an object or array to a function, the function gets the **same reference** — it can modify the original
- To avoid unintended mutation, return a new object using the spread operator `{ ...obj }` or `[...arr]`
- The spread operator creates a **shallow copy** — nested objects are still shared