// ┌─────────────────────────────────────────────────────────────────┐
// │                    some() vs every()                            │
// │              "Check conditions across array"                    │
// ├─────────────────────────────────────────────────────────────────┤
// │                                                                 │
// │   some() - "Does ANY element pass?"                             │
// │   ═══════════════════════════════                               │
// │   [1, 2, 3, 4, 5].some(n => n > 3)                              │
// │    ✗  ✗  ✗  ✓  ← Found one! STOP → true                         │
// │                                                                 │
// │   [1, 2, 3].some(n => n > 5)                                    │
// │    ✗  ✗  ✗  ← None found → false                                │
// │                                                                 │
// │   every() - "Do ALL elements pass?"                             │
// │   ════════════════════════════════                              │
// │   [2, 4, 6, 8].every(n => n % 2 === 0)                          │
// │    ✓  ✓  ✓  ✓  ← All passed → true                              │
// │                                                                 │
// │   [2, 4, 5, 8].every(n => n % 2 === 0)                          │
// │    ✓  ✓  ✗  ← Found failure! STOP → false                       │
// │                                                                 │
// │   ═══════════════════════════════════════════════════════════   │
// │   some:  true if AT LEAST ONE passes  (like OR ||)              │
// │   every: true if ALL pass             (like AND &&)             │
// │                                                                 │
// └─────────────────────────────────────────────────────────────────┘

const numbers = [2,4,6,8, 9]

const allEven = numbers.every( n => n % 2 === 0)

// console.log(allEven)

// is there any number greater then 6 in this array 

const isAnyGreaterThen6 = numbers.some(n => n > 10)
// console.log(isAnyGreaterThen6)



// 
const inventory = [
    { name: "Laptop", inStock: true, quantity: 10 },
    { name: "Phone", inStock: true, quantity: 5 },
    { name: "Tablet", inStock: true, quantity: 0 },
    { name: "Watch", inStock: true, quantity: 3 }
];

// Any item out of stock?

const isAnyOutofStock = inventory.some(item => !item.inStock )
// console.log(isAnyOutofStock)

// All items available?

const isALLAvailable = inventory.every(item => item.inStock )
console.log(isALLAvailable)

// Low stock alert (any item < 5)?