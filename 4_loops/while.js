// // syntex
// // while (condition ) {
// // code to repeat
// // must update the condtiotn variable
// //}

// // USE WHEN:
// //  Don't know exact iterations
// //  Condition-based looping
// //  Reading until end

// count from 0 up tot 5 and print, while,

let count = 10;

// while (count >= 0) {
//     console.log(count)
//     count--
// }

// dice roll, . get 6 , and count how many iteration it took

let rolls = 0;
let dice = 0;

// while(dice !== 6 ) {
//     dice = Math.floor(Math.random() * 6) + 1
//     rolls++
//     if (dice !== 6) continue
//     console.log(`got ${dice} in ${rolls}`)
// }

// while (dice !== 6) {
//   dice = Math.floor(Math.random() * 6) + 1;
//   rolls++;
//   dice === 6 ? console.log(`got ${dice} in ${rolls}`) : "";
// }

// add num into the sum, and then increment the numnber.calculate up to the thurshold.

// let num = 1;
// let sum = 0;

// while (sum < 100) {
//   sum += num;
//   num++;
//   if (sum > 100) {
//     console.log(sum); // 105
//     break;
//   }
//   console.log(`num : ${num}, sum : ${sum}`);
// }
