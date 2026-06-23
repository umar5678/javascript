# JavaScript Array Methods — Practical Exercises

### forEach · map · filter · reduce · find · findIndex · some · every

> **Environment:** Node.js — run any exercise with `node filename.js` **Style:** Arrow functions throughout (since you've covered them)

---

## The Datasets

Copy these at the top of your exercise file. All exercises below use them.

```js
// ── DATASET 1: E-commerce Orders ──────────────────────────────────────
const orders = [
  { id: 1, customer: "Sara",  product: "Laptop",     price: 1200, qty: 1, status: "delivered",  category: "electronics" },
  { id: 2, customer: "Ahmed", product: "Headphones", price: 85,   qty: 2, status: "pending",    category: "electronics" },
  { id: 3, customer: "Lena",  product: "Desk Chair", price: 320,  qty: 1, status: "delivered",  category: "furniture"   },
  { id: 4, customer: "Omar",  product: "Keyboard",   price: 95,   qty: 3, status: "cancelled",  category: "electronics" },
  { id: 5, customer: "Fatima","product": "Monitor",  price: 450,  qty: 1, status: "delivered",  category: "electronics" },
  { id: 6, customer: "Yusuf", product: "Bookshelf",  price: 180,  qty: 2, status: "pending",    category: "furniture"   },
  { id: 7, customer: "Sara",  product: "Webcam",     price: 70,   qty: 1, status: "delivered",  category: "electronics" },
  { id: 8, customer: "Ahmed", product: "Standing Desk", price: 600, qty: 1, status: "pending", category: "furniture"   },
];

// ── DATASET 2: Restaurant Menu ─────────────────────────────────────────
const menu = [
  { id: 1, name: "Margherita Pizza",  price: 12.5, category: "pizza",   isVeg: true,  rating: 4.5 },
  { id: 2, name: "BBQ Chicken Pizza", price: 15.0, category: "pizza",   isVeg: false, rating: 4.7 },
  { id: 3, name: "Caesar Salad",      price: 8.0,  category: "salad",   isVeg: true,  rating: 4.2 },
  { id: 4, name: "Beef Burger",       price: 11.0, category: "burger",  isVeg: false, rating: 4.6 },
  { id: 5, name: "Veggie Burger",     price: 9.5,  category: "burger",  isVeg: true,  rating: 4.1 },
  { id: 6, name: "Pasta Carbonara",   price: 13.0, category: "pasta",   isVeg: false, rating: 4.4 },
  { id: 7, name: "Garden Salad",      price: 7.0,  category: "salad",   isVeg: true,  rating: 3.9 },
  { id: 8, name: "Chocolate Lava Cake", price: 6.0, category: "dessert", isVeg: true, rating: 4.8 },
];

// ── DATASET 3: Users / Students ────────────────────────────────────────
const users = [
  { id: 1,  name: "Alice",   age: 24, role: "student",  scores: [88, 92, 75, 91],  active: true  },
  { id: 2,  name: "Bob",     age: 30, role: "teacher",  scores: [70, 68, 72, 65],  active: true  },
  { id: 3,  name: "Clara",   age: 22, role: "student",  scores: [95, 98, 100, 92], active: true  },
  { id: 4,  name: "David",   age: 19, role: "student",  scores: [60, 55, 58, 62],  active: false },
  { id: 5,  name: "Eva",     age: 27, role: "student",  scores: [78, 82, 80, 85],  active: true  },
  { id: 6,  name: "Frank",   age: 35, role: "teacher",  scores: [91, 88, 94, 90],  active: true  },
  { id: 7,  name: "Grace",   age: 21, role: "student",  scores: [45, 50, 48, 55],  active: true  },
  { id: 8,  name: "Hamza",   age: 23, role: "student",  scores: [72, 76, 80, 78],  active: false },
];
```

---

## Section 1 — `forEach`

> **What it does:** Loops over an array and runs a function for each item. It does **not** return anything — it's purely for side effects (logging, accumulating into an outside variable, etc.)

---

### Exercise 1.1 — Print the menu

**Scenario:** You're building a restaurant kiosk. When the app starts, it logs every item on the menu so the kitchen staff can review it.

**Task:** Use `forEach` to print each menu item in this format:

```
[1] Margherita Pizza — €12.50 (pizza)
[2] BBQ Chicken Pizza — €15.00 (pizza)
...
```

**Hint:** Use `item.id`, `item.name`, `item.price.toFixed(2)`, `item.category`.

---

### Exercise 1.2 — Count delivered orders

**Scenario:** A warehouse manager needs a quick count of how many orders have already been delivered today.

**Task:** Use `forEach` to loop through `orders` and count how many have `status === "delivered"`. Log the final count.

**Expected output:** `Delivered orders: 4`

---

### Exercise 1.3 — Build a price lookup map

**Scenario:** Your backend needs a fast price lookup object so you can get a price by product name instantly — like `priceMap["Laptop"]` → `1200`.

**Task:** Start with `const priceMap = {}`. Use `forEach` to populate it from the `orders` dataset.

**Expected result:**

```js
{ Laptop: 1200, Headphones: 85, 'Desk Chair': 320, ... }
```

> **Why this matters:** This pattern — using `forEach` to build a lookup object — is extremely common in backend code to avoid repeated `.find()` calls inside loops.

---

## Section 2 — `map`

> **What it does:** Creates a **new array** by transforming each item. The new array is always the same length as the original. Think of it as: "give me a new version of this array where each item has been changed."

---

### Exercise 2.1 — Add a `total` field to orders

**Scenario:** Your e-commerce API needs to return each order with a `total` field (`price × qty`). The raw data from the database doesn't have it — you compute it on the fly.

**Task:** Use `map` to return a new array where each order has all its original fields **plus** a `total` property.

**Expected result (first item):**

```js
{ id: 1, customer: 'Sara', product: 'Laptop', price: 1200, qty: 1, ..., total: 1200 }
```

---

### Exercise 2.2 — Extract just the names

**Scenario:** You need to show a dropdown list of all customers. You only need their names, not the full order object.

**Task:** Use `map` to get an array of just the customer names from `orders`.

**Expected:** `['Sara', 'Ahmed', 'Lena', 'Omar', 'Fatima', 'Yusuf', 'Sara', 'Ahmed']`

---

### Exercise 2.3 — Apply a 10% discount to the menu

**Scenario:** It's a Friday promotion. Your frontend needs to display discounted prices. You don't want to mutate the original `menu` array — you want a fresh one.

**Task:** Use `map` to create a new array where each item has a `discountedPrice` field (10% off, rounded to 2 decimal places). Keep all original fields.

---

### Exercise 2.4 — Normalize user data for an API response

**Scenario:** Your Express API should never expose sensitive internal fields to the client. You need to transform the `users` array into a "public-safe" shape.

**Task:** Use `map` to return a new array where each user only has: `id`, `name`, `role`, and `active`. Drop `age` and `scores`.

**Expected result (first item):**

```js
{ id: 1, name: 'Alice', role: 'student', active: true }
```

> **Why this matters:** This is something you'll do in almost every Express route handler — selecting only the fields the client should see.

---

### Exercise 2.5 — Compute each student's average score

**Scenario:** A teacher's dashboard needs to display each student's name alongside their average score.

**Task:** Use `map` to create an array of objects with `name` and `average` (rounded to 1 decimal place). Use `reduce` inside the `map` (or a simple loop) to compute the average from the `scores` array.

**Expected result (first item):**

```js
{ name: 'Alice', average: 86.5 }
```

---

## Section 3 — `filter`

> **What it does:** Creates a **new array** with only the items that pass a test (the callback returns `true`). The new array is the same length or shorter.

---

### Exercise 3.1 — Only delivered orders

**Scenario:** The analytics page only cares about completed orders. Filter out pending and cancelled ones.

**Task:** Use `filter` to get only orders where `status === "delivered"`.

**Expected:** Array of 4 orders (Sara/Laptop, Lena/Chair, Fatima/Monitor, Sara/Webcam).

---

### Exercise 3.2 — Vegetarian menu items

**Scenario:** A customer selects "vegetarian only" in the restaurant app. Show them only the matching items.

**Task:** Use `filter` to get only menu items where `isVeg === true`.

---

### Exercise 3.3 — High-value orders

**Scenario:** The finance team wants to review any order whose total value (`price × qty`) is above €200.

**Task:** Use `filter` to find all such orders. You'll need to compute `price * qty` inside the filter callback.

**Expected:** Laptop (1200), Desk Chair (320), Monitor (450), Keyboard (285), Bookshelf (360), Standing Desk (600).

---

### Exercise 3.4 — Active students only

**Scenario:** When sending automated quiz reminders, only active students should receive them. Inactive accounts are suspended.

**Task:** Use `filter` to get users where `role === "student"` AND `active === true`.

**Expected:** Alice, Clara, Eva, Grace.

---

### Exercise 3.5 — Menu items rated above 4.3

**Scenario:** The homepage "Top Picks" section only shows items with a rating above 4.3.

**Task:** Filter the menu and then use `map` on the result to return just the names.

**Expected:** `['BBQ Chicken Pizza', 'Beef Burger', 'Pasta Carbonara', 'Chocolate Lava Cake']`

> **Notice:** You chained `filter` then `map`. This is the most common real-world pattern.

---

## Section 4 — `reduce`

> **What it does:** Reduces an entire array down to a **single value**. That value can be a number, string, object, or even another array. It takes a callback with two key parameters: the **accumulator** (what you're building up) and the **current item**.

---

### Exercise 4.1 — Total revenue from delivered orders

**Scenario:** The dashboard's KPI card shows "Total Revenue Today". Only delivered orders count.

**Task:** First `filter` for delivered orders, then `reduce` to sum up `price * qty` for each.

**Expected:** `1200 + 320 + 450 + 70 = 2040`

---

### Exercise 4.2 — Count orders by status

**Scenario:** You need to build an object that tells you how many orders are in each status, like:

```js
{ delivered: 4, pending: 3, cancelled: 1 }
```

**Task:** Use `reduce` where the accumulator starts as `{}`. For each order, increment `acc[order.status]` (initialize to 0 if it doesn't exist yet).

> **Why this matters:** This is a classic `reduce` pattern used constantly in analytics and dashboard data.

---

### Exercise 4.3 — Group menu items by category

**Scenario:** The restaurant app's sidebar shows categories. Clicking a category shows its items. You need to transform the flat `menu` array into a grouped object:

```js
{
  pizza:   [ ...pizza items ],
  salad:   [ ...salad items ],
  burger:  [ ...burger items ],
  ...
}
```

**Task:** Use `reduce` where the accumulator starts as `{}`. For each item, push it into `acc[item.category]` (initialize the array if it doesn't exist).

> **Why this matters:** Grouping flat data from a database into a nested structure is one of the most frequent backend tasks.

---

### Exercise 4.4 — Find the most expensive order

**Scenario:** Fraud detection logic flags the single highest-value order for review.

**Task:** Use `reduce` to find the order object with the highest `price * qty`. The accumulator starts as the first order.

**Expected:** The Laptop order (total: 1200).

---

### Exercise 4.5 — Flatten all scores into one array

**Scenario:** You want to run statistics across every score from every student — one big flat array of numbers.

**Task:** Use `reduce` to combine all `scores` arrays from `users` into a single array.

**Expected:** `[88, 92, 75, 91, 70, 68, 72, 65, 95, 98, ...]`

---

## Section 5 — `find` and `findIndex`

> **find** returns the **first item** that matches a condition (or `undefined`). **findIndex** returns the **index** of the first match (or `-1`).

---

### Exercise 5.1 — Find an order by ID

**Scenario:** A customer service rep types in an order ID. Your backend needs to look it up.

**Task:** Use `find` to get the order where `id === 5`.

**Expected:** The Fatima/Monitor order object.

---

### Exercise 5.2 — Find the first pending order

**Scenario:** The warehouse processes orders one by one. It picks up the next pending order in the queue.

**Task:** Use `find` to get the first order with `status === "pending"`.

---

### Exercise 5.3 — Find the position of a user

**Scenario:** After a user updates their profile, your frontend needs to update their entry in the local state array. You need their index first.

**Task:** Use `findIndex` to find the index of the user with `id === 4` in the `users` array.

**Expected:** `3`

---

### Exercise 5.4 — Find the top-rated menu item

**Scenario:** The homepage hero banner highlights the single best-rated dish.

**Task:** You can't directly use `find` for "maximum" — so first figure out the highest rating using `reduce` (or `Math.max` with spread), then use `find` to get the full object with that rating.

**Expected:** The Chocolate Lava Cake (4.8).

---

## Section 6 — `some` and `every`

> **some** → returns `true` if **at least one** item passes the test. **every** → returns `true` if **all** items pass the test. Both return a boolean. Used heavily for validation.

---

### Exercise 6.1 — Are there any cancelled orders?

**Scenario:** Before closing the daily report, the system checks if any orders were cancelled so it can send an alert.

**Task:** Use `some` to check if any order has `status === "cancelled"`. Log `"Alert: cancelled orders exist"` or `"All clear"`.

---

### Exercise 6.2 — Did all students pass?

**Scenario:** A student passes if their average score is 60 or above. Check if the whole class passed.

**Task:** Use `every` to check if all users with `role === "student"` have a minimum average score of 60. Compute the average per student inside the callback.

---

### Exercise 6.3 — Is the menu fully vegetarian?

**Scenario:** A vegetarian restaurant wants to verify its menu before publishing a "100% veg" badge.

**Task:** Use `every` to check if all items in `menu` have `isVeg === true`.

---

### Exercise 6.4 — Does this customer have any delivered orders?

**Scenario:** A loyalty program only activates for customers who have at least one delivered order.

**Task:** Use `some` to check if `"Sara"` has at least one delivered order.

---

## Section 7 — Chaining (The Real World)

> In production code you almost never use just one method. You chain them. Read each problem as a pipeline: filter the data → transform it → reduce it.

---

### Exercise 7.1 — Revenue by category (delivered only)

**Scenario:** The analytics dashboard shows revenue broken down by product category — but only counting delivered orders.

**Task:** Chain `filter` (delivered only) → `reduce` to build:

```js
{ electronics: 1720, furniture: 320 }
```

---

### Exercise 7.2 — Leaderboard of active students

**Scenario:** The student portal shows a sorted leaderboard of active students with their average score.

**Task:**

1. `filter` — active students only
2. `map` — turn each into `{ name, average }` (average of their scores, 1 decimal)
3. Sort by average descending (use `.sort((a, b) => b.average - a.average)`)

**Expected:**

```js
[
  { name: 'Clara',  average: 96.3 },
  { name: 'Alice',  average: 86.5 },
  { name: 'Eva',    average: 81.3 },
  { name: 'Grace',  average: 49.5 },
]
```

---

### Exercise 7.3 — Pending order summary for SMS

**Scenario:** Your app sends an SMS to the warehouse manager listing all pending orders. Format each as a short string.

**Task:**

1. `filter` — pending orders only
2. `map` — turn each into a string like `"Ahmed — Headphones x2 (€170.00)"`
3. `.join("\n")` and log it

---

### Exercise 7.4 — Menu price stats

**Scenario:** The restaurant owner wants to know the cheapest price, most expensive price, and average price across the whole menu.

**Task:** Use `reduce` (or a combination of `map` and `Math.min`/`Math.max`) to compute all three. Log:

```
Min: €6.00 | Max: €15.00 | Avg: €10.25
```

---

### Exercise 7.5 — Unique customers who placed orders

**Scenario:** The marketing team wants a list of unique customer names to send a newsletter.

**Task:**

1. `map` to extract all customer names (duplicates included)
2. Use `filter` with `indexOf` (or use `new Set(...)`) to deduplicate

**Expected:** `['Sara', 'Ahmed', 'Lena', 'Omar', 'Fatima', 'Yusuf']`

---

## Section 8 — Bonus Challenges

These mix everything together. Attempt these after the sections above.

---

### Challenge 1 — Build an invoice

**Scenario:** Sara calls in and wants a full invoice of all her delivered orders.

**Task:** Filter orders for customer `"Sara"` with `status === "delivered"`, map each to `{ product, qty, price, total }`, and then reduce to get the `grandTotal`. Log everything in a clean format.

---

### Challenge 2 — Category menu with item count and avg price

**Scenario:** The admin panel shows a category summary table.

**Task:** Using `reduce`, build an object where each key is a category and the value is `{ count, avgPrice }`.

**Expected:**

```js
{
  pizza:   { count: 2, avgPrice: 13.75 },
  salad:   { count: 2, avgPrice: 7.50  },
  burger:  { count: 2, avgPrice: 10.25 },
  pasta:   { count: 1, avgPrice: 13.00 },
  dessert: { count: 1, avgPrice: 6.00  },
}
```

---

### Challenge 3 — Flag underperforming students

**Scenario:** Any active student with an average score below 65 should be flagged for a tutoring session.

**Task:** Filter + map to return an array of objects: `{ name, average, flag: "needs tutoring" }` — only for active students below 65.

---

### Challenge 4 — Re-implement `map` using `reduce`

**Scenario:** A classic interview question. Proves you truly understand `reduce`.

**Task:** Without using `.map()`, use `.reduce()` to transform the `menu` array into an array of just the item names.

**Hint:** The accumulator starts as `[]` and you push into it each iteration.

---

## Quick Reference

| Method      | Returns        | Mutates original? | Use when you want to...                       |
| ----------- | -------------- | ----------------- | --------------------------------------------- |
| `forEach`   | `undefined`    | No                | Loop for side effects (log, push to external) |
| `map`       | New array      | No                | Transform every item                          |
| `filter`    | New array      | No                | Keep only items that match a condition        |
| `reduce`    | Single value   | No                | Accumulate into a number, object, or array    |
| `find`      | Single item    | No                | Get the first matching item                   |
| `findIndex` | Number (index) | No                | Get the position of the first match           |
| `some`      | Boolean        | No                | Check if at least one item matches            |
| `every`     | Boolean        | No                | Check if all items match                      |