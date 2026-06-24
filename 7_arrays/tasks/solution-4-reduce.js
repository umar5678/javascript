

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



// ## Section 4 — `reduce`

// > **What it does:** Reduces an entire array down to a **single value**. That value can be a number, string, object, or even another array. It takes a callback with two key parameters: the **accumulator** (what you're building up) and the **current item**.

// ---

// ### Exercise 4.1 — Total revenue from delivered orders

// **Scenario:** The dashboard's KPI card shows "Total Revenue Today". Only delivered orders count.

// **Task:** First `filter` for delivered orders, then `reduce` to sum up `price * qty` for each.

// **Expected:** `1200 + 320 + 450 + 70 = 2040`



const  totalSale = orders.filter( order => {
    return order.status === "delivered"
}).reduce( (total , order) => {

    return  total + (order.price * order.qty)

}, 0 )


console.log(totalSale);





// ---

// ### Exercise 4.2 — Count orders by status

// **Scenario:** You need to build an object that tells you how many orders are in each status, like:

// ```js
// { delivered: 4, pending: 3, cancelled: 1 }
// ```

// **Task:** Use `reduce` where the accumulator starts as `{}`. For each order, increment `acc[order.status]` (initialize to 0 if it doesn't exist yet).

// > **Why this matters:** This is a classic `reduce` pattern used constantly in analytics and dashboard data.

// ---

// ### Exercise 4.3 — Group menu items by category

// **Scenario:** The restaurant app's sidebar shows categories. Clicking a category shows its items. You need to transform the flat `menu` array into a grouped object:

// ```js
// {
//   pizza:   [ ...pizza items ],
//   salad:   [ ...salad items ],
//   burger:  [ ...burger items ],
//   ...
// }
// ```

// **Task:** Use `reduce` where the accumulator starts as `{}`. For each item, push it into `acc[item.category]` (initialize the array if it doesn't exist).

// > **Why this matters:** Grouping flat data from a database into a nested structure is one of the most frequent backend tasks.

// ---

// ### Exercise 4.4 — Find the most expensive order

// **Scenario:** Fraud detection logic flags the single highest-value order for review.

// **Task:** Use `reduce` to find the order object with the highest `price * qty`. The accumulator starts as the first order.

// **Expected:** The Laptop order (total: 1200).

// ---

// ### Exercise 4.5 — Flatten all scores into one array

// **Scenario:** You want to run statistics across every score from every student — one big flat array of numbers.

// **Task:** Use `reduce` to combine all `scores` arrays from `users` into a single array.

// **Expected:** `[88, 92, 75, 91, 70, 68, 72, 65, 95, 98, ...]`

// ---
