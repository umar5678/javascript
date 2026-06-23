const products = [
    { id: 1, name: "Laptop", price: 999, category: "electronics", rating: 4.5, inStock: true },
    { id: 2, name: "Phone", price: 699, category: "electronics", rating: 4.2, inStock: false },
    { id: 3, name: "Shirt", price: 29, category: "clothing", rating: 4.0, inStock: true },
    { id: 4, name: "Pants", price: 49, category: "clothing", rating: 3.8, inStock: true },
    { id: 5, name: "Tablet", price: 399, category: "electronics", rating: 4.7, inStock: true },
    { id: 6, name: "Watch", price: 199, category: "electronics", rating: 4.1, inStock: true }
];


// -----------------------------------------
// Example 1: Get names of cheap, in-stock electronics
// -----------------------------------------
console.log("=== Cheap In-Stock Electronics ===\n");

const cheapElectronics = products
    .filter(p => p.category === "electronics")  // Only electronics
    .filter(p => p.inStock)                      // Only in stock
    .filter(p => p.price < 500)                  // Only cheap ones
    .map(p => p.name);                           // Get just names

console.log("Cheap electronics:", cheapElectronics);
// [ 'Tablet', 'Watch' ]

// -----------------------------------------
// Example 2: Get top rated in-stock items
// -----------------------------------------
console.log("\n=== Top Rated Available ===\n");


console.log("Top rated:", topRated);
// [ 'Tablet (4.7⭐)', 'Laptop (4.5⭐)', 'Watch (4.1⭐)' ]


// Electronics total: $1597

// -----------------------------------------
// Example 4: Transform for display
// -----------------------------------------
console.log("\n=== Display Cards ===\n");

const displayCards = products
    .filter(p => p.inStock)
    .map(p => ({
        title: p.name,
        priceTag: `$${p.price.toFixed(2)}`,
        stars: "⭐".repeat(Math.round(p.rating)),
        badge: p.price < 100 ? "SALE" : null
    }))
    .slice(0, 3);

console.log("Display cards:");
displayCards.forEach(card => console.log(card));

