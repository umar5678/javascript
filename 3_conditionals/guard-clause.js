/// Mind set : two types:

// tredition , general if-else flow

// if( condition ) {
//     // run if block if thsi condiotn is true
// } esle {
//     // run this block if the condion was false
// }

/// if condition false is was run if block. exit early,

// function  passedOrFaile(marks) {

// // if marks are greater then 50 , say you have passed

//     // if(marks >= 50 ) {
//     //     return `Passed`
//     // } else {
//     //     return `Failed`
//     // } // negative check first,

//     // other code

//     if( marks < 50 ) {
//         return `Failed`
//     }

//     return `Passed`

// }

// console.log(passedOrFaile(82))

/// score , 0 - 100

// score should be more then 0 and less then 100.

function validateScore(score) {
  if (score < 0 || score > 100) {
    return `score cant be less then 0 , and more then 100`;
  }

  return `Score is in valid range`;
}

// console.log(validateScore(0))

function validAge(age) {
  // age should be more then 20 , but less then 65

  return;
}

// function validNumber (number) {

//    if(number.length !== 11){
//     return "Invalid phone num"
//    }

//     return `Phone validation done`

// }

// console.log(validNumber("12312312311"))

function nameValidation(firstname, lastname) {
  if (firstname === "" || lastname === "") {
    return `first name cannot be empty, last name cannot be empty`;
  }

  return `Full name : ${firstname} ${lastname}`;
}

// console.log(nameValidation("Ali", "Hassan"))

// Concept in simple English:
// Use if/else to check a condition.
// If marks are 60 or more → student passed.
// Otherwise → student failed.

// Challenge: Check Student Pass or Fail

// TAKE marks
// IF marks are greater than or equal to 60
//     SAY "Passed"
// OTHERWISE
//     SAY "Failed"

// Guard clause means exiting early when condition fails.

// Challenge: Use Guard Clause for Pass Check
// Concept in simple English:
// First handle the failure case.
// Then continue normal flow.

// TAKE marks
// IF marks are less than 60
//     RETURN "Failed"
// SAY "Guard clause passed"
// RETURN "Passed"

// Challenge: Validate Score Range
// Concept in simple English:
// Score must stay between 0 and 100.
// Less than 0 or more than 100 is invalid.

// TAKE score
// IF score is less than 0
//     SAY "Score cannot be less than 0"
// IF score is greater than 100
//     SAY "Score cannot be more than 100"
// OTHERWISE
//     SAY "Score is valid"

// Challenge: Validate Age Range
// Concept in simple English:
// Age should be between 20 and 120.

// TAKE age
// IF age is less than 20
//     SAY "Age cannot be less than 20"
// IF age is greater than 120
//     SAY "Age cannot be more than 120"
// OTHERWISE
//     SAY "Age is valid"

// Challenge: Validate Age Using OR Operator
// Concept in simple English:
// Use OR (||) when any one invalid condition should fail.

// TAKE age
// IF age is less than 20 OR age is greater than 120
//     SAY "Invalid age"
// OTHERWISE
//     SAY "Age is valid"

// Challenge: Validate Marks Range
// Concept in simple English:
// Marks must be between 17 and 75.

// TAKE marks
// IF marks are less than 17 OR marks are greater than 75
//     SAY "Marks are invalid"
// OTHERWISE
//     SAY "Marks are valid"

// Challenge: Validate Username and Password
// Concept in simple English:
// Username should not be empty.
// Password should be at least 8 characters.
// Username and password should not be the same.

// TAKE username and password
// IF username is empty
//     SAY "Username cannot be empty"
// IF password length is less than 8
//     SAY "Password too short"
// IF username equals password
//     SAY "Username and password cannot be same"
// OTHERWISE
//     SAY "Username and password are valid"

// Challenge: Validate Full Name
// Concept in simple English:
// Both first name and last name are required.

// TAKE first name and last name
// IF first name is empty OR last name is empty
//     SAY "Both names are required"
// OTHERWISE
//     SAY "Full name is valid"

// Challenge: Dashboard Access Validation
// Concept in simple English:
// Only admin or manager can access dashboard.

// TAKE role
// IF role is NOT admin AND role is NOT manager
//     SAY "Access denied"
// OTHERWISE
//     SAY "Access granted"

// Challenge: Course Enrollment Validation
// Concept in simple English:
// User can enroll only in Python, Golang, or JavaScript.

// TAKE course name
// IF course is NOT python
// AND course is NOT golang
// AND course is NOT javascript
//     SAY "Course not allowed"
// OTHERWISE
//     SAY "Enrollment allowed"

// Challenge: Payment Method Validation
// Concept in simple English:
// Only card and wallet payment methods are allowed.

// TAKE payment method
// IF payment method is NOT card
// AND payment method is NOT wallet
//     SAY "Payment method not allowed"
// OTHERWISE
//     SAY "Payment method accepted"

// Challenge: Product Price Validation
// Concept in simple English:
// Product price must be greater than 0
// and not more than 500,000.

// TAKE product name and price
// IF price is less than 0
// OR price is greater than 500000
//     SAY "Invalid product price"
// OTHERWISE
//     SAY "Product added successfully"

// Challenge: Student Transcript Validation
// Concept in simple English:
// Student name cannot be empty.
// CGPA must be between 0.0 and 4.0.

// TAKE student name and CGPA
// IF student name is empty
//     SAY "Student name required"
// IF CGPA is less than 0.0
// OR CGPA is greater than 4.0
//     SAY "Invalid CGPA"
// OTHERWISE
//     SAY "Transcript issued"

// Challenge: Delivery Scheduling Validation
// Concept in simple English:
// Delivery can only be scheduled
// if status is "ready" or "packed".

// TAKE order ID and status
// IF status is NOT ready
// AND status is NOT packed
//     SAY "Delivery cannot be scheduled"
// OTHERWISE
//     SAY "Delivery scheduled"

// Challenge: Flight Seat Booking Validation
// Concept in simple English:
// Passenger name cannot be empty.
// Age must be between 1 and 120.
// Seat class must be economy or business.

// TAKE passenger name, age, and seat class
// IF passenger name is empty
//     SAY "Passenger name required"
// IF age is less than 1
// OR age is greater than 120
//     SAY "Invalid age"
// IF seat class is NOT economy
// AND seat class is NOT business
//     SAY "Invalid seat class"
// OTHERWISE
//     SAY "Seat booked successfully"

// ## Challenge 3 — Online Food Order

// **Context:** A food delivery application processes orders.

// **Requirements:**
// - Customer name must not be empty
// - Phone number must not be empty // type is string
// - Delivery address must not be empty
// - Order amount must be greater than 0
// - Order amount must not exceed Rs. 50,000 per order
// - Payment method must be "cash", "easypaisa", or "jazzcash"

function placeOrder(customerName, phone, address, amount, paymentMethod) {
  if (customerName === "") {
    return `name is required`;
  }

  if (phone === "") {
    return `phone is required`;
  }

  if (address === "") {
    return `address is required`;
  }

  if (amount <= 0) {
    return `Order amount must be greater than 0`;
  }

  if (amount > 50000) {
    return `Order amount must not exceed Rs. 50,000 per order`;
  }

  if (
    paymentMethod !== "cash" &&
    paymentMethod !== "easypaisa" &&
    paymentMethod !== "jazzcash"
  ) {
    return `Payment method must be "cash", "easypaisa", or "jazzcash"`;
  }

  return (
    "Order confirmed for " + customerName + " — Payment via " + paymentMethod
  );
}

// console.log(placeOrder("name", "123123", "address", 50000, 'jazz'));

// placeOrder("", "0311", "Lahore", 500, "cash");              // "Customer name is required"
// placeOrder("Hina", "", "Lahore", 500, "cash");              // "Phone number is required"
// placeOrder("Hina", "0311", "", 500, "cash");                // "Delivery address is required"
// placeOrder("Hina", "0311", "Lahore", 0, "cash");            // "Order amount must be greater than zero"
// placeOrder("Hina", "0311", "Lahore", 60000, "cash");        // "Order amount cannot exceed Rs. 50,000"
// placeOrder("Hina", "0311", "Lahore", 500, "visa");          // "Invalid payment method"

// ## Challenge 4 — Salary Slip Generator

// **Context:** An HR system generates salary slips for employees.

// **Requirements:**
// - Employee name must not be empty
// - Employee ID must not be empty
// - Basic salary must be between Rs. 25,000 and Rs. 500,000
// - Bonus percentage must be between 0 and 50 (it is okay to have 0 bonus)
// - Department must be "engineering", "marketing", "sales", or "hr"

function generateSalarySlip(
  employeeName,
  employeeId,
  basicSalary,
  bonusPercent = 0,
  department,
) {
  if (employeeName === "") {
    return `Employee name must not be empty`;
  }

  if (employeeId === "") {
    return `Employee ID must not be empty`;
  }

  if (basicSalary < 25000 || basicSalary > 500000) {
    return `Basic salary must be between Rs. 25,000 and Rs. 500,000`;
  }

  if (bonusPercent < 0 || bonusPercent > 50) {
    return `Bonus percentage must be between 0 and 50 `;
  }

  if (
    department !== "engineering" &&
    department !== "marketing" &&
    department !== "hr"
  ) {
    return `Department must be "engineering", "marketing", "sales", or "hr"`;
  }

  // use valid clause  for bonus

  //   if (bonusPercent !== 0) {
  //       bonus = (basicSalary * bonusPercent) / 100;
  //   } else {
  //       bonus = 0
  //   }

  let bonus = bonusPercent !== 0 ? (basicSalary * bonusPercent) / 100 : 0;
  let total = basicSalary + bonus;

  return "Salary slip for " + employeeName + " | Total: Rs. " + total;
}

console.log(generateSalarySlip("employeeName", "employeeId", 500000, 5, "marketing"));
