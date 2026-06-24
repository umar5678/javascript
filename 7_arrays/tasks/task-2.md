# JavaScript Array Methods — Home Assignment

### forEach · map · filter · reduce · find · findIndex · some · every

> **Rules:** Use Node.js. Arrow functions only. Do not use regular `for` or `while` loops for any of these tasks. Submit a single file: `homework.js` with all answers clearly labelled in comments.

---

## The Datasets

Paste these at the top of your `homework.js` file.

```js
// ── DATASET 1: Daraz Orders ────────────────────────────────────────────
const darazOrders = [
  { id: 101, customer: "Bilal Chaudhry",  city: "Lahore",    product: "Samsung Earbuds",  price: 4500, qty: 1, status: "delivered", category: "electronics" },
  { id: 102, customer: "Ayesha Siddiqui", city: "Karachi",   product: "Lawn Suit",        price: 2800, qty: 2, status: "pending",   category: "clothing"    },
  { id: 103, customer: "Usman Tariq",     city: "Islamabad", product: "Haier Blender",    price: 3200, qty: 1, status: "delivered", category: "appliances"  },
  { id: 104, customer: "Sana Mirza",      city: "Lahore",    product: "Skin Care Kit",    price: 1800, qty: 3, status: "cancelled", category: "beauty"      },
  { id: 105, customer: "Hamza Malik",     city: "Peshawar",  product: "Nike Joggers",     price: 3900, qty: 1, status: "delivered", category: "clothing"    },
  { id: 106, customer: "Zara Qadir",      city: "Karachi",   product: "Oral-B Brush",     price: 950,  qty: 2, status: "pending",   category: "health"      },
  { id: 107, customer: "Faisal Rehman",   city: "Lahore",    product: "Anker Power Bank", price: 5200, qty: 1, status: "delivered", category: "electronics" },
  { id: 108, customer: "Nadia Hassan",    city: "Multan",    product: "Pressure Cooker",  price: 4100, qty: 1, status: "pending",   category: "appliances"  },
  { id: 109, customer: "Talha Iqbal",     city: "Islamabad", product: "Puma Backpack",    price: 6700, qty: 1, status: "delivered", category: "bags"        },
  { id: 110, customer: "Mehwish Atif",    city: "Karachi",   product: "Lawn Suit",        price: 2800, qty: 1, status: "cancelled", category: "clothing"    },
];

// ── DATASET 2: FAST University Students ───────────────────────────────
const students = [
  { id: 1, name: "Ali Raza",       city: "Lahore",    semester: 6, cgpa: 3.7, marks: [88, 91, 85, 92, 78], feePaid: true,  major: "CS" },
  { id: 2, name: "Maham Yousaf",   city: "Karachi",   semester: 4, cgpa: 2.9, marks: [65, 70, 60, 72, 68], feePaid: false, major: "SE" },
  { id: 3, name: "Saad Anwar",     city: "Islamabad", semester: 8, cgpa: 3.9, marks: [95, 98, 92, 97, 96], feePaid: true,  major: "CS" },
  { id: 4, name: "Hira Baig",      city: "Lahore",    semester: 2, cgpa: 2.4, marks: [55, 50, 60, 48, 58], feePaid: true,  major: "AI" },
  { id: 5, name: "Omer Farooq",    city: "Multan",    semester: 6, cgpa: 3.2, marks: [75, 80, 78, 82, 77], feePaid: false, major: "CS" },
  { id: 6, name: "Alishba Noor",   city: "Karachi",   semester: 4, cgpa: 3.5, marks: [85, 88, 82, 90, 86], feePaid: true,  major: "SE" },
  { id: 7, name: "Zain ul Abidin", city: "Islamabad", semester: 2, cgpa: 1.8, marks: [40, 45, 38, 52, 42], feePaid: false, major: "AI" },
  { id: 8, name: "Rabia Saleem",   city: "Lahore",    semester: 8, cgpa: 3.1, marks: [72, 78, 74, 80, 76], feePaid: true,  major: "CS" },
];

// ── DATASET 3: SaaS Subscription Users ────────────────────────────────
// Imagine this is the `subscriptions` collection in your MongoDB database.
const subscriptions = [
  { id: 1,  user: "Bilal Chaudhry",  email: "bilal@gmail.com",   plan: "pro",        pricePerMonth: 2999, status: "active",    autoRenew: true,  country: "Pakistan" },
  { id: 2,  user: "Ayesha Siddiqui", email: "ayesha@gmail.com",  plan: "basic",      pricePerMonth: 999,  status: "active",    autoRenew: true,  country: "Pakistan" },
  { id: 3,  user: "Usman Tariq",     email: "usman@gmail.com",   plan: "enterprise", pricePerMonth: 9999, status: "active",    autoRenew: true,  country: "UAE"      },
  { id: 4,  user: "Sana Mirza",      email: "sana@gmail.com",    plan: "free",       pricePerMonth: 0,    status: "active",    autoRenew: false, country: "Pakistan" },
  { id: 5,  user: "Hamza Malik",     email: "hamza@gmail.com",   plan: "pro",        pricePerMonth: 2999, status: "cancelled", autoRenew: false, country: "UK"       },
  { id: 6,  user: "Zara Qadir",      email: "zara@gmail.com",    plan: "basic",      pricePerMonth: 999,  status: "trial",     autoRenew: false, country: "Pakistan" },
  { id: 7,  user: "Faisal Rehman",   email: "faisal@gmail.com",  plan: "enterprise", pricePerMonth: 9999, status: "active",    autoRenew: true,  country: "Pakistan" },
  { id: 8,  user: "Nadia Hassan",    email: "nadia@gmail.com",   plan: "pro",        pricePerMonth: 2999, status: "trial",     autoRenew: false, country: "UAE"      },
  { id: 9,  user: "Talha Iqbal",     email: "talha@gmail.com",   plan: "basic",      pricePerMonth: 999,  status: "cancelled", autoRenew: false, country: "Pakistan" },
  { id: 10, user: "Mehwish Atif",    email: "mehwish@gmail.com", plan: "free",       pricePerMonth: 0,    status: "active",    autoRenew: false, country: "UK"       },
];
```

---

## Task 1 — `forEach`

---

### Task 1.1 — Print Daraz delivery slips

**Scenario:** A warehouse worker needs a printed delivery slip for each order before packing. Each slip should show the customer name, city, and total they will pay (price × qty).

**What you need to do in plain English:** Go through every order. For each one, print a line in this exact format:

```
Bilal Chaudhry | Lahore | Rs. 4500
Ayesha Siddiqui | Karachi | Rs. 5600
...
```

Note that Ayesha ordered qty 2, so her total is 2800 × 2 = 5600.

---

### Task 1.2 — Count students who have not paid their fee

**Scenario:** The accounts office needs a quick number: how many students still owe their semester fee, so they can send reminder SMS messages.

**What you need to do in plain English:** Go through all students. Keep a counter outside the loop. Every time you see `feePaid: false`, add 1 to the counter. After the loop, log the result.

**Expected output:** `Students with unpaid fee: 3`

---

### Task 1.3 — Build a user-to-plan lookup object

**Scenario:** Your backend receives hundreds of API requests per second, and each request includes a user email. You need to quickly look up that user's plan without searching the whole array every time. The solution is to pre-build a lookup object once at startup: `{ "bilal@gmail.com": "pro", "ayesha@gmail.com": "basic", ... }`.

**What you need to do in plain English:** Start with `const planLookup = {}`. Loop through `subscriptions`. For each subscription, add an entry where the key is the user's `email` and the value is their `plan`.

**Expected result:**

```js
{
  'bilal@gmail.com':   'pro',
  'ayesha@gmail.com':  'basic',
  'usman@gmail.com':   'enterprise',
  ...
}
```

> **Why this matters:** This is a real performance pattern. Instead of calling `.find()` inside a loop — which is O(n²) — you build a lookup map once and access it in O(1) time. You will use this in every backend you ever build.

---

## Task 2 — `map`

---

### Task 2.1 — Add a letter grade to each student

**Scenario:** The university system stores only numeric CGPA. The student portal needs to display a letter grade next to each student's name.

**What you need to do in plain English:** Use `map` to produce a new array where every student has all their original info plus a new `grade` field. Use this rule:

- CGPA ≥ 3.5 → `"A"`
- CGPA ≥ 3.0 → `"B"`
- CGPA ≥ 2.5 → `"C"`
- CGPA < 2.5 → `"D"`

**Expected result (first two items):**

```js
{ name: 'Ali Raza',     cgpa: 3.7, grade: 'A', ... }
{ name: 'Maham Yousaf', cgpa: 2.9, grade: 'C', ... }
```

---

### Task 2.2 — Add delivery charge to Daraz orders

**Scenario:** Daraz charges delivery based on city. Lahore and Karachi orders above Rs. 3000 get free delivery; everyone else pays Rs. 200 flat.

**What you need to do in plain English:** Use `map` to return a new array where each order has all its original fields plus a `deliveryCharge` field. Logic:

- If city is `"Lahore"` or `"Karachi"` AND `price * qty > 3000` → `deliveryCharge = 0`
- Otherwise → `deliveryCharge = 200`

---

### Task 2.3 — Format subscription renewal notification strings

**Scenario:** Your Node.js cron job runs every night and sends renewal reminder emails. It needs a plain array of message strings — one per active, auto-renewing user — to pass into the email sender function.

**What you need to do in plain English:** Use `map` on the `subscriptions` array to produce an array of strings in this format:

```
"Hi Bilal Chaudhry, your Pro plan will auto-renew for Rs.2999 next month."
"Hi Ayesha Siddiqui, your Basic plan will auto-renew for Rs.999 next month."
```

The plan name should be capitalized (Pro, not pro). Then `forEach` the result and log each string.

---

### Task 2.4 — Compute each student's total marks and percentage

**Scenario:** The marks sheet needs to show each student's total marks and percentage. Each student has 5 subjects each out of 100 (max total is 500).

**What you need to do in plain English:** Use `map` to produce a new array with just `name`, `total` (sum of the marks array), and `percentage` (rounded to 1 decimal place).

**Expected result (first item):**

```js
{ name: 'Ali Raza', total: 434, percentage: 86.8 }
```

---

### Task 2.5 — Sanitize subscription data for a public API response

**Scenario:** Your Express GET `/api/subscriptions` route should never expose internal fields like `email`, `autoRenew`, or `id` to the client. You only return what the frontend actually needs.

**What you need to do in plain English:** Use `map` to return a new array where each subscription only has: `user`, `plan`, `status`, and `country`. Everything else is stripped out.

**Expected result (first item):**

```js
{ user: 'Bilal Chaudhry', plan: 'pro', status: 'active', country: 'Pakistan' }
```

> **Why this matters:** This is called "field projection" or "response shaping." You do this in every Express route that returns data from a database.

---

## Task 3 — `filter`

---

### Task 3.1 — Get all active paying subscriptions

**Scenario:** The billing system runs at the start of each month and charges users. It should only process subscriptions that are `active` AND have a `pricePerMonth` greater than 0 — free plan users and trial users should not be charged.

**What you need to do in plain English:** Filter `subscriptions` where `status === "active"` AND `pricePerMonth > 0`.

**Expected:** Bilal (pro), Ayesha (basic), Usman (enterprise), Faisal (enterprise) — 4 users.

---

### Task 3.2 — Find Karachi students with a CGPA above 3.0

**Scenario:** A Karachi-based software house is offering internships only to high-performing local students. They want a filtered list to contact.

**What you need to do in plain English:** Filter `students` where `city === "Karachi"` AND `cgpa > 3.0`.

**Expected:** Alishba Noor (3.5).

---

### Task 3.3 — Daraz orders worth more than Rs. 5000 total

**Scenario:** The fraud detection system flags any order whose total value (price × qty) exceeds Rs. 5000 for a manual review before it is processed.

**What you need to do in plain English:** Filter `darazOrders` where `price * qty > 5000`. You compute the total inside the filter callback — there is no pre-existing `total` field.

**Expected:** Ayesha's Lawn Suit (Rs. 5600) and Talha's Backpack (Rs. 6700).

---

### Task 3.4 — Trial users who have not enabled auto-renew

**Scenario:** These are users most likely to churn — they are on trial and have not committed to auto-renewal. The growth team wants this list to send them a discount offer before the trial expires.

**What you need to do in plain English:** Filter `subscriptions` where `status === "trial"` AND `autoRenew === false`. Then map the result to return just `{ user, email, plan }`.

**Expected:**

```js
[
  { user: 'Zara Qadir',   email: 'zara@gmail.com',  plan: 'basic' },
  { user: 'Nadia Hassan', email: 'nadia@gmail.com',  plan: 'pro'   },
]
```

---

### Task 3.5 — Students at risk of academic probation

**Scenario:** Any student with a CGPA below 2.5 is placed on academic probation. The student affairs office needs this list urgently.

**What you need to do in plain English:** Filter students where `cgpa < 2.5`. Then map the result to return just `{ name, cgpa, major }`.

**Expected:**

```js
[
  { name: 'Hira Baig',      cgpa: 2.4, major: 'AI' },
  { name: 'Zain ul Abidin', cgpa: 1.8, major: 'AI' },
]
```

---

## Task 4 — `reduce`

---

### Task 4.1 — Calculate Monthly Recurring Revenue (MRR)

**Scenario:** MRR is the most important financial metric for any SaaS product. It is the total revenue you collect every month from active, paying subscribers. Free plan and trial users do not count.

**What you need to do in plain English:** First filter for subscriptions where `status === "active"` AND `pricePerMonth > 0`. Then reduce by summing `pricePerMonth` for each.

**Expected:** `2999 + 999 + 9999 + 9999 = Rs. 23,996`

---

### Task 4.2 — Count Daraz orders by status

**Scenario:** The operations dashboard shows a status summary card at the top of the page so managers can see the health of today's orders at a glance.

**What you need to do in plain English:** Use `reduce` with an accumulator starting as `{}`. For each order, increment `acc[order.status]`. If the key does not exist yet, initialize it to 1.

**Expected:**

```js
{ delivered: 4, pending: 3, cancelled: 2 }
```

> **Why this matters:** This pattern — counting occurrences by a key — appears constantly in backend analytics, dashboards, and report generation.

---

### Task 4.3 — Group subscriptions by plan

**Scenario:** The admin panel's sidebar shows a grouped view: click on "pro" and see all pro users, click on "enterprise" and see all enterprise users. Your API needs to return the data in that grouped shape.

**What you need to do in plain English:** Use `reduce` with an accumulator starting as `{}`. For each subscription, push it into `acc[subscription.plan]`, initializing the array first if the key does not exist.

**Expected shape:**

```js
{
  pro:        [ Bilal, Hamza, Nadia ],
  basic:      [ Ayesha, Zara, Talha ],
  enterprise: [ Usman, Faisal ],
  free:       [ Sana, Mehwish ],
}
```

---

### Task 4.4 — Find the student with the highest total marks

**Scenario:** The top-scoring student gets announced at the semester closing ceremony. Your code needs to find that student object automatically.

**What you need to do in plain English:** Use `reduce` where the accumulator starts as the first student. For each student, compare the sum of their `marks` array against the sum of the accumulator's `marks` array. Keep whichever is higher. Return the full student object.

**Expected:** Saad Anwar (total: 478).

---

### Task 4.5 — Total outstanding fee amount

**Scenario:** Each student's semester fee is `semester × 15000`. The finance office needs the total rupee amount currently unpaid across all students with `feePaid: false`.

**What you need to do in plain English:** Filter for `feePaid === false`. Then reduce by summing `student.semester * 15000` for each.

**Expected:**

- Maham: 4 × 15,000 = 60,000
- Omer: 6 × 15,000 = 90,000
- Zain: 2 × 15,000 = 30,000
- **Total: Rs. 180,000**

---

## Task 5 — `find` and `findIndex`

---

### Task 5.1 — Look up a subscription by user ID

**Scenario:** A support agent receives a ticket: "My account ID is 6, I cannot access Pro features." The agent's internal tool needs to pull up that subscription record instantly.

**What you need to do in plain English:** Use `find` to get the subscription where `id === 6` from `subscriptions`.

**Expected:** Zara Qadir's record (basic, trial).

---

### Task 5.2 — Find the first pending Daraz order

**Scenario:** The warehouse processes orders one at a time. It always picks up the next pending order at the top of the queue.

**What you need to do in plain English:** Use `find` to get the first order in `darazOrders` where `status === "pending"`.

**Expected:** Ayesha Siddiqui's Lawn Suit order (id: 102).

---

### Task 5.3 — Find and update a subscription record

**Scenario:** Omer Farooq has just paid his university fee. Your code needs to find his record in the array and update `feePaid` to `true`.

**What you need to do in plain English:** Use `findIndex` to get the index of the student where `name === "Omer Farooq"`. Then update `students[thatIndex].feePaid = true`. Log his full updated record to confirm the change.

> **Why this matters:** This is exactly what you do when you receive a webhook — for example, a payment gateway notifies your backend that a user paid. You find their index in your local state and patch that one field.

---

### Task 5.4 — Find the most expensive active subscription

**Scenario:** The sales team wants to know who the highest-paying active customer is so they can prioritize white-glove support for them.

**What you need to do in plain English:** First filter for `status === "active"`. Then use `reduce` on the result to find the subscription with the highest `pricePerMonth`. Log their name, plan, and price.

**Expected:** Either Usman Tariq or Faisal Rehman (both enterprise at Rs. 9999 — your code can return either one).

---

## Task 6 — `some` and `every`

---

### Task 6.1 — Check if any order was cancelled today

**Scenario:** At end of day, the operations system sends an alert to the manager only if there were cancellations — otherwise no message is sent.

**What you need to do in plain English:** Use `some` to check if any order in `darazOrders` has `status === "cancelled"`. If yes, log `"⚠️ Alert: Cancelled orders detected."` Otherwise log `"✅ All clear."`.

---

### Task 6.2 — Did all CS students pass?

**Scenario:** The CS department head needs to confirm that all CS students have a CGPA of 2.5 or above. If even one student is below, the department has to file an academic improvement report.

**What you need to do in plain English:** Filter for `major === "CS"` students. Then use `every` to check if all of them have `cgpa >= 2.5`. Log a clear result message.

---

### Task 6.3 — Do all enterprise users have auto-renew on?

**Scenario:** Enterprise contracts are supposed to auto-renew by default. Before the billing cycle runs, the system verifies this — if any enterprise user has `autoRenew: false`, the account manager is alerted to call them.

**What you need to do in plain English:** Filter for `plan === "enterprise"` subscriptions. Then use `every` to check if all of them have `autoRenew === true`. Log either `"✅ All enterprise accounts set to auto-renew"` or `"⚠️ Action needed: some enterprise accounts will not renew"`.

---

### Task 6.4 — Does Bilal have any delivered orders?

**Scenario:** The loyalty program awards points only to customers who have at least one successfully delivered order. Before crediting Bilal's account, the system checks.

**What you need to do in plain English:** Use `some` to check if `"Bilal Chaudhry"` has any order in `darazOrders` with `status === "delivered"`. Log whether he qualifies for loyalty points or not.

---

## Task 7 — Chaining (Put It All Together)

---

### Task 7.1 — Revenue breakdown by city (delivered orders only)

**Scenario:** The regional sales report shows total revenue per city, but only counting successfully delivered orders. Pending and cancelled orders are not revenue yet.

**What you need to do in plain English:**

1. `filter` → delivered orders only
2. `reduce` → accumulate `price * qty` per city into an object

**Expected:**

```js
{ Lahore: 9700, Peshawar: 3900, Islamabad: 6700 }
```

> Work it out manually on paper first to verify your code.

---

### Task 7.2 — Merit list of CS students

**Scenario:** The CS department publishes a ranked merit list each semester. Only CS students, sorted from highest CGPA to lowest.

**What you need to do in plain English:**

1. `filter` → CS major only
2. `map` → return just `{ name, semester, cgpa }`
3. `.sort((a, b) => b.cgpa - a.cgpa)` → rank highest first

**Expected:**

```js
[
  { name: 'Saad Anwar',   semester: 8, cgpa: 3.9 },
  { name: 'Ali Raza',     semester: 6, cgpa: 3.7 },
  { name: 'Omer Farooq',  semester: 6, cgpa: 3.2 },
  { name: 'Rabia Saleem', semester: 8, cgpa: 3.1 },
]
```

---

### Task 7.3 — Generate a pending orders SMS for the rider

**Scenario:** Daraz's automated system composes a single message listing all pending deliveries and sends it to the assigned rider via SMS API.

**What you need to do in plain English:**

1. `filter` → pending orders only
2. `map` → turn each into a string: `"#102 — Ayesha Siddiqui, Karachi (Rs.5600)"`
3. `.join("\n")` and log the full message block

---

### Task 7.4 — SaaS subscription plan summary

**Scenario:** The admin dashboard's Plan Overview card shows a breakdown of how many users are on each plan and the total monthly revenue that plan generates.

**What you need to do in plain English:** Use a single `reduce` to build an object where each key is a plan name and the value is `{ userCount, totalRevenue }`.

**Expected:**

```js
{
  pro:        { userCount: 3, totalRevenue: 8997  },
  basic:      { userCount: 3, totalRevenue: 2997  },
  enterprise: { userCount: 2, totalRevenue: 19998 },
  free:       { userCount: 2, totalRevenue: 0     },
}
```

> **Why this matters:** This kind of aggregation is what your Express API builds before sending data to a React dashboard. Instead of making 4 separate database queries, you compute it in one pass.

---

### Task 7.5 — Unique cities in the student list

**Scenario:** The university admin needs a list of distinct cities students are coming from — to plan transport arrangements for exams.

**What you need to do in plain English:**

1. `map` → extract just the city from each student
2. `filter` with the index trick to deduplicate: `arr.filter((city, index) => arr.indexOf(city) === index)`

**Expected:** `['Lahore', 'Karachi', 'Islamabad', 'Multan']`

---

## Task 8 — Bonus Challenges

These are harder. Think before you code.

---

### Bonus 1 — Full order receipt for Bilal

**Scenario:** Bilal calls support and asks for a summary of everything he has successfully ordered. The agent prints a receipt-style output on screen.

**What you need to do:** Filter for `customer === "Bilal Chaudhry"` and `status === "delivered"`. Map each to `{ product, qty, price, total }`. Reduce to get the `grandTotal`. Log everything in a clean, readable format.

---

### Bonus 2 — Subscription churn report

**Scenario:** Churn (cancellations) is the enemy of any SaaS business. The product team needs a report: which plans are losing users, and what is the monthly revenue that was lost?

**What you need to do:** Filter for `status === "cancelled"`. Then use `reduce` to build:

```js
{
  pro:   { lostUsers: 1, lostRevenue: 2999 },
  basic: { lostUsers: 1, lostRevenue: 999  },
}
```

---

### Bonus 3 — Find students who improved over the semester

**Scenario:** The professor wants to recognize students who showed improvement — their last exam score was higher than their first.

**What you need to do:** Filter students where `marks[marks.length - 1] > marks[0]`. Map the result to just `{ name, firstMark, lastMark }`.

---

### Bonus 4 — Rebuild `filter` using `reduce`

**Scenario:** A classic interview question at Pakistani software companies like Arbisoft, Systems Limited, and Netsol. It proves you truly understand how `reduce` works.

**What you need to do:** Without using `.filter()` anywhere, use only `.reduce()` to get all subscriptions where `status === "active"`.

**Hint:** The accumulator starts as `[]`. Inside reduce, push the current item into the accumulator only if it passes the condition.

---

## Submission Checklist

Before you submit `homework.js`, go through this:

- [ ] All tasks are answered and labelled with a comment like `// Task 1.1`
- [ ] You used arrow functions throughout
- [ ] You did not use `for`, `while`, or `forEach` where `map`/`filter`/`reduce` was asked for
- [ ] Your output matches the expected results where given
- [ ] Bonus challenges attempted (at least 2 out of 4)

---

## Quick Reference

|Method|Returns|Mutates?|Use when...|
|---|---|---|---|
|`forEach`|`undefined`|No|Side effects — logging, filling outside object|
|`map`|New array|No|Transform every item into something new|
|`filter`|New array|No|Keep only items matching a condition|
|`reduce`|Single value|No|Accumulate into a number, object, or array|
|`find`|Single item|No|Get the first match|
|`findIndex`|Number|No|Get the position of the first match|
|`some`|Boolean|No|True if at least one item matches|
|`every`|Boolean|No|True only if all items match|
