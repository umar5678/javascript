// node .  vs browser
// // terminal, 
// js introduction. html
// variables. 
// let var, const., 
// datatypes. 
// type conversion
// scope
// truth and falsy values
// premitive and reference types. 
// operators

// math operators, arethmetics

// + , - , * . / , % , **


let num1 = 10
let num2 = 5

// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 / num2)
// console.log(num1 * num2)

// increment and decrement operatores


// num2 = num2 + 1
// num2 += 3 //  num2 = num2 + 3


// num2 -= 1 //  num2 = num2 - 1
num2 *= 2 //  num2 = num2 * 2
num2 /= 2 //  num2 = num2 / 2 // 5

num2++
// console.log(num2)

// for (let i = 1; i < 10 ; i++){}

// and pre operator., 
// post operator , . first use the var, then apply the operation 
// use in console, , use , in post operation
// console.log("num 1 : ",       num1   ) // 10 . 
// console.log("num 1 ++ : ",    num1++ ) // ? 10 print, , update to 11  
// console.log("num 1 after : ", num1   ) //  11

// pre operator< 
// console.log("num 1 : ", num1) // 10 . 
// console.log(" ++num 1: ", --num1) // 9, first update, then //  11 print  
// console.log("num 1 after : ", num1) //  9


// 
// 


// const res1 = Number((0.1 + 0.2).toFixed(2)) // 0.3000000004, 0.3
// console.log(res1)
// const res2 = 0.3

// console.log(4 * 2.1)

// console.log(res1 === res2)

// let ourNum = 12.900032434234234

// console.log(Math.floor(ourNum)) // 12
// console.log(Math.ceil(ourNum)) // 13
// 2 ** 3 // 2 x 2 x 2 = 8
// console.log( 2 ** 3)

// modules operator , % ]

// 4 / 3.  1
// 7 / 5 . 2 
// 10 / 2 . 0


// console.log("16 is even? ", (16 % 2) === 0 )
// console.log("17 is even? ", (17 % 2) === 0 )
// console.log("91 is even? ", (91 % 2) === 0 )
// console.log("92 is even? ", (92 % 2) === 0 )


// console.log("92 is odd? ", (92 % 2) !== 0 )

// ternary operators :
// console.log("16 is even? ", (16 % 2) === 0 )
// console.log("17 is even? ", (17 % 2) === 0 )
// console.log("91 is even? ", (91 % 2) === 0 )
// console.log("92 is even? ", (92 % 2) === 0 )


// console.log("92 is  
//  condition ? " " : " "

let isLoggedin = false

// login button, text value, if logged in true , then assign Logout , otherwise Login

let btnText = isLoggedin ? "Logout" : "Login"


// > , < , <= , >= != !==, ==, ===, , return boolean , true , false
// logical operators, 
// AND &&, OR ||, NOT !. 



// // AND &&, returns true only if all conditins are true 
// console.log("true AND true : " , true && true)  // true
// console.log("true AND false : " , true && false) // false 
// console.log("fasle AND true : " , false && true) // false
// console.log("false AND false : " , false && false) // false 
// console.log(" " , 1 < 2 && 3 === "3") // false 





// // OR || , returns true , when any one condition is true
// console.log("true OR true : " , true || true)  // true
// console.log("true OR false : " , true || false) // true 
// console.log("fasle OR true : " , false || true) // true
// console.log("false OR false : " , false || false) // false 

// console.log(" " , 1 < 2 || 3 === "3") // true 


// // NOT ! , convert the boolean value.  , 

// console.log("NOT TRUE: ", !true) // false
// console.log("NOT FALSE: ", !false) // true


// console.log("NOT null: ", !null) // true
// console.log("NOT undefined: ", !undefined) // true
// console.log("NOT 0: ", !0) // true




// if(!true) {
//     console.log("if run ")
// } else {
//     console.log("else  run ")
// }


// if(!null) {
//     console.log("if run ")
// } else {
//     console.log("else  run ")
// }

// if(!0) {
//     console.log("if run ")
// } else {
//     console.log("else  run ")
// }


let age = 18
let hasIdCard = true
let hasLicense = true

let hasDegree = false
let hasRealExperience = true

// check if the person can , 1: drive, , vote, . job apply


// age must be more then 18, should have ID card

const canVote = age >= 18 && hasIdCard

// console.log("can vote: ", canVote)

// age must me more then  16 . driving license

// console.log("Can drive: ", canDrive)


// can apply on job. 

// age greater then 18. id Card. 
const canDrive = age >= 16 && hasLicense  // 16 === 16 , 16 > 16 // false

// console.log("Can drive: ", canDrive)


// can apply on job. 
// degree ya real experience

// ( age, id, ) 

// age greater then 18. id Card. 
// const canDrive = age >= 16 && hasLicense  // 16 === 16 , 16 > 16 // false

// conso
const canApplyOnJob = (age >= 18 && hasIdCard) && (hasDegree || hasRealExperience)

// console.log("Can Apply Job: ", canApplyOnJob)

// nullish operator, || , ??, 

//  condition || expression
// || . retrun the left side, false . null, undefined, falsy value i.e. 0

// const data = {id: 123, name: "asdfasf"}

// const hasData = data || "No Data"

// && 
// && 
// console.log(hasData)

// ?? , return right when value is null or undefined

// const count = {}

// const hasCount = count ?? "No Count"

// console.log(hasCount)

// || , &&,  nullish operators, 
// ? : // ternary operators, 
// ?. // optional chaining   