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

const sum = numbers.reduce((accumulator, num) => {
  // console.log("Current acc: " , accumulator, "current Number : ", num)

  return accumulator + num;
}, 0);

const avg =
  numbers.reduce((accumulator, num) => {
    return accumulator + num;
  }, 0) / numbers.length;

// console.log(sum)
// console.log(avg)

const sum2 = numbers.reduce((acc, n) => acc + n, 0);

// console.log(sum2)

// find product of all numbers,

const product = numbers.reduce((acc, n) => acc * n, 1);
// console.log(product)

// min max

const values = [23, 45, 12, 607, 34, 89, 21];

// console.log(Math.max(...values))

// loop // dont use Math.max()

// we will create a funciton that takes array as argument, and return max value.
// define a let varialbe, assing it 0, call it max.

// loop through each element . and
// on each iteration , we will compare the number with max .
// if numebnr is greater then max, then update the max value, and assing that number to the max vailabel,
// if number is less then max, then keep max value same,
// then return that max number

// const values = [23, 45, 12, 67, 34, 89, 21];

const findMAx = (numArr) => {
  let maxNumber = 0;

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > maxNumber) {
      maxNumber = numArr[i];
    }
  }

  return maxNumber;
};

// const values = [23, 45, 12, 607, 34, 89, 21];

const max = values.reduce((maxNumber, num) => {
  if (num > maxNumber){
      maxNumber = num
  }
  return maxNumber

  // return n > max ? (max = n) : max;
}, 0);

const min = values.reduce((minNumber, num) => {
  if (num < minNumber) {
    minNumber = num;
  }
  return minNumber;
}, values[0]);

const minShort = values.reduce(
  (minNum, num) => (num < minNum ? (minNum = num) : minNum),
  values[0],
);

console.log("max ", max);
console.log("min ", min);
console.log("min short", minShort);

// sort accending,
const accending = values.sort((a, b) => {
  return a - b;
});

// console.log(accending)

const decending = values.sort((a, b) => b - a);
// console.log(decending)

const scores = [85, 90, 78, 92, 88];

// find average

// Goruping by

// data
const people = [
  { name: "Ali", department: "Engineering" },
  { name: "Bilal", department: "Marketing" },
  { name: "Fatima", department: "Engineering" },
  { name: "Abid", department: "Marketing" },
  { name: "Ayesha", department: "HR" },
];

// group the names by department,
//{ marketing : ["Bilal", "Abil"]  , ...}

// we start an empty acc object , and the call back para will be acc, person
// get the depart of the person, and then
// check if this dept key exist in grouped acc object, >
// if that dept key does not exist, then create a new key inside grouped acc, and assign empty sting,

// if exist : then push the  user into that arry

console.log(people[2]["id"]); // Eng

const groupedByDept = people.reduce((grouped, person) => {
  const dept = person.department;

  if (!grouped[dept]) {
    grouped[dept] = [];
  }

  grouped[dept].push(person.name);

  return grouped;
}, {});

console.log(groupedByDept)









const cart = [
  { name: "Laptop", price: 999, quantity: 1 },
  { name: "Mouse", price: 29, quantity: 2 },
  { name: "Keyboard", price: 79, quantity: 1 },
  { name: "data cables", price: 50, quantity: 3 },
];

// find total :
const cartTotal = cart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

// console.log(cartTotal)

// console.log(cartTotal)
