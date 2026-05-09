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
// tue : 2
// sat : 6

// function  getDayNameByNum (dayNum) {

//     let dayName = []

//     switch(dayNum){
//         case 0:
//              dayName.push("Sunday")
//             break
//         case 1:
//             dayName.push("Monday")
//             break
//         case 2:
//             dayName.push("Tuesday")
//             break
//         case 3:
//             dayName.push( "Wednesday")
//             break
//         case 4:
//             dayName.push("Thrus")
//             break
//         case 5:
//             dayName.push("Fri")
//             break
//         case 6:
//             dayName.push( "Sat")
//             break
//         default:
//             dayName.push("Not a valid day number ")
//     }
//     return dayName
// }

// console.log(getDayNameByNum(0))

// weather... raining, strome , snowing , sunny

// we can test multiple cases at the same time,  switch is the best here
// we cannot test ranges ,

// function checkWeather (weather) {

//     let userMsge

//     switch (weather) {
//         case "raining":
//         case "strome":
//         case "snowing":
//             userMsge = "get an ubmraila"
//             break
//         case "sunny":
//             userMsge = "get sun glasses , or stay inside"
//             break
//         default:
//             userMsge = "Wather data not available"

//     }

//     return userMsge

// }

// console.log(checkWeather("winter"))

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

// 365 day, ~6 hours

// 365 . 2

// 31 days months:
// january, , March , , MAy, , July , August, , . Octuber,, december,

// auth, RBAC ,
// crud  , 1 ,
// Blog, , 2 ,
// social , post, real time communication , 2 ,
// ECOM. Notificaion, 3,
// sprint,

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}
// console.log(isLeapYear(2040));

function daysInMonth(month, year) {
  let day;

  switch (month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
      day = `${month} in ${year} has 31 days`;
      break;
    case "april":
    case "june":
    case "september":
    case "november":
      day = `${month} in ${year} has 30 days`;
      break;
    case "february":
      const isLeapYearResult = isLeapYear(year);
      day = isLeapYearResult
        ? `${month} in ${year} has 29 days`
        : `${month} in ${year} has 28 days`;
      break;
    default:
      day = "Invalid month";
  }
  return day;
}

// console.log(daysInMonth("august", 2022))

// 30 , Apr, JUne, september , november

// 28 , 29  february

// 0000, 1000, 1623, 1990, 1960 , 2000, 2004, 2019, 2026 ,

// // leap year .. (completely  divid by 4 and at same time should not divid by 100) , or  if the year completely divid by 400, then its leap year

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }

  return false;
}

// console.log(isLeapYear(2040));

/// 100 - 103 informational,
/// 200 -

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

function fileCategoryFinder(ext) {
  let fileCategory;

  switch (ext) {
    case ".jpeg":
    case ".png":
    case ".jpg":
    case ".gif":
      fileCategory = "this is image file";
      break;
    case ".docx":
    case ".doc":
      fileCategory = "this is Document file";
      break;
    case ".pdf":
      fileCategory = "this is Portable document format file";
      break;
    case ".js":
    case ".rust":
    case ".py":
    case ".go":
    case ".ts":
      fileCategory = "this is Code file";
      break;
    default:
      fileCategory = "unknown file";
  }

  return fileCategory;
}

// console.log(fileCategoryFinder(".pdf"));

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
//         if (user.isActive) { if (user.isActive) {
//             if (amount > 0) {
//             if (amount > 0) {
//                 if (amount <= user.balance) {
//                     if (paymentMethod) {
//                         if (paymentMethod === "card" || paymentMethod === "wallet") {
//                             // Process paymenmentMethod === "card" || paymentMethod === "wallet"t
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

// if payment method is not card or peyment method is not wallet then throw error

// const user = {
//     name :  "Osmama",
//     isActive : true,
//     accountBalance : 5000
// }

// function processPaymentGood(user, amount, paymentMethod) {

//     const CARD_METHOD = "card"
//     const WALLET_METHOD = "wallet"

//     console.log(WALLET_METHOD, CARD_METHOD)

//     console.log(paymentMethod === CARD_METHOD) // false
//     console.log(paymentMethod === WALLET_METHOD) // false
//     console.log("payment method: ", paymentMethod)

//     console.log((paymentMethod !== "card")  (paymentMethod !== "wallet"))

//     return

//     if(!user) {WALLET_METHOD
//         return  `user is rerequired`
//     }

//     if(!user.isActive){
//         return   `User is not active`
//     }

//     if(amount < 0 ) {
//         return  `Amount cannot be less then zero`
//     }

//     if(amount > user.accountBalance) {
//         return `amount cannot be greater then available balance`
//     }
//     // "card" , "wallet" , "cash" not available
//     if(!(paymentMethod !== CARD_METHOD ) && (paymentMethod !== WALLET_METHOD) ){
//        return `Payment method should be card or wallet`
//     }

//     const newBalance = user.accountBalance - amount
//     const newUser = { ...user, accountBalance : newBalance}   // object destructuring

//     return {
//         succes: true,
//         user : newUser
//     }
// }

// const paymentResult = processPaymentGood(user, 2000, "car")
// console.log(paymentResult)

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

/// full name validation,
// first name , lastname, both should empty.

//  firstname === "" || lastname === "" // return first and last names are required

// role,  either should be , admin ,  or ,  manager , >>> access dashboard,

function accessDashboard(role) {
  if (role !== "admin" && role !== "manager") {
    return `access denied`;
  }

  return `welcome to the dashboard`;
}

// console.log(accessDashboard('admin123'))

// javascript, python, rust

function courseEnroll(course) {
  if (course !== "python" && course !== "javascript" && course !== "rust") {
    return "only javascript, python and rust course are available,";
  }

  return `welome to the ${course} course`;
}

// console.log(courseEnroll("go"))

// Valid: Product price must be greater than 0 and not more than 500,000.

function addProduct(name, price) {
  if (price <= 0 || price > 500000) {
    return `Product price must be greater than 0 and not more than 500,000`;
  }
  return "Product added: " + name + " at Rs. " + price;
}

// console.log(addProduct("mouse", 10))

// Valid: A student's CGPA must be between 0.0 and 4.0. Their name must not be empty.

function issueTranscript(studentName, cgpa) {
  if (cgpa < 0.0 || cgpa > 4.0) {
    return "NOT issed";
  }

  return "Transcript issued for " + studentName + " — CGPA: " + cgpa;
}

// console.log(issueTranscript("Fatima", 4.1 ))

// Valid: A delivery can only be scheduled if status is "ready" or "packed".

function scheduleDelivery(orderId, status) {
  if (status !== "ready" && status !== "packed") {
    return "cannot scheduel";
  }
  assengerName;
  return "Delivery scheduled for order: " + orderId;
}

// console.log(scheduleDelivery(123, "read"))

// Valid: To book a seat, passenger name must not be empty, age must be at least 1 and at most 120, and seat class must be "economy" or "business".

function bookSeat(passengerName, age, seatClass) {
  if (passengerName.trim() === "") {
    return "name is required";
  }

  if (age < 1 || age > 120) {
    return "age not valid";
  }


  if(seatClass !== "economy" && seatClass !== "business"){
    return `cannot book a seat`
  }


  return "Seat booked for " + passengerName;
}


// console.log(bookSeat("sadfsadf  ", 20, "econo"))