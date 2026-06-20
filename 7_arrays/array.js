const names = ["Ali", "Ahmad", "Bilal"]


// const  ages = [12,3,4,66,86]

// const mixedArra = [ 3 , "string",null , undefined , true , 34567n , [1, 4,8 , 9, 4 ,[4, 6, 9, 1, ]],{name : "Ali", }, () => {console.log("i'm arrow function .");

// }]
// const findTheLastIndex = mixedArra[mixedArra.length - 1]()
// console.log(findTheLastIndex);


// console.log(mixedArra[7]["name"])

// dont use mixed array, 
// always keep similar data in an array. 

// const newArray = new Array(3)
// newArray[0] = "a"            
// newArray[2] = "c"            
// dont use this method.        

// [] // most prefered way of creating array
 

// console.log(newArray.length)
// console.log(newArray[1])

names.push("Arslan") // add to the end of array
 
names.unshift("Fatima") // add element at first place



// use push and pop, . 
// dont use shift and unshift on large dataset. 

console.log(names)       
console.log(names.at(-4)) // 
console.log(names.at(0)) 
console.log(names.at(2))  


// Finding elements: 

// ┌─────────────────────────────────────────────────────────────────┐
// │                    FINDING ELEMENTS                             │
// ├─────────────────────────────────────────────────────────────────┤
// │                                                                 │
// │   const fruits = ["apple", "banana", "cherry", "banana"];       │
// │                                                                 │
// │   indexOf("banana")                                             │
// │   ═════════════════                                             │
// │   ["apple", "banana", "cherry", "banana"]                       │
// │       0        1         2         3                            │
// │                ↑                                                │
// │            Returns: 1 (first occurrence)                        │
// │                                                                 │
// │   includes("cherry")                                            │
// │   ═════════════════                                             │
// │   ["apple", "banana", "cherry", "banana"]                       │
// │                          ↑                                      │
// │                      Found! Returns: true                       │
// │                                                                 │
// │   indexOf("grape")  → Returns: -1 (not found)                   │
// │   includes("grape") → Returns: false (not found)                │
// │                                                                 │
// │   Use indexOf when: You need the POSITION                       │
// │   Use includes when: You just need YES/NO                       │
// │                                                                 │
// └─────────────────────────────────────────────────────────────────┘










// slice: 

// ┌─────────────────────────────────────────────────────────────────┐
// │                         slice()                                 │
// │            "Copy a portion without modifying original"          │
// ├─────────────────────────────────────────────────────────────────┤
// │                                                                 │
// │   const arr = ["a", "b", "c", "d", "e"];                        │
// │   Index:        0     1     2     3     4                       │
// │                                                                 │
// │   ┌─────────────────────────────────────────────────────────┐   │
// │   │  slice(start, end)                                      │   │
// │   │                                                         │   │
// │   │  • start: Where to BEGIN (included)                     │   │
// │   │  • end: Where to STOP (NOT included)                    │   │
// │   │  • Returns NEW array, original unchanged                │   │
// │   └─────────────────────────────────────────────────────────┘   │
// │                                                                 │
// │   EXAMPLES:                                                     │
// │   ─────────                                                     │
// │   slice(1, 3)  →  ["b", "c"]                                    │
// │                    ↑     ↑                                      │
// │                    1     2  (stops before 3)                    │
// │                                                                 │
// │   slice(2)     →  ["c", "d", "e"]  (from index 2 to end)        │
// │                                                                 │
// │   slice(-2)    →  ["d", "e"]  (last 2 elements)                 │
// │                                                                 │
// │   slice()      →  ["a", "b", "c", "d", "e"]  (full copy)        │
// │                                                                 │
// └─────────────────────────────────────────────────────────────────┘





/**
┌─────────────────────────────────────────────────────────────────┐
│                         splice()                                │
│            "The Swiss Army Knife - Modifies Original"           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   splice(startIndex, deleteCount, ...itemsToAdd)                │
│                                                                 │
│   ═══════════════════════════════════════════════════════════   │
│   REMOVE ELEMENTS:                                              │
│   ═══════════════════════════════════════════════════════════   │
│                                                                 │
│   Before: ["a", "b", "c", "d", "e"]                             │
│             0     1     2     3     4                           │
│                                                                 │
│   splice(1, 2)  ← Start at index 1, delete 2 items              │
│                                                                 │
│   After:  ["a", "d", "e"]        Returns: ["b", "c"]            │
│                                  (what was removed)             │
│   ═══════════════════════════════════════════════════════════   │
│   INSERT ELEMENTS:                                              │
│   ═══════════════════════════════════════════════════════════   │
│                                                                 │
│   Before: ["a", "b", "c"]                                       │
│                                                                 │
│   splice(1, 0, "X", "Y")  ← At index 1, delete 0, add X,Y       │
│                                                                 │
│   After:  ["a", "X", "Y", "b", "c"]                             │
│                                                                 │
│   ═══════════════════════════════════════════════════════════   │
│   REPLACE ELEMENTS:                                             │
│   ═══════════════════════════════════════════════════════════   │
│                                                                 │
│   Before: ["a", "b", "c", "d"]                                  │
│                                                                 │
│   splice(1, 2, "X", "Y", "Z")  ← Delete 2, add 3                │
│                                                                 │
│   After:  ["a", "X", "Y", "Z", "d"]                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
 */






// ═══════════════════════════════════════════════════════════════
// SLICE vs SPLICE - KEY DIFFERENCES
// ═══════════════════════════════════════════════════════════════

/*
┌─────────────────────────────────────────────────────────────────┐
│                 SLICE vs SPLICE                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   SLICE                      │   SPLICE                         │
│   ─────                      │   ──────                         │
│   • Returns new array        │   • Modifies original array      │
│   • Original unchanged       │   • Returns removed items        │
│   • Only extracts/copies     │   • Can add, remove, replace     │
│   • slice(start, end)        │   • splice(start, count, items)  │
│   • Non-destructive          │   • Destructive                  │
│                              │                                  │
│   Think: "slice of cake"     │   Think: "surgery on array"      │
│     (remains whole)          │   (array is modified)            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
*/




// ═══════════════════════════════════════════════════════════════
// ARRAY DESTRUCTURING
// ═══════════════════════════════════════════════════════════════



const colors = ["red", "green", "blue", "yellow"]


// old way, 


const newColors = [ "Pink"  , ...colors, "White"]


// console.log("original colors",colors)
// console.log("New colors", newColors)

console.log(colors[1])
console.log(colors[2])

// new way

const [red, green, , y] = colors // ["red", "green", "blue", "yellow"]


// console.log(red)
// console.log(green)

// console.log(y)
// console.log(b)




/// Skip element

const alphabets = ["11", "22", "33", "44" , "55", "66", "88"]

const [a, , c, , , f, g = "77" ] = alphabets

console.log(a, c, f, g)



// Get first two, rest in array

const scores = [33, 55, 34, 67, 24, 89, 90, 10]

const [first , second, third, ...rest] = scores

console.log(first, second, third)
console.log(rest)