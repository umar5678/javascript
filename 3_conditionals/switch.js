// use switch where we have to test a condition again multiple cases. 
// // Switch is best for comparing ONE value against MULTIPLE possible matches
// Use instead of long else-if chains with equality checks

// switch (expression) {
// case valeu1: 
    // code 
    // case value2: 
    // code 
    // case value3: 
    // code 
// default
//}

// sun : 0
// mon : 1
// ..



// weather... raining, strome , snowing , sunny


// 


// month days calculator 

// for january 31, feb 28 if non leap , 29 if leap year,, march : 30,  an dso on

// leap year finder funciton; 

// function isLeapYear(year) {
//     if((year % 4 === 0 && year % 100 !== 0  ) || year % 400 === 0) {
//         return `${year} is a Leap year, this year February has 29 days`
//     } else {
//         return `${year} is not a leap year, Feb has 28 days`
//     }
// }

// console.log(isLeapYear(2016))




// print status message based on status code, 
// for 200 , 201, okey
// for 301, 302, print resource moved
// for 400, bad request
// 404, not found, 
// 401 , unauthorize and so on

// file type categorizations, 

// video file has these extension: .mp4, av1, mkv. 
// images; jpg, jpeg, png
// audio : mp3, wav, flac
// doc: docx, doc,
// pdf: pdf
// code: .js, .ts. .py. .go

// also print graiding using switch



// : User Registration - BAD vs GOOD


//  BAD: Deeply nested conditionals (Pyramid of Doom)
// function registerUserBad(username, email, password, age) {
//     if (username) {
//         if (username.length >= 3) {
//             if (email) {
//                 if (email.includes("@")) {
//                     if (password) {
//                         if (password.length >= 8) {
//                             if (age) {
//                                 if (age >= 18) {
//                                     // Finally! The actual logic buried deep
//                                     return {
//                                         success: true,
//                                https://js-classroom-eight.vercel.app/         message: "User registered successfully!",
//                                         user: { username, email, age }
//                                     };
//                                 } else {
//                                     return { success: false, message: "Must be 18 or older" };
//                                 }
//                             } else {
//                                 return { success: false, message: "Age is required" };
//                             }
//                         } else {
//                             return { success: false, message: "Password too short" };
//                         }
//                     } else {
//                         return { success: false, message: "Password is required" };
//                     }
//                 } else {
//                     return { success: false, message: "Invalid email format" };
//                 }
//             } else {
//                 return { success: false, message: "Email is required" };
//             }
//         } else {
//             return { success: false, message: "Username too short" };
//         }
//     } else {
//         return { success: false, message: "Username is required" };
//     }
// }


//: Process Payment - Refactoring Exercise


// BAD: Nested version
// function processPaymentBad(user, amount, paymentMethod) {
//     if (user) {
//         if (user.isActive) {
//             if (amount > 0) {
//                 if (amount <= user.balance) {
//                     if (paymentMethod) {
//                         if (paymentMethod === "card" || paymentMethod === "wallet") {
//                             // Process payment
//                             user.balance -= amount;
//                             return { success: true, newBalance: user.balance };
//                         } else {
//                             return { success: false, error: "Invalid payment method" };
//                         }
//                     } else {
//                         return { success: false, error: "Payment method required" };
//                     }
//                 } else {
//                     return { success: false, error: "Insufficient balance" };
//                 }
//             } else {
//                 return { success: false, error: "Invalid amount" };
//             }
//         } else {
//             return { success: false, error: "Account is inactive" };
//         }
//     } else {
//         return { success: false, error: "User not found" };
//     }
// }

// password strength checker :  it uses regex. advance


//  Nested booking validation
// function bookAppointmentBad(patient, doctor, date, time) {
//     if (patient) {
//         if (patient.name && patient.phone) {
//             if (doctor) {
//                 if (doctor.available) {
//                     if (date) {
//                         if (new Date(date) > new Date()) {
//                             if (time) {
//                                 if (time >= "09:00" && time <= "17:00") {
//                                     return { 
//                                         success: true, 
//                                         booking: { patient: patient.name, doctor: doctor.name, date, time }
//                                     };
//                                 } else { return { success: false, error: "Time must be 9AM-5PM" }; }
//                             } else { return { success: false, error: "Time required" }; }
//                         } else { return { success: false, error: "Date must be in future" }; }
//                     } else { return { success: false, error: "Date required" }; }
//                 } else { return { success: false, error: "Doctor not available" }; }
//             } else { return { success: false, error: "Doctor required" }; }
//         } else { return { success: false, error: "Patient info incomplete" }; }
//     } else { return { success: false, error: "Patient required" }; }
// }








