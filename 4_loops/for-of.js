// syntex

// For Of loop
// iterate over arrays. // [,1 2, 3, 5] , "string" .
// for ( elelment of array  ){
//   element,
//}

// for (char of "string" ){
//     console.log(char)
// }

const alphabates = ["a", "b", "c", "d"];

// for (letter of alphabates) {
//     console.log(letter)
// }

const nums = [
  1, 2, 4, 3, 5, 56, 67, 7, 8, 89, 5, 3, 1, 2, 3, 21, 45, 456, 44, 10,
];
const even = [];
const odd = [];

for (n of nums) {
  if (n % 2 === 0) {
    even.push(n);
  }

  if (n % 2 !== 0) {
    odd.push(n);
  }
}

// console.log("Even: ", even);
// console.log("Odd: ", odd);

const users = [
  { id: 1, name: "Ali", age: 12, gander: "male" },
  { id: 2, name: "Bilal", age: 67, gander: "male" },
  { id: 3, name: "Fatima", age: 23, gander: "female" },
  { id: 4, name: "Ramzan", age: 34, gander: "male" },
  { id: 5, name: "Zoya", age: 23, gander: "female" },
];

const girls = [];
const boys = [];

// for (user of users) {
//   console.log(`${user.id}: ${user.name} is ${user.age} year old`);
// }

for (user of users) {
  if (user.gander === "female") {
    girls.push(user);
  }

  if (user.gander === "male") {
    boys.push(user);
  }
}

console.log(`boys: `, boys)
console.log(`girls: `, girls)
