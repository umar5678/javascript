// ┌─────────────────────────────────────────────────────────────────┐
// │                        filter()                                 │
// │            "Keep elements that pass a test"                     │
// ├─────────────────────────────────────────────────────────────────┤
// │                                                                 │
// │   Original:  [1,  2,  3,  4,  5,  6,  7,  8]                    │
// │               ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓                     │
// │   Test:      >5? >5? >5? >5? >5? >5? >5? >5?                    │
// │               ✗   ✗   ✗   ✗   ✗   ✓   ✓   ✓                     │
// │                                   ↓   ↓   ↓                     │
// │   Result:                       [6,  7,  8]   ← NEW ARRAY       │
// │                                                                 │
// │   const big = numbers.filter(n => n > 5);                       │
// │                                                                 │
// │   ═══════════════════════════════════════════════════════════   │
// │   KEY POINTS:                                                   │
// │   • Returns NEW array (original unchanged)                      │
// │   • New array length ≤ original length                          │
// │   • Callback must return true/false (truthy/falsy)              │
// │   • Only elements returning true are included                   │
// │                                                                 │
// │   REACT USE: Filter visible items, search results!              │
// │                                                                 │
// └─────────────────────────────────────────────────────────────────┘

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter all the even its.

const allEvens = numbers.filter((n) => n % 2 === 0);
const allOdds = numbers.filter((n) => n % 2 !== 0);

// console.log(allEvens)
// console.log(allOdds)

// fitler odd items,

// filter all the items grater then 5

const greaterThen5 = numbers.filter((n) => n > 5);

// console.log(greaterThen5)

const menu = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 12.5,
    category: "pizza",
    isVeg: true,
    rating: 4.5,
  },
  {
    id: 2,
    name: "BBQ Chicken Pizza",
    price: 15.0,
    category: "pizza",
    isVeg: false,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Caesar Salad",
    price: 8.0,
    category: "salad",
    isVeg: true,
    rating: 4.2,
  },
  {
    id: 4,
    name: "Beef Burger",
    price: 11.0,
    category: "burger",
    isVeg: false,
    rating: 4.6,
  },
  {
    id: 5,
    name: "Veggie Burger",
    price: 9.5,
    category: "burger",
    isVeg: true,
    rating: 4.1,
  },
  {
    id: 6,
    name: "Pasta Carbonara",
    price: 13.0,
    category: "pasta",
    isVeg: false,
    rating: 4.4,
  },
  {
    id: 7,
    name: "Garden Salad",
    price: 7.0,
    category: "salad",
    isVeg: true,
    rating: 3.9,
  },
  {
    id: 8,
    name: "Chocolate Lava Cake",
    price: 6.0,
    category: "dessert",
    isVeg: true,
    rating: 4.8,
  },
];

const lessThen10 = menu.filter((item) => {
  return item.price < 10;
});
// console.log(lessThen10);

//

const names = ["Ali", "Fatima", "Osman", "Bilal", "Salman", "Ismail"];

const vowels = "aeiouAEIOU";

const namesStartWithVolwels = names.filter((name) => {
  return vowels.includes(name[0]);
});

// console.log(namesStartWithVolwels)

const words = ["apple", "banana", "avocado", "apricot", "berry", "cherry"];

// Words longer than 5 characters

const longerThenFiveChars = words.filter((word) => word.length > 5);
// console.log(longerThenFiveChars);

// Words containing 'rr'

const wordsWithRR = words.filter((word) => word.includes("rr"));
// console.log(wordsWithRR);

const products = [
  { id: 1, name: "Laptop", price: 999, category: "electronics", inStock: true },
  { id: 2, name: "Shirt", price: 29, category: "clothing", inStock: true },
  { id: 3, name: "Phone", price: 699, category: "electronics", inStock: false },
  { id: 4, name: "Pants", price: 49, category: "clothing", inStock: true },
  { id: 5, name: "Tablet", price: 399, category: "electronics", inStock: true },
];

// Filter by category, electronic

const allElectiones = products.filter(
  (product) => product.category === "electronics",
);
// console.log(allElectiones);

// Filter by availability , instock true

const AllInstock = products.filter((product) => product.inStock === true);
// console.log(AllInstock);

// electronin cout of stock

const inStockElectronic = products
  .filter((item) => item.category === "electronics")
  .filter((item) => item.inStock);


  const inStockElectronicItems = products
  .filter((item) => item.category === "electronics")
  .filter((item) => item.inStock)
  .map((item) => (  {name:  item.name, price : item.price}  )    )



  
console.log(inStockElectronicItems)