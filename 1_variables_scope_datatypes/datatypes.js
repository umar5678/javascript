// deceration: 
// scope: 
// datatypes; 
// String: 

// single quoted, double quoted, and tempated literals, 
const firstName = "Umar"
const lastName = 'farooq'
const rollnumber = 50

// concatination with + sign
// const fullName = firstNqame + " " + lastName

// template literals : templating stings
const fullName = `${firstName} ${lastName}`


// console.log(`Welcome to the class, ${firstName} ${lastName}. Your roll number is ${rollnumber}`)
// 
// console.log(`2 * 3 = ${2 * 3}`)
// console.log(`12 / 3 = ${12 / 3}`)

const oldMultline = "First line of the paragraph\n" +
                    "second line\n" + 
                    "last line of the paragraph"


// console.log(oldMultline)

const newMultipline  = 
`first line of our book, 
second line from the book
last line ending here`

// console.log(newMultipline)

// strings methodS: 
// .length //, return the char count number

// console.log(firstName.length)
// console.log(`Your first name is "Umar" and its length ${firstName.length}`)

// .trim()
const username = "   umarfarooq    "
const email =  "umarfarooqgmail.com" 

// console.log(username.trim().length)
// console.log(username.trim())
// console.log(email.trim())
// console.log(email.trim().length)

// console.log(email.includes("@"))

function isValidEmail (email) {
    return email.includes("@") // boolean
}

// console.log("userqqwe.com".includes("@"))

const language = "english"
const lang_two = "JavaScripT"

// get "first char" make it upper case . get sliced stinge, and joind these two 
// console.log(language.slice())
// console.log(language["0"] )

// console.log(language["0"].toUpperCase()+language.slice(1))
// console.log(lastName.charAt(0).toUpperCase()+lastName.slice(1))

// console.log(language.toUpperCase())
// console.log(lang_two.toLowerCase())

// console.log(lastName.charAt(0))
// lenght : char count, . index, start from 0. 

// const lastIndex = email.length - 2
// console.log(email.charAt(lastIndex))
// .split // return a new array. 

// const language_char_array = language.split("")
// console.log(language_char_array)

const line = "We are learning Javascript. Javascript is not Java"
// const line_words_arr = line.split(" ")
// console.log(line_words_arr)
// const line_with_dashes = line.replaceAll(" ", "_")
// console.log(line_with_dashes)

// numbers 

const integer = 3
const floatNum = 3.14
const scientificNumber = 6.02e23
const infinity = Infinity
let result = 1 / 0 /// infinity
let multiPly = "qwe" * 3 // NaN

// console.log(typeof scientificNumber)
// console.log(typeof floatNum)
// console.log(typeof infinity)
// console.log( result)
// console.log(typeof result)
// console.log(multiPly)
// console.log(typeof multiPly)




// type conversion, 


// implicit . run tume type conversion: 

// sting + number . covert number into string . 


// other operators conver sting into number 
// console.log("5" + 3)
// console.log(5 + "3")
// console.log(5 - "3")

// console.log("6" * 2)
// console.log("6" % 4)



// explicit 

// console.log(Number(false)) // 0
// console.log(Number(true)) // 1
// console.log(Number("123"))
// console.log(Number("asdfasdf"))

// console.log(String(1234))
// console.log(String(false)) // "false"


// truthy and falsy value . and

// console.log(Boolean("")) // false  // false value
// console.log(Boolean("0")) // true
// console.log(Boolean("1")) // true
// console.log(Boolean(" ")) // true
// console.log(Boolean("asdfasdfasf ")) // true
// console.log(Boolean(0))  / / false 
// console.log(Boolean("")) // false  // false value
// console.log(Boolean("0")) // true
// console.log(Boolean("1")) // true
// console.log(Boolean(" ")) // true
// console.log(Boolean(/ false
// console.log(Boolean(1))  // true
// console.log(Boolean(-1))  // true
// console.log(Boolean(+0))  // false

//  equality comparision

// loosly equal , 

// console.log("1" == 1)
// console.log("1" === 1)

// console.log(null == undefined) // absence of value
// console.log(null === undefined) // false . they are different data types

// console.log(NaN == NaN) // js bug
// console.log(NaN === NaN) // js bug
// console.log(Number.isNaN(NaN)) // proper check . true

// console.log(Number("4") / 1)






// strictly equal 



// if (1 == "1") {
//     console.log("run")
// }


// console.log(Boolean(null)) // false
// console.log(Boolean('null')) // true
// console.log(Boolean(undefined)) // false

// console.log(Boolean([])) // truthy value
// console.log(Boolean({})) // truthy value






// premitive and refence types. difference


// premitive : 

// let num1 = 4
// let num2 = num1  // this value is passed by value itself

// console.log("before change")
// console.log("num 1 : " , num1)
// console.log("num 2 : " , num2)

// num1 = 5

// console.log("Num 1 val changed")

// console.log("num 1 : " , num1)
// console.log("num 2 : " , num2)



// reference type 
// value are passed by reference


// const arr1 = [1,2,3,4]
// const arr2 = arr1 // it does not get the value. it onlyh receive the reference
// console.log("checking the value: \n")

// console.log("arr 1: ", arr1)
// console.log("arr 2: ", arr2)

// console.log("updaing the value in arr2 : \n")

// arr2.push(5,6)

// console.log("checking the value after arr2: \n")

// console.log("arr 1: ", arr1)
// console.log("arr 2: ", arr2)

const obj1 = {id : 123, name : "ali"} 
const obj2 = obj1

console.log("starting ")
console.log("obj 1 : ", obj1)
console.log("obj 2 : ", obj2)

console.log("\n changing the val in obj2 ")
obj2.name = "Ahmad"

console.log("after chagne") 

console.log("obj 1 : ", obj1)
console.log("obj 2 : ", obj2)