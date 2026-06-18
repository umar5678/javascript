// concepts,

// pass by ref,

const student = {
  name: "Ahmad",
  subjects: {
    compulsory: ["English", "Urdu", "Pak studies"],
    elective: ["chemistry", "Physics"],
},
};

const studentCopy = {...student} 
const studentStructured =  structuredClone(student) 

student.subjects.elective.push("Math")

console.log("Student copy  ", studentCopy) // shallow copy,.
console.log("Strucutured clone: ", studentStructured) // deep copy, 

// pass by value,

// function k ref, and execution me kia farak hi.

const email = "user@email.com";
// premitive data vaiable has ref + direct data access. // is that true?
// or these just have only the data access.
// but in case of non-premitive datatypes, like array and objects.
// the variable has only the reference , and that reference point to that data in memory

// what about function? arn't they also non-premitive?

function add(a, b) {
  return a + b;
}

const divide = (a, b) => a / b;

// console.log(divide.name === "divide");

// what is the difference between
// console.log(add);
// const add2 = add;

// console.log("add 2 running: ", add2(3, 4));
// console.log(typeof add);
// is it geeting the reference, or funciton statement, or func expression.

// console.log(add(2, 3));
 // its a function call. execution,
// when we call a funciton with (), that's execution, but when we just pass a function name, liek divide only without () , what is that??

// explain the differfence at the level of fucntion decelaration types. like function decalaration, and function expression.


/// do not make deeply nested objects. 