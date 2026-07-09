import  {saySalam}  from "./utils.js"


let user = "Ismail"


function greet (name) {
    return saySalam(name)
}


const res = greet(user)

console.log(res)

