// ┌─────────────────────────────────────────────────────────────────┐
// │                         reduce()                                │
// │          "Reduce array to single value (or anything!)"          │
// ├─────────────────────────────────────────────────────────────────┤
// │                                                                 │
// │   array.reduce((accumulator, current) => ..., initialValue)     │
// │                                                                 │
// │   [1, 2, 3, 4].reduce((sum, n) => sum + n, 0)                   │
// │                                                                 │
// │   Step by step:                                                 │
// │   ┌─────────┬─────────┬──────────┬────────────┐                 │
// │   │  Step   │   sum   │    n     │   Result   │                 │
// │   ├─────────┼─────────┼──────────┼────────────┤                 │
// │   │ Initial │    0    │    -     │     0      │                 │
// │   │    1    │    0    │    1     │   0+1=1    │                 │
// │   │    2    │    1    │    2     │   1+2=3    │                 │
// │   │    3    │    3    │    3     │   3+3=6    │                 │
// │   │    4    │    6    │    4     │   6+4=10   │                 │
// │   └─────────┴─────────┴──────────┴────────────┘                 │
// │                                                                 │
// │   Final result: 10                                              │
// │                                                                 │
// │   ═══════════════════════════════════════════════════════════   │
// │   reduce can return:                                            │
// │   • Number (sum, average, max, min)                             │
// │   • String (concatenation)                                      │
// │   • Object (grouping, counting)                                 │
// │   • Array (yes, even arrays!)                                   │
// │   • Anything!                                                   │
// │                                                                 │
// └─────────────────────────────────────────────────────────────────┘


const numbers = [1, 2, 3, 4, 5];



const sum = numbers.reduce( (accumulator, currentItem ) => {
    console.log(`current element:  ${currentItem}, accumulator: ${accumulator}`)
    return accumulator + currentItem
} , 0  )

// console.log(sum)

const sum2 = numbers.reduce((acc, n) => acc + n , 0)

// console.log(sum2)


// find product of all numbers, 



// min max

const values = [23, 45, 12, 67, 34, 89, 21];

const max = values.reduce((max, n) => {
    return n > max ? n : max
 
} , values[0])

console.log(max)


const scores = [85, 90, 78, 92, 88];


