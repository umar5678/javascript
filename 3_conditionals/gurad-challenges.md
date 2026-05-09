# Guard Clause Challenges — Intermediate to Advanced
### JavaScript Fundamentals Series

---

Each challenge gives you the real-world requirement in plain English first.
Your job is to write the guard clauses only. The function shell and happy path are provided.
Answers are at the bottom — attempt every challenge before looking.

---

## Challenge 1 — CNIC Validator

**Context:** A government portal is collecting CNIC numbers for registration.

**Requirements:**
- CNIC must not be empty
- CNIC must be exactly 13 characters long (without dashes)
- CNIC must not contain any letters — only digits are valid

**Hint for the third condition:** JavaScript has a method called `isNaN()`. `isNaN("abc")` returns `true` because letters are not a number. `isNaN("12345")` returns `false` because it is a valid number. Use this to check if the CNIC contains letters.

```js
function validateCNIC(cnic) {
    // Guard 1: empty check


    // Guard 2: length check


    // Guard 3: digits only check


    return "CNIC is valid: " + cnic;
}
```

**Test your solution with:**
```js
validateCNIC("");               // "CNIC cannot be empty"
validateCNIC("3520112345");     // "CNIC must be exactly 13 digits"
validateCNIC("352011234abc3");  // "CNIC must contain digits only"
validateCNIC("3520112345678");  // "CNIC is valid: 3520112345678"
```

---

## Challenge 2 — University GPA System

**Context:** A university calculates scholarship eligibility based on CGPA.

**Requirements:**
- Student name must not be empty
- CGPA must be a valid range: 0.0 to 4.0
- Semester number must be between 1 and 8
- To be eligible for scholarship, CGPA must be 3.5 or above — but this is NOT a guard clause, this is logic that goes after the guards

```js
function checkScholarship(studentName, cgpa, semester) {
    // Guard 1: name


    // Guard 2: CGPA range


    // Guard 3: semester range


    // Scholarship logic — write this after your guards
    if (cgpa >= 3.5) {
        return studentName + " is eligible for scholarship";
    }

    return studentName + " is not eligible — CGPA below 3.5";
}
```

**Test your solution with:**
```js
checkScholarship("", 3.8, 4);          // "Student name is required"
checkScholarship("Bilal", -1, 4);      // "CGPA must be between 0.0 and 4.0"
checkScholarship("Bilal", 3.8, 9);     // "Semester must be between 1 and 8"
checkScholarship("Bilal", 3.8, 4);     // "Bilal is eligible for scholarship"
checkScholarship("Bilal", 2.9, 4);     // "Bilal is not eligible — CGPA below 3.5"
```

---

## Challenge 3 — Online Food Order

**Context:** A food delivery application processes orders.

**Requirements:**
- Customer name must not be empty
- Phone number must not be empty
- Delivery address must not be empty
- Order amount must be greater than 0
- Order amount must not exceed Rs. 50,000 per order
- Payment method must be "cash", "easypaisa", or "jazzcash"

```js
function placeOrder(customerName, phone, address, amount, paymentMethod) {
    // Guard 1: customer name


    // Guard 2: phone number


    // Guard 3: delivery address


    // Guard 4: amount range


    // Guard 5: valid payment method


    return "Order confirmed for " + customerName + " — Payment via " + paymentMethod;
}
```

**Test your solution with:**
```js
placeOrder("", "0311", "Lahore", 500, "cash");              // "Customer name is required"
placeOrder("Hina", "", "Lahore", 500, "cash");              // "Phone number is required"
placeOrder("Hina", "0311", "", 500, "cash");                // "Delivery address is required"
placeOrder("Hina", "0311", "Lahore", 0, "cash");            // "Order amount must be greater than zero"
placeOrder("Hina", "0311", "Lahore", 60000, "cash");        // "Order amount cannot exceed Rs. 50,000"
placeOrder("Hina", "0311", "Lahore", 500, "visa");          // "Invalid payment method"
placeOrder("Hina", "0311", "Lahore", 500, "easypaisa");     // "Order confirmed for Hina..."
```

---

## Challenge 4 — Salary Slip Generator

**Context:** An HR system generates salary slips for employees.

**Requirements:**
- Employee name must not be empty
- Employee ID must not be empty
- Basic salary must be between Rs. 25,000 and Rs. 500,000
- Bonus percentage must be between 0 and 50 (it is okay to have 0 bonus)
- Department must be "engineering", "marketing", "sales", or "hr"

```js
function generateSalarySlip(employeeName, employeeId, basicSalary, bonusPercent, department) {
    // Your guards here




    let bonus = (basicSalary * bonusPercent) / 100;
    let total = basicSalary + bonus;

    return "Salary slip for " + employeeName + " | Total: Rs. " + total;
}
```

---

## Challenge 5 — Property Listing

**Context:** A real estate website lists properties for rent and sale.

**Requirements:**
- Owner name must not be empty
- City must not be empty
- Property size (in Marla) must be between 3 and 500
- Price must be greater than 0
- Listing type must be "rent" or "sale"
- Property type must be "house", "apartment", "plot", or "commercial"

```js
function listProperty(ownerName, city, sizeInMarla, price, listingType, propertyType) {
    // Your guards here




    return "Property listed in " + city + " by " + ownerName;
}
```

---

## Challenge 6 — Exam Registration (Two Ranges, One Condition)

**Context:** A board exam registration system has strict eligibility rules.

**Requirements:**
- Student name must not be empty
- Roll number must not be empty
- Age must be between 14 and 25
- Percentage in previous class must be between 33 and 100 (minimum passing is 33%)
- Exam type must be "matric" or "intermediate"
- Fee paid must be exactly true — the fee boolean must be `true`

**Hint for the last condition:** The fee parameter is a boolean (`true` or `false`). A guard that checks if fee is not paid would be: `if (feePaid !== true)` or more simply `if (!feePaid)`.

```js
function registerForExam(studentName, rollNumber, age, previousPercentage, examType, feePaid) {
    // Your guards here




    return rollNumber + " — " + studentName + " registered for " + examType + " exam";
}
```

**Test your solution with:**
```js
registerForExam("Zara", "LHR-001", 16, 78, "matric", false);  // "Fee not paid — registration incomplete"
registerForExam("Zara", "LHR-001", 30, 78, "matric", true);   // "Age must be between 14 and 25"
registerForExam("Zara", "LHR-001", 16, 25, "matric", true);   // "Previous percentage must be at least 33"
registerForExam("Zara", "LHR-001", 16, 78, "matric", true);   // "LHR-001 — Zara registered for matric exam"
```

---

## Challenge 7 — Password Strength Checker

**Context:** A registration form validates password strength before saving.

**Requirements:**
- Password must not be empty
- Password must be at least 8 characters
- Password must not exceed 32 characters
- Password and confirm password must match — if they do not match, return "Passwords do not match"
- Username must not be empty
- Password must not be the same as the username — a person should not use their name as password

**Think carefully about the order of your guards.** Some checks depend on others being true first. For example, there is no point checking if passwords match if the password is empty.

```js
function registerUser(username, password, confirmPassword) {
    // Your guards here — order matters




    return "Account created successfully for: " + username;
}
```

**Test your solution with:**
```js
registerUser("", "mypass123", "mypass123");           // "Username is required"
registerUser("Ali", "", "");                           // "Password is required"
registerUser("Ali", "short", "short");                 // "Password must be at least 8 characters"
registerUser("Ali", "mypassword", "differentpass");   // "Passwords do not match"
registerUser("Ali", "Ali", "Ali");                     // watch what happens here — which guard catches it?
registerUser("Ali", "securepass1", "securepass1");    // "Account created successfully for: Ali"
```

---

## Challenge 8 — Flight Seat Booking

**Context:** An airline booking system for domestic flights in Pakistan.

**Requirements:**
- Passenger name must not be empty
- CNIC or passport number must not be empty (it is the ID field — just check it is not empty)
- Age must be at least 2 (infants under 2 cannot be booked online)
- Age must not exceed 120
- Seat class must be "economy" or "business"
- Number of bags must be between 0 and 2 for economy, but this rule only applies to economy — for business class, bags can be 0 to 4

**This last requirement is the real challenge.** You cannot write it as a single simple guard. You need to think: what is the bag rule for economy? What is the bag rule for business? Write them as two separate conditional guards.

```js
function bookFlight(passengerName, idNumber, age, seatClass, numberOfBags) {
    // Guards 1-4: standard checks




    // Guard 5: seat class check


    // Guard 6: bag limit — depends on seat class (the hard one)


    return "Flight booked for " + passengerName + " | Class: " + seatClass + " | Bags: " + numberOfBags;
}
```

**Test your solution with:**
```js
bookFlight("Omar", "35201-1234567-1", 1, "economy", 1);   // "Age must be at least 2"
bookFlight("Omar", "35201-1234567-1", 25, "first", 1);    // "Seat class must be economy or business"
bookFlight("Omar", "35201-1234567-1", 25, "economy", 3);  // "Economy class allows max 2 bags"
bookFlight("Omar", "35201-1234567-1", 25, "business", 5); // "Business class allows max 4 bags"
bookFlight("Omar", "35201-1234567-1", 25, "economy", 2);  // "Flight booked for Omar..."
bookFlight("Omar", "35201-1234567-1", 25, "business", 3); // "Flight booked for Omar..."
```

---

## Challenge 9 — Medical Appointment System

**Context:** A hospital management system books appointments.

**Requirements:**
- Patient name must not be empty
- Patient age must be between 0 and 120
- Doctor specialization must be one of: "general", "cardiology", "orthopedic", "neurology", "pediatrics"
- If patient age is under 18, the only allowed specialization is "general" or "pediatrics" — a child cannot directly book cardiology, orthopedic, or neurology without going through general first
- Appointment slot must be "morning", "afternoon", or "evening"
- Contact number must not be empty

**The age-and-specialization rule is the advanced part.** You need a guard that only activates under a certain condition. Think of it as a guard inside a condition.

```js
function bookAppointment(patientName, age, specialization, slot, contactNumber) {
    // Guard 1: patient name


    // Guard 2: age range


    // Guard 3: contact number


    // Guard 4: valid specialization


    // Guard 5: valid slot


    // Guard 6: child patient specialization restriction
    // Hint: if (age < 18 && specialization is not general or pediatrics)


    return "Appointment booked for " + patientName + " with " + specialization + " doctor";
}
```

**Test your solution with:**
```js
bookAppointment("Ali", 10, "cardiology", "morning", "0311");  // "Children can only book general or pediatrics"
bookAppointment("Ali", 10, "pediatrics", "morning", "0311");  // "Appointment booked..."
bookAppointment("Ali", 35, "cardiology", "morning", "0311");  // "Appointment booked..."
bookAppointment("Ali", 35, "dentist", "morning", "0311");     // "Invalid specialization"
```

---

## Challenge 10 — Bank Account Transfer (Full System)

**Context:** An internet banking system processes fund transfers.

**Requirements:**
- Sender account number must not be empty
- Receiver account number must not be empty
- Sender and receiver account numbers must NOT be the same — you cannot transfer money to yourself
- Transfer amount must be greater than 0
- Transfer amount must not exceed Rs. 500,000 per transaction
- Transfer amount must be in whole rupees only — no paisas allowed. Hint: `amount % 1 !== 0` is true when a number has a decimal part. `500.50 % 1` gives `0.5`. `500 % 1` gives `0`.
- Transfer type must be "ibft" or "raast"
- Remarks field can be empty, but if it is filled, it must not exceed 100 characters

**The remarks rule is interesting.** The remarks field is optional — an empty remarks is fine. But if someone does provide a remark, it cannot be too long. Write this as a guard that only activates when remarks is not empty.

```js
function transferFunds(senderAccount, receiverAccount, amount, transferType, remarks) {
    // Guard 1: sender account


    // Guard 2: receiver account


    // Guard 3: same account check


    // Guard 4: amount must be positive


    // Guard 5: amount limit


    // Guard 6: whole rupees only


    // Guard 7: transfer type


    // Guard 8: remarks length (only if remarks is not empty)


    return "Rs. " + amount + " transferred from " + senderAccount + " to " + receiverAccount + " via " + transferType;
}
```

**Test your solution with:**
```js
transferFunds("", "ACC002", 1000, "raast", "");              // "Sender account is required"
transferFunds("ACC001", "ACC001", 1000, "raast", "");        // "Sender and receiver cannot be the same"
transferFunds("ACC001", "ACC002", 500.50, "raast", "");      // "Amount must be in whole rupees only"
transferFunds("ACC001", "ACC002", 1000, "wire", "");         // "Transfer type must be ibft or raast"
transferFunds("ACC001", "ACC002", 1000, "raast", "a".repeat(101)); // "Remarks cannot exceed 100 characters"
transferFunds("ACC001", "ACC002", 1000, "raast", "Rent payment"); // "Rs. 1000 transferred..."
```

---

---

# Answers

Read the answers only after you have attempted each challenge.

---

## Answer 1 — CNIC Validator

```js
function validateCNIC(cnic) {
    if (cnic === "") return "CNIC cannot be empty";
    if (cnic.length !== 13) return "CNIC must be exactly 13 digits";
    if (isNaN(cnic)) return "CNIC must contain digits only";

    return "CNIC is valid: " + cnic;
}
```

---

## Answer 2 — University GPA System

```js
function checkScholarship(studentName, cgpa, semester) {
    if (studentName === "") return "Student name is required";
    if (cgpa < 0 || cgpa > 4.0) return "CGPA must be between 0.0 and 4.0";
    if (semester < 1 || semester > 8) return "Semester must be between 1 and 8";

    if (cgpa >= 3.5) return studentName + " is eligible for scholarship";

    return studentName + " is not eligible — CGPA below 3.5";
}
```

---

## Answer 3 — Online Food Order

```js
function placeOrder(customerName, phone, address, amount, paymentMethod) {
    if (customerName === "") return "Customer name is required";
    if (phone === "") return "Phone number is required";
    if (address === "") return "Delivery address is required";
    if (amount <= 0) return "Order amount must be greater than zero";
    if (amount > 50000) return "Order amount cannot exceed Rs. 50,000";
    if (paymentMethod !== "cash" && paymentMethod !== "easypaisa" && paymentMethod !== "jazzcash") {
        return "Invalid payment method — use cash, easypaisa, or jazzcash";
    }

    return "Order confirmed for " + custome

## Answer 2 — University GPA System

```js
function checkScholarship(studentName, cgpa, semester) {
    if (studentName === "") return "Student name is required";
    if (cgpa < 0 || cgpa > 4.0) return "CGPA must be between 0.0 and 4.0";
    if (semester < 1 || semester > 8) return "Semester must be between 1 and 8";

    if (cgpa >= 3.5) return studentName + " is eligible for scholarship";

    return studentName + " is not eligible — CGPA below 3.5";
}rName + " — Payment via " + paymentMethod;
}
```

---


## Answer 2 — University GPA System

```js
function checkScholarship(studentName, cgpa, semester) {
    if (studentName === "") return "Student name is required";
    if (cgpa < 0 || cgpa > 4.0) return "CGPA must be between 0.0 and 4.0";
    if (semester < 1 || semester > 8) return "Semester must be between 1 and 8";

    if (cgpa >= 3.5) return studentName + " is eligible for scholarship";

    return studentName + " is not eligible — CGPA below 3.5";
}
## Answer 4 — Salary Slip Generator

```js
function generateSalarySlip(employeeName, employeeId, basicSalary, bonusPercent, department) {
    if (employeeName === "") return "Employee name is required";
    if (employeeId === "") return "Employee ID is required";
    if (basicSalary < 25000 || basicSalary > 500000) return "Basic salary must be between Rs. 25,000 and Rs. 500,000";
    if (bonusPercent < 0 || bonusPercent > 50) return "Bonus percentage must be between 0 and 50";
    if (department !== "engineering" && department !== "marketing" && department !== "sales" && department !== "hr") {
        return "Invalid department";
    }

    let bonus = (basicSalary * bonusPercent) / 100;
    let total = basicSalary + bonus;

    return "Salary slip for " + employeeName + " | Total: Rs. " + total;
}
```

---

## Answer 5 — Property Listing

```js
function listProperty(ownerName, city, sizeInMarla, price, listingType, propertyType) {
    if (ownerName === "") return "Owner name is required";
    if (city === "") return "City is required";
    if (sizeInMarla < 3 || sizeInMarla > 500) return "Property size must be between 3 and 500 Marla";
    if (price <= 0) return "Price must be greater than zero";
    if (listingType !== "rent" && listingType !== "sale") return "Listing type must be rent or sale";
    if (propertyType !== "house" && propertyType !== "apartment" && propertyType !== "plot" && propertyType !== "commercial") {
        return "Invalid property type";
    }

    return "Property listed in " + city + " by " + ownerName;
}
```

---


## Answer 2 — University GPA System

```js
function checkScholarship(studentName, cgpa, semester) {
    if (studentName === "") return "Student name is required";
    if (cgpa < 0 || cgpa > 4.0) return "CGPA must be between 0.0 and 4.0";
    if (semester < 1 || semester > 8) return "Semester must be between 1 and 8";

    if (cgpa >= 3.5) return studentName + " is eligible for scholarship";

    return studentName + " is not eligible — CGPA below 3.5";
}
## Answer 6 — Exam Registration

```js
function registerForExam(studentName, rollNumber, age, previousPercentage, examType, feePaid) {
    if (studentName === "") return "Student name is required";
    if (rollNumber === "") return "Roll number is required";
    if (age < 14 || age > 25) return "Age must be between 14 and 25";
    if (previousPercentage < 33 || previousPercentage > 100) return "Previous percentage must be between 33 and 100";
    if (examType !== "matric" && examType !== "intermediate") return "Exam type must be matric or intermediate";
    if (!feePaid) return "Fee not paid — registration incomplete";

    return rollNumber + " — " + studentName + " registered for " + examType + " exam";
}
```

---

## Answer 7 — Password Strength Checker

```js
function registerUser(username, password, confirmPassword) {
    if (username === "") return "Username is required";
    if (password === "") return "Password is required";
    if (password.length < 8) return "Password must be at least 8 characters";
    if (password.length > 32) return "Password must not exceed 32 characters";
    if (password !== confirmPassword) return "Passwords do not match";
    if (password === username) return "Password cannot be the same as your username";

    return "Account created successfully for: " + username;
}
```

Note: the order here matters. You check length before checking if passwords match, because there is no point comparing them if the password itself is invalid. Each guard narrows down the problem one step at a time.

For `registerUser("Ali", "Ali", "Ali")` — the password is 3 characters, so the length guard catches it first before we even reach the username-match guard.

---

## Answer 8 — Flight Seat Booking

```js
function bookFlight(passengerName, idNumber, age, seatClass, numberOfBags) {
    if (passengerName === "") return "Passenger name is required";
    if (idNumber === "") return "ID number is required";
    if (age < 2 || age > 120) return "Age must be between 2 and 120";
    if (seatClass !== "economy" && seatClass !== "business") return "Seat class must be economy or business";

    if (seatClass === "economy" && (numberOfBags < 0 || numberOfBags > 2)) {
        return "Economy class allows max 2 bags";
    }

    if (seatClass === "business" && (numberOfBags < 0 || numberOfBags > 4)) {
        return "Business class allows max 4 bags";
    }

    return "Flight booked for " + passengerName + " | Class: " + seatClass + " | Bags: " + numberOfBags;
}
```

This is a conditional guard — a guard that only activates under a specific context. The bag rule is different depending on the class. You first confirm the class is valid, and then apply the class-specific bag rule.

---

## Answer 9 — Medical Appointment System

```js
function bookAppointment(patientName, age, specialization, slot, contactNumber) {
    if (patientName === "") return "Patient name is required";
    if (age < 0 || age > 120) return "Age must be between 0 and 120";
    if (contactNumber === "") return "Contact number is required";

    if (specialization !== "general" && specialization !== "cardiology" && specialization !== "orthopedic" && specialization !== "neurology" && specialization !== "pediatrics") {
        return "Invalid specialization";
    }

    if (slot !== "morning" && slot !== "afternoon" && slot !== "evening") {
        return "Slot must be morning, afternoon, or evening";
    }

    if (age < 18 && specialization !== "general" && specialization !== "pediatrics") {
        return "Patients under 18 can only book general or pediatrics";
    }

    return "Appointment booked for " + patientName + " with " + specialization + " doctor";
}
```

The child-specialization guard is placed after we already know the specialization is valid. That order is intentional. If you placed it before the specialization check, you would be running a guard on a value that might not even be a legal specialization yet.

---

## Answer 10 — Bank Transfer

```js
function transferFunds(senderAccount, receiverAccount, amount, transferType, remarks) {
    if (senderAccount === "") return "Sender account is required";
    if (receiverAccount === "") return "Receiver account is required";
    if (senderAccount === receiverAccount) return "Sender and receiver accounts cannot be the same";
    if (amount <= 0) return "Transfer amount must be greater than zero";
    if (amount > 500000) return "Transfer amount cannot exceed Rs. 500,000";
    if (amount % 1 !== 0) return "Amount must be in whole rupees — no paisas allowed";
    if (transferType !== "ibft" && transferType !== "raast") return "Transfer type must be ibft or raast";
    if (remarks !== "" && remarks.length > 100) return "Remarks cannot exceed 100 characters";

    return "Rs. " + amount + " transferred from " + senderAccount + " to " + receiverAccount + " via " + transferType;
}
```

The remarks guard is an optional-field guard. The pattern is: `if (field is not empty AND field fails the rule)`. This pattern appears constantly in real applications — fields that are not required, but if provided, must follow a rule.

---

## What You Practiced Across These 10 Challenges

| Concept | Challenges |
|---|---|
| Single range check | 1, 2, 4, 6 |
| Two range checks in one function | 2, 6, 8 |
| AND to OR flip (both fields required) | 3, 4, 5, 10 |
| OR to AND flip (allowed values list) | 3, 4, 5, 6, 9 |
| Conditional guard (guard inside a condition) | 8, 9 |
| Same-value comparison between two parameters | 10 |
| Optional field with a rule | 10 |
| Boolean guard | 6 |
| Modulo / decimal check | 10 |
| Order of guards matters | 7, 9 |