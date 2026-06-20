// ============================================
// SECTION 3: CALLBACKS IN DEPTH
// ============================================

/*
    ┌─────────────────────────────────────────────────────────────────────────┐
    │                        WHAT IS A CALLBACK?                              │
    ├─────────────────────────────────────────────────────────────────────────┤
    │                                                                         │
    │  A CALLBACK is a function that is:                                      │
    │  • Passed as an argument to another function                            │
    │  • Executed ("called back") at some point by that function              │
    │                                                                         │
    │  WHY USE CALLBACKS?                                                     │
    │  • Customizable behavior                                                │
    │  • Handling asynchronous operations (like fetching data)                │
    │  • Event handling                                                       │
    │  • Separation of concerns                                               │
    │                                                                         │
    │  NOTE: We'll learn about async callbacks when we cover Promises         │
    │  and async/await in Week 3. For now, we focus on synchronous callbacks. │
    │                                                                         │
    └─────────────────────────────────────────────────────────────────────────┘
*/

// ─────────────────────────────────────────────────────────────────────────────
// 3.1 SYNCHRONOUS CALLBACKS
// ─────────────────────────────────────────────────────────────────────────────

// console.log("\n 3.1: Synchronous Callbacks\n");

// Example 1: Process and respond

// // process user name , get user name, remove leading and trailing spaces, , uppercase, and callback the fucntion for futher processing.

const printProcessedReturn = (payload) => {
  // console.log(`processed payload: ${payload}`)
};

const processUserInput = (input, callback) => {
  const processedInput = input.trim().toUpperCase();

  callback(processedInput);
};

// console.log(
//   processUserInput("            ahmad      ",

//     (processedInput) => {
//     console.log(`Processd Data: ${processedInput}`);
//   }),
// );

// console.log(
//   processUserInput("            ahmad abid     ",
//   (processed) => printProcessedReturn(processed)
// ),
// );

// const processUserInput = (name, callback) => {
// const processed = name.trim.toUpperCase()
// callback(processed)
//}

// processUserInput("   Ali Ahmad   ", (processed) => printProcessed(processed));

// porcessUserInput ("   Ali     ", )

// console.log("Processing user input:");
// processUserInput("  ali khan  ", (processed) => {
//     console.log(`  Processed name: ${processed}`);
// });

// // Example 2: Calculator with callback for result
// function calculate(a, b, operation, onResult) {
//     const result = operation(a, b);
//     onResult(result);  // Call the callback with result
// }
(processed) => printPro;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const calculate = (a, b, operation, callback) => {
  const res = operation(a, b);
  callback(res);
};

// calculate(3, 5, multiply, (output)  =>  {
//     console.log(`3 x 5 = ${output}`)
// })

// calculate(30, 23, add, (output)  =>  {
//     console.log(`30 + 23 = ${output}`)
// })

// calculate(6, 4, subtract, (output)  =>  {
//     console.log(`6 - 4 = ${output}`)
// })

//// array processor,
// // take array as input, process each item, and store that processed each item in new aray, and then pass that array to a next callback funciton fro further processing.

// const processArray = (array, onEach, onComplete) => {

// on Each : multiply each number with 10, and return
// onSuccess : message print like array was processed. and print array
// processArray: iterate over each element, call OnEach fun with current inded element, . and will save it in a new array. then call onSuccess with this new array

const printEachAndProcess = (index, element) => {
  // console.log(`processing: ${element} at ${index}`)

  return element * 10;
};

const printFinalArray = (processedNewArray) => {
  // console.log(`Array is now processed: `, processedNewArray)
};

const numbers = [2, 5, 6, 3, 9];

const processArray = (array, onEach, onSuccess) => {
  const newArray = [];

  for (let r = 0; r < array.length; r++) {
    const prcessedElement = onEach(r, array[r]);
    newArray.push(prcessedElement);
  }

  onSuccess(newArray);
};

// console.log(

//   processArray(
//     numbers,
//     (index,  element) => printEachAndProcess(index,  element),
//     (resultArray) => printFinalArray(resultArray),
//   ),

// );

/// validate users

// function validateUser(user, onSuccess, onError)  , receive use data , call on Error in case of error, and if success, called onSuccess and return validated data

const testUser = { name: "O", age: 11, isVerified: true };

const handleError = (errorMsg) => {
  return `Please fix this error: ${errorMsg}`
};

const validationSuccessHandler = (validateUserObj) => {
  return {
    ...validateUserObj,
    valiated: true,
    validatedAt: new Date(),
  }
};

const validateUser = (user, onError, onSuccess) => {
    const errors = []
    if (!user.name || user.name.length <= 2) {
    const nameError =  onError("Name is required, and must be more then two char");
    errors.push(nameError)
  }

  if (!user.age || user.age < 18) {
    const ageError =  onError("Age must be greater then 18");
    errors.push(ageError)
  }

  if (user.isVerified !== true) {
    const varificationError =  onError("user must be varified");
    errors.push(varificationError)
  }

  if(errors.length > 0) {
    return errors
    
  }

  const validatedUserData = onSuccess(user);

  return validatedUserData
};

console.log(validateUser(
  testUser,
  handleError,
  validationSuccessHandler,
) )


// retun undefined, even if we return anything from onSuccess()

// how we get the return value from such functions , that has callbacks, what if callback return a valude and how that value is handled in the main caller funciton

// console.log(
//   validateUser(
//     testUser,
//     (validatedUser) => console.log(`user is validated: `, validatedUser),
//     (errorMsg) => console.log(`fix this error first: ${errorMsg}`),
//   ),
// );

// Async Callbacks,

/*
    NOTE: We'll cover async JavaScript (Promises, async/await) in Week 3.
    This is just a preview of how callbacks work with timing.
    
    setTimeout is a built-in function that executes a callback
    after a specified delay (in milliseconds).
*/
