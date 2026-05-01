// scope: where in the code we can access the variable, 
// scopes in javascript: 
// 1: global scope, 
// 2: function scope
// 3: block scope

// var, let, const

// var : global ,function
// let : global and block scope
// const : global and block scope

var globalVar = " VAR : this is global var"
let globalLet = "LET : this is global let"
const globalConst = "CONST: this is global const "

function scopeTest() {
    var functionVar = "func var"
    let functionLet = "func function"
    const functionConst = "func const"

    // console.log("trying to access function varialbes inside it")
    // console.log(functionVar)
    // console.log(functionLet)
    // console.log(functionConst)
    
    if (true) {
        var var_inside_if_inside_fun = "VAR: im inside if lock which is inside a function, i can leak"
        let let_inside_if_inside_fun = "LET : im inside if lock which is inside a function"
        const const_inside_if_inside_fun = "CONST: im inside if lock which is inside a function"
        
        // console.log , all are accesable, 
    }
    // console.log("trying to access if block vars, ")

    // console.log(var_inside_if_inside_fun)
    // console.log(let_inside_if_inside_fun)

}



scopeTest()

// console.log(var_inside_if_inside_fun)

// console.log("trying to access function varialbes outside it")

// console.log(functionVar)
// console.log(functionLet)
// console.log(functionConst)


// if (true) {
//     var ifBlockVar = "VAR: i am inside if block, i can leak"
//     let ifBlockLet = "LET : i am also inside block, "
//     const ifBlockConst = "Const:  inside if block"

//     console.log("trying to access if-block varialbes inside it")

//     console.log(ifBlockVar)
//     console.log(ifBlockLet)
//     console.log(ifBlockConst)


// }


// console.log("trying to access if-block varialbes outside it")

// console.log(ifBlockVar)
// console.log(ifBlockLet)
// console.log(ifBlockConst)



for (let i = 0 ; i <= 3 ; i++) {
    console.log("w" , i)
}

// console.log("IT WAS INSIDE FOR FUNTION", i)


