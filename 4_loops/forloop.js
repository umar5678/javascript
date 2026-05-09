


// FOR LOOP 
// if we have to reapeat a task, 
// or we have to iterate over an array or object,

// index data types always start form 0
// string are 0th indexed, 
// array are 0 th indexed
// objects are 0 th indexed

const str = "abcd"

const chars = [1,2,3]

const sample = {
    id : "123", 
    color : "green",
    isOnline : true,
    "max length" : 20
}

// console.log(str.charAt(2))

// console.log(chars.at(2))
// console.log(chars.)

// console.log(sample["id"])
// console.log(sample["max length"])
// console.log(sample["max length"])

// for(let i = 1 ; i <= 30 ; i++){
//    console.log( i )
// }


const alphabats = ["a", "b", "c", "d", "e", "f"]
// alphabats[5]
// alphabats[4]
// alphabats[3]
// alphabats[2]
// alphabats[1]
// alphabats[0]

// for(let i = 2; i < alphabats.length ; i++) {
//     console.log(alphabats[i]) // 
// }


// create a last index number, by substracting 1 from its length , and store it in a variable. 
// then start iterating, and go down to zero, so you have to decrement the index value everythime, . 
// print every value at iterative index

// const alphabats1 = ["a", "b", "c", "d", "e", "f"]


// for(let i = -1 ; i > alphabats1.length ; i--){
//     console.log(alphabats1[i])
// }


// const lastIndex = alphabats.length - 1 // 5



// for(let i = lastIndex; i >= 0; i--){
//     console.log(alphabats[i])
// }


// 2 table up to 10. 


//   for( let i = 1; i <= 10; i++){
//     console.log(2*i);
//   }

  for( let i = 10 ; i > 0; i-- ){
    console.log(2*i);
  }


