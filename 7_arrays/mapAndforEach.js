/**
┌─────────────────────────────────────────────────────────────────┐
│           IMPERATIVE vs DECLARATIVE APPROACH                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   IMPERATIVE (HOW to do it):                                    │
│   ──────────────────────────                                    │
│   "Step by step instructions"                                   │
│                                                                 │
│   const doubled = [];                                           │
│   for (let i = 0; i < numbers.length; i++) {                    │
│       doubled.push(numbers[i] * 2);                             │
│   }                                                             │
│                                                                 │
│   DECLARATIVE (WHAT to do):                                     │
│   ─────────────────────────                                     │
│   "Describe the result you want"                                │
│                                                                 │
│   const doubled = numbers.map(n => n * 2);                      │
│                                                                 │
│   ═══════════════════════════════════════════════════════════   │
│   Why Declarative is Better:                                    │
│   • More readable (intention is clear)                          │
│   • Less error-prone (no off-by-one errors)                     │
│   • Easier to maintain                                          │
│   • React uses declarative patterns!                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
 */

/**
┌─────────────────────────────────────────────────────────────────┐
│                        forEach()                                │
│              "Do something with each element"                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   array.forEach(callback)                                       │
│                                                                 │
│   callback receives: (element, index, array)                    │
│                                                                 │
│   [1, 2, 3].forEach(num => console.log(num))                    │
│                                                                 │
│       ┌───┐     ┌───┐     ┌───┐                                 │
│       │ 1 │ ──→ │ 2 │ ──→ │ 3 │                                 │
│       └───┘     └───┘     └───┘                                 │
│         ↓         ↓         ↓                                   │
│      log(1)    log(2)    log(3)                                 │
│                                                                 │
│   Returns: undefined (always!)                                  │
│   Use for: Side effects (logging, DOM updates, etc.)            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
 */

/// example, , define  write my fav colors :

const colors = ["red", "green", "blue", "golden", "brown"];
// this is sting array , and doing `${colors}` return statched string.
// we want a single string with coma and spaces

console.log(
  colors.reduce((acc, color) => {
    return acc + color + "," + " ";
  }, ""),
);

// const favColor = colors.forEach((color) => {
//   console.log(`My fav color is : ${color}`);
//   return `my fav color is ${color}`
// });

// const myFavColor = colors.map((clr) => {
//   console.log(`My fav color is : ${clr}`);
//   return `my fav color is ${clr}`
// });

// console.log(favColor)
// console.log(myFavColor)

// double every number,

const numbers = [1, 2, 3, 4, 5];

// numbers.forEach( n =>  console.log (n * 2 ))
const doubleByForEach = numbers.forEach((n) => n * 2);

const doubles = numbers.map((n) => n * 2);

console.log(doubles);
console.log(doubleByForEach);

// forEach does not create new array,
// forEach return undefined always

// Map

// ┌─────────────────────────────────────────────────────────────────┐
// │                          map()                                  │
// │           "Transform each element → New array"                  │
// ├─────────────────────────────────────────────────────────────────┤
// │                                                                 │
// │   Original:    [1,    2,    3,    4]                            │
// │                 ↓     ↓     ↓     ↓                             │
// │   Transform:   ×2    ×2    ×2    ×2                             │
// │                 ↓     ↓     ↓     ↓                             │
// │   Result:      [2,    4,    6,    8]   ← NEW ARRAY              │
// │                                                                 │
// │   const doubled = numbers.map(n => n * 2);                      │
// │                                                                 │
// │   ═══════════════════════════════════════════════════════════   │
// │   KEY POINTS:                                                   │
// │   • Returns NEW array (original unchanged)                      │
// │   • New array has SAME length as original                       │
// │   • Each element is transformed by callback                     │
// │   • ALWAYS return something from callback!                      │
// │                                                                 │
// │   🔥 REACT USE: Render lists of components!                     │
// │   {items.map(item => <Item key={item.id} data={item} />)}       │
// │                                                                 │
// └─────────────────────────────────────────────────────────────────┘

// console.log(doubleByforEach)
// console.log(doubleByMap)
// console.log(numbers)

// find lengths of each color string, and return that

// display user card: form user data

//

const users = [
  {
    id: 1,
    firstName: "Ali",
    lastName: "Haider",
    age: 30,
    city: "Lahore",
    subjects: ["Physics", "Computer", "Math"],
  },
  {
    id: 2,
    firstName: "Imran",
    lastName: "Khan",
    age: 25,
    city: "Lahore",
    subjects: ["Pak studies", "Urdu", "English"],
  },
  {
    id: 3,
    firstName: "Talha",
    lastName: "Mushtaq",
    age: 35,
    city: "Lahore",
    subjects: ["Economics", "Stats", "English"],
  },
];

// Array of Objects

const fullNameArray = users.map((user) => {
  return `${user.firstName} ${user.lastName}`;
});

// console.log(fullNameArray)

// [ {fullname : "" , age: } , .......... ]

// const userProfiles = users.map( user => {
//   return {
//     fullName : `${user.firstName} ${user.lastName}`,
//     age : user.age
//   }
// })

const userProfiles = users.map((user) => {
  const subjectsString = user.subjects.reduce((acc, sub) => acc + sub + "," + " ", "")
  const fullName =  `${user.firstName} ${user.lastName}`
  return {
    fullName,
    bio: `Hi, My name is ${fullName}. I am ${user.age} years. I am intrusted in ${subjectsString}`,
  };
});

// console.log(userProfiles)

// crate a new array that has full names . bio that contain age and subjects.

// i want an array with full names and age,
//

//

// -----------------------------------------
// Add calculated properties
// -----------------------------------------

const items = [
  { name: "Book", price: 20, quantity: 3   },
  { name: "Pen", price: 2, quantity: 10 },
  { name: "Notebook", price: 5, quantity: 4 },
];


const itemsWithTotal = items.map( (item ) => {
  return {
    ...item,  // name, qty, rice, 
    total: item.quantity * item.price
  }
})

console.log(itemsWithTotal)

// create a mew array, keep all these key: values, add total : qty * vlu

// ═══════════════════════════════════════════════════════════════
// forEach vs map - WHEN TO USE WHICH
// ═══════════════════════════════════════════════════════════════

/*
┌─────────────────────────────────────────────────────────────────┐
│                  forEach vs map                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   forEach:                      map:                            │
│   ────────                      ────                            │
│   • Returns undefined           • Returns new array             │
│   • For side effects            • For transformations           │
│   • Logging, updating           • Creating new data             │
│     external variables          • React rendering               │
│   • Cannot chain               • Can chain                      │
│                                                                 │
│   Use forEach when:             Use map when:                   │
│   • Logging/debugging           • Transform elements            │
│   • Updating DOM (vanilla)      • Need result array             │
│   • Sending notifications       • Rendering in React            │
│   • Any side effect             • Chaining methods              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
*/
