### Challenge — Employee Profile System (Spread + `this`)

Create an object called `employee` with:

- `name`
- `department`
- `salary`

Add **two methods**:

1. `getInfoRegular` → regular function
2. `getInfoArrow` → arrow function

Both should try to return:

```
Ali works in IT department
```

---

Then:

1. Call both methods and observe the output.
2. Explain why one works and the other doesn't.
3. Create a copy of the employee using the spread operator.
4. Change the copied employee's:
    - name
    - salary
5. Verify that the original employee remains unchanged.
6. Add a new property to the copied object:

```
experience: 3
```

using the spread operator during copying.

---

### Questions to Answer

- What does `this` refer to inside the regular function?
- What does `this` refer to inside the arrow function?
- Why is the spread operator called a "shallow copy"?
- Did changing the copied object's `name` affect the original object?

This challenge combines **object methods**, **regular vs arrow function `this`**, and **spread operator copying** in one practical scenario.

---

### Challenge 1 — Online Shopping Checkout
- skip

Create an arrow function `checkout`.

Parameters:

- itemPrice
- quantity
- shippingFee

Calculate:

```
subtotalfinal total
```

Return the final amount.

---

### Challenge 2 — Employee Salary Calculator

Create an arrow function `calculateSalary`.

Parameters:

- basicSalary
- bonus

Rules:

- Add salary and bonus
- Deduct 5% tax
- Return final salary

---

### Challenge 3 — Student Attendance Check

Create an arrow function `checkAttendance`.

Parameters:

- totalClasses
- attendedClasses

Calculate attendance percentage.

Rules:

- 75% or above → "Allowed in Exam"
- Below 75% → "Short Attendance"

Return the result.

---

### Challenge 4 — Electricity Bill
- skip

Create an arrow function `generateBill`.

Parameters:

- unitsConsumed

Rules:

- Each unit costs Rs. 18
- Add 17% tax
- Return final bill amount

---

### Challenge 5 — User Registration
- skip
Create an arrow function `registerUser`.

Parameters:

- name
- age
- email

Return a user object containing:

```
idnameageemailisAdult
```

`isAdult` should be true if age is 18 or more.

---

### Challenge 6 — Loan Eligibility Checker

Create an arrow function `checkLoanEligibility`.

Parameters:

- monthlyIncome
- age

Rules:

- Age must be at least 21
- Income must be at least 50,000

Return:

```
Eligible
```

or

```
Not Eligible
```

---

### Challenge 7 — Restaurant Order
- if have time
Create an arrow function `calculateOrder`.

Parameters:

- burgerPrice
- burgerQuantity
- drinkPrice
- drinkQuantity

Calculate:

```
food totaldrink totalgrand total
```

Return the grand total.

---

### Challenge 8 — Mobile Package Subscription
- skip
Create an arrow function `subscribePackage`.

Parameters:

- packageName
- months

Rules:

|Package|Monthly Price|
|---|---|
|Basic|500|
|Standard|1000|
|Premium|1500|

Calculate total cost and return an object containing:

```
packageNamemonthstotalCost
```

---

### Challenge 9 — Login Verification
- if have time
Create an arrow function `login`.

Parameters:

- enteredEmail
- enteredPassword

Inside the function, create correct credentials:

```
admin@gmail.com12345
```

Return:

```
Login Successful
```

or

```
Invalid Credentials
```

---

### Challenge 10 — Student Admission System
- skip
Create an arrow function `admitStudent`.

Parameters:

- name
- marks
- program

Rules:

- Marks must be at least 60
- If eligible, return a student object
- Otherwise return:

```
Admission Rejected
```

---