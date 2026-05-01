
// sting can be single qouted , double quoted,
const firstName = "Abid"
const lastName = 'Khan'
const rollNumber = 10

// sting concatination with + sign
// const fullName =  firstName + " " + lastName
// console.log(fullName)


// template literals , (also called templating sting) .. // syntext `string in backticks`

const fullName = `${firstName} ${lastName}`
// console.log(fullName)

// console.log(`Welcome to the class, ${firstName} ${lastName}. And your roll number is ${rollNumber}`)

// we can do calculation inside template literals 

// console.log(`2 * 3 = ${2 * 3}`)
// console.log(`12 / 3 = ${12 / 3}`)


// multi line sting: 
// old way: 

const old_multiLine = "\nFist line of paragraph \n" +
                     "next line at second number \n" + 
                     "last lien in our paragraph"

// console.log(old_multiLine)

// new Multi line sting way: usign template literals 

const newMultilines = `first line of our book
secons line in the
sequesnce. 
last line is the final statement. 
`

// console.log(newMultilines)

// String methods: 
// .length: // tells the length of the chars on the string
// console.log(`Your last neme is ${lastName} and it is ${lastName.length} chars long`)

// .trim() . remove some spaces and chars form begining and last of the string

const myName = "umar"
const email = "  umarfaooq@gmail.com "
const username = "  umarfarooq          "

// console.log(email.trim())
// console.log(username.trim().length)


const language = "english"
const lang_two = "JavaScripT"

// console.log(language.toUpperCase())
// console.log(lang_two.toLowerCase())

// console.log(`${myName.charAt(0).toUpperCase()}${myName.slice(1)}`)

// charAt ; 
// console.log(lang_two.charAt(4))
// to get the last char
// first get the lenght of the it  then perfrom - 1 frm the length. 
const lastIndex = lang_two.length - 1 // 9

// console.log(lang_two.charAt(lastIndex))

// split
// console.log(language.split(""))'S', 

// const js_char_array = lang_two.toLowerCase().split("")

// console.log(js_char_array)


// split.  // return a new array

// const word_arr_of_line = line.split(" ")

// console.log(word_arr_of_line)



// replace: 
// new stinge and convert space into -
const line = "We are learning javascript. Javascript is not Java."

const new_line = line.replaceAll(" ", "-") 

// console.log(new_line)


// numbers

const integerNum = 23234234234234
const floatingPointnum = 3.14
const scientificNumber = 6.02e23 

const NegInfinity = -Infinity

const itsNan = "a" * 3
const itsInfinity = 1 / 0

// console.log(typeof integerNum)
// console.log(typeof floatingPointnum)
// console.log(typeof scientificNumber)
// console.log(typeof NaN)

// console.log(itsInfinity)
// console.log(itsNan)
// console.log(typeof NegInfinity)


const age = "55"

// console.log(typeof age)
// console.log(Number(age))
// console.log(typeof Number(age))



// premitive : are stored by value. coping premitive passes the value, 
// console.log("==== before change ====")

// let num_4 = 4
// console.log(num_4)

// let num_four = num_4
// console.log(num_four)

// console.log("==== before change end ====\n")

// console.log("==== after change ========= \n")

// num_4 = 40
// console.log(num_4)

// num_four = 80
// console.log(num_four)



// let student = "Ali"
// let student2 = student

// console.log(student)
// console.log(student2)

// console.log("====")

// student2 = "Hassan"

// console.log(student)
// console.log(student2)

// non-premitive datatyles are stored by reference, . if we try to copy one NON-Premitive , only the reference is passed: 


// const students = ["Ali", "hassan", "Ahmad", "Osman"]

// const students_arr_2 = students

// console.log("students : ",students)
// console.log("students 2 array" ,students_arr_2)

// console.log("\n======\n")


// students_arr_2.push("Bilal")

// console.log("students 1 : ", students)
// console.log("students 2 array" ,students_arr_2)


// students.pop()


// console.log("students 1 : ", students)
// console.log("students 2 array" ,students_arr_2)



// const car = {
//     carName : "tesla model X", 
//     color : "white"
// }


// const anotherCar = car


// console.log("first car obj: ",  car)
// console.log("second car obj: " , anotherCar)

// console.log("changing color of the second car")

// anotherCar.color = "blue"

// console.log("car 2 color changed , now see both cars\n")


// console.log("first car obj: ",  car)
// console.log("second car obj: " , anotherCar)


// use spread operator: 

// when copping the non-premitive DataTransfer, use spread (...) 

function logMsg (msg = "log with line break in start and end") {
    console.log(`\n ${msg} \n`)
}

// const num_array = [1,2,3,4,5,6]

// const num_arr_2 = [...num_array]

// console.log("arra 1",num_array)
// console.log("array 2", num_arr_2)

// logMsg("attempt to change the value form second: ")

// num_arr_2.push(7,8,9)

// logMsg("num array 2 value are changed, ")

// console.log("arra 1",num_array)
// console.log("array 2", num_arr_2)





// const car = {
//     carName : "Tesla model Y", 
//     color : "Red"
// }

// const secondCar = {...car}

// console.log("first Car : ", car)
// console.log("second Car : ", secondCar)

// logMsg("cars created, and logged. ")

// console.log("tryng to change car info")

// secondCar.carName = "Tesla Model X"
// secondCar.color = "white"


// console.log("first Car : ", car)
// console.log("second Car : ", secondCar)


// always: use spread operators. don no tmake reference copy. 
// use let and const,. dont use var. 
// dont use spaces in file and directory name . 
// use namng conventions. 
// camelCase. DoubleCamelCase. snake_case. SCREAMING_SNAKE_CASE


// type conversion . implicit . automatic


// 

// console.log("5" + 5)
// console.log(4 + "5")

// // console.log("5" - 2)
// console.log("50" * 2)
// console.log(50 * "2")



// explicit > type change by developer 

// console.log(Number("4"))
// console.log(Number("sadfasf"))


// console.log(String())

// console.log(Boolean(""))


// equality comaprisions: 

// console.log("1" == 1) // true
// console.log("1" === 1) // false

// console.log(0 == false) // true
// console.log(0 === false) // false

// console.log(null == undefined) /// true . mean valeu not available, 
// console.log(null === undefined) // also perofrm type chack

const obj1 = {id: 123, name: "Ali"}

const obj2 = {id: 123, name: "Ali"}

// console.log(obj1 == obj2) // false . have differenr references

// console.log(NaN == NaN) // false
// console.log(NaN === NaN) // false

// // corrent way  
// console.log(Number.isNaN(NaN)) // true

