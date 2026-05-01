console.log("hi form javascript")

// varialbes, 
// data . data to store. store reference. data name identifer

var CourseName = "js"
let score = 40
const isCompleted = false
const students = ['Ali', "Bilal", "Fatima", "Osman"]


// 1: variable keyword:  var, let , const
// identifier : name of the variable, students, isCompleted, score
// 3: = . assignemnt operatore, 
// data . types 7 , premitive, and 3 reference types, 

// datatypes;: 

// premitive: 
// Number, string, boolean , null, undefined, symbol, bigint, 
// reference : 
// array, object, functions

let theme = "light"
let progress = 10


// use const always . 
// use let , if value need to change. . other wise dont use let. 
// never use var 
const dob = "12. 2. 2000"
const isOnline = true
const tempreture = "12. 2. 2000"
let email = undefined
const uniqueSymbol = Symbol("hi")
const num = 23.4533
const largeNum = 234523341231231231231n


const numArray = [1, 3, 6, 7, 9]

const mixedArray = [12, true, null, [1, 2, 3, 4], { id: 132, name: "umar" }, "hello", undefined]
// always keep same data types in arrays. 

const car = {
    company: "tesla",
    modalName: "Modal x",
    isSelfDriving: true
}

// operatorsl 
// <, >, ==, === , != , !==, <= , >=, 
// &&, ||., !

// conditionals: 


// if conditions {
//      if conditiosn i true, this block will run
// }{
//      if conditiosn i true, this block will run
// }

// if conditions {
//     run if conditions is true
// } else {
// other wise this block will run 
// }

// if (false) {
//     console.log("if true it will run")
// } else {
//     console.log("if condition is false , it will run ")
// }

const temp = 46
// check if its winter , summer or good weather 

// if (temp <= 15) {
//     console.log("its winter ")
// } else if (temp > 15 && temp < 35 ) {
//     console.log("weather is good")
// } else {
//     console.log("wather is hot")
// }
 


// for (let i = 1; i < 10; i++) {
//     console.log(i) // start from 1, upto , 9, leat value check 10 > 10 
// }


function greet(name) {
  return `Welcome to the course, ${name}`
} 

// console.log(greet("Ahmad"))


const num1 = 14
const num2 = 7

function add (a, b) {
    const sum = a + b
    return sum // can return  all datatypes, 

}

// console.log(add(2, 4))


function subtract (a, b ) {
    return a - b
}

const result = subtract(num1 , num2)

console.log(result)