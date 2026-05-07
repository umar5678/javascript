# Guard Clauses — Complete Student Notes
### JavaScript Fundamentals Series

---

## What is a Guard Clause?

A guard clause is an early `return` statement at the top of a function that checks if something is **wrong**, and if it is, it **exits immediately** before any real work is done.

The idea is simple: before you do anything useful in a function, you stand at the entrance and check — *is this input even valid? Is this situation even allowed?* If not, you leave right away. You do not go deeper into the function.

---

## The Mental Shift You Must Make

This is the part where most beginners get confused, and it is completely normal.

When you write an `if` statement normally, you are thinking:

> *"IF everything is correct, THEN do the work."*

Guard clauses make you think the opposite:

> *"IF something is wrong, THEN stop immediately."*

You are not looking for reasons to **continue**. You are looking for reasons to **stop**.

Let us see this with a simple example first.

**Normal if-else thinking (proceed if good):**
```js
function admitStudent(marks) {
    if (marks >= 60) {
        return "Student admitted";
    } else {
        return "Marks too low";
    }
}
```

**Guard clause thinking (stop if bad):**
```js
function admitStudent(marks) {
    if (marks < 60) return "Marks too low";  // guard: stop if bad

    return "Student admitted";  // only reaches here if marks are fine
}
```

Both produce the exact same result. The difference is in how you are **thinking about the problem**.

In guard clauses, you handle the failures **first**, and then at the very bottom of the function, you write the happy path — what happens when everything is fine.

---

## How to Write the Guard Condition

This is where students get stuck. You know what the **valid** condition looks like, but you need to write the **invalid** one.

The rule is simple: **flip everything.**

| Valid condition (what you want) | Guard condition (what stops you) |
|---|---|
| marks must be 60 or more | marks is less than 60 |
| age must be at least 18 | age is less than 18 |
| name must not be empty | name is empty |
| role must be "admin" | role is not "admin" |
| quantity must be more than 0 | quantity is 0 or less |

And in code, the operators flip like this:

| Valid operator | Guard operator |
|---|---|
| `>=` (greater or equal) | `<` (less than) |
| `<=` (less or equal) | `>` (greater than) |
| `>` (greater than) | `<=` (less or equal) |
| `<` (less than) | `>=` (greater or equal) |
| `===` (equals) | `!==` (not equals) |
| `!==` (not equals) | `===` (equals) |

---

## Part 1 — Single Condition Guards

These are the simplest. One check, one return.

---

### Example 1: Exam Result

**Requirement:** A student must score at least 40 marks to pass.

**Valid state:** `marks >= 40`
**Guard (invalid state):** `marks < 40`

```js
function checkResult(marks) {
    if (marks < 40) return "Fail — minimum 40 marks required";

    return "Pass — congratulations";
}

checkResult(35);  // "Fail — minimum 40 marks required"
checkResult(40);  // "Pass — congratulations"
checkResult(87);  // "Pass — congratulations"
```

---

### Example 2: Mobile Number Length

**Requirement:** A Pakistani mobile number must be exactly 11 digits.

**Valid state:** `number.length === 11`
**Guard (invalid state):** `number.length !== 11`

```js
function validateMobileNumber(number) {
    if (number.length !== 11) return "Invalid — mobile number must be 11 digits";

    return "Mobile number is valid";
}

validateMobileNumber("0312345678");    // "Invalid — mobile number must be 11 digits" (10 digits)
validateMobileNumber("03123456789");   // "Mobile number is valid" (11 digits)
```

---

### Example 3: Username Check

**Requirement:** Username must not be empty.

**Valid state:** `username !== ""`
**Guard (invalid state):** `username === ""`

```js
function createAccount(username) {
    if (username === "") return "Username cannot be empty";

    return "Account created for: " + username;
}

createAccount("");        // "Username cannot be empty"
createAccount("Ali123");  // "Account created for: Ali123"
```

---

## Part 2 — Range Checks (The Most Important Section)

A range means a value must stay **between two numbers** — not too low, not too high.

This is where most students make mistakes, so read this section carefully.

---

### How to Think About a Range

The valid range for exam marks might be: *"marks must be between 0 and 100."*

Write it as code: `marks >= 0 && marks <= 100`

Now ask yourself: **when is marks OUTSIDE this range?**

It is outside when:
- marks went too low (below 0), OR
- marks went too high (above 100)

```js
if (marks < 0 || marks > 100) return "Invalid marks";
```

Notice the word **OR**. This is critical and confusing for many students. Let us explain it fully.

---

### Why is a Range Violation Always OR?

Imagine marks = 150. Is it less than 0? No. Is it greater than 100? Yes. So we reject it.
Imagine marks = -5. Is it less than 0? Yes. So we reject it.

We reject a value if **either** boundary is violated. That is why it is OR.

Now, could you ever write this?

```js
if (marks < 0 && marks > 100) return "Invalid";  // WRONG
```

Think about it. Can a number be less than 0 AND greater than 100 at the same time? No. That is mathematically impossible. No number exists in that situation. This condition can never be true, which means your guard would **never run**, and invalid values would pass through. This is a silent bug — no error, just wrong behavior.

**The rule for ranges: always use OR in the guard.**

---

### Example 4: Temperature Sensor

**Requirement:** A sensor records temperatures in Pakistan. Valid range is -10°C to 55°C. Anything outside is a sensor error.

```js
function recordTemperature(temp) {
    if (temp < -10 || temp > 55) return "Error — temperature reading is out of valid range";

    return "Temperature recorded: " + temp + "°C";
}

recordTemperature(-15);  // "Error — temperature reading is out of valid range"
recordTemperature(0);    // "Temperature recorded: 0°C"
recordTemperature(42);   // "Temperature recorded: 42°C"
recordTemperature(60);   // "Error — temperature reading is out of valid range"
```

---

### Example 5: Shop Discount Percentage

**Requirement:** A discount must be between 1% and 70%. A discount of 0 makes no sense, and over 70% is not allowed by store policy.

```js
function applyDiscount(discountPercent) {
    if (discountPercent < 1 || discountPercent > 70) return "Invalid discount percentage";

    return "Discount of " + discountPercent + "% applied";
}

applyDiscount(0);    // "Invalid discount percentage"
applyDiscount(10);   // "Discount of 10% applied"
applyDiscount(75);   // "Invalid discount percentage"
```

---

### Example 6: University Admission Marks

**Requirement:** Marks in the admission test must be between 0 and 200.

```js
function processAdmission(marks) {
    if (marks < 0 || marks > 200) return "Invalid marks — must be between 0 and 200";

    if (marks < 120) return "Not eligible — minimum 120 marks required for admission";

    return "Eligible for admission";
}

processAdmission(-5);   // "Invalid marks — must be between 0 and 200"
processAdmission(90);   // "Not eligible — minimum 120 marks required"
processAdmission(155);  // "Eligible for admission"
processAdmission(210);  // "Invalid marks — must be between 0 and 200"
```

Notice here we have **two separate guard clauses**, each catching a different problem. The first checks if the input is even a real number. The second checks if the student qualifies. They are separate concerns and should be separate guards.

---

## Part 3 — Multiple Conditions (The Hardest Part)

When you have two or more conditions, you must also flip the logical connector — the `&&` and `||` between them.

This rule is called **De Morgan's Law**. You do not need to remember the name, but you must understand the idea.

---

### The Plain English Rule

**Rule 1:** If the valid state requires ALL conditions to be true (AND), then the guard triggers if ANY condition is false (OR).

**Rule 2:** If the valid state requires ANY condition to be true (OR), then the guard triggers when ALL conditions are false (AND).

In short:
- Valid uses `&&` → Guard uses `||`
- Valid uses `||` → Guard uses `&&`

---

### Why Does AND Become OR?

Imagine two fields: first name and last name. Both must be filled.

Valid: `firstName !== "" && lastName !== ""`

Now when is this invalid? When first name is empty? Yes, stop. When last name is empty? Yes, stop.

You stop when **either one** fails. Not when both fail at the same time.

```js
if (firstName === "" || lastName === "") return "Both name fields are required";
```

If you wrote `&&` in the guard, you would only stop when **both** are empty at the same time. That means a form with firstName filled but lastName empty would pass through — which is wrong.

---

### Example 7: Shop Order Form

**Requirement:** To place an order, the customer must provide a name AND a phone number.

```js
function placeOrder(customerName, phoneNumber) {
    if (customerName === "" || phoneNumber === "") return "Both name and phone number are required";

    return "Order placed for: " + customerName;
}

placeOrder("", "");              // "Both name and phone number are required"
placeOrder("Ahmed", "");         // "Both name and phone number are required"
placeOrder("", "03001234567");   // "Both name and phone number are required"
placeOrder("Ahmed", "03001234567"); // "Order placed for: Ahmed"
```

All three failure cases are caught by a single guard with OR.

---

### Example 8: Login Check

**Requirement:** Both username and password must be non-empty to attempt login.

```js
function login(username, password) {
    if (username === "" || password === "") return "Username and password are both required";

    return "Logging in as: " + username;
}
```

---

### Why Does OR Become AND?

Now consider: valid status must be "pending" OR "processing". Either one is acceptable.

Valid: `status === "pending" || status === "processing"`

When is this invalid? When it is not "pending" AND also not "processing". Both conditions must fail simultaneously for us to reject.

```js
if (status !== "pending" && status !== "processing") return "Invalid status";
```

If you wrote `||` in the guard, it would translate to: *"reject if it is not pending OR not processing."* But "processing" is not pending, so it would get rejected. You would reject valid values.

---

### Example 9: Order Status System

**Requirement:** A function should only process orders that are in "pending" or "confirmed" status.

```js
function processOrder(orderId, status) {
    if (status !== "pending" && status !== "confirmed") return "Cannot process — order status is " + status;

    return "Processing order " + orderId;
}

processOrder("001", "pending");    // "Processing order 001"
processOrder("002", "confirmed");  // "Processing order 002"
processOrder("003", "cancelled");  // "Cannot process — order status is cancelled"
processOrder("004", "delivered");  // "Cannot process — order status is delivered"
```

---

### Example 10: Blood Group Validation

**Requirement:** Blood group must be one of the valid types: A, B, AB, or O.

```js
function registerBloodGroup(group) {
    if (group !== "A" && group !== "B" && group !== "AB" && group !== "O") {
        return "Invalid blood group entered";
    }

    return "Blood group " + group + " regrder placed for: Ahmed"istered";
}

registerBloodGroup("A");    // "Blood group A registered"
registerBloodGroup("AB");   // "Blood group AB registered"
registerBloodGroup("X");    // "Invalid blood group entered"
registerBloodGroup("a");    // "Invalid blood group entered" — case matters
```

---
rder placed for: Ahmed"
## Part 4 — Combining Multiple Guards Together

Real functions usually have several things to check. The pattern is always the same: write each guard on its own line, each handling one specific concern.

---

### Example 11: Student Registration System

**Requirements:**
- Name must not be emptyrder placed for: Ahmed"
- Age must be between 15 and 30
- Marks must be between 0 and 100
- Grade must be "morning" or "evening"

```js
function registerStudent(name, age, marks, grade) {

    // Guard 1: name check
    if (name === "") return "Name is required";

    // Guard 2: age rangerder placed for: Ahmed"
    if (age < 15 || age > 30) return "Age must be between 15 and 30";

    // Guard 3: marks range
    if (marks < 0 || marks > 100) return "Marks must be between 0 and 100";

    // Guard 4: allowed values
    if (grade !== "morning" && grade !== "evening") return "Grade must be morning or evening";

    // All guards passed — safe to proceed
    return "Student " + name + " registered successfully";
}rder placed for: Ahmed"
```

**Testing it:**
```js
registerStudent("", 20, 85, "morning");          // "Name is required"
registerStudent("Sara", 12, 85, "morning");      // "Age must be between 15 and 30"
registerStudent("Sara", 20, 110, "morning");     // "Marks must be between 0 and 100"
registerStudent("Sara", 20, 85, "afternoon");    // "Grade must be morning or evening"
registerStudent("Sara", 20, 85, "morning");     
 // "Student Sara registered successfully"
```

Each guard is independent. The function exits at the first failure it finds. Once all four guards pass, the function reaches the success line.

---

### Example 12: Electricity Bill Calculator

**Requirements:**
- Consumer ID must not be empty
- Units consumed must be 0 or more (cannot be negative)
- Units consumed must not exceed 9999 (meter limit)

```js
function calculateBill(consumerId, units) {

    if (consumerId === "") return "Consumer ID is required";

    if (units < 0 || units > 9999) return "Invalid units — must be between 0 and 9999";

    let amount = units * 25;  // Rs. 25 per unit (simplified)
    return "Bill for " + consumerId + ": Rs. " + amount;
}

calculateBill("", 200);        // "Consumer ID is required"
calculateBill("LHR-001", -5);  // "Invalid units — must be between 0 and 9999"
calculateBill("LHR-001", 300); // "Bill for LHR-001: Rs. 7500"
```

---

### Example 13: Bank Transfer

**Requirements:**
- Sender account must not be empty
- Receiver account must not be empty
- Amount must be greater than 0
- Amount must not exceed 100,000 (per transaction limit)

```js
function transferMoney(senderAccount, receiverAccount, amount) {

    if (senderAccount === "") return "Sender account is required";

    if (receiverAccount === "") return "Receiver account is required";

    if (amount <= 0) return "Amount must be greater than zero";

    if (amount > 100000) return "Amount exceeds per-transaction limit of Rs. 100,000";

    return "Rs. " + amount + " transferred from " + senderAccount + " to " + receiverAccount;
}
```

---

## Part 5 — Comparing Strings

String comparison in JavaScript is straightforward but has one important rule: it is **case-sensitive**.

`"Admin" !== "admin"` — JavaScript sees these as different strings.

When validating strings like roles, statuses, or codes, make sure you decide on one standard (all lowercase, all uppercase, or title case) and stick to it.

---

### Example 14: User Role Check

```js
function accessAdminPanel(role) {
    if (role !== "admin") return "Access denied — admin role required";

    return "Welcome to admin panel";
}

accessAdminPanel("admin");  // "Welcome to admin panel"
accessAdminPanel("Admin");  // "Access denied" — capital A is different
accessAdminPanel("user");   // "Access denied"
```

To handle case-insensitivity, you can convert to lowercase first:

```js
function accessAdminPanel(role) {
    if (role.toLowerCase() !== "admin") return "Access denied";

    return "Welcome to admin panel";
}

accessAdminPanel("Admin");  // "Welcome to admin panel" — now works
accessAdminPanel("ADMIN");  // "Welcome to admin panel" — now works
```

---

### Example 15: String Length Range

Strings can also be checked with ranges. A password, for example, must be between 8 and 20 characters.

```js
function setPassword(password) {
    if (password.length < 8 || password.length > 20) {
        return "Password must be between 8 and 20 characters";
    }

    return "Password set successfully";
}

setPassword("abc");                    // too short
setPassword("mypassword123");          // valid
setPassword("averylongpasswordthatistoolong");  // too long
```

---

## Quick Reference — The Complete Flip Table

```
VALID condition                          GUARD condition
────────────────────────────────────────────────────────────────────
x >= min                            →    x < min
x <= max                            →    x > max
x > 0                               →    x <= 0
min <= x <= max (range)             →    x < min  ||  x > max
a !== ""                            →    a === ""
a === "value"                       →    a !== "value"
a !== "" && b !== ""  (both filled) →    a === "" || b === ""
a === "x" || a === "y" (either ok)  →    a !== "x" && a !== "y"
────────────────────────────────────────────────────────────────────
AND in valid  →  OR in guard
OR in valid   →  AND in guard
Range violation is always OR
```

---

## Common Mistakes to Avoid

**Mistake 1: Using AND in a range guard**
```js
// WRONG
if (marks < 0 && marks > 100) return "Invalid"; // never runs

// CORRECT
if (marks < 0 || marks > 100) return "Invalid";
```

**Mistake 2: Using OR when checking multiple required fields**
```js
// WRONG — only stops when BOTH are empty
if (name === "" && phone === "") return "Fill both fields";

// CORRECT — stops when EITHER is empty
if (name === "" || phone === "") return "Fill both fields";
```

**Mistake 3: Forgetting that string comparison is case-sensitive**
```js
// This will fail for "Admin", "ADMIN", etc.
if (role !== "admin") return "Access denied";

// Safer version
if (role.toLowerCase() !== "admin") return "Access denied";
```

**Mistake 4: Putting the happy path before all guards**
```js
// WRONG structure
function process(value) {
    return "Done";     // this runs even for invalid values
    if (value < 0) return "Invalid";
}

// CORRECT structure — guards first, happy path last
function process(value) {
    if (value < 0) return "Invalid";

    return "Done";
}
```

---

## Practice Exercises

For each exercise, write the guard clauses only. The happy path is already provided.

---

**Exercise 1**
Valid: Product price must be greater than 0 and not more than 500,000.
```js
function addProduct(name, price) {
    // your guard here

    return "Product added: " + name + " at Rs. " + price;
}
```

---

**Exercise 2**
Valid: A student's CGPA must be between 0.0 and 4.0. Their name must not be empty.
```js
function issueTranscript(studentName, cgpa) {
    // your guards here

    return "Transcript issued for " + studentName + " — CGPA: " + cgpa;
}
```

---

**Exercise 3**
Valid: A delivery can only be scheduled if status is "ready" or "packed".
```js
function scheduleDelivery(orderId, status) {
    // your guard here

    return "Delivery scheduled for order: " + orderId;
}
```

---

**Exercise 4**
Valid: To book a seat, passenger name must not be empty, age must be at least 1 and at most 120, and seat class must be "economy" or "business".
```js
function bookSeat(passengerName, age, seatClass) {
    // your guards here

    return "Seat booked for " + passengerName;
}
```

---

*End of Notes*  